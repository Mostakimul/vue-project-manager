<template>
  <section>
    <div v-if="projects.length" class="projects">
      <div v-for="project in projects" :key="project.id">
        <h3 class="projects__title">{{ project.title }}</h3>
        <p class="projects__details">{{ project.details }}</p>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
