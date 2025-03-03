import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TeamCarousel = ({ team, rolesLabel, skillsLabel }) => {
  return (
    <Swiper
      className="max-w-[50%] md:max-w-[1092px]"
      modules={[Navigation, Pagination, A11y]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {team.map((member, index) => (
        <SwiperSlide key={index} className="cursor-pointer">
          <motion.div
            className="relative flex flex-col border-none justify-start"
            whileHover="animate"
            variants={{
              animate: { scale: 0.95 },
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center overflow-hidden">
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
              <div className="flex justify-center translate-y-[-52px]">
                <div className="inline-block bg-green-500 px-3 py-1 font-semibold text-xl">{member.nickname}</div>
              </div>
              <div className="mt-[-12px] font-medium uppercase text-lg md:text-2xl">{member.name}</div>
              <div className="text-base mt-3">
                <div className="font-medium uppercase">{rolesLabel}:</div>
                <div className="font-semibold">{member.roles.join(', ')}</div>
              </div>
              <div className="text-base mt-3">
                <div className="font-medium uppercase">{skillsLabel}:</div>
                <div className="font-semibold">{member.skills.join(', ')}</div>
              </div>
              {member.description && (
                <div className="text-xs mt-2">
                  <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: member.description }} />
                </div>
              )}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamCarousel;
