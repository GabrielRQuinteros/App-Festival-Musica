export const OneDayTicketCard = () => {
  return (
    <div className="rounded-3xl bg-zinc-800 text-zinc-200
       p-8 ring-1 ring-zinc-700 shadow-md
       sm:mx-8 sm:p-10 lg:mx-0 h-full">
      <h3 id="tier-hobby" className="text-base/7 font-semibold  text-pink-500">
        Ticket para 1 día
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight ">
          $ 80.000
        </span>
      </p>
      <p className="mt-6 text-base/7 text-zinc-300 lg:h-[84px]">
        Perfecto para aquellos que solo quieren ver a su artista favorito.
      </p>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm/6 text-zinc-300 sm:mt-10 lg:h-[205px]"
      >
        
        <li className="flex gap-x-3">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="h-6 w-5 flex-none text-pink-500"
          >
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
          </svg>
          Asientos
        </li>
        <li className="flex gap-x-3">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="h-6 w-5 flex-none text-pink-500"
          >
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
          </svg>
          Áreas de comida y bebida
        </li>
        <li className="flex gap-x-3">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="h-6 w-5 flex-none text-pink-500"
          >
            <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
          </svg>
          Sanitarios
        </li>
      </ul>
      <a
        href=""
        aria-describedby="tier-hobby"
        className="mt-8 block rounded-md bg-white/2.5 border- px-3.5 py-2.5 text-center text-sm font-semibold
                dark:text-zinc-300 inset-ring inset-ring-zinc-500 hover:text-pink-500 hover:inset-ring hover:inset-ring-pink-500 hover:bg-zinc-200 focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-white/75 sm:mt-10 "
      >
        Comprar Ya
      </a>
    </div>
  );
};
