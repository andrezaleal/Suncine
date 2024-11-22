import { IconHeartFilled } from '@tabler/icons-react';
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { Movie } from "../types/Movie";
import { FavoriteMovie } from '../hooks/putLikeMovie';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const { isLiked, likeMovie } = FavoriteMovie(movie.tmdb_id, movie.user_liked);
  return (
    <Card
      className="relative flex flex-col justify-between bg-cover bg-center bg-no-repeat h-96 w-80 rounded-lg shadow-lg border-none"
      style={{ backgroundImage: `url(${movie.backdrop_path})` }}
    >
      <CardHeader className="top-0 right-0 ">
      <div className="bg-opacity-50 rounded-full p-2 flex items-center justify-center w-[2.4rem] cursor-pointer" style={{backgroundColor:isLiked ? "red" : "gray", opacity:'0.7'}} onClick={likeMovie}>
            <IconHeartFilled stroke={2} color={"white"} size={20}  />
          </div>
      </CardHeader>
      <CardFooter className="inset-x-0 bottom-0 bg-black bg-opacity-70 p-4">
        <CardDescription className="text-white text-sm line-clamp-3 text-left">
        <p className='text-xl font-bold'>{movie.title}</p>
          {movie.overview}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
export default MovieCard;