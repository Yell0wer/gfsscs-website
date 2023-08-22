'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { growIn, slideInLeft } from '@/app/general.animations'

export default function UpcomingEvents() {

  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    fetch('https://gfsscs-website-backend.onrender.com/events', {cache: 'no-store'}).then(res => res.json()).then(data => {
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
    <div className="px-15vw py-20">
      <motion.h1 className="text-4xl text-white font-mono font-bold" variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{once: true}}>Upcoming Events</motion.h1>
      
      {events.length ?
        <motion.div className="flex flex-col" variants={growIn} initial="hidden" whileInView="visible" viewport={{once: true}}>
          {events.map((event) => (
            <motion.div key={event['_id']} className="mt-6 p-8 flex flex-col bg-medium border-solid border-4 border-light" variants={growIn}>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl text-white font-mono font-bold">{event['name']}</h1>
                <h1 className="text-1xl text-white font-mono">{(new Date(event['date'])).toDateString()}</h1>
              </div>
              <p className="mt-2 text-1xl text-white text-justify font-sans leading-relaxed tracking-wide">{event['description']}</p>
            </motion.div>
          ))}
        </motion.div>
      : ''}
      
    </div>
  )
}