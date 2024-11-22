import MenuBar from '../components/MenuBar';
import MovieCard from '../components/MovieCard';
import { getMovie } from '../hooks/getData';

function Home() {
  const { movie, loading, error } = getMovie('/movie/top-10');
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
      <div className="flex flex-col items-center py-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movie?.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;