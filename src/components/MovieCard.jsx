import React, { useState, useRef, useCallback } from "react";
import { IMAGE_BASE_URL } from "../constants";
import MovieCardPortal from "./MovieCardPortal";

const POPUP_WIDTH = 280;

const MovieCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0, transformOrigin: "center" });
  const cardRef = useRef(null);
  const leaveTimer = useRef(null);

  const handleMouseEnter = useCallback(() => {
    clearTimeout(leaveTimer.current);

    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const screenWidth = window.innerWidth;

      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + scrollY + rect.height / 2;

      let left = cardCenterX - POPUP_WIDTH / 2;
      let transformOrigin = "center";

      if (left < 16) {
        left = rect.left;
        transformOrigin = "left";
      } else if (left + POPUP_WIDTH > screenWidth - 16) {
        left = rect.right - POPUP_WIDTH;
        transformOrigin = "right";
      }

      setPopupPos({ top: cardCenterY, left, transformOrigin });
    }

    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setHovered(false), 100);
  }, []);

  // ✅ Early return AFTER all hooks
  if (!movie?.backdrop_path && !movie?.poster_path) return null;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : `${IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <>
      <div
        ref={cardRef}
        className="flex-shrink-0 cursor-pointer relative"
        style={{ width: "220px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full rounded-md overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            src={backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {hovered && (
        <MovieCardPortal
          style={{
            top: `${popupPos.top}px`,
            left: `${popupPos.left}px`,
            width: `${POPUP_WIDTH}px`,
            transform: "translateY(-50%)",
            transformOrigin: popupPos.transformOrigin,
            animation: "netflixPopUp 0.2s ease-out forwards",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.8)",
            backgroundColor: "#181818",
            zIndex: 9999,
          }}
          onMouseEnter={() => {
            clearTimeout(leaveTimer.current);
            setHovered(true);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <style>{`
            @keyframes netflixPopUp {
              from { opacity: 0; transform: translateY(-50%) scale(0.92); }
              to   { opacity: 1; transform: translateY(-50%) scale(1); }
            }
          `}</style>

          {/* Backdrop Image */}
          <div className="relative w-full h-36">
            <img
              src={backdropUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
            <div className="absolute bottom-2 left-3">
              <p className="text-white font-bold text-sm drop-shadow-lg">
                {movie.title}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="px-3 pt-2 pb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 8v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
                </svg>
              </button>
            </div>
            <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Meta */}
          <div className="px-3 pb-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-green-400 font-semibold text-xs">
                {Math.round(movie.vote_average * 10)}% Match
              </span>
              <span className="border border-gray-500 text-gray-400 text-[10px] px-1 rounded">
                U/A 16+
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {["Action", "Exciting", "Thriller"].map((tag, i) => (
                <span key={i} className="text-gray-300 text-[11px] flex items-center gap-1">
                  {i !== 0 && <span className="w-1 h-1 bg-gray-500 rounded-full inline-block" />}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </MovieCardPortal>
      )}
    </>
  );
};

export default MovieCard;