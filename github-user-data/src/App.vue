<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/search">Search user</RouterLink>
  </nav>
 <RouterView/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  color: forestgreen;
  opacity: 1;
}

a:hover {
  opacity: 0.8;
}

body {
  background-color: #1c1a1d;
  color: #e5e5e5;
}

#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}
</style>