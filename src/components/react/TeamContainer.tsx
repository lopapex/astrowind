import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { motion } from 'framer-motion';
import { Pagination, A11y, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import TeamModal, { type Member } from './TeamModal';
import { useRef, useState } from 'react';
import SwiperWrapper from './SwiperWrapper';

const TeamContainer = ({ team, moreButton, follow }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const sliderRef = useRef<SwiperRef | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const openDialog = (member) => {
    setSelectedMember(member);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      <SwiperWrapper
        sliderRef={sliderRef}
        isBeginning={isBeginning}
        isEnd={isEnd}
        className="stroke-green-500 hover:stroke-white"
      >
        <Swiper
          ref={sliderRef}
          className="max-w-[70%] lg:max-w-full"
          modules={[Pagination, A11y, Navigation]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
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
                <motion.div
                  className="flex items-center justify-center overflow-hidden w-full aspect-[9/16]"
                  variants={{
                    initial: { scale: 1 },
                    animate: { scale: 0.9, translateY: '-7.5%' },
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openDialog(member)}
                >
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </motion.div>

                <div className="text-left p-0 z-10">
                  <div className="flex justify-center translate-y-[-26px]">
                    <div className="inline-block bg-green-500 px-3 py-1 font-semibold text-2xl">{member.nickname}</div>
                  </div>
                  <div className="mt-[-12px] text-2xl font-secondary">{member.name}</div>
                  <div className="text-lg font-delight font-semibold line-clamp-2 h-[54px]">{member.job}</div>
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
      </SwiperWrapper>
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
