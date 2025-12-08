import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-t-zinc-700" id="footer">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Ubicación */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Ubicación del Evento</h3>
          <ul className="space-y-1 text-sm">
            <li><span className="font-semibold text-zinc-200">País:</span> Argentina</li>
            <li><span className="font-semibold text-zinc-200">Provincia:</span> Ciudad Autónoma de Buenos Aires</li>
            <li><span className="font-semibold text-zinc-200">Distrito:</span> Villa Crespo</li>
            <li><span className="font-semibold text-zinc-200">Dirección:</span> Humboldt 450</li>
          </ul>
        </div>

        {/* Contactos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold text-zinc-200">Teléfono general:</span>{" "}
              +54 11 4444-5555
            </li>
            <li>
              <span className="font-semibold text-zinc-200">Atención al cliente:</span>{" "}
              +54 11 7777-8888
            </li>
            <li>
              <span className="font-semibold text-zinc-200">Email:</span>{" "}
              contacto@festivalrock.com
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Seguinos</h3>
          <div className="flex gap-4">
            <a className="hover:text-pink-500 transition" href="#">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a className="hover:text-pink-500 transition" href="#">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a className="hover:text-pink-500 transition" href="#">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a className="hover:text-pink-500 transition" href="#">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-zinc-700 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Rock Fest. Todos los derechos reservados.
      </div>
    </footer>
  )
}
