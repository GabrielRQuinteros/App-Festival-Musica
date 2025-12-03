'use client';
import { useRef } from "react";

export const MobileNavigationButton = () => {
    const buttonRef = useRef<HTMLDivElement | null>(null);
      const onClick = () => {
        if (buttonRef.current!.classList.contains("open")) {
          buttonRef.current!.classList.remove("open");
        } else {
          buttonRef.current!.classList.add("open");
        }
      };
  return (
    <>
        <div ref={buttonRef} className="flex flex-col gap-1 group peer p-3" onClick={onClick}>
          <div className="bg-zinc-200 rounded-full w-6 h-1 group-open:rotate-45 group-open:top-2 relative transition-all"></div>
          <div className="bg-zinc-200 rounded-full w-6 h-1 group-open:opacity-0 opacity-100 transition-all"></div>
          <div className="bg-zinc-200 rounded-full w-6 h-1 group-open:-rotate-45 group-open:-top-2 relative transition-all"></div>
        </div>
    </>
  )
}
