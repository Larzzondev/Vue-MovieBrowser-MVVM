# 🎬 Vue Movie Browser MVVM

A **modern and performant movie browsing application** built using **Vue 3, TypeScript, Pinia, Vue Router, and Tailwind CSS**. This project follows the **MVVM (Model-View-ViewModel) architecture** to maintain **scalability, maintainability, and separation of concerns**.

## 🚀 Features

- 🔍 Fetch and display **popular movies** using **The Movie Database (TMDb) API**.
- 🎭 **View movie details** (poster, title, and overview).
- ⚡ **Smooth animations** for UI transitions.
- 📱 **Fully responsive UI** with **Tailwind CSS**.
- 🏗️ **MVVM Architecture** for a **clean and scalable** codebase.

---

## 📐 Architecture - MVVM Design Pattern

This project follows the **MVVM (Model-View-ViewModel) pattern** to **separate concerns** and keep the UI and business logic **independent**.

```mermaid
graph TD
  subgraph UI["🎭 UI Layer (View)"]
    MovieList[📜 MovieList.vue]
    MovieCard[🎴 MovieCard.vue]
    DetailView[📄 DetailView.vue]
  end

  subgraph VM["🧠 ViewModel Layer"]
    MovieStore[📦 Pinia Store (movieStore.ts)]
  end

  subgraph Data["📡 Data Layer"]
    API[🌍 TMDb API]
  end

  MovieList -->|Fetches| MovieStore
  DetailView -->|Fetches| MovieStore
  MovieStore -->|Calls API| API
  API -->|Returns JSON| MovieStore