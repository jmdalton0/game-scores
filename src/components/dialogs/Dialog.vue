<template>
    <div class="dialog">
        <div class="header">
            <h1>{{ header }}</h1>
            <fa-icon
                icon="fa-solid fa-xmark"
                class="btn fixed right"
                size="6x"
                @click="$emit('close')"
            ></fa-icon>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DialogComponent",
    props: {
        header: String,
    },
}
</script>

<style>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--prim);
}
</style>