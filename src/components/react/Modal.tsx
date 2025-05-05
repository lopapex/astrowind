import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Modal = ({ children, className, dialogRef, onClose }: ModalProps) => {
  useEffect(() => {
    const dialog = dialogRef.current;

    const handleOutsideClick = (e: MouseEvent) => {
      if (dialog && e.target === dialog) {
        onClose();
      }
    };

    if (dialog) {
      dialog.addEventListener('click', handleOutsideClick);
    }

    return () => {
      if (dialog) {
        dialog.removeEventListener('click', handleOutsideClick);
      }
    };
  }, []);

  useEffect(() => {
    if (dialogRef.current?.open) {
      // When dialog is open -> disable scrolling
      document.body.style.overflow = 'hidden';
    }

    const observer = new MutationObserver(() => {
      if (dialogRef.current?.open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    if (dialogRef.current) {
      observer.observe(dialogRef.current, { attributes: true, attributeFilter: ['open'] });
    }

    return () => {
      observer.disconnect();
      document.body.style.overflow = '';
    };
  }, [dialogRef]);

  return (
    <dialog ref={dialogRef} className={twMerge('rounded-lg p-6 backdrop:bg-black/50', className)}>
      {children}
    </dialog>
  );
};

export default Modal;
