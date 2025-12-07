'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArtistCard } from "./artist-card/ArtistCard";
import { artists } from "@/shared/data/Artists.info";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const MainArtistsCarousel = () => {

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-center">

        {/* BOTÓN IZQUIERDA */}
        <button
          className="z-10 text-pink-500 text-5xl cursor-pointer
                     prev-btn"
        >
          <FiChevronLeft />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={20}
          slidesPerView={1}
          mousewheel={true}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {artists.map((artist) => (
            <SwiperSlide key={artist.imageUrl}>
              <ArtistCard artistInfo={artist} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTÓN DERECHA */}
        <button
          className="z-10 text-pink-500 text-5xl cursor-pointer
          next-btn"
        >
          <FiChevronRight />
        </button>

      </div>
    </div>
  );
};
