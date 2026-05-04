import React from "react";
import MovieList from "./MovieList";
import useNowPlayingStore from "../store/useNowPlayingStore";

const SecondContainer = () => {
  const nowPlayingMovies = useNowPlayingStore((state) => state.nowPlayingMovies);
  const topRatedMovies   = useNowPlayingStore((state) => state.topRatedMovies);
  const popularMovies    = useNowPlayingStore((state) => state.popularMovies);
  const upcomingMovies   = useNowPlayingStore((state) => state.upcomingMovies);

  return (
    <div
      className="bg-black pt-4 pb-16 -mt-16 relative"
      style={{ overflowX: "clip", overflowY: "visible" }}
    >
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Top Rated"   movies={topRatedMovies}   />
      <MovieList title="Popular"     movies={popularMovies}    />
      <MovieList title="Upcoming"    movies={upcomingMovies}   />
    </div>
  );
};

export default SecondContainer;