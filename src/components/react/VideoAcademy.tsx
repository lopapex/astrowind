import bgVideo from '~/assets/videos/backgroundAcademy.mp4';
import { useEffect, useState } from 'react';
import { FORM } from '~/constants/commons';

type VideoAcademyProps = {
  id?: string;
  noSupport: string;
  signin: string;
  text1: string;
  text2: string;
};

const VideoAcademy = ({ id, noSupport, signin, text1, text2 }: VideoAcademyProps) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return (
    <div className="relative mt-0 lg:mt-[-79px]">
      <video
        id={id}
        loop
        muted
        autoPlay
        playsInline
        className={`bg-black
    ${
      !isPortrait
        ? 'w-full h-auto aspect-[16/9] lg:aspect-auto lg:h-[100vh]'
        : 'w-auto left-1/2 relative transform -translate-x-1/2 object-cover lg:h-[100vh]'
    }
  `}
        style={isPortrait ? { height: 'calc(100vh - 73px)' } : undefined}
      >
        <source src={bgVideo} type="video/mp4" />
        {noSupport}
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-orange-500">
        <img src="/images/videoAcademy.png" alt="CCC-academy" width={600} height={600} />

        <div className="text-5xl lg:text-6xl uppercase flex flex-col justify-center items-center mt-[50px] mb-[-150px]">
          <div className="font-secondary">{text1}</div>
          <div className="font-secondary">{text2}</div>
        </div>
      </div>
      <div className="absolute bottom-[10px] lg:bottom-[40px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <a className="btn-header text-nowrap text-2xl py-2" href={FORM} target="_blank">
            {signin}
          </a>
        </div>
      </div>

      <div className="absolute bottom-[10px] lg:bottom-[40px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <a className="btn-header text-nowrap text-2xl py-2" href={FORM} target="_blank">
            {signin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoAcademy;
