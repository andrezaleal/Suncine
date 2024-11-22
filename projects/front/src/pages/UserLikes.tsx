import { useState } from 'react';
import CardLikedMovie from '../components/CardLikedMovie';
import MenuBar from '../components/MenuBar';
import { getMovie } from '../hooks/getData';

function UserLikes() {
  const[movieLiked, setMovieLiked] = useState<boolean>();
  const { movie, loading, error } = getMovie('/movie/likes', movieLiked);
  const movies = movie ? movie.filter(m=>m.likes>0):[]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-xl">Erro: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/gradient.svg')]">
    <MenuBar />
    <div className="flex flex-col items-center py-24">
        <div className="grid grid-cols-1 gap-4 ">
          {movies?.map((item) => (
            <CardLikedMovie key={item.id} movie={item} setLiked={setMovieLiked} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default UserLikes;