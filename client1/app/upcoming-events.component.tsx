export default async function UpcomingEvents() {
  const events = await (await fetch('https://gfsscs-website-backend.onrender.com/events')).json()

  return (
    <div className="px-15vw py-20">
      <h1 className="text-4xl text-white font-mono font-bold">Upcoming Events</h1>
      
      <div className="mt-6 flex flex-col">
        {events.map((event) => (
          <div className="p-8 flex flex-col bg-medium border-solid border-4 border-light" key={event.name}>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-white font-mono font-bold">{event.name}</h1>
              <h1 className="text-1xl text-white font-mono">{(new Date(event.date)).toDateString()}</h1>
            </div>
            <p className="mt-4 text-1xl text-white text-justify font-sans leading-loose tracking-wide">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}