import 'swiper/css/pagination';
import { useCallback } from 'react';
import ArrowHalfAsset from './assets/ArrowHalfAsset';
import type { SwiperRef } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

type SwiperWrapperProps = {
  sliderRef: React.RefObject<SwiperRef | null>;
  className?: string;
  isBeginning: boolean;
  isEnd: boolean;
  children?: React.ReactNode;
};

const SwiperWrapper = ({ sliderRef, className, isBeginning, isEnd, children }: SwiperWrapperProps) => {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {children}
      {!isBeginning && (
        <div className="absolute left-[-50px] lg:left-0 top-1/2" onClick={handlePrev}>
          <ArrowHalfAsset
            className={twMerge('transform scale-x-[-1] cursor-pointer transition ease-in duration-200', className)}
          />
        </div>
      )}

      {!isEnd && (
        <div className="absolute right-[-50px] lg:right-0 top-1/2" onClick={handleNext}>
          <ArrowHalfAsset className={twMerge('cursor-pointer ease-in duration-200', className)} />
        </div>
      )}
    </div>
  );
};

export default SwiperWrapper;
