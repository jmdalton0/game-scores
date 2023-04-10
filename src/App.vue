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
    <Toast
      v-if="showGameSelectToast"
      message="Tap or click the menu to select a game."
      :duration="5000"
    ></Toast>
  </main>
</template>

<script>
import GameSelect from './components/dialogs/GameSelect.vue';
import Hearts from './components/games/hearts/Hearts.vue';
import Toast from './components/dialogs/Toast.vue';

export default {
  name: 'App',
  components: {
    GameSelect,
    Hearts,
    Toast,
  },
  data() {
    return {
      clear: false,
      game: '',
      showGameSelect: false,
      showGameSelectToast: false,
    }
  },
  methods: {
    selectGame(game) {
      this.game = game;
      this.showGameSelect = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.showGameSelectToast = true;
    }, 500);
  }
}
</script>