<template>
  <section>
    <FilterTask :curFilter="curFilter" @filterChange="curFilter = $event" />
    <div v-if="projects.length" class="projects">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import FilterTask from '../components/FilterTask.vue';

export default {
  name: 'Home',
  components: {
    SingleProject,
    FilterTask,
  },
  data() {
    return {
      projects: [],
      curFilter: 'all',
    };
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleComplete(id) {
      let res = this.projects.find((project) => {
        return project.id === id;
      });
      res.complete = !res.complete;
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    filteredProjects() {
      if (this.curFilter === 'completed') {
        return this.projects.filter((project) => project.complete);
      }
      if (this.curFilter === 'ongoing') {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
