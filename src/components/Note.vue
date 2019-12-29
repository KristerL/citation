<template>
    <div v-if="item.quote">
        <blockquote>“{{item.title}}”</blockquote>
        <p v-if="item.author">- {{item.author}}</p>
    </div>
    <div v-else>
        <p>{{item.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "Note",
        props: ["item"],
    }
</script>

<style scoped>
    blockquote{
        font-style: italic;
    }
</style>