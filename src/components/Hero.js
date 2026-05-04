import React from "react";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import useNowPlayingStore from "../store/useNowPlayingStore";

const Hero = ({ movieDetails }) => {
  useMovieTrailer(movieDetails);

  const trailerId = useNowPlayingStore((state) => state.trailerId);

  if (!movieDetails) return null;

  return (
    <div className="relative w-full h-[93vh] text-white overflow-hidden">

      {/* 🎬 Background Video */}
      {trailerId && (
        <iframe
          className="absolute top-0 left-0 w-full h-full scale-150 pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&playlist=${trailerId}&controls=0&modestbranding=1&rel=0`}
          title="Movie Trailer"
          allow="autoplay; fullscreen"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 pb-20 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {movieDetails.title}
        </h1>

        <p className="text-sm md:text-lg text-gray-300 mb-6 line-clamp-3">
          {movieDetails.overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
            ▶ Play
          </button>

          <button className="bg-gray-500/70 px-6 py-2 rounded-md font-semibold">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;