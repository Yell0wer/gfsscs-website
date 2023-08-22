'use client'
import React from 'react'
import Nav from '@/app/nav.component'
import Footer from '@/app/footer.component'
import Calendar from './calendar.component'
import EventOverlay from './event-overlay.component'

export default function Schedule() {

  const [focusedEvent, setFocusedEvent] = React.useState({})

  return (
    <div>
      {focusedEvent.hasOwnProperty('name') ? <EventOverlay focusedEvent={focusedEvent} setFocusedEvent={setFocusedEvent} /> : ''}
      <Nav page="/schedule" />

      <div className="my-8 px-15vw flex flex-col items-center">
        <h1 className="text-4xl text-center font-mono"><b className="text-gold">Schedule</b></h1>
        <Calendar setFocusedEvent={setFocusedEvent} />
      </div>

      <Footer />
    </div>
  )
}