import { MainArtistsCarousel } from "./main-artists-carousel/MainArtistsCarousel"

export const MainArtistsSection = () => {
  return (
    <section className="w-full mx-auto mt-20 mb-20 text-zinc-900 dark:text-zinc-200" >
        <div className="max-w-5xl px-2">
          <h2 className="mb-2" >Artistas Principales</h2>
          <div className="mb-5">Viví una semana entera de música con estos artistas inventados, en un evento de 7 días que los fans ya describen como “uno más de los shows mas esperados que se vienen este año”.</div>
        </div>
        <div className="mx-0 md:mx-2 lg:mx-4 xl:mx-20 2xl:mx-40 mt-6" >
          <MainArtistsCarousel/>
        </div>
    </section>
  )
}
