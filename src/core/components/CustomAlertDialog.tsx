import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/core/components/ui/alert-dialog";

type CustomAlertDialogPropsType = {
  title: string;
  description: string;
  trigger: (open: () => void) => React.ReactElement;
  body?: React.ReactElement;
  close: (close: () => void) => React.ReactElement;
  action: (close: () => void) => React.ReactElement;
};

/**
 * @example
 ```
     <CustomAlertDialog
      title="A title"
      description="A long description"
      trigger={(open) => <Button onClick={open}>Open</Button>}
      close={(close) => (
        <Button variant="outline" onClick={close}>
          Close
        </Button>
      )}
      action={(close) => (
        <Button
          onClick={() => {
            console.log("Do something");
            close();
          }}
        >
          Confirm
        </Button>
      )}
    />
 ```
 */

const CustomAlertDialog: React.FC<CustomAlertDialogPropsType> = ({
  description,
  title,
  trigger,
  body,
  close,
  action,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        {trigger(() => setOpen(true))}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <div>{body}</div>
        <AlertDialogFooter>
          {close(() => setOpen(false))}
          {action(() => setOpen(false))}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlertDialog;
