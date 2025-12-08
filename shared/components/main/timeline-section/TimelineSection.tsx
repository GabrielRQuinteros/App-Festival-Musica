import { TemporalLine } from "./temporal-line/TemporalLine";


export const TimelineSection = () => {
  return (
    <section className="mt-20 mx-1" id="timeline-section">
        <div className="">
            <h2 className="mb-2">Programación</h2>
            <span className="mb-5" >Consulta la linea temporal y los escenarios para no perderte a tu artista favorito.</span>
        </div>
        <TemporalLine/>
    </section>
  )
}
