<template>
  <div>
    <h1>EDIT Project</h1>
  </div>

  <!-- Form -->
  <form @submit.prevent="handleUpdate" class="projectForm">
    <label class="projectForm__label">Title: </label>
    <input v-model="title" type="text" class="projectForm__input" required />
    <label class="projectForm__label">Details:</label>
    <textarea
      v-model="details"
      class="projectForm__textarea"
      required
    ></textarea>
    <button class="projectForm__btn">Update Task</button>
  </form>
</template>

<script>
export default {
  name: 'EditProject',
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/projects/' + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.title = data.title;
        this.details = data.details;
      });
  },
  methods: {
    handleUpdate() {
      let updatedProject = {
        title: this.title,
        details: this.details,
      };
      // updating
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProject),
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
