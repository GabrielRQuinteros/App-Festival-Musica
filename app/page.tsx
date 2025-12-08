import { Footer, Header, Main } from "@/shared";
import { DarkModeButton } from "@/shared/components/dark-mode-button/DarkModeButton";

export const metadata = {
  title: "Rock Fest - Home",
  description: "Bienvenido al festival de rock en argentina mas esperado del año, la Rock Fest. Te espera mucha música, cultura y mucho rock and roll."
}

export default function LandingPage() {
  return (
    <>
        <Header/>
        <DarkModeButton/>
        <Main/>
        <Footer/>
    </>
  );
}
