import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import TeamModal, { type Member } from './TeamModal';
import { useRef, useState } from 'react';

const TeamContainer = ({ team, moreButton, follow }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (member) => {
    setSelectedMember(member);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      <Swiper
        className="max-w-[70%] lg:max-w-[1092px]"
        modules={[Pagination, A11y]}
        loop
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: team.length < 3 ? team.length : 3,
            spaceBetween: 50,
          },
        }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index} className="cursor-pointer mt-8">
            <motion.div
              className="relative flex flex-col justify-start"
              whileHover="animate"
              variants={{
                animate: { scale: 0.95 },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center overflow-hidden" onClick={() => openDialog(member)}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="my-auto max-h-full max-w-full"
                  variants={{
                    initial: { scale: 1 },
                    animate: { scale: 0.9, translateY: '-7.5%' },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="text-left p-0 z-10">
                <div className="flex justify-center translate-y-[-26px]">
                  <div className="inline-block bg-green-500 px-3 py-1 font-semibold text-2xl">{member.nickname}</div>
                </div>
                <div className="mt-[-12px] text-2xl font-secondary">{member.name}</div>
                <div className="text-lg font-delight font-semibold">{member.job}</div>

                <div className="my-2 block">
                  <button className="btn-secondary" onClick={() => openDialog(member)}>
                    {moreButton}
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TeamModal
        dialogRef={dialogRef}
        member={selectedMember}
        follow={follow}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
};

export default TeamContainer;
