import { useState, useEffect } from 'react';
import { api } from '../services/api/api';
import { Movie } from '../types/Movie';

export const getMovie = (url: string, liked?:boolean) => {
	const [ movie, setMovie ] = useState<Movie[] | null>(null);
	const [ loading, setLoading ] = useState<boolean>(true);
	const [ error, setError ] = useState<string| null>(null);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const response = await api.get<Movie[]>(url);
				setMovie(response.data);
				console.log(movie)
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
    getData();
	}, [url,liked]);
  return { movie, loading, error };
};
