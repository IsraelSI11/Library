<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        search() {
            alert('navigation was prevented.')
        },
    }
})
</script>

<template>
    <input/>
</template>

<style>

</style>