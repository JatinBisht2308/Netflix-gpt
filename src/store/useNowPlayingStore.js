import { create } from "zustand";

const useNowPlayingStore = create((set) => ({
  // state
  nowPlayingMovies: [],
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
}));

export default useNowPlayingStore;
