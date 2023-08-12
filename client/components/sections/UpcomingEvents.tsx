interface EventCard {
  name: string;
  description: string;
  date: string;
}

function EventCard({ name, description, date }: EventCard) {
  return (
    <div className="bg-[url(/event.png)] bg-no-repeat bg-cover w-full h-full bg-bottom border-2 border-white/50 py-12 px-8 drop-shadow-2xl hover:opacity-75 cursor-pointer transition-all duration-300">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-xl">{date}</p>
      </div>

      <p className="mt-5">{description}</p>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <div className="mt-20 font-mono px-36 mb-64">
      <h1 className="font-mono font-bold text-5xl mb-12">Upcoming Events</h1>

      <div className="flex flex-col gap-6">
        <EventCard
          name="First General Meeting"
          description="Discussing the future of the club and how executive positions will be chosen. "
          date="September 15, 2023"
        />
        <EventCard
          name="Web Development Workshop"
          description="Teaching the basics of web development: HTML and CSS."
          date="September 21, 2023"
        />
        <EventCard
          name="Halloween Contest"
          description="5 tasks, 1 hour, CCC Junior Level, teams of 3. Prizes available and candy provided!"
          date="October 30, 2023"
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;