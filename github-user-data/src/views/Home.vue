<script setup>
//import {searchHistory} from "@/stores/searchHistory.js";

import {useSearchHistoryStore} from "@/stores/useSearchHistoryStore.js";

const searchHistory = useSearchHistoryStore();
</script>

<template>
  <h1>Welcome</h1>
  <p>This is the homepage!</p>

  <section>
    <h2>Histórico de Pesquisa:</h2>
    <p v-for="user of searchHistory.users">
      {{user}}
    </p>
  </section>
</template>

<style scoped>
p {
  text-align: center;
  margin-top: 0.5rem;
}
</style>
