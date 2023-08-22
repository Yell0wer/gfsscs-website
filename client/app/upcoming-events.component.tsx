export default async function UpcomingEvents() {
  // get all events and sort by date
  let events = await (await fetch('https://gfsscs-website-backend.onrender.com/events', {cache: 'no-store'})).json()
  events.sort((a, b) => {
    return (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
  })
  // get most recent 3 events
  for(let i = 0; i < events.length; i++) {
    if((new Date(events[i].date)) > (new Date())) {
      events = events.slice(i, i+3)
      break
    }
  }

  return (
    <div className="px-15vw py-20">
      <h1 className="text-4xl text-white font-mono font-bold">Upcoming Events</h1>
      
      <div className="flex flex-col">
        {events && events.length && events.map((event) => (
          <div className="mt-6 p-8 flex flex-col bg-medium border-solid border-4 border-light" key={event._id}>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-white font-mono font-bold">{event.name}</h1>
              <h1 className="text-1xl text-white font-mono">{(new Date(event.date)).toDateString()}</h1>
            </div>
            <p className="mt-4 text-1xl text-white text-justify font-sans leading-relaxed tracking-wide">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}