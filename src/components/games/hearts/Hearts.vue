<template>
    <div class="game">
        <div class="info">
            <h4><span>Pass</span><span>{{ pass }}</span></h4>
            <h4><span>Remaining Points</span><span>26</span></h4>
        </div>
        <div class="players">
            <div class="player-row">
                <Player
                    :id="0"
                />
                <Player
                    :id="1"
                />
            </div>
            <div class="player-row">
                <Player
                    :id="2"
                />
                <Player
                    :id="3"
                />
            </div>
        </div>
        <button>Next Hand</button>
    </div>
</template>

<script scoped>
import Player from './Player.vue';

export default {
    name: 'HeartsComponent',
    components: {
        Player,
    },
    data() {
        return {
            pass: 'Left',
        }
    },
    methods: {
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