'use client'
import React from 'react'
import clsx from 'clsx'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

export default function Calendar({ setFocusedEvent }) {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [events, setEvents] = React.useState([])

  const [year, setYear] = React.useState((new Date()).getFullYear())
  const [month, setMonth] = React.useState((new Date()).getMonth())

  const [calendar, setCalendar] = React.useState(new Array())

  React.useEffect(() => {
    fetch('https://gfsscs-website-backend.onrender.com/events', {'cache': 'no-store'}).then(res => res.json()).then(data => {
      setEvents(data)
      renderCalendar()
    })
  }, [events])

  const getNumDays = () => (new Date(year, month + 1, 0)).getDate()
  const getFirstDay = () => (new Date(year, month, 1)).getDay()

  function Day(day, isActive, key) {
    if(isActive) {
      return (
        <div key={key} className="mb-2 p-2 w-[calc(14%-3.5px)] h-28 bg-light font-mono text-white">
          <h1 className={clsx({
            'px-2 py-1 w-fit bg-medium rounded-full': (new Date(year, month, day)).toDateString() === (new Date()).toDateString()
          })}>{day}</h1>
          {events.map(event => ((new Date(year, month, day)).toDateString() === (new Date(event['date'])).toDateString() ?
            (<h1 key={event['_id']} className={clsx('mt-1 px-2 py-1.5 text-xs rounded-md cursor-pointer border-2 border-white', {
              'bg-medium': event['type'] === 'meeting',
              'bg-dark': event['type'] === 'lesson',
              'bg-gold': event['type'] === 'contest' || event['type'] === 'other'
            })} onClick={() => setFocusedEvent(event)}>
              {event['name']}
            </h1>)
          : '' ))}
        </div>
      )
    } else {
      return (<div key={key} className="mb-2 w-[calc(14%-3.5px)] h-28 bg-dark" />)
    }
  }

  function renderCalendar() {
    const cal : React.JSX.Element[] = []
    let key = 0;
    for(let i = 1; i <= getFirstDay(); i++, key++) cal.push(Day(0, false, key))
    for(let i = 1; i <= getNumDays(); i++, key++) cal.push(Day(i, true, key))
    for(let i = 1; i <= 42 - getFirstDay() - getNumDays(); i++, key++) cal.push(Day(0, false, key))
    setCalendar(cal)
  }
  function prevMonth() {
    if(month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else setMonth(month - 1)
    renderCalendar()
  }
  function nextMonth() {
    if(month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else setMonth(month + 1)
    renderCalendar()
  }

  return (
    <div className="my-8 w-full">
      <div className="flex justify-between items-center">
        <button onClick={prevMonth} className="px-4 py-1 bg-medium text-white hover:text-gold hover:bg-dark border-4 border-light hover:border-gold transition-all duration-200"><FaAngleLeft /></button>
        <h1 className="text-3xl text-white">{monthNames[month]} {year}</h1>
        <button onClick={nextMonth} className="px-4 py-1 bg-medium text-white hover:text-gold hover:bg-dark border-4 border-light hover:border-gold transition-all duration-200"><FaAngleRight /></button>
      </div>
      <div className="mt-6 p-2 pb-0 w-full bg-medium flex flex-wrap justify-between">
        {calendar}
      </div>
    </div>
  )
}