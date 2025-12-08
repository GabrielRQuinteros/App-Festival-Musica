import { FaStar } from "react-icons/fa";

export const SevenDaysTicketCard = () => {
  return (
    <div className="relative rounded-3xl bg-zinc-800 p-8 ring-1 ring-white/10 sm:p-10">
        <div className="absolute top-4 right-4 text-pink-500">
            <FaStar className="size-8" />
        </div>
      <h3
        id="tier-enterprise"
        className="text-base/7 font-semibold text-pink-500"
      >
        Ticket para 7 días
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-zinc-200">
          $500.000
        </span>
      </p>
      <p className="mt-6 text-base/7 text-gray-300 lg:h-[84px]">
        Perfecto para aquellos que solo quieren disfrutar de todos los espectaculos y a los artistas del evento con beneficios exclusivos. 
      </p>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10 lg:h-[205px]"
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
          Asientos reservados
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
          Ingreso prioritario al predio
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
          Descuentos exclusivos
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
          Foto con tus artistas favoritos
        </li>
      </ul>
      <a
        href="#"
        aria-describedby="tier-enterprise"
        className="mt-8 block rounded-md bg-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
      >
        Comprar Ya
      </a>
    </div>
  );
};
