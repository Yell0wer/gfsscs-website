'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import { growIn } from '@/app/general.animations'

const bgFadeIn = {
  visible: {opacity: 0.8, transition: { 
    duration: 0.6
  }},
  hidden: {opacity: 0, transition: {
    duration: 0.6
  }}
}

export default function EventOverlay({ focusedEvent, setFocusedEvent }) {
  return (
    <div className="z-50 fixed w-screen h-screen flex justify-center items-center">
      <motion.div className="p-8 w-4/5 md:w-1/3 bg-medium text-white border-4 border-light" variants={growIn} initial="hidden" animate="visible" exit="hidden">
        <div className="flex justify-between items-center gap-6">
          <h1 className="text-2xl md:text-3xl font-mono"><b>{focusedEvent.name}</b></h1>
          {window.innerWidth >= 640 ? 
            <button className="px-1 py-1 bg-medium text-white hover:text-gold hover:bg-dark border-4 border-light hover:border-gold transition-all duration-200" onClick={() => setFocusedEvent({})}>
              <FaXmark />
            </button>
          : ''}
        </div>
        <h2 className="mt-3 text-sm md:text-base font-mono">{(new Date(focusedEvent.date)).toLocaleString()}</h2>
        <p className="mt-3 text-sm md:text-base text-white font-sans leading-relaxed tracking-wide">
          {focusedEvent.description}
        </p>
      </motion.div>
      <motion.div className="absolute -z-10 top-0 left-0 w-screen h-screen bg-black opacity-80" onClick={() => setFocusedEvent({})} variants={bgFadeIn} initial="hidden" animate="visible" exit="hidden" />
    </div>
  )
}