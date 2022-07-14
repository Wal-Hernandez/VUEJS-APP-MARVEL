<template>
  <div class="hello">
    <div class="container">
      <div v-for="(movie, index) of heroes" :key="movie.id">
        <MovieCard
          :id="movie.id"
          :index="index"
          :title="movie.name"
          :thumbnail="
            movie.thumbnail.extension
              ? movie.thumbnail.path + '.' + movie.thumbnail.extension
              : movie.thumbnail
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import { mapState } from "vuex";
export default {
  name: "CardsList",

  components: {
    MovieCard,
  },
  beforeCreate() {
    let dataDB = JSON.parse(localStorage.getItem("heroes-vue"));
    if (!dataDB) this.$store.dispatch("GET_HEROES");
    else this.$store.state.heroes = dataDB;
    return true;
  },
  beforeMount() {},
  mounted() {},
  computed: mapState({
    heroes: (state) => state.heroes,
  }),
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container {
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
