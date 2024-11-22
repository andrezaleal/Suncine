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

interface ModalPorps{
  titulo: string;
  descricao?:string | null;
  isOpen:boolean;
  messageButton:string;
  onClose:()=>void
}

function Modal({titulo,descricao,isOpen, messageButton, onClose}:ModalPorps){

return(
  <AlertDialog open={isOpen} onOpenChange={onClose}>
  <AlertDialogContent className="bg-[#4F4F4F80] bg-opacity-50 backdrop-blur-md">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-center font-bold text-white">{titulo}</AlertDialogTitle>
      <AlertDialogDescription  className="text-center text-white">
        {descricao}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <a className="underline text-xs cursor-pointer" onClick={onClose}>{messageButton}</a>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

);
}
export default Modal;