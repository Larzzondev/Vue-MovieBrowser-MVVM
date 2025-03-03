<template>
    <router-link :to="movie?.id ? `/movie/${movie.id}` : '#'" class="group">
      <div class="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          v-if="movie?.poster_path" 
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" 
          class="w-full h-[400px] object-cover transition-opacity duration-300 group-hover:opacity-80"
        >
        <div class="p-3 bg-gray-800 text-white text-center">
          <h3 class="text-lg font-bold truncate">{{ movie?.title || 'No Title' }}</h3>
        </div>
      </div>
    </router-link>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from "vue";
  
  interface Movie {
    id: number;
    title: string;
    poster_path: string;
  }
  
  defineProps({
    movie: {
      type: Object as PropType<Movie>,
      required: true
    }
  });
  </script>