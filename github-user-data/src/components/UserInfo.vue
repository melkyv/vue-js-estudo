<script setup>
defineProps(['login', 'name', 'avatar_url', 'company', 'bio'])
</script>

<template>
  <div id="user-info">
    <img alt="avatar" :src="avatar_url">
    <strong>@ {{ login }}</strong>
    <h1>{{ name }}</h1>
    <h1>{{ company }}</h1>
    <span>{{ bio }}</span>
  </div>
</template>

<style scoped>
#user-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: fill;
}
</style>