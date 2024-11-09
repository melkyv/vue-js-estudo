<script setup>
import Profile from "@/components/Profile.vue";

import {ref} from "vue";
const isOpen = ref(true);
</script>

<template>
  <input type="checkbox" v-model="isOpen"> {{ isOpen }}
  <Profile v-if="isOpen === true">
    <h2>Github User Data</h2>

    <template v-slot:footer>
      <footer>
        Direitos reservados &copy 2024 Melky Vinicius
      </footer>
    </template>
  </Profile>
</template>

<style scoped>
h2 {
  font-size: 3rem;
  color: forestgreen;
}
</style>