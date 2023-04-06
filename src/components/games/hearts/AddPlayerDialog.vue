<template>
    <Dialog :header="'Add a Player'">
        <section>
            <NameInput v-model="name"/>
            <button @click="add">Add</button>
        </section>
    </Dialog>
</template>

<script scoped>
import Dialog from '../../dialogs/Dialog.vue';
import NameInput from '../../inputs/NameInput.vue';

export default {
    name: "AddPlayerDialogComponent",
    components: {
        Dialog,
        NameInput,
    },
    data() {
        return {
            name: '',
        }
    },
    methods: {
        add() {
            this.$emit('close', this.name);
        }
    }
}
</script>

<style scoped>
section {
    padding: 1rem;
}
</style>