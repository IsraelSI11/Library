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
    <div class="books-container">
        <div class="book">
            <img v-if="imageUrl" :src="imageUrl" :alt="title" />
            <p v-else>Imagen no disponible</p>
            <h2>{{ title }}</h2>
            <p class="author">Author: {{ author }}</p>
            <p class="year">Year: {{ year }}</p>
        </div>
    </div>
</template>

<style scoped>

.books-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center; /* Alinea los libros en el centro */
    padding: 2em;
}

.book {
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    padding: 1.5em;
    width: 15em;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    flex: 1 1 calc(20% - 2em); /* Responsivo para ajustarse a 5 columnas */
}

.book:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.book img {
    min-height: 15em;
    max-width: 100%;
    height: auto;
    margin-bottom: 1em;
    border-radius: 4px;
}

h2 {
    font-size: 1.2em;
    margin: 0.5em 0;
    color: #333;
}

.author, .year {
    font-size: 0.9em;
    color: #777;
}

</style>