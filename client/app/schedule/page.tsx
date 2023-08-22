'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Nav from '@/app/nav.component'
import Footer from '@/app/footer.component'
import Calendar from './calendar.component'
import EventOverlay from './event-overlay.component'
import { slideInDown } from '@/app/general.animations'

export default function Schedule() {

  const [focusedEvent, setFocusedEvent] = React.useState({})

  return (
    <div>
      {focusedEvent.hasOwnProperty('name') ? <EventOverlay focusedEvent={focusedEvent} setFocusedEvent={setFocusedEvent} /> : ''}
      
      <Nav page="/schedule" />

      <div className="relative my-10 px-15vw flex flex-col items-center">
        <motion.h1 className="text-4xl text-center font-mono" variants={slideInDown} initial="hidden" animate="visible"><b className="text-gold">Schedule</b></motion.h1>
        <Calendar setFocusedEvent={setFocusedEvent} />
      </div>
      
      <Footer />
      
    </div>
  )
}