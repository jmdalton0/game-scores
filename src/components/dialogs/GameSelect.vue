<template>
    <Dialog :header="'Select a Game'">
        <ul>
            <li @click="select('hearts')">
                Hearts
            </li>
            <li @click="select('blackout')">
                Blackout
            </li>
            <li @click="select('spades')">
                Spades
            </li>
        </ul>
    </Dialog>
</template>

<script>
import Dialog from './Dialog.vue';

export default {
    name: 'GameSelectComponent',
    components: {
        Dialog,
    },
    methods: {
        select(game) {
            this.$emit('close', game);
            this.show = false;
        }
    }
}
</script>

<style scoped>
ul {
    width: 100%;
}

li {
    font-weight: bold;
    padding: 1rem;
    border-bottom: 1px solid var(--text-light);
    cursor: pointer;
    transition: padding 0.2s ease;
}

li:hover {
    padding-left: 2rem;
}
</style>