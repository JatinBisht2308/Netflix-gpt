import React from "react";
import useAuthStore from "../store/useAuthStore";
import Header from "./Header";
import Hero from "./Hero";
import { useBrowseMovies } from "../hooks/useBrowseMovies";
import useNowPlayingStore from "../store/useNowPlayingStore";

const Borwse = () => {
  const userDetails = useAuthStore((state) => state.user);
  useBrowseMovies();
  const nowPlayingMovies = useNowPlayingStore(
    (state) => state.nowPlayingMovies,
  );
  if (!nowPlayingMovies.length > 0) return;
  console.log("now playing  movies store data:", nowPlayingMovies);
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Borwse;
