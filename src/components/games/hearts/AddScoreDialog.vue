<template>
    <Dialog :header="'Points for ' + name">
        <section>
            <NumberInput v-model="score"/>
            <button @click="add">Add</button>
        </section>
    </Dialog>
</template>

<script scoped>
import Dialog from '../../dialogs/Dialog.vue';
import NumberInput from '../../inputs/NumberInput.vue';

export default {
    name: "AddScoreDialogComponent",
    components: {
        Dialog,
        NumberInput,
    },
    data() {
        return {
            score: 0,
        };
    },
    props: {
        name: String,
    },
    emits: ['close'],
    methods: {
        add() {
            this.$emit('close', this.score);
        }
    },
}
</script>