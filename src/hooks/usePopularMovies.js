import { useEffect } from "react";
import useNowPlayingStore from "../store/useNowPlayingStore";
import { BASE_URL, ENDPOINTS, API_OPTIONS, DEFAULT_QUERY } from "../constants";
export const usePopularMovies = () => {
  const { popularMovies, setPopularMovies,setError,setLoading } = useNowPlayingStore();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_URL = `${BASE_URL}${ENDPOINTS.POPULAR}?${DEFAULT_QUERY}`;

        const res = await fetch(API_URL, API_OPTIONS);
        const data = await res.json();

        setPopularMovies(data?.results || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    // prevent refetch
    if (!popularMovies.length) {
      fetchMovies();
    }
  }, [popularMovies.length, setPopularMovies]);
};
