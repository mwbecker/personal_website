<template>
 <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #271818;
}

nav {
  padding: 30px;
}

nav a {
  color: #292c2e;
}

nav a.router-link-exact-active {
  color: #00008B;
  font-weight: bold;

}

html * {
  font-family: 'Work Sans', sans-serif;
}

</style>

<script>


</script>
