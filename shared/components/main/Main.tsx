import Image from "next/image";
import { HeroSection } from "./hero-section/HeroSection";
import { MainArtistsSection } from "./main-artists-section/MainArtistsSection";
import { TicketsSection } from "./tickets-section/TicketsSection";
import { TimelineSection } from "./timeline-section/TimelineSection";


export const Main = () => {
  return (
    <main className="bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200">
        <HeroSection/>
        <div className="mx-2 md:mx-3 lg:mx-4" >
          <MainArtistsSection/>
          <TicketsSection/>
          <TimelineSection/>
        </div>

        <div className="relative " >

        </div>
         
    </main>
  )
}
