import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import UpcomingEvents from "@/components/sections/UpcomingEvents";

export default function Home() {
  return (
    <Layout>
      <div className="bg-[url(/hero.png)] bg-no-repeat bg-cover w-full h-full bg-center">
        <Navbar page="/" />
        <Hero />
      </div>

      <div className="bg-[url(/about.png)] bg-no-repeat bg-cover w-full h-full bg-center">
        <About />
      </div>

      <div className="bg-[url(/upcoming-events.png)] bg-no-repeat bg-cover w-full h-full bg-center">
        <UpcomingEvents />
      </div>
    </Layout>
  );
}
