<template>
  <h1>Aquí creas tu heroe</h1>
  Nombre: <input type="text" v-model="name" /> Descripcion:
  <input type="text" v-model="description" />
  <div>
    Url de imagen: <input type="text" v-model="url" /> Vista previa:
    <img v-bind:src="checkUrl() && url" />
  </div>
  <button @click="submitEdit">Submit</button>
</template>
<script>
export default {
  name: "EditHeroe",
  data() {
    return {
      name: "",
      description: "",
      url: "",
      predeterminada:
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    }
  },
  methods: {
    checkUrl: function () {
      const regexUrl =
        /^$|((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
      if (regexUrl.test(this.url)) return true;
      else return null;
    },
    submitEdit: function () {
        let dataDB = JSON.parse(localStorage.getItem('heroes-vue'));
        let heroe = dataDB.find(e => e.id === this.$route.params.id);
        heroe = {
        ...heroe,
        name: !!this.name ? this.name : heroe.name,
        description: !!this.description ? this.description : heroe.description,
        thumbnail: !!this.url ? this.url : this.thumbnail,
        }
      this.$store.dispatch('EDIT_HEROE',heroe)
      alert("created")
    }
  },
};
</script>
