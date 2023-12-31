import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import * as React from "react";

interface ICDialogProps {
  children?: React.ReactNode | string;
  classNames?: ClassDecorator;
  header?: boolean;
  description?: boolean;
  isOpen?: boolean;
  defaultOpen?: boolean;
  madal?: boolean;
  onClose?: (param: boolean) => void;
  closeOnClickOutSide?: boolean;
}

const CDialog: React.FunctionComponent<ICDialogProps> = (
  {
    children,
    header,
    description,
    isOpen = false,
    defaultOpen = false,
    madal = true,
    closeOnClickOutSide,
    onClose,
  },
  props: any
) => {
  return (
    <Dialog open={isOpen} defaultOpen={defaultOpen} modal={madal}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent
        onPointerDownOutside={(e) =>
          closeOnClickOutSide ? onClose?.(!e?.cancelable) : undefined
        }
      >
        <DialogHeader>
          {header && <DialogTitle>Are you sure absolutely sure?</DialogTitle>}
          {description && (
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          )}
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CDialog;
