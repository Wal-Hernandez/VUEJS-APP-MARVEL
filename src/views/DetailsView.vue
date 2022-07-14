<template>
  <div class="about">
    <MovieDetails/>
  </div>
</template>
<script>

import MovieDetails from '@/components/MovieDetails.vue'

export default {
  name: 'HomeView',
  components: {
    MovieDetails
  }
}
</script>