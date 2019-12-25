<style scoped>
    .homeContainer{
        display: flex;
        justify-content: center;
        height:100%;
        width:100vw;
    }

</style>

<template>
    <div class="homeContainer">
<!--        <NoteDisplay></NoteDisplay>-->
        <NoteAdd></NoteAdd>
    </div>
</template>

<script>
    import NoteAdd from "../components/NoteAdd";

    export default {
        name: "Home",
        components: {NoteAdd}
    }
</script>
