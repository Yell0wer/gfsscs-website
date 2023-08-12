import { FaDiscord, FaInstagram } from "react-icons/fa6";

function Hero() {
  return (
    <div className="mt-32 font-mono px-36 py-20 mb-64">
      <h1 className="text-primary font-bold text-7xl">Glenforest S.S.</h1>
      <p className="text-7xl">Computer Science</p>

      <div className="flex gap-6 mt-6 items-center">
        <FaDiscord className="text-5xl" />
        <FaInstagram className="text-5xl" />
      </div>
    </div>
  );
}

export default Hero;
