import { useState } from 'react';
import CrossAsset from './assets/CrossAsset';
import PlayAsset from './assets/PlayAsset';
import ReactPlayer from 'react-player';
import { twMerge } from 'tailwind-merge';
import Modal from './Modal';

export type Reference = {
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

  return (
    <Modal dialogRef={dialogRef} className="bg-blue-500" onClose={closeDialog}>
      {reference && (
        <div className="flex flex-col items-center rounded-lg">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-2xl mb-2 text-white">{reference.name}</h2>
            <button className="btn-icon group" onClick={closeDialog}>
              <CrossAsset />
            </button>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden w-full">
            <div className={twMerge('object-cover w-full lg:w-[1280px] aspect-[16/9]')}>
              <ReactPlayer
                url={reference.video}
                controls={true}
                light={true}
                width="100%"
                height="100%"
                playing={isPlaying}
                onStart={() => setIsPlaying(true)}
                onPlay={() => setIsPlaying(true)}
                onClickPreview={() => setIsPlaying(true)}
                playIcon={
                  <button className="absolute group btn-icon p-4 rounded-full" onClick={() => setIsPlaying(true)}>
                    <PlayAsset />
                  </button>
                }
              />
            </div>
          </div>
          <div className="text-base text-white mt-4 max-w-[1280px]">{reference.description}</div>
        </div>
      )}
    </Modal>
  );
};

export default ReferenceModal;
