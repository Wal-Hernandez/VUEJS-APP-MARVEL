<template>
  <div class="about">
    <CreateHeroe/>
  </div>
</template>
<script>

import CreateHeroe from '@/components/CreateHeroe.vue'

export default {
  name: 'HomeView',
  components: {
    CreateHeroe
  }
}
</script>