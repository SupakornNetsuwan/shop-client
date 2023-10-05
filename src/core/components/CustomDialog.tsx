"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type CustomDialogPropsType = {
  title: string;
  description: string;
  trigger: React.FC<{ open: () => void }>;
  body?: React.ReactElement;
  footer?: React.FC<{ close: () => void }>;
};

/**
 * 
 * @example
 * ``` 
    <CustomDialog
      title="Welcome!"
      description="This is our brand new website! please enjoy playing around here"
      body={<div>A cool product description</div>}
      trigger={({ open }) => <Button onClick={open}>Open</Button>}
      footer={({ close }) => (
        <div>
          <Button onClick={close} variant="secondary">
            <ThumbsUp size="20px" />
            <span className="ml-2">Set wakeup time</span>
          </Button>
        </div>
      )}
    />
    ```
 */

const CustomDialog: React.FC<CustomDialogPropsType> = ({
  title,
  description,
  trigger: Trigger,
  body,
  footer: Footer,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Trigger open={() => setOpen(true)} />
      </DialogTrigger>
      <DialogOverlay className="bg-slate-500/20 backdrop-blur-sm" onClick={(e) => setOpen(false)} />
      <DialogContent className="bg-white">
        <DialogClose onClick={() => setOpen(false)} />
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{body}</div>
        <DialogFooter>{Footer && <Footer close={() => setOpen(false)} />}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
