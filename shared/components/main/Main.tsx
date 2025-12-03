import Image from "next/image";
import { HeroSection } from "./hero-section/HeroSection";


export const Main = () => {
  return (
    <main>
        <HeroSection/>
        <Image src={"https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
               width={682}
               height={910}
               alt="ASd"
         />
        <Image src={"https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
               width={682}
               height={910}
               alt="ASd"
         />
    </main>
  )
}
