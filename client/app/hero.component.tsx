'use client'
import { motion } from 'framer-motion'
import { FaDiscord, FaInstagram } from 'react-icons/fa6'
import { growIn, slideInLeftSlow, slideInDownSlow } from '@/app/general.animations'

export default function Hero() {
  return (
    <div className="px-15vw h-60vh bg-cover flex flex-col justify-center gap-8" >
      <motion.div className="text-6xl text-white font-mono" variants={slideInDownSlow} initial="hidden" whileInView="visible" viewport={{once: true}}>
        <motion.h1 className="text-gold font-bold" variants={slideInDownSlow}>Glenforest S.S.</motion.h1>
        <motion.h1 className="mt-4" variants={slideInDownSlow}>Computer Science</motion.h1>
      </motion.div>
      <motion.div className="text-5xl text-white flex gap-6" variants={slideInLeftSlow} initial="hidden" whileInView="visible" viewport={{once: true}}>
        <motion.a href="https://discord.gg/Uj85nUU5Fj" target="_blank" variants={slideInLeftSlow}>
          <FaDiscord className="hover:text-gold transition-all duration-200" />
        </motion.a>
        <motion.a href="https://www.instagram.com/glenforest.cs/" target="_blank" variants={slideInLeftSlow}>
          <FaInstagram className="hover:text-gold transition-all duration-200" />
        </motion.a>
      </motion.div>
    </div>
  )
}