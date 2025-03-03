<template>
    <div class="p-5 text-center">
      <transition name="fade">
        <div v-if="movie">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" class="w-full md:w-1/2 mx-auto rounded-lg">
          <h1 class="text-2xl font-bold my-3">{{ movie?.title }}</h1>
          <p class="text-gray-400">{{ movie?.overview }}</p>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useMovieStore } from "../store/movieStore";
  import { onMounted, computed } from "vue";
  import { useRoute } from "vue-router";
  
  const store = useMovieStore();
  const route = useRoute();
  const movieId = Number(route.params.id);
  
  onMounted(() => {
    store.fetchMovieDetails(movieId);
  });
  
  const movie = computed(() => store.selectedMovie);
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>