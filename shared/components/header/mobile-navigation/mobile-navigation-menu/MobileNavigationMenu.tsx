'use client';

import Link from "next/link"
import { useRef } from "react";

export const MobileNavigationMenu = () => {

    const ticketsMenuItem = useRef<HTMLLIElement | null>(null);
      const onClickTicketsMenuItem = () => {
        if (ticketsMenuItem.current!.classList.contains("open")) {
          ticketsMenuItem.current!.classList.remove("open");
        } else {
          ticketsMenuItem.current!.classList.add("open");
        }
      };

  return (
    <>
        <div className="absolute bg-linear-to-r from-rose-500 to-pink-500 w-full left-0 top-16 peer-open:block hidden">
          <ul>
            <li className="header-mobile-item">
              <Link href="#">
                <span>Inicio</span>
              </Link>
            </li>
            <li className="header-mobile-item">
              <Link href="#">
                <span>Bandas</span>
              </Link>
            </li>
            <li ref={ticketsMenuItem} className="group p-0 inline">
                <span  onClick={onClickTicketsMenuItem} className="header-mobile-item text-center font-bold">Tickets</span>
                <ul className="hidden group-open:block">
                  <li className="header-mobile-item font-medium relative text-center p-4 text-pink-200 hover:text-zinc-200 hover:bg-white/5 ease-in-out">
                    <span>Ticket para 1 día</span>
                  </li>
                  <li className="header-mobile-item relative font-medium text-center p-4 text-pink-200 hover:text-zinc-200 hover:bg-white/5 ease-in-out">
                    <span>Ticket para 7 días</span>
                  </li>
                </ul>
            </li>
            <li className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <Link href="#">
                <span>Soporte</span>
              </Link>
            </li>
          </ul>
        </div>
    </>
  )
}
