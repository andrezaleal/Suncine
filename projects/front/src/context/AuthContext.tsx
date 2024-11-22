import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { User } from "../types/User";
import { api } from "../services/api/api";

const TOKEN_KEY = "@Auth:token";
const USER_KEY = "@Auth:user";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface Payload  {
  token: string;
  user: User;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const storedUser = localStorage.getItem(USER_KEY);
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const login = async (login: string, password: string) => {
    try {
      const response = await api.post<{ payload: Payload; token: string; user: User }>("/login", { login, password });
      setIsAuthenticated(true);
      setUser(response.data.payload.user);
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.payload.token}`;
      localStorage.setItem(TOKEN_KEY, response.data.payload.token);
      localStorage.setItem(USER_KEY, JSON.stringify(response.data.payload.user));
    } catch (error: any) {
      setIsAuthenticated(false);
      console.error("Erro no login:", error.message);
      throw new Error("Falha ao fazer login. Verifique as credenciais e tente novamente.");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}