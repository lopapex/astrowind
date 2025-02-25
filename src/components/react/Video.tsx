import bgVideo from '~/assets/videos/background.mp4';

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
    <div className="relative">
      <video id={id} className="w-full h-[100vh] bg-black" loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={bgVideo} type="video/mp4" />
        {noSupport}
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-orange">
        <div className="text-video uppercase flex flex-col justify-center items-center">
          <div className="font-serif">{creative}</div>
          <div className="font-serif">{culture}</div>
          <div className="font-mono">{community}</div>
        </div>
      </div>
      <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-10">
      <div className='flex flex-col justify-center items-center gap-2'>
        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.6097 18.2964C28.8648 17.2393 29 16.1354 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 16.6513 1.28591 18.2359 1.81092 19.7069C1.63416 20.2118 1.48453 20.7294 1.3638 21.258C0.488231 19.3533 0 17.2337 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 16.6755 29.7253 18.2869 29.2184 19.7915C29.0428 19.2796 28.8392 18.7807 28.6097 18.2964Z"
            fill="#FF6341"
          />
        </svg>
        <div className='text-orange'>{discover}</div>
        </div>
      </div>
    </div>
  );
};

export default Video;
