<template>
  <div>
    <h1>Aquí creas tu heroe</h1>
    Nombre: <input type="text" v-model="name" /> Descripcion:
    <input type="text" v-model="description" />
    <div>
      Url de imagen: <input type="text" v-model="url" /> Vista previa:
      <img v-bind:src="checkUrl() && url" />
    </div>
    <button @click="submitHandle">Submit</button>
  </div>
</template>
<script>
export default {
  name: "CreateHeroe",
  data() {
    return {
      name: "",
      description: "",
      url: "",
      predeterminada:
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    };
  },
  methods: {
    checkUrl: function () {
      const regexUrl =
        /^$|((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i;
      if (this.url === "") return null;
      if (regexUrl.test(this.url)) return true;
      else return null;
    },
    submitHandle: function () {
      if (!!this.name === false) {
        alert("Completar Nombre");
        return;
      } else if (!!this.description === false) {
        alert("Completar Descripcion");
        return;
      }
      this.$store.dispatch("PUT_HEROE", {
        id: "L" + this.name,
        name: this.name,
        description: this.description,
        thumbnail: this.checkUrl() ? this.url : this.predeterminada,
      });
      alert("created");
    },
  },
};
</script>
