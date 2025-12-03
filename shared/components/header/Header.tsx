import { HeaderLogo } from "./header-logo/HeaderLogo"
import { DesktopNavigationMenu } from "./desktop-navigation-menu/DesktopNavigationMenu"
import { MobileNavigation } from "./mobile-navigation/MobileNavigation"

export const Header = () => {
  return (
    <header className="sticky top-0 text-zinc-200 z-10">
        {/* NAVBAR */}
        <nav className="flex bg-linear-to-r from-rose-500 to-pink-500 w-full h-16">
            <HeaderLogo/>
            <DesktopNavigationMenu/>
            <MobileNavigation/>
        </nav>
    </header>
  )
}
