import { TicketsCardsContainer } from "./tickets-card-container/TicketsCardsContainer"

export const TicketsSection = () => {
  return (
    <section className="mt-20 mx-1 md:mx-4" id="tickets-section">
        <h2>Tickets</h2>
        <TicketsCardsContainer/>
    </section>
  )
}
