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
        inspect() {
            console.log('Inspecting book', this.id)
        }
    }
})
</script>

<template>
    <div class="book">
        <img v-if="imageUrl" :src="imageUrl" :alt="title" />
        <p v-else>Imagen no disponible</p>
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
    flex: 1 1 calc(20% - 2em); /* Ajusta para ser responsivo y manejar el espacio del gap */
    box-sizing: border-box;
    text-align: left;
    padding: 1em;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
}

#button-container {
    text-align: center;
    margin-top: 1em;
}
</style>