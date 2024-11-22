export interface Movie {
	id: string;
  tmdb_id: number;
	title: string;
	user_liked: boolean;
	release_date: string;
	overview: string;
  backdrop_path:string;
  likes:number;
}