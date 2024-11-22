import { IconHeartFilled, IconMovie, IconUserFilled, IconLogout } from '@tabler/icons-react';
import { useAuth } from "../context/AuthContext";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Link } from "react-router-dom";

function MenuBar() {
  const { logout, user } = useAuth();
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src="/src/assets/images/logo-suncine.svg" alt="Your Company" />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex px-8 font-semibold items-center">
                <Avatar>
                  <AvatarFallback className="bg-gray600 text-white text-2xl">D</AvatarFallback>
                </Avatar>
                <div className="px-4">
                  <p className="text-white">Olá {user?.name}!</p>
                  <Link to='/profile' className="text-gray400 hover:text-gray400 underline cursor-pointer">
                    Ver perfil
                  </Link>
                </div>
              </div>
              <IconLogout stroke={1.5} color="white" aria-label="Sair" title="Sair" cursor="pointer" onClick={logout} />
            </div>
          </div>
          <div className="relative flex h-16 items-center justify-center">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Abrir menu</span>
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-10">
                  <div tabIndex={0} className="teste flex items-center pb-2 hover:border-b-2 border-b-2 border-transparent hover:border-linkTextHover focus:border-linkTextHover active:border-linkTextHover">
                    <IconMovie stroke={2} color="white" size={20} />
                    <Link to='/home' className="rounded-md px-1 text-sm font-medium text-white hover:text-white" aria-current="page">
                      Filmes em alta
                    </Link>
                  </div>
                  <div tabIndex={1} className="flex items-center pb-2 hover:border-b-2 border-b-2 border-transparent hover:border-linkTextHover teste active:border-linkTextHover focus:border-linkTextHover">
                    <IconHeartFilled stroke={2} color="white" size={20} />
                    <Link to='/userLikes' className="rounded-md px-1 text-sm font-medium text-white hover:text-white">
                      Minhas Curtidas
                    </Link>
                  </div>
                  <div tabIndex={3} className="flex items-centerpb-2 hover:border-b-2 border-b-2 border-transparent hover:border-linkTextHover active:border-linkTextHover focus:border-linkTextHover">
                    <IconUserFilled stroke={2} color="white" size={20} />
                    <Link to="/profile" className="rounded-md px-1 text-sm font-medium text-white hover:text-white">
                      Meu Perfil
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;