<template>
    <div
        v-if="exists"
        :class="{ show: show }"
        class="toast">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "ToastComponent",
    data() {
        return {
            exists: true,
            show: false,
        }
    },
    props: {
        message: String,
        duration: Number,
    },
    mounted() {
        setTimeout(() => {
            this.show = true;
            setTimeout(() => {
                this.show = false;
                setTimeout(() => {
                    this.exists = false;
                }, 500);
            }, this.duration);
        }, 200);
    }
}
</script>

<style>
.toast {
    position: fixed;
    bottom: 1rem;
    left: 0;
    text-align: center;
    width: calc(100% - 2rem);
    margin: 0 1rem;
    padding: 1rem;
    background-color: var(--prim-dark);
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 1s ease;
}

.show {
    opacity: 1;
}
</style>