import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();

  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      alert("Erro ao fazer login: " + (error as Error).message);
    }
  }
  
  if (isAuthenticated) {
    const from = location.state?.from?.pathname || "/home"; // Página anterior ou '/home'
    return <Navigate to={from} replace />
  }
  
  return (
    <div>
      <img src="/src/assets/images/logo-suncine.svg" className='absolute flex ml-24 mt-4 z-10' />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/backgrpund-image.svg')] flex justify-center flex-col">
        <div className="absolute inset-0 bg-black opacity-50" />
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Login;
