// utils/constants.js

export const BASE_URL = "https://api.themoviedb.org/3";

export const ENDPOINTS = {
  NOW_PLAYING: "/movie/now_playing",
};

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const DEFAULT_QUERY = "language=en-US&page=1";

// ⚠️ Keep token here for now (not ideal for production)
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTRlZTE1ZGJjMDE0NjQzYzQ4MTA2YjlhNjBmYzQ1MSIsIm5iZiI6MTc3NzY2ODc5Ny44MzIsInN1YiI6IjY5ZjUxMmJkMjA2NThhYTkyMjQ2MGNmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CinaquNk1BxYmTgR1s_-tApiQv1GH-7tDsdNGMNIonk",
  },
};
