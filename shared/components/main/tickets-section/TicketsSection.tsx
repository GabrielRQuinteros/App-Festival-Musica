import { TicketsCardsContainer } from "./tickets-card-container/TicketsCardsContainer"

export const TicketsSection = () => {
  return (
    <section className="mt-20 mx-1 md:mx-2" id="tickets-section">
        <h2 className="mb-2">Tickets</h2>
        <div className="flex flex-col ml-2">
          <span>Mirá los artistas que mas te gustan en los días que se presentan, o si sos un fan del festival tenemos un ticket de 7 días para vos.</span>
          <span>Elegí los tickets que mas se adapten a vos.</span>
        </div>
        <TicketsCardsContainer/>
    </section>
  )
}
