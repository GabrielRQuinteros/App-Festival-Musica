import { OneDayTicketCard } from "./one-day-ticket-card/OneDayTicketCard"
import { SevenDaysTicketCard } from "./seven-days-ticket-card/SevenDaysTicketCard"


export const TicketsCardsContainer = () => {
  return (
    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2 gap-20">
      <OneDayTicketCard/>
      <SevenDaysTicketCard/>
    </div>
  )
}
