import Image from "next/image";

export const BrandAnimatedLogo = () => {
  return (
    <div className="relatives">
      <Image
        src={`/images/logo.png`}
        width={350}
        height={328}
        alt={"App Logo"}
        className="w-[175px] h-auto mx-auto"
      />
      <div className="items-center flex justify-center mt-[-70px] mb-5">
        <div className="bg-pink-500 size-14 rounded-full flex items-center justify-center gap-1">
          <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey"></div>
          <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
          <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-[150ms]"></div>
          <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300"></div>
          <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-[75ms]"></div>
        </div>
      </div>

      <div className="font-bold text-5xl">
        <span className="">Rock:</span>
        <span className="text-sky-900">Fest</span>
      </div>
      <div className="font-bold mt-3 text-sm">
        Avisarme de las últimas noticias y promociones
      </div>
    </div>
  );
};
