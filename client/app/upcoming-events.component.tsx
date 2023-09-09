'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { growIn, slideInDown } from '@/app/general.animations'

export default function UpcomingEvents() {

  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    fetch('https://gfsscs-backend-9cb6722f7477.herokuapp.com/events', {cache: 'no-store'}).then(res => res.json()).then(data => {
      data.sort((a, b) => {
        return (new Date(a['date'])).getTime() - (new Date(b['date'])).getTime()
      })
      for(let i = 0; i < data.length; i++) {
        if((new Date(data[i]['date'])) > (new Date())) {
          data = data.slice(i, i+3)
          break
        }
      }
      setEvents(data)
    })
  }, [])

  return (
    <div className="px-6 md:px-15vw py-20 bg-dark">
      <motion.h1 className="text-3xl lg:text-4xl text-white font-mono font-bold" variants={slideInDown} initial="hidden" whileInView="visible" viewport={{once: true}}>Upcoming Events</motion.h1>
      
      {events.length ?
        <motion.div className="flex flex-col" variants={growIn} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <motion.div className="mt-6 p-6 sm:p-8 flex flex-col bg-medium bg-no-repeat xl:[background-image:url('../public/circuitb1.png'),url('../public/circuitb2.png')] [background-position:right_80%,left_bottom] border-solid border-4 border-light" variants={growIn}>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <h1 className="text-2xl lg:text-3xl text-white font-mono font-bold">{events[0]['name']}</h1>
              <h1 className="mt-2 text-sm lg:text-base text-white font-mono">{(new Date(events[0]['date'])).toDateString()}</h1>
            </div>
            <p className="mt-2 text-sm lg:text-base text-white font-sans leading-relaxed tracking-wide">{events[0]['description']}</p>
          </motion.div>
          {events.length > 1 ?
            <motion.div className="mt-6 p-6 sm:p-8 flex flex-col bg-medium bg-no-repeat xl:[background-image:url('../public/circuitb3.png'),url('../public/circuitb4.png')] [background-position:60%_top,right_bottom] border-solid border-4 border-light" variants={growIn}>
              <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white font-mono font-bold">{events[1]['name']}</h1>
                <h1 className="mt-2 text-sm lg:text-base text-white font-mono">{(new Date(events[1]['date'])).toDateString()}</h1>
              </div>
              <p className="mt-2 text-sm lg:text-base text-white font-sans leading-relaxed tracking-wide">{events[1]['description']}</p>
            </motion.div>
          : ''}
          {events.length > 2 ?
            <motion.div className="mt-6 p-6 sm:p-8 flex flex-col bg-medium bg-no-repeat xl:[background-image:url('../public/circuitb5.png'),url('../public/circuitb6.png')] [background-position:70%_top,left_bottom] border-solid border-4 border-light" variants={growIn}>
              <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white font-mono font-bold">{events[2]['name']}</h1>
                <h1 className="mt-2 text-sm lg:text-base text-white font-mono">{(new Date(events[2]['date'])).toDateString()}</h1>
              </div>
              <p className="mt-2 text-sm lg:text-base text-white font-sans leading-relaxed tracking-wide">{events[2]['description']}</p>
            </motion.div>
          : ''}
        </motion.div>
      : ''}
      
    </div>
  )
}