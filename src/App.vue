<template>
  <header class="header">
    <h1>Game Scores</h1>

    <fa-icon
      icon="fa-solid fa-bars"
      class="btn fixed right"
      size="6x"
      @click="showGameSelect = true"
    ></fa-icon>

    <GameSelect
      v-if="showGameSelect"
      @close="selectGame"
    ></GameSelect>
  </header>

  <main>
    <h3>{{ game }}</h3>
    <Hearts v-if="game === 'hearts'"/>
  </main>
</template>

<script>
import GameSelect from './components/dialogs/GameSelect.vue';
import Hearts from './components/games/hearts/Hearts.vue';

export default {
  name: 'App',
  components: {
    GameSelect,
    Hearts,
  },
  data() {
    return {
      clear: false,
      game: '',
      showGameSelect: false,
    }
  },
  methods: {
    selectGame(game) {
      this.game = game;
      this.showGameSelect = false;
    }
  }
}
</script>