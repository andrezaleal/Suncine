import { useAuth } from '../context/AuthContext';
import MenuBar from '../components/MenuBar';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

function Profile(){
  const { user, logout } = useAuth();
  return (
    <div>
      <MenuBar />
      <div className="flex flex-col items-center pt-24 min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/gradient.svg')]">
        <Avatar className='flex mb-4 w-28 h-28'>
          <AvatarFallback className="text-6xl bg-gray600 text-white">D</AvatarFallback>
        </Avatar>
        <h1 className='text-white mb-2'>{user?.name}</h1>
        <p className="text-1xl text-gray400 mb-8">{user?.login}</p>
        <a className="text-gray50 hover:text-gray400 underline cursor-pointer" onClick={logout}>
          Sair
        </a>
      </div>
    </div>
  );
}
export default Profile;