<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div>
    <button class="btn btn-secondary" @click="goToDayBook">goToDayBook</button>
    <button class="btn btn-success">Danger</button>
    <button class="btn btn-primary">Primary</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
