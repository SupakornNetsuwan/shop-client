"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type CustomDialogPropsType = {
  title: string;
  description: string;
  trigger: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
};

const CustomDialog: React.FC<CustomDialogPropsType> = ({ title, description, trigger, body, footer }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{body}</div>
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
