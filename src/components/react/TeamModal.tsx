import CrossAsset from './assets/CrossAsset';
import Modal from './Modal';
import { IconBrandInstagram } from '@tabler/icons-react';

export type Member = {
  image: string;
  name: string;
  nickname: string;
  job: string;
  instagram: string;
  description: string;
};

type TeamModalProps = {
  member: Member | null;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
};

const TeamModal = ({ member, dialogRef, onClose }: TeamModalProps) => {
  const closeDialog = () => {
    onClose();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <Modal dialogRef={dialogRef} className="bg-orange-500" onClose={closeDialog}>
      {member && (
        <div className="flex flex-col items-center rounded-lg">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-2xl mb-2">{member.name}</h2>
            <button className="btn-icon bg-green-500 group" onClick={closeDialog}>
              <CrossAsset />
            </button>
          </div>
          <div className="relative flex overflow-hidden w-full lg:w-[1280px] gap-16">
            <img src={member.image} alt={member.name} className="max-w-[600px] hidden lg:block" />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col justify-start items-start text-left">
                <div className="text-3xl">{member.nickname}</div>
                <div className="text-2xl">{member.job}</div>
                <div className="text-xl mt-5">{member.description}</div>
              </div>
              <div className="flex flex-col justify-end items-end text-right">
                <a
                  className="text-white hover:text-green-500 rounded-lg text-sm p-1 inline-flex items-center"
                  aria-label="Instagram"
                  href={member.instagram}
                  target="_blank"
                >
                  <IconBrandInstagram className="w-[70px] h-[70px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default TeamModal;
