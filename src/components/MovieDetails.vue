<template>
  <div class="container">
    <div class="detailsBox">
      <h1>Aquí los detalles de {{ heroeDetails.name }}</h1>
      <p>{{ heroeDetails.description }}</p>
    </div>
    <div>
      <div v-if="!loading">
        <div>
          <img
            class="mainView"
            v-bind:src="
              heroeDetails.thumbnail.extension
                ? heroeDetails.thumbnail.path +
                  '.' +
                  heroeDetails.thumbnail.extension
                : heroeDetails.thumbnail
            "
          />
        </div>
      </div>
    </div>
    <div class="editBox">
      <EditHeroe />
    </div>
  </div>
</template>
<script>
import EditHeroe from "./EditHeroe";
import { mapState } from "vuex";

export default {
  name: "MovieDetails",
  data() {
    return {
      loading: true,
    };
  },
  components: {
    EditHeroe,
  },
  beforeCreate() {
    let id = this.$route.params.id + "detail-vue";
    let dataDB = JSON.parse(localStorage.getItem(id));
    if (dataDB) {
      console.log("val3");
      this.loading = false;
      this.$store.state.heroeDetails = dataDB;
    }
  },
  async created() {
    let id = this.$route.params.id + "detail-vue";
    let dataDB = JSON.parse(localStorage.getItem(id));
    if (!dataDB) {
      try {
        await this.$store.dispatch("GET_DETAILS", this.$route.params.id);
      } finally {
      }
    } else {
      this.loading = false;
    }
  },

  updated() {
    this.loading = false;
  },
  unmounted() {
    this.$store.state.heroeDetails = [];
  },
  computed: mapState({
    heroeDetails: (state) => state.heroeDetails,
  }),
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.detailsBox {
  width: 50%;
  border: solid;
}

.editBox {
  width: 50%;
  border: solid;
}

.mainView {
  width: 30rem;
}
</style>
