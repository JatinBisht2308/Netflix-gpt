import { create } from "zustand";

const useNowPlayingStore = create((set) => ({
  // state
  nowPlayingMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [],
  loading: false,
  error: null,
  trailerId: null,

  // actions
  setNowPlayingMovies: (movies) =>
    set(() => ({
      nowPlayingMovies: movies || [],
      error: null,
    })),

  setLoading: (loading) =>
    set(() => ({
      loading,
    })),

  setError: (error) =>
    set(() => ({
      error,
      loading: false,
    })),

  resetNowPlaying: () =>
    set(() => ({
      nowPlayingMovies: [],
      loading: false,
      error: null,
    })),
  setTrailerId: (id) =>
    set({
      trailerId: id,
    }),
  setTopRatedMovies: (movies) =>
    set(() => ({
      topRatedMovies: movies || [],
      error: null,
    })),
  setPopularMovies: (movies) =>
    set(() => ({
      popularMovies: movies || [],
      error: null,
    })),
  setUpcomingMovies: (movies) =>
    set(() => ({
      upcomingMovies: movies || [],
      error: null,
    })),
}));

export default useNowPlayingStore;
