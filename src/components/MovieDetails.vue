<template><div><div>
<h1>Aquí los detalles de {{heroeDetails.name}}</h1>
<p>{{heroeDetails.description}}</p>
</div>
<div>
Aquí editas los detalles
<h1>Aquí creas tu heroe</h1>
  Nombre: <input type="text" v-model="name" /> Descripcion:
  <input type="text" v-model="description" />
  <div>
    Url de imagen: <input type="text" v-model="url" /> Vista previa:
    <img v-bind:src="checkUrl() && url" />
  </div>
  <button @click="submitEdit">Submit</button>
</div>

</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MovieDetails',
data() {
  return {
  name: "",
  description: "",
  url: "",
  predeterminada:
  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    }},
  beforeCreate() { 
     this.$store.dispatch('GET_DETAILS',this.$route.params.id)  
  },
  unmounted(){
  this.$store.state.heroeDetails = [];},
  computed: mapState({
  heroeDetails: state => state.heroeDetails,
  }),  
  methods:{
  pae: ()=>{
  console.log(this.heroeDetails)}
  }
}
</script>