

export const LocationSection = () => {
  return (
    <section className="mt-20">
        <h2 className="mb-4">Como llegar</h2>
        <div className="flex flex-col mb-8 ml-2">
          <span>Vení a ver a tus artistas favoritos y ser parte de este evento único en el mundo al Movistar Arena. ¿No sabes como llegar?.</span>
          <span>Te dejamos un mapa interactivo para que puedas planear ver el recorrido desde donde estes hasta el evento.</span>
        </div>
        <div className="mx-5 md:mx-30">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.368561119292!2d-58.448001199999986!3d-34.59450930000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5eb6fb40a93%3A0x1fcab11b62b55896!2sMovistar%20Arena!5e0!3m2!1ses!2sar!4v1765217532590!5m2!1ses!2sar" className="w-full h-[500px]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}
