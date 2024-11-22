import React from 'react';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

function LoginForm({ email, password, setEmail, setPassword, handleSubmit }: LoginFormProps) {
  return (
      <div className="flex absolute flex-col justify-center px-6 py-12 lg:px-8 bg-[#4F4F4F80] bg-opacity-50 w-full sm:w-[50%] md:w-[40%] lg:w-[25%] ml-44">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-8">
          <h2 className="mt-2 text-left text-2xl font-bold  text-textSecondary">
            Olá cinéfilo,
          </h2>
          <p className="text-left font-bold text-textSecondary">
            que bom te ver por aqui!
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="flex text-sm font-medium text-textSecondary">
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder='Insira seu email'
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-start">
              <label htmlFor="password" className="block text-sm font-medium text-textSecondary">
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder='Insira sua senha'
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
            </div>
            <div className="flex text-sm justify-end">
              <a href="#" className="font-semibold text-linkText hover:text-linkTextHover underline">
                Não consigo acessar minha conta
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full rounded-[80px] justify-center rounded-md bg-colorButton px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-colorButtonHover hover:outline-none"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
  );
};

export default LoginForm;