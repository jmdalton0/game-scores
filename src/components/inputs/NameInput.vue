<template>
    <input
        ref="input"
        type="text"
        v-model="name"
        autocomplete="off"
        spellcheck="false"
        maxlength="20"
    >
</template>

<script>
export default {
    name: "NameInputComponent",
    data() {
        return {
            name: '',
        }
    },
    watch: {
        name(v) {
            this.$emit('input', v);
        }
    },
    mounted() {
        this.$refs.input.focus();
    }
}
</script>