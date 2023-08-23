'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import photo1 from '@/public/photo1.png'
import photo2 from '@/public/photo2.png'
import photo3 from '@/public/photo3.png'
import { growIn, slideInDown } from '@/app/general.animations'

export default function About() {
  return (
    <div className="px-6 md:px-15vw pt-20 pb-16 2xl:pb-0 bg-[url(../public/bgabout.png)] bg-center bg-cover">
      <motion.div variants={slideInDown} initial="hidden" whileInView="visible" viewport={{once: true}}>
        <motion.h1 className="text-3xl md:text-4xl text-white font-mono font-bold" variants={slideInDown}>Hello, World!</motion.h1>
        <motion.p className="mt-6 text-sm/loose md:text-base/loose text-white md:text-justify font-sans tracking-wide" variants={slideInDown}>Welcome to Glenforest Secondary School’s Computer Science Club! Whether you’re new to coding or have been programming for years, our community offers an amazing place for you to learn, collaborate, and grow. This year we will be offering an array of lessons and workshops covering topics including but not limited to competitive programming, web development, game design, and AI/ML. Stay tuned for news about upcoming events, including contests and hackathons!</motion.p>
      </motion.div>

      <motion.div className="mt-6 flex flex-wrap justify-center items-center gap-8" variants={growIn} initial="hidden" whileInView="visible" viewport={{once: true}}>
        <motion.div variants={growIn}>
          <Image src={photo1} width={480} alt=":skull:"/>
        </motion.div>
        <motion.div variants={growIn}>
          <Image src={photo2} width={540} alt=":monkey:"/>
        </motion.div>
        <motion.div variants={growIn}>
          <Image src={photo3} width={500} alt=":sob:" className="2xl:-translate-y-24"/>
        </motion.div>
      </motion.div>
    </div>
  )
}