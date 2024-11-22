import { IconHeartFilled } from '@tabler/icons-react';
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Movie } from "../types/Movie";
import { FavoriteMovie } from '../hooks/putLikeMovie';

interface CardLikedMovieProps {
  movie: Movie;
  setLiked?: (value?:boolean)=>void;
}

function CardLikedMovie({ movie, setLiked }: CardLikedMovieProps) {
  const { isLiked, likeMovie } = FavoriteMovie(movie.tmdb_id, movie.user_liked);
  const [ano, mes, dia] = movie.release_date.split("-");
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return (
    <div className='flex flex-col justify-center items-center'>
      <Card
        className="relative grid-rows-1 flex flex-col justify-between bg-cover bg-center bg-no-repeat h-52 w-4/5 rounded-lg shadow-lg border-none bg-[#0A1916B2] bg-opacity-70"
      >
        <CardHeader className="absolute top-0 left-0 z-10">
          <div className="bg-opacity-50 rounded-full p-2 flex items-center justify-center w-[2.4rem] cursor-pointer" style={{backgroundColor:isLiked ? "red" : "white", opacity:'0.8'}} onClick={()=>{
              likeMovie();
              if(setLiked){setLiked(isLiked);}
            }}>
            <IconHeartFilled stroke={2} color={"white"} size={20}  />
          </div>
        </CardHeader>
        <CardContent className="overflow-hidden relative px-0 flex">
          <img
            src={`${movie.backdrop_path}`}
            alt="Movie Backdrop"
            className=" h-52 object-cover"
          />
          <CardDescription className="text-white text-sm line-clamp-2 p-6 text-left">
          <p className='text-2xl font-bold'>{movie.title}</p>
            <p className='text-base my-4 line-clamp-3'>{movie.overview}</p>
          <p className='text-xs text-gray500'>Data de lançamento: {dataFormatada}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </div>

  );
}
export default CardLikedMovie;