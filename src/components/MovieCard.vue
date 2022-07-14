<template>
<div class="card">
<div class="buttons">

<button class="button1" @click="editHeroe" >EDITAR</button>
<button class="button2" @click="deleteHeroe(index)">ELIMINAR</button>
</div>
<router-link :to="{name:'detail',params:{id: id}}" >        
<img v-bind:src="thumbnail" class="thumbnail"/>
<h1>{{title}}</h1>
</router-link>
</div>
</template>

<script>
export default {
  props: ['title','id','thumbnail','index'],
  created(){
  
  },
  methods:{
  
  deleteHeroe: function(index){
  this.$store.state.heroes.splice(index,1);
  },
  editHeroe: function(){
  },


  },
   
  

}
</script>

<style scoped>
a{
text-decoration: none;
}
.card{
background-color: blue;
margin: 3rem;
width: 15rem;
border-radius:2.5%
}
.card h1{
font-size: 1.3rem;
color: red;
}
.thumbnail{
width: 15rem;
height: 15rem
}
.buttons{
width: 100%}
.button1{
width: 50%
}
.button2{
width: 50%
}
</style>