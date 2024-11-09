<script>
  export default {
    data() {
      return {
        name: "Melky",
        login: "melkyv",
        bio: "...",
        company: "Acme Inc.",
        avatar_url: "https://avatar.iran.liara.run/public",
        searchInput: ''
      }
    },
    methods: {
      async fetchGithubUser() {
        const res = await fetch(`https://api.github.com/users/${this.searchInput}`);

        const { login, name, bio, company, avatar_url } = await res.json();

        this.login = login;
        this.name = name;
        this.bio = bio;
        this.company = company;
        this.avatar_url = avatar_url;
      }
    }
  }
</script>

<template>
  <h2>Github User Data</h2>
  <input type="text" v-model="searchInput">
  <button v-on:click="fetchGithubUser">Carregar usuário</button>
  <img alt="avatar" v-bind:src="avatar_url">
  <strong>@ {{ login }}</strong>
  <h1>{{ name }}</h1>
  <h2>{{ company }}</h2>
  <span>{{ bio }}</span>
</template>
