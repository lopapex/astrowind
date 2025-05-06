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
  follow: string;
};

const TeamModal = ({ member, dialogRef, onClose, follow }: TeamModalProps) => {
  const closeDialog = () => {
    onClose();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <Modal dialogRef={dialogRef} className="bg-orange-500" onClose={closeDialog}>
      {member && (
        <div className="relative flex flex-col items-center rounded-lg">
          <div className="relative flex overflow-hidden w-full lg:w-[960px] gap-16">
            <img src={member.image} alt={member.name} className="max-w-[400px] hidden lg:block" />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col justify-start items-start text-left">
                <div className="text-2xl font-secondary mt-1">{member.name}</div>
                <div className="text-base font-delight font-normal">{member.nickname}</div>
                <div className="text-lg font-delight font-semibold my-5">{member.job}</div>
                <div className="text-base font-delight font-medium">{member.description}</div>
              </div>
              <div className="flex text-right">
                <div className="flex justify center items-center gap-4 bg-green-500 px-4 py-1">
                  <div className="text-base uppercase font-bold">{follow}</div>
                  <a
                    className="text-black hover:text-white transition ease-in duration-200 rounded-lg text-sm p-1 inline-flex items-center"
                    aria-label="Instagram"
                    href={member.instagram}
                    target="_blank"
                  >
                    <IconBrandInstagram className="w-[22px] h-[22px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button className="absolute right-0 btn-icon bg-green-500 group" onClick={closeDialog}>
            <CrossAsset />
          </button>
        </div>
      )}
    </Modal>
  );
};

export default TeamModal;
