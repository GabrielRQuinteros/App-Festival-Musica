import { SuscriptionForm } from "./suscription-form/SuscriptionForm";
import { BrandAnimatedLogo } from "./brand-animated-logo/BrandAnimatedLogo";

export const HeroSection = () => {
  const backgroundImage = `url('images/hero.jpg')`;
  return (
    <section id="hero-section">
        <div className="flex flex-col items-center justify-center
                        h-[calc(100vh-200px)] min-h-[400px]
                        bg-cover bg-center bg-fixed text-zinc-200"
                        // bg-fixed= me deja la imagen fija mientras scroleo y no la mueve,
                        // Es el efecto ese lindo donde la imagen de fondo y el contenido va
                        // pisando la imagen 
             style={{ backgroundImage }}>

            {/* backdrop-blur: indica la intensidad del blur del esmerilado 
             */}
            <div className="bg-white/30 p-4 rounded-xl text-center backdrop-blur-md">
                  <BrandAnimatedLogo/>
                  <SuscriptionForm/>
            </div>
        </div>
    </section>
  )
}
