import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import ReferenceModal from './ReferencesModal';
import ReferenceAsset from './assets/ReferenceAsset';

type Reference = {
  name: string;
  video: string;
  thumbnail: string;
  description: string;
};

const ReferencesContainer = ({ references, videoButton }) => {
  const [selectedReference, setSelectedReference] = useState<Reference | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (reference) => {
    setSelectedReference(reference);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
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
    <>
      <Swiper
        className="max-w-[70%] lg:max-w-[1092px]"
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: references.length < 3 ? references.length : 3,
            spaceBetween: 50,
          },
        }}
      >
        {references.map((reference, index) => (
          <SwiperSlide key={index} className={`cursor-pointer ${index % 2 === 1 ? 'lg:pt-12' : ''}`}>
            <div className="relative flex flex-col justify-start">
              <div className="flex items-center justify-center overflow-hidden w-full aspect-[9/16]">
                <img src={reference.thumbnail} alt={reference.name} className="object-cover w-full h-full" />
              </div>

              <div className="text-2xl font-secondary mt-3 text-white">{reference.name}</div>

              <div className="my-2 block">
                <button className="btn" onClick={() => openDialog(reference)}>
                  {videoButton}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ReferenceModal dialogRef={dialogRef} reference={selectedReference} onClose={() => setSelectedReference(null)} />
      <div className="absolute hidden lg:block top-[150px] right-[50px] z-10">
        <ReferenceAsset />
      </div>
    </>
  );
};

export default ReferencesContainer;
