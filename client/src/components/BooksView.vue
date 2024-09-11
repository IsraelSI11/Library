<script lang="ts">
import { defineComponent } from 'vue'
import Search from './Search.vue';
import Book from './Book.vue';
import axios from 'axios';

interface BookData {
    id: string;
    title: string;
    imageUrl: string;
    author: string;
    year: number;
}

export default defineComponent({
    // type inference enabled
    components: {
        Search,
        Book
    },
    data() {
        return { books: [] as BookData[] }
    },
    methods: {
        searchBooks(title: String) {
            this.books = [];
            axios.get(`http://localhost:3000/?title=${title}`)
                .then(response => {
                    for (const book of response.data.hits.hits) {
                        book.id = book['_id'];
                        book.title = book['_source'].title.replace('"','');
                        book.imageUrl = book['_source'].url.original;
                        book.author = book['_source'].author.replace('"','');
                        book.year = parseInt(book['_source'].year.replace('"',''));
                        this.books.push(book);
                    }
                });
        }
    },
    created() {
        this.searchBooks('');
    }
})
</script>

<template>
    <div class="book-view">
        <Search :onValueChange="searchBooks" />
        <div class="book-list" v-if="books">
            <Book v-for="book in books" :key="book.id.toString()" :id="book.id.toString()" :title="book.title" :imageUrl="book.imageUrl"
                :author="book.author" :year="book.year" />
        </div>
    </div>
</template>

<style>

.book-view {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}

.book-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 1em;
}

</style>