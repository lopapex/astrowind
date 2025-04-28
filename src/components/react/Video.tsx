import bgVideo from '~/assets/videos/background.mp4';
import VideoAsset from './assets/VideoAsset';

type VideoProps = {
  id?: string;
  noSupport: string;
  creative: string;
  culture: string;
  community: string;
  discover: string;
};

const Video = ({ id, noSupport, community, creative, culture, discover }: VideoProps) => {
  return (
    <div className="relative mt-0 lg:mt-[-81px]">
      <video
        id={id}
        className="w-full h-auto aspect-[16/9] lg:aspect-auto lg:h-[100vh] bg-black"
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
      >
        <source src={bgVideo} type="video/mp4" />
        {noSupport}
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-orange-500">
        <div className="text-5xl lg:text-video uppercase flex flex-col justify-center items-center">
          <div className="font-primary">{creative}</div>
          <div className="font-primary">{culture}</div>
          <div className="font-secondary">{community}</div>
        </div>
      </div>
      <div className="absolute hidden lg:block bottom-[40px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <VideoAsset />
          <div className="text-orange-500">{discover}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
