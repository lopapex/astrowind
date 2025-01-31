import bgVideo from '~/assets/videos/background.mp4';

type VideoProps = {
  id?: string;
};

const Video = ({ id }: VideoProps) => {
  return (
    <video
      id={id}
      className="w-full h-[calc(100vh-75px)] top-[75px] bg-black"
      loop={true}
      muted={true}
      autoPlay={true}
      playsInline={true}
    >
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
