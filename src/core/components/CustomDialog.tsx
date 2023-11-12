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
  trigger: (open: () => void) => React.ReactElement;
  body?: React.ReactElement;
  footer?: (close: () => void) => React.ReactElement;
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
  trigger,
  body,
  footer,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>{trigger(() => setOpen(true))}</DialogTrigger>
      <DialogOverlay
        className="bg-slate-500/20 backdrop-blur-sm"
        onClick={(e) => setOpen(false)}
      />
      <DialogContent className="max-h-[70dvh] overflow-y-auto bg-white new-scrollbar">
        <DialogClose onClick={() => setOpen(false)} />
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{body}</div>
        <DialogFooter>{footer && footer(() => setOpen(false))}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
