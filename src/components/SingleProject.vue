<template>
  <div class="project">
    <div @click="showDetails = !showDetails" class="project__title">
      <h3>{{ project.title }}</h3>
    </div>
    <transition name="fade">
      <div v-if="showDetails" class="project__details">
        <p>{{ project.details }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
};
</script>

<style lang="scss">
.project {
  margin: 2rem auto;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 0.4rem solid crimson;

  &__title {
    cursor: pointer;
  }
  // &__details {
  // }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
