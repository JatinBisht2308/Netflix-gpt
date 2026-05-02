import { useEffect } from "react";
import { BASE_URL, API_OPTIONS } from "../constants";
import useNowPlayingStore from "../store/useNowPlayingStore";
export const useMovieTrailer = (movieDetails) => {
  const setTrailerId = useNowPlayingStore((state) => state.setTrailerId);
  useEffect(() => {
    const fetchVideo = async () => {
      if (!movieDetails?.id) return;
      const videoRes = await fetch(
        `${BASE_URL}/movie/${movieDetails.id}/videos?language=en-US`,
        API_OPTIONS,
      );

      const videoData = await videoRes.json();

      const trailer =
        videoData.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube",
        ) ||
        videoData.results.find(
          (vid) => vid.type === "Teaser" && vid.site === "YouTube",
        ) ||
        videoData.results[0];

      setTrailerId(trailer?.key || null);
    };
    fetchVideo();
  }, [movieDetails?.id]);
};
