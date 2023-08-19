import { FaDiscord, FaInstagram } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="px-15vw h-70vh flex flex-col justify-center gap-8">
      <h1 className="text-6xl text-white font-mono">
        <b className="text-gold">Glenforest S.S.</b>
        <br />
        Computer Science
      </h1>
      <div className="text-5xl text-white flex gap-6">
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