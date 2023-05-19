<template>
  <header class="header">
    <label for="buscador">Pokemon Name:</label>
    <input
      @keyup.enter="buscarPokemon"
      id="buscador"
      type="text"
      v-model="pokemonID"
      placeholder="Search Pokemon!"
    />
  </header>

  <main v-if="Object.entries(pokemonData).length > 0" class="main">
    <section class="tarjetaPokemon">
      <div class="imagenPokemon">
        <h1 class="nombrePokemon">{{ pokemonData.name }}</h1>
        <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
      </div>
      <ul class="tipo">
        <h2>Tipo:</h2>
        <li
          v-for="(tipo, index) in pokemonData.types"
          :key="index"
          :class="tipo.type.name"
        >
          <span>{{ tipo.type.name }}</span>
        </li>
      </ul>
      <ul class="stats">
        <h2>Estadísticas:</h2>
        <li v-for="(estadistica, index) in pokemonData.stats" :key="index">
          <span>{{ estadistica.stat.name }} = {{ estadistica.base_stat }}</span>
        </li>
      </ul>
    </section>
  </main>
  <footer>
    <ul>
      <li v-for="(element, index) in printPokemons" :key="index">
        {{ element.sprites.front_default }}
      </li>
    </ul>
  </footer>
</template>

<script>
import { pokeapi } from "@/API/pokeapi.js";

export default {
  name: "App",

  data() {
    return {
      pokemons: [],
      printPokemons: [],
      pokemonData: {},
      pokemonID: "",
      url: "",
    };
  },

  methods: {
    async getAllPokemons() {
      try {
        const getPokemons = await fetch(`${pokeapi}`);
        const pokes = await getPokemons.json();

        pokes.results.forEach((pokemon) => this.pokemons.push(pokemon));
        // console.log(this.pokemons);
        for (let pokemon of this.pokemons) {
          let response = await fetch(`${pokemon.url}`);
          let poke = await response.json();

          this.printPokemons.push(poke);
        }
        console.log(this.printPokemons);
      } catch (error) {
        alert("Error al cargar pokemons");
      }
    },

    async seekPokemon() {},
    /*     async buscarPokemon() {
      try {
        const encontrarPokemon = await fetch(`${pokeapi}${this.pokemonID}`);
        const pokemon = await encontrarPokemon.json();
        this.pokemonData = pokemon;
        console.log(pokemon);
        return pokemon;
      } catch (error) {
        console.log(error);
        alert(`Pokemon no encontrado. Error: ${error}`);
      }
    }, */
  },
  mounted() {
    this.getAllPokemons();
  },
};
</script>

<style lang="scss"></style>
