<template>
  <nav class="filter">
    <button
      :class="{ active: curFilter === 'all' }"
      @click="updateFilter('all')"
    >
      View all
    </button>
    <button
      :class="{ active: curFilter === 'completed' }"
      @click="updateFilter('completed')"
    >
      Completed
    </button>
    <button
      :class="{ active: curFilter === 'ongoing' }"
      @click="updateFilter('ongoing')"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    curFilter: {
      type: String,
    },
  },
  methods: {
    updateFilter(filterBy) {
      this.$emit('filterChange', filterBy);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  text-align: center;
  & button {
    background: #bbbbbb;
    border: 0;
    border-radius: 1rem;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 1rem;
    padding: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;

    &.active {
      background: #e97c91;
      color: #fff;
    }
  }
}
</style>
