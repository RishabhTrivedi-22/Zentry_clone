import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVidRef = useRef(null);

  const handleVidLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVidIndex = (currentIndex % totalVideos) + 1;
  /*
  ? In the above variable, the index is set as follows: 
  ? when currentIndex is 0 => 0 % 4 = 0 + 1 = 1
  ? when currentIndex is 1 => 1 % 4 = 1 + 1 = 2
  ? when currentIndex is 2 => 2 % 4 = 2 + 1 = 3
  ? when currentIndex is 3 => 3 % 4 = 3 + 1 = 4
  ? when currentIndex is 0 => 4 % 4 = 0 + 1 = 1
  */

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVidIndex);
  };

  const getVidSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVidRef}
                src={getVidSrc(upcomingVidIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVidLoad}
              />
            </div>
          </div>
          <video
            ref={nextVidRef}
            src={getVidSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-center object-cover"
            onLoadedData={handleVidLoad}
          />

          <video
            src={getVidSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-centerz"
            onLoadedData={handleVidLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-5 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame <br/> Unleash the Play Economy
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
