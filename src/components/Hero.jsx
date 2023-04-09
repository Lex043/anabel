import hat from "../assets/images/magician-hat.png";
import aiImage from "../assets/images/[removal.ai]_tmp-642b7fcc0f40b_ZKMH5V.png";
import mediaIcon from "../assets/images/Group 3.png";
import brush from "../assets/images/brush.gif";
import magicEye from "../assets/images/magic-eye.gif";
import bgVid from "../assets/images/land10.mp4";

const Hero = () => {
  return (
    <section>
      <figure className="flex flex-col items-center buttom-0">
        <img
          src={hat}
          alt="magician hat"
          className="max-w-full w-24 h-24 relative top-24 left-[19rem]"
        />
        <h1 className="text-white text-[10rem] franie">anabel</h1>
      </figure>

      <div className="flex justify-center bg-anabel">
        {/* <video
          className="bg-bottom bg-no-repeat rounded-t-full h-[20rem] relative"
          src={bgVid}
          autoPlay
          loop
          muted
        ></video> */}
        <figure>
          <img
            src={aiImage}
            alt="aiImage"
            className="w-[750px] relative -bottom-14"
          />
        </figure>
        <div className="absolute right-10">
          <div className="rounded-lg w-[22rem] px-4 py-5 bg-modal text-white text-xs relative">
            <h1 className="font-mono">
              Anabel, a young artist discovers her magical brush can bring
              paintings to life thrusting her into an enchanting adventure to
              save a vibrant, imperiled word hidden within her heart
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <img src={mediaIcon} alt="mediaImg" className="h-10 w-10" />
              <p>Watch Trailer</p>
            </div>
            <img
              src={brush}
              alt="brush"
              className="w-12 h-12 absolute left-20 top-[8rem]"
            />
          </div>
          <div className="absolute top-[28rem] right-2">
            <img src={magicEye} alt="magic eye" className="h-24 w-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
