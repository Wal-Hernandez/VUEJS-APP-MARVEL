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
    LOAD_HEROE_DETAILS: (state, payload) => (state.heroeDetails = payload[0]),
    PUSH_HEROE: (state, payload) => {
    state.heroes.unshift(payload);
    localStorage.setItem('heroes-vue', JSON.stringify(state.heroes))
    return true  
    },
    SEARCH_HEROE:(state,payload) => {state.heroes = payload},
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
    GET_DETAILS: (state, payload) => {
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
    },
    PUT_HEROE: function(state, payload){
      const found = this.state.heroes.find((element) => element.id === payload.id);
      console.log(found)
      if (found) return false;
      else 
      
      state.commit("PUSH_HEROE", payload);


      return true;
    },
    SEARCH_HEROE: function(state, payload){
      const allHeroes = JSON.parse(localStorage.getItem('heroes-vue'))
      const search = allHeroes.filter((element) => element.name.includes(payload));
      state.commit("SEARCH_HEROE", search);
      return true;
    },
    EDIT_HEROE: function(state, payload){
      for (let i = 0; i < this.state.heroes.length; i++) {
        if(element.id === payload.id){
          element = payload
        }
      }
    }
  },
});
