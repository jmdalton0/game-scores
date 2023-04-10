<template>
    <div
        v-if="name === ''"
        @click="showAddPlayer = true"
        class="player"
    >
        <fa-icon
            id="plus-icon"
            icon="fa-solid fa-plus"
            size="10x"
            class="btn"
        ></fa-icon>
    </div>

    <div
        v-else
        @click="showAddScore = true"
        class="player"
    >
        <h4>{{ name }}</h4>
        <h5>{{ score }}</h5>
    </div>

    <AddPlayerDialog
        v-if="showAddPlayer"
        @close="addPlayer"
    />

    <AddScoreDialog
        v-if="showAddScore"
        :name="name.split(' ').at(0)"
        @close="addScore"
    />
</template>

<script scoped>
import AddPlayerDialog from './AddPlayerDialog.vue';
import AddScoreDialog from './AddScoreDialog.vue';

export default {
    name: "PlayerComponent",
    components: {
        AddPlayerDialog,
        AddScoreDialog,
    },
    data() {
        return {
            name: '',
            score: 0,
            showAddPlayer: false,
            showAddScore: false,
            removeToast: false,
        }
    },
    emits: ['playerAdded', 'scoreAdded'],
    methods: {
        addPlayer(name) {
            if (name) {
                this.name = name;
            }
            this.showAddPlayer = false;
            this.$emit('playerAdded');
        },
        addScore(score) {
            if (score) {
                this.score += score;
            }
            this.showAddScore = false;
            this.$emit('scoreAdded', score);
        }
    },
    props: {
        id: Number,
    }
}
</script>

<style scoped>
h4 {
    text-align: center;
    margin-bottom: 0.5rem;
}

h5 {
    font-size: 2rem;
    text-align: center;
}

.player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(50% - 0.5rem);
    height: 7rem;
    padding: 0.5rem;
    background-color: var(--prim);
    border-radius: 0.5rem;
}
</style>