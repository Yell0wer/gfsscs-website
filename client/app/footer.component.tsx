import { FaDiscord, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="px-15vw py-10 flex flex-col md:flex-row justify-between bg-black">
      <h1 className="text-sm/loose md:text-base/loose text-white font-sans leading-loose tracking-wide">
        Open Rooms on Tuesdays and Thursdays in room 200
        <br />
        Have questions? Email us at <a href="mailto:glenforestss.cs@gmail.com" target="_blank" className="underline hover:text-gold transition-all duration-200">glenforestss.cs@gmail.com</a>
      </h1>
      <div className="mt-2 text-2xl md:text-3xl text-white flex items-center gap-6">
        <a href="https://discord.gg/Uj85nUU5Fj" target="_blank">
          <FaDiscord className="hover:text-gold transition-all duration-200" />
        </a>
        <a href="https://www.instagram.com/glenforest.cs/" target="_blank">
          <FaInstagram className="hover:text-gold transition-all duration-200" />
        </a>
      </div>
    </div>
  )
}