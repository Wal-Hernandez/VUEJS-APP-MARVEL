import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    heroes: [],
    heroeDetails: [],
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
    LOAD_HEROES: (state,payload) => {
      state.heroes = payload;
      localStorage.setItem('heroes-vue', JSON.stringify(payload))
  },
    LOAD_HEROE_DETAILS: (state, payload) => {
      state.heroeDetails = payload[0]
      localStorage.setItem(`${payload[0].id}detail-vue`, JSON.stringify(state.heroeDetails))
    },
    PUSH_HEROE: (state, payload) => {
    state.heroes.unshift(payload);
    localStorage.setItem('heroes-vue', JSON.stringify(state.heroes))
    return true  
    },
    SEARCH_HEROE:(state,payload) => {state.heroes = payload},
    UPDATE_HEROE:(state,payload) => {state.heroes = payload},
  },
  actions: {
    GET_HEROES: (state) => {
      fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d401b44dea1498441c907f9720457f43&hash=3b6d145bf3beaa3f11e22968f65bf749`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          state.commit("LOAD_HEROES", response.data.results);
          return true;
        });
    },
    GET_DETAILS: function(state, payload){
      
      let detailExist = JSON.parse(localStorage.getItem(`${payload}detail-vue`));
      console.log(detailExist)
      if(!detailExist){
        console.log(12346)
        if(payload[0] === "L"){
          let dataDB = JSON.parse(localStorage.getItem('heroes-vue'));
          let heroeDB = dataDB.find(e => e.id === payload);
            console.log(heroeDB)
            if(heroeDB) state.commit("LOAD_HEROE_DETAILS",[heroeDB]);
         
          return }
        else{
        fetch(
          `https://gateway.marvel.com/v1/public/characters/${payload}?ts=1&apikey=d401b44dea1498441c907f9720457f43&hash=3b6d145bf3beaa3f11e22968f65bf749`
        )
          .then((res) => {
            console.log(res, "FETCH");
            return res.json();
          })
          .then((response) => {
            state.commit("LOAD_HEROE_DETAILS", response.data.results);
            return true;
          });
        }
      }else{
        this.state.heroeDetails = detailExist
      }
  
    },
    PUT_HEROE: function(state, payload){
      console.log(payload)
      const found = this.state.heroes.findIndex((element) => element.id == payload.id);
      
      if (found !== -1){
        console.log(2)
        this.state.heroes[found] = payload  
        console.log(22)
        this.state.heroeDetails = payload
        localStorage.setItem('heroes-vue', JSON.stringify(this.state.heroes))
        localStorage.setItem(`${payload.id}detail-vue`, JSON.stringify(payload))
      }else {
        console.log(3)
      state.commit("PUSH_HEROE", payload);}
      return true;
    },
    SEARCH_HEROE: function(state, payload){
      const allHeroes = JSON.parse(localStorage.getItem('heroes-vue'))
      const search = allHeroes.filter((element) => element.name.toLowerCase().includes(payload.toLowerCase()));
      state.commit("SEARCH_HEROE", search);
      return true;
    },
  },
});
