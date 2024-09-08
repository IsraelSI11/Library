<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        onValueChange: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleInput(event: Event) {
            const input = event.target as HTMLInputElement;
            this.onValueChange(input.value);
        }
    }
})
</script>

<template>
    <div class="search-container">
        <label id="label-search-book" for="search-book">Search books:</label>
        <input id="search-book" name="search-book" type="text" placeholder="Título del libro" @input="handleInput" />
    </div>
</template>

<style>
#label-search-book {
    text-align: left;
    font-size: 1em;
}

.search-container {
    display: flex;
    justify-content: center;
    width: 80%;
    align-items: center;
    gap: 1em;
}

input {
    padding: 0.5em;
    width: 80%;
    font-size: 1em;
    height: 1.4em;
    border-radius: 0.5em;
    border: 1px solid #ccc;
}
</style>