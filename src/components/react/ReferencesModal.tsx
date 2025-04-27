import { useEffect, useState } from 'react';
import CrossAsset from './assets/CrossAsset';
import PlayAsset from './assets/PlayAsset';
import ReactPlayer from 'react-player';
import { twMerge } from 'tailwind-merge';

type Reference = {
  name: string;
  video: string;
  thumbnail: string;
  description: string;
};

type ReferenceModalProps = {
  reference: Reference | null;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
};

const ReferenceModal = ({ reference, dialogRef, onClose }: ReferenceModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const closeDialog = () => {
    onClose();
    setIsPlaying(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    const handleOutsideClick = (e: MouseEvent) => {
      if (dialog && e.target === dialog) {
        closeDialog();
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

  return (
    <dialog ref={dialogRef} className="rounded-lg bg-blue-500 p-6 backdrop:bg-black/50">
      {reference && (
        <div className="flex flex-col items-center rounded-lg">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-2xl mb-2 text-white">{reference.name}</h2>
            <button className="btn-icon" onClick={closeDialog}>
              <CrossAsset />
            </button>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden w-full">
            <div className={twMerge('object-cover w-full h-full lg:w-[1280px] lg:h-[700px]')}>
              <ReactPlayer
                url={reference.video}
                controls={true}
                width="100%"
                height="100%"
                playing={isPlaying}
                onStart={() => setIsPlaying(true)}
                onPlay={() => setIsPlaying(true)}
                onClickPreview={() => setIsPlaying(true)}
                fallback={
                  <img
                    src={reference.thumbnail}
                    alt={reference.name}
                    className="animate-pulse object-cover w-full h-full"
                  />
                }
              />
            </div>
            {!isPlaying && (
              <button className="group absolute btn-icon p-4 rounded-full" onClick={() => setIsPlaying(true)}>
                <PlayAsset />
              </button>
            )}
          </div>
          <div className="text-base text-white mt-4 max-w-[1280px]">{reference.description}</div>
        </div>
      )}
    </dialog>
  );
};

export default ReferenceModal;
