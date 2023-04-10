<template>
    <div class="game">
        <div class="info">
            <h4><span>Pass</span><span>{{ pass }}</span></h4>
            <h4><span>Remaining Points</span><span>{{ remainingPoints }}</span></h4>
        </div>
        <div class="players">
            <div class="player-row">
                <Player
                    :id="0"
                    @playerAdded="playerAdded"
                    @scoreAdded="scoreAdded"
                />
                <Player
                    :id="1"
                    @playerAdded="playerAdded"
                    @scoreAdded="scoreAdded"
                />
            </div>
            <div class="player-row">
                <Player
                    :id="2"
                    @playerAdded="playerAdded"
                    @scoreAdded="scoreAdded"
                />
                <Player
                    :id="3"
                    @playerAdded="playerAdded"
                    @scoreAdded="scoreAdded"
                />
            </div>
        </div>
        <button
            :disabled="remainingPoints != 0"
            @click="nextHand"
        >Next Hand</button>
        <Toast
            v-if="showAddPlayerToast"
            message="Tap or click a plus to add a player."
            :duration="5000"
        ></Toast>
        <Toast
            v-if="showAddScoreToast"
            message="Tap or click a player to add points."
            :duration="5000"
        ></Toast>
    </div>
</template>

<script scoped>
import Player from './Player.vue';
import Toast from './../../dialogs/Toast.vue';

export default {
    name: 'HeartsComponent',
    components: {
        Player,
        Toast,
    },
    data() {
        return {
            pass: 'Left',
            remainingPoints: 26,
            showAddPlayerToast: false,
            showAddScoreToast: false,
        }
    },
    methods: {
        playerAdded() {
            this.showAddScoreToast = true;
        },
        scoreAdded(score) {
            console.log(score);
            this.remainingPoints -= score;
        },
        nextHand() {
            this.remainingPoints = 26;
            switch (this.pass) {
                case "Left":
                    this.pass = "Right";
                    break;
                case "Right":
                    this.pass = "Across";
                    break;
                case "Across":
                    this.pass = "Hold";
                    break;
                case "Hold":
                    this.pass = "Left";
                    break;
                default:
                    this.pass = "Left";
                    break;
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.showAddPlayerToast = true;
        }, 500);
    }
}
</script>

<style>
h4 {
    display: flex;
    justify-content: space-between;
}

.info {
    padding: 0.5rem 1rem;
    background-color: var(--prim);
    border-radius: 0.5rem;
}

.player-row {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
}
</style>