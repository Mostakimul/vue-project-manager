<template>
  <nav class="nav">
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddNewProject' }">Add new project</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="scss">
.nav {
  text-align: center;
  margin: 4rem auto;

  & a {
    display: inline-block;
    text-decoration: none;
    margin: 0 1rem;
    color: #999;
    font-size: 1.8rem;
  }
}
a.router-link-active {
  border-bottom: 2px solid crimson;
  padding-bottom: 0.4rem;
}
</style>
