import { IconHeartFilled } from "@tabler/icons-react";
import { Movie } from "../types/Movie";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Card, CardDescription, CardFooter } from "./ui/card";

interface ModalMovieProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit:()=> void;
  movie: Movie;
}

function ModalMovie({ isOpen, onClose, movie, onSubmit }: ModalMovieProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-primary">
        <AlertDialogHeader className="flex items-center">
          <div className=" rounded-full p-2 flex items-center justify-center w-[2.4rem] cursor-pointer bg-red-600">
            <IconHeartFilled stroke={2} color={"white"} size={20} />
          </div>
          <AlertDialogTitle className="text-white font-bold text-center">Você realmente quer remover este filme das suas curtidas?</AlertDialogTitle>
          <AlertDialogDescription>
            <Card
              className="relative flex flex-col justify-between bg-cover bg-center bg-no-repeat h-60 w-96 rounded-lg shadow-lg border-none 3-6"
              style={{ backgroundImage: `url(${movie.backdrop_path})` }}
            >
              <CardFooter className="absolute inset-x-0 bottom-0 bg-[#181818] p-4 rounded-b-lg ">
                <CardDescription className="text-white text-sm line-clamp-3 text-left">
                  <p className='text-xl font-bold'>{movie.title}</p>
                </CardDescription>
              </CardFooter>
            </Card>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center justify-center">
          <AlertDialogCancel onClick={onClose} className="text-red-600 border-red-600 px-8 rounded-2xl font-bold mx-6 hover:bg-red-600 hover:text-white">Não quero</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit} className="text-white border-none px-8 rounded-2xl font-bold bg-colorButton hover:bg-colorButtonHover">Sim, eu quero</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default ModalMovie;