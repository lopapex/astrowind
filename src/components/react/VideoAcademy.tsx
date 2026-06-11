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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    updateOrientation();
    window.addEventListener('resize', updateOrientation);

    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return (
    <div className="relative mt-0 overflow-hidden bg-black lg:mt-[-79px]">
      <div
        className={`relative overflow-hidden bg-black ${
          !isPortrait ? 'w-full aspect-[16/9] lg:aspect-auto lg:h-[100vh]' : 'w-full lg:h-[100vh]'
        }`}
        style={isPortrait ? { height: 'calc(100vh - 73px)' } : undefined}
      >
        <video
          id={id}
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 z-0 h-full w-full bg-black object-cover transition-opacity duration-300 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={bgVideo} type="video/mp4" />
          {noSupport}
        </video>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-orange-500">
        <img
          src="/images/videoAcademy.png"
          alt="CCC-academy"
          width={600}
          height={600}
          className="h-auto w-[280px] sm:w-[420px] lg:w-[600px]"
        />

        <div className="mt-[30px] flex flex-col items-center justify-center text-center font-secondary text-4xl uppercase sm:text-5xl lg:text-6xl">
          <div>{text1}</div>
          <div>{text2}</div>
        </div>
      </div>

      <div className="absolute bottom-[10px] left-1/2 z-20 -translate-x-1/2 transform lg:bottom-[40px]">
        <div className="flex flex-col items-center justify-center gap-2">
          <a className="btn-header text-nowrap py-2 text-2xl" href={FORM} target="_blank">
            {signin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoAcademy;