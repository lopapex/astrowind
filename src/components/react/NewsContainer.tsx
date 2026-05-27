import { useState, useRef } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import SwiperWrapper from './SwiperWrapper';
import NewsModal, { type News } from './NewsModal';

const NewsContainer = ({ news, moreButton }) => {
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const sliderRef = useRef<SwiperRef | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const openDialog = (news) => {
    setSelectedNews(news);
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
        className="stroke-white hover:stroke-orange-500"
      >
        <Swiper
          ref={sliderRef}
          className="max-w-[70%] lg:max-w-full"
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            768: {
              slidesPerView: news.length < 3 ? news.length : 3,
              spaceBetween: 50,
            },
          }}
        >
          {news.map((newItem, index) => (
            <SwiperSlide key={index} className={`cursor-pointer pt-8 ${index % 2 === 1 ? 'lg:pt-24' : 'lg:pt-8'}`}>
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
                  onClick={() => openDialog(newItem)}
                >
                  <img src={newItem.thumbnail} alt={newItem.name} className="object-cover w-full h-full" />
                </motion.div>

                <div className="text-2xl font-secondary mt-3 text-white">{newItem.name}</div>

                <div className="my-2 block">
                  <button className="btn" onClick={() => openDialog(newItem)}>
                    {moreButton}
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
      <NewsModal dialogRef={dialogRef} news={selectedNews} onClose={() => setSelectedNews(null)} />
    </>
  );
};

export default NewsContainer;
