<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchHeroe/>
    <MovieCardsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCardsList from '@/components/MovieCardsList.vue'
import SearchHeroe from '@/components/SearchHeroe.vue'
export default {
  name: 'HomeView',
  components: {
    MovieCardsList,
    SearchHeroe
  }
}
</script>

