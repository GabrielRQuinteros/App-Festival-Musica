export const SuscriptionForm = () => {
  return (
    <div className="mt-3 gap-2 flex">
      <input
        type="email"
        placeholder="Email"
        className="rounded-sm border border-white/40 bg-white/30 backdrop:blur-md p-2
                                          font-bold text-sky-900 placeholder-zinc-500 caret-pink-500
                                          outline-pink-500 focus:outline"
      />
      <button
        className="cursor-pointer px-4 py-2 bg-pink-500 font-bold justify-center items-center hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20 rounded-sm text-center transition-colors"
        type="submit"
      >
        <span>Suscribirme</span>
      </button>
    </div>
  );
};
