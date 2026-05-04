import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  if (!movies?.length) return null;

  const handleScroll = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollBy = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6 md:px-16 mb-10">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-3">
        {title}
      </h2>

      <div className="relative group/row">

        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scrollBy("left")}
            className="absolute left-0 top-0 h-full z-20 w-12 flex items-center justify-center"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)",
            }}
          >
            <svg
              className="w-7 h-7 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scrollBy("right")}
            className="absolute right-0 top-0 h-full z-20 w-12 flex items-center justify-center"
            style={{
              background: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)",
            }}
          >
            <svg
              className="w-7 h-7 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Scrollable Row */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            gap: "6px",
            overflowX: "scroll",
            overflowY: "visible",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;