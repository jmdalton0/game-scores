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
        <div class="name">
            <h5>{{ name }}</h5>
            <h5>{{ score }}</h5>
        </div>
    </div>

    <AddPlayerDialog
        v-if="showAddPlayer"
        @close="addPlayer"
    />

    <AddScoreDialog
        v-if="showAddScore"
        :name="name"
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
        }
    },
    methods: {
        addPlayer(name) {
            if (name) {
                this.name = name;
            }
            this.showAddPlayer = false;
        },
        addScore(score) {
            if (score) {
                this.score += score;
            }
            this.showAddScore = false;
        }
    },
    props: {
        id: Number,
    }
}
</script>

<style scoped>
h5 {
    font-size: 2rem;
    text-align: center;
}

.player {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(50% - 0.5rem);
    height: 7rem;
    background-color: var(--prim);
    border-radius: 0.5rem;
}
</style>