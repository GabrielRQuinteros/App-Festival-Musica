import { HeroSection } from "./hero-section/HeroSection";
import { LocationSection } from "./location-section/LocationSection";
import { MainArtistsSection } from "./main-artists-section/MainArtistsSection";
import { TicketsSection } from "./tickets-section/TicketsSection";
import { TimelineSection } from "./timeline-section/TimelineSection";


export const Main = () => {
  return (
    <main className="bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200 pb-20">
        <HeroSection/>
        <div className="mx-2 md:mx-3 lg:mx-4" >
          <MainArtistsSection/>
          <TimelineSection/>
          <TicketsSection/>
          <LocationSection/>
        </div>
    </main>
  )
}
