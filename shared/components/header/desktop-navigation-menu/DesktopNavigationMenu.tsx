import Link from 'next/link';
export const DesktopNavigationMenu = () => {
  return (
    <>
        <ul className="flex-1 md:flex justify-end items-center hidden" >
            <li>
                <Link className="header-menu-item" href={'#hero-section'} >
                    <span>Inicio</span>
                </Link>
            </li>
            <li>
                <Link className="header-menu-item" href={'#main-artists-section'} >
                    <span>Bandas</span>
                </Link>
            </li>
            <li>
                <div className="header-menu-item group hover:no-underline">
                    <Link className="cursor-pointer" href={"#tickets-section"}>Tickets</Link>
                    <ul className="absolute top-full right-0 bg-pink-500 whitespace-nowrap rounded-b-sm text-right hidden group-hover:block">
                        <li className="p-4 font-bold text-pink-200 hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer hover:underline">
                            <Link href={"#tickets-section"} >Ticket para 1 día</Link>
                        </li>
                        <li className="p-2 hover:underline">
                            <Link href={"#tickets-section"}>Subitem para 7 días</Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <Link className="header-menu-item" href={'#footer'} >
                    <span>Soporte</span>
                </Link>
            </li>
        </ul>
    </>
  )
}
