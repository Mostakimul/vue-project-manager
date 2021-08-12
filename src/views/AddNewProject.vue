<template>
  <form @submit.prevent="handleSubmit" class="projectForm">
    <label class="projectForm__label">Title: </label>
    <input v-model="title" type="text" class="projectForm__input" required />
    <label class="projectForm__label">Details:</label>
    <textarea
      v-model="details"
      class="projectForm__textarea"
      required
    ></textarea>
    <button class="projectForm__btn">Add Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.title, this.details);
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      // console.log(project);
      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
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

<style lang="scss">
.projectForm {
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  margin: 2rem auto;

  &__label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: bold;
    margin: 2rem 0 1rem 0;
  }
  &__input {
    padding: 1rem;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  &__textarea {
    border: 1px solid #ddd;
    padding: 1rem;
    width: 100%;
  }
  &__btn {
    display: block;
    margin: 2rem auto 0;
    background: crimson;
    color: #fff;
    padding: 1rem;
    border: 0;
    border-radius: 0.6rem;
    font-size: 1.6rem;
    cursor: pointer;
  }
}
</style>
