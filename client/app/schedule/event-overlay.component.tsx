'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import { growIn } from '@/app/general.animations'

const bgFadeIn = {
  visible: {opacity: 0.8, transition: { 
    duration: 0.6
  }},
  hidden: {opacity: 0}
}

export default function EventOverlay({ focusedEvent, setFocusedEvent }) {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-center">
      <motion.div className="p-8 w-[33vw] bg-medium text-white border-4 border-light" variants={growIn} initial="hidden" animate="visible">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-mono"><b>{focusedEvent.name}</b></h1>
          <button className="px-1 py-1 bg-medium text-white hover:text-gold hover:bg-dark border-4 border-light hover:border-gold transition-all duration-200" onClick={() => setFocusedEvent({})}><FaXmark /></button>
        </div>
        <h2 className="mt-3 text-1xl font-mono">{(new Date(focusedEvent.date)).toLocaleString()}</h2>
        <p className="mt-3 text-1xl text-white font-sans leading-relaxed tracking-wide">
          {focusedEvent.description}
        </p>
      </motion.div>
      <motion.div className="absolute -z-50 top-0 left-0 w-screen h-screen bg-black opacity-80" onClick={() => setFocusedEvent({})} variants={bgFadeIn} initial="hidden" animate="visible" />
    </div>
  )
}