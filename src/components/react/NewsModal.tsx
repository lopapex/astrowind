import CrossAsset from './assets/CrossAsset';
import Modal from './Modal';

export type News = {
  name: string;
  thumbnail: string;
  description: string;
};

type NewsModalProps = {
  news: News | null;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
};

const NewsModal = ({ news, dialogRef, onClose }: NewsModalProps) => {
  const closeDialog = () => {
    onClose();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <Modal dialogRef={dialogRef} className="bg-blue-500" onClose={closeDialog}>
      {news && (
        <div className="flex flex-col items-center rounded-lg">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-2xl font-secondary mb-2 text-white">{news.name}</h2>
            <button className="btn-icon group" onClick={closeDialog}>
              <CrossAsset />
            </button>
          </div>
          <div className="text-base text-white mt-4 max-w-[960px]">{news.description}</div>
        </div>
      )}
    </Modal>
  );
};

export default NewsModal;
