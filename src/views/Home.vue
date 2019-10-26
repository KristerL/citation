<style scoped>
    .homeContainer{
        display: flex;
        justify-content: space-between;
        height:100%;
        width:100vw;
    }

</style>

<template>
    <div class="homeContainer">
        <NoteDisplay></NoteDisplay>
        <NoteAdd></NoteAdd>
    </div>
</template>

<script>
    import NoteDisplay from "../components/NoteDisplay";
    import NoteAdd from "../components/NoteAdd";

    export default {
        name: "Home",
        components: {NoteAdd, NoteDisplay}
    }
</script>
