import { useEffect } from "react";
import useNowPlayingStore from "../store/useNowPlayingStore";
import {
  BASE_URL,
  ENDPOINTS,
  API_OPTIONS,
  DEFAULT_QUERY,
} from "../constants";

export const useBrowseMovies = () => {
  const {
    nowPlayingMovies,
    setNowPlayingMovies,
    setLoading,
    setError,
  } = useNowPlayingStore();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const API_URL = `${BASE_URL}${ENDPOINTS.NOW_PLAYING}?${DEFAULT_QUERY}`;

        const res = await fetch(API_URL, API_OPTIONS);
        const data = await res.json();

        setNowPlayingMovies(data?.results || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    // prevent refetch
    if (!nowPlayingMovies.length) {
      fetchMovies();
    }
  }, [nowPlayingMovies.length, setNowPlayingMovies, setLoading, setError]);
};