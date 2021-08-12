<template>
  <TheNavbar />
  <router-view />
</template>
<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  components: {
    TheNavbar,
  },
};
</script>
<style lang="scss">
#app {
  max-width: 60rem;
  margin: 0 auto;
  color: #555;
}
</style>
