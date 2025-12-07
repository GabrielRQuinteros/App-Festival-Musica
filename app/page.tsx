import { Footer, Header, Main } from "@/shared";
import { DarkModeButton } from "@/shared/components/dark-mode-button/DarkModeButton";

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
