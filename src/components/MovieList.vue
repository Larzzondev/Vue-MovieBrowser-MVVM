<template>
    <div class="p-5">
      <h1 class="text-3xl font-bold mb-6 text-center">Popular Movies</h1>
      <transition-group name="fade">
        <template v-if="movies.length > 0">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
          </div>
        </template>
        <template v-else>
          <p class="text-center text-gray-400">Loading movies...</p>
        </template>
      </transition-group>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, computed } from "vue";
  import { useMovieStore } from "../store/movieStore";
  import MovieCard from "../components/MovieCard.vue";
  
  const store = useMovieStore();
  
  onMounted(() => {
    store.fetchMovies();
  });
  
  const movies = computed(() => store.movies);
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>