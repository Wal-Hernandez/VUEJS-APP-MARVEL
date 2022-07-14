<template>
<div class="containerEdit">
<div>
  <h1>Aquí editas tu heroe</h1></div>
  <div>Nombre: <input type="text" v-model="name" /></div>
  <div> Descripcion:
  <input type="text" v-model="description" /> </div>
  <div>
    Url de imagen: <input type="text" v-model="url" /> Vista previa:
    <div><img class="previewImg" v-bind:src="checkUrl() && url" /></div>
  </div>
  <div>
  <button @click="submitEdit">Submit</button>
  </div>
  </div>
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
   
        let heroe = dataDB.find(e =>{
        if(e.id[0] === "L"){ 
        return e.id === this.$route.params.id
        }else{
         return e.id === parseInt(this.$route.params.id);
        }
        })
        heroe = {
        ...heroe,
        name: !!this.name ? this.name : heroe.name,
        description: !!this.description ? this.description : heroe.description,
        thumbnail: !!this.url ? this.url : heroe.thumbnail,
        }
          console.log("2")
      this.$store.dispatch('PUT_HEROE',heroe)
    
      alert("updated")
    }
  },
};
</script>
<style scoped>
.containerEdit{
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 100%;

}
.previewImg{
width: 80%

}
</style>
