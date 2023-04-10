<template>
    <div>
        <div class="display">
            <button @click="clear" class="clear-btn">C</button>
            {{ value }}
        </div>
        <div class="numbers">
            <div
                v-for="row in new Array(3, 2, 1)"
                :key="row"
                class="number-row"
            >
                <div
                    v-for="col in new Array(0, 1, 2)"
                    :key="(row * 3) - col"
                    @click="add((row * 3) - col)"
                    class="number-col"
                >
                    <p class="number">{{ (row * 3) - col }}</p>
                </div>
            </div>
            <div class="number-row">
                <div
                    @click="positive = false"
                    class="number-col"
                >
                    <p class="number">-</p>
                </div>
                <div
                    @click="add('0')"
                    class="number-col"
                >
                    <p class="number">0</p>
                </div>
                <div
                    @click="positive = true"
                    class="number-col"
                >
                    <p class="number">+</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NumberInputComponent",
    data() {
        return {
            value: '0',
            positive: true,
        }
    },
    props: ['modelValue'],
    emits: ['update:modelValue'],
    watch: {
        modelValue(newModelValue) {
            this.value = newModelValue.toString();
        },
        value() {
            let out = Number(this.value);
            if (!this.positive) {
                out = Number(this.value.slice(1)) * (-1);
            }
            this.$emit('update:modelValue', out);
        },
        positive() {
            if (!this.positive) {
                this.value = '-'.concat(this.value);
            } else if (this.value.length > 1) {
                this.value = this.value.slice(1);
            }
        }
    },
    methods: {
        clear() {
            this.positive = true;
            this.value = '0';
        },
        add(toAdd) {
            if (this.value === '0') {
                this.value = toAdd.toString();
            } else if (this.value.length < 5) {
                this.value = this.value.concat(toAdd.toString());
            }
        },
    }
}
</script>

<style>
.display {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    font-size: 3rem;
    color: var(--text);
    background-color: var(--text-light);
    border-radius: 0.5rem;
}

.clear-btn {
    width: fit-content;
    margin: 0;
    padding: 0 1rem;
    font-size: 2rem;
    color: var(--secondary-dark);
    background-color: var(--disabled);
}

.numbers {
    padding: 0.5rem 1rem;
    background-color: var(--prim-light);
    border-radius: 0.5rem;
}

.number-row {
    display: flex;
    justify-content: center;
}

.number-col {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    margin: 0.5rem;
    background-color: var(--prim-dark);
    border-radius: 50%;
    cursor: pointer;
}

.number-col:hover {
    background-color: var(--secondary);
}

.number {
    text-align: center;
    font-size: 3rem;
}
</style>