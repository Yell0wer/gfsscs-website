'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '@/app/nav.component'
import Footer from '@/app/footer.component'
import Calendar from './calendar.component'
import EventOverlay from './event-overlay.component'
import { slideInDown } from '@/app/general.animations'

export default function Schedule() {

  const [focusedEvent, setFocusedEvent] = React.useState({})

  return (
    <div className="bg-dark bg-no-repeat lg:[background-image:url('../public/circuit3.png'),url('../public/circuit5.png'),url('../public/circuit7.png')] [background-position:left_20rem,right_50rem,left_50rem]">
      <AnimatePresence>
      {focusedEvent.hasOwnProperty('name') ? <EventOverlay focusedEvent={focusedEvent} setFocusedEvent={setFocusedEvent} /> : ''}
      </AnimatePresence>
      
      <Nav page="/schedule" />

      <div className="relative my-10 px-6 md:px-15vw flex flex-col items-center">
        <motion.h1 className="text-3xl lg:text-4xl text-center font-mono" variants={slideInDown} initial="hidden" animate="visible"><b className="text-gold">Schedule</b></motion.h1>
        <Calendar setFocusedEvent={setFocusedEvent} />
      </div>
      
      <Footer />
      
    </div>
  ) // FOOTER STICK TO BOTTOM ON 4K
}