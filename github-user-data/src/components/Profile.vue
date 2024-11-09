<script setup>
import {computed, onMounted, onUnmounted, onUpdated, reactive, ref} from "vue";
import UserInfo from "@/components/UserInfo.vue";
import Repository from "@/components/Repository.vue";
import Form from "@/components/Form.vue";

const userName = ref('');

const state = reactive({
  name: "",
  login: "",
  bio: "",
  company: "",
  avatar_url: "",
  repos: []
})

async function fetchGithubUser(searchInput) {
  const res = await fetch(`https://api.github.com/users/${searchInput}`);

  const { login, name, bio, company, avatar_url } = await res.json();

  state.login = login;
  state.name = name;
  state.bio = bio;
  state.company = company;
  state.avatar_url = avatar_url;

  await fetchUserRepositories(login);
}

async function fetchUserRepositories(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  state.repos = await res.json();
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
      ? `${state.name} possui ${state.repos.length} repositórios públicos`
      : `${state.name} não possui nenhum repositório público`
})

onMounted(() => {
  console.log("O componente foi montado");
})

onUpdated(() => {
  console.log("O componente foi atualizado");
})

onUnmounted(() => {
  console.log("O componente foi desmontado");
})
</script>

<template>
  <slot></slot>
  <p>Pesquisando por: <strong>https://api.github.com/users/{{ userName }}</strong></p>
  <Form @formSubmit="fetchGithubUser" v-model="userName"/>

  <UserInfo v-if="state.login !== ''" :avatar_url="state.avatar_url" :bio="state.bio" :company="state.company" :login="state.login" :name="state.name"/>

  <h4 v-if="state.login !== '' ">
    {{ reposCountMessage }}
  </h4>
  <section v-if="state.repos.length > 0">
    <Repository v-for="repo of state.repos" :full_name="repo.full_name" :description="repo.description" :html_url="repo.html_url"/>
  </section>

  <slot name="footer"></slot>
</template>

<style scoped>
h4 {
  color: green;
}
</style>