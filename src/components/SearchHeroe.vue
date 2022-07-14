<template>
  <div>
    <input type="text" v-model="text" />
    <button @click="searchInput">BUSCAR</button>
  </div>
</template>

<script>
export default {
  name: "SearchHeroe",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    searchInput: function () {
      this.$store.dispatch("SEARCH_HEROE", this.text);
    },
  },
};
</script>
