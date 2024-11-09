<script setup>
import {ref} from "vue";
import {useSearchHistoryStore} from "@/stores/useSearchHistoryStore.js";
//import {searchHistory} from "@/stores/searchHistory.js";

const emit = defineEmits(['formSubmit', 'update:modelValue']);

const searchInput = ref('');

const searchHistory = useSearchHistoryStore();

function handleSubmit(ev) {
  ev.preventDefault();

  //searchHistory.users.unshift(searchInput.value);
  searchHistory.pushToHistory(searchInput.value);
  emit('formSubmit', searchInput.value);
}

function showSearchHistory() {
  alert(`HIstórico de pesquisa:\n ${searchHistory.users.join('\n')}`);
}

// Pode ser usado somente essa função no evento @input
//function updateValue(ev) {
  //emit("update:modelValue", ev.target.value); //Poderia ser tanto 'ev.target.value' quanto 'searchInput.value'.
//}
</script>

<template>
  <form @submit="handleSubmit">
    <input
        type="text"
        v-model="searchInput"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <button>Carregar usuário</button>

    <button type="button" @click="showSearchHistory">Ver histórico</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  gap: 1rem;
}

input {
  background-color: #1c1a1d;
  color: #e5e5e5;
  border: forestgreen solid 3px;
  border-radius: 5px;
  padding: 0.3rem;
}

input:focus {
  outline: none;
}

button {
  background-color: forestgreen;
  color: white;
  border: none;
  border-radius: 5px;
  padding: .5rem .5rem;
  opacity: 1;
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>