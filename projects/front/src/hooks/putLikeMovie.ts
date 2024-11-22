import { useState} from 'react';
import { api } from '../services/api/api';

export const FavoriteMovie = (movieId: number, likestatus:boolean) => {
  const [isLiked, setIsLiked] = useState(likestatus);
  const [loading, setLoading] = useState(false);
	const [ error, setError ] = useState<string | null>(null);

  const likeMovie = async () =>{
    setLoading(true);
    try {
      const response = await api.put(`/movie/like/${movieId}`);
      if(response.data.status == 'LIKE'){
        setIsLiked(true);
      }else{
        setIsLiked(false);
      }
        console.log(isLiked);
    } catch (err: any) {
      setError(err.message);
      console.error('Erro ao alterar like:', error);
    } finally{
      setLoading(false);
    }
  }

  return{likeMovie, isLiked, loading}
};
