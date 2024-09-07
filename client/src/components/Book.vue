<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    // type inference enabled
    props: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        imageUrl: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: Number, required: true }
    },
    methods: {
        notify() {
            alert('navigation was prevented.')
        },
        inspect() {
            console.log('Inspecting book', this.id)
        }
    }
})
</script>

<template>
    <div class="book">
        <img :src="imageUrl" :alt="title" />
        <h2>{{ title }}</h2>
        <p>Author: {{ author }}</p>
        <p>Year: {{ year }}</p>
        <div id="button-container">
            <button @click="inspect">Visualizar</button>
        </div>
    </div>
</template>

<style>
.book {
    margin: 1em;
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 1em;
    text-align: left;
}

#button-container {
    text-align: center;
}
</style>