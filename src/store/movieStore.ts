import { defineStore } from "pinia";
import axios from "axios";

const API_KEY = "bf718d4dd8b23985d9c3edbcfd440a27";
const BASE_URL = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface MovieStoreState {
  movies: Movie[];
  selectedMovie: Movie | null;
}

export const useMovieStore = defineStore("movieStore", {
  state: (): MovieStoreState => ({
    movies: [],
    selectedMovie: null,
  }),
  actions: {
    async fetchMovies() {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        this.movies = response.data.results;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    async fetchMovieDetails(movieId: number) {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        this.selectedMovie = response.data;
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    },
    async searchMovies(query: string) {
      try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        this.movies = response.data.results;
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    },
  },
});