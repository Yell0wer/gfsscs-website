import Nav from '@/app/nav.component'
import Footer from '@/app/footer.component'
import Calendar from './calendar.component'

export default function Schedule() {
  return (
    <div>
      <Nav page="/schedule" />

      <div className="my-8 px-15vw flex flex-col items-center">
        <h1 className="text-4xl text-center font-mono"><b className="text-gold">Schedule</b></h1>
        <Calendar />
      </div>

      <Footer />
    </div>
  )
}