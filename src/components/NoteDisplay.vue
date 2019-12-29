<style scoped>
    .noteContainer{
        display: flex;
        justify-content: center;
        padding: 48px;
    }
    .note{
        max-width: 30%;
        padding: 32px;
    }
</style>

<template>
    <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
        <h2>My notes</h2>
        <div class="noteContainer">
        <div class="note" v-for="(item, index) in this.$store.getters.getItems" :key="item.id" @mouseover="elementToShow = index" @mouseout="elementToShow = null">
            <Note v-bind:item="item"></Note>
            <button @click="deleteItem(item.id)" v-show="elementToShow === index">Delete</button>
        </div>
            </div>
    </div>
    <div v-else>
        <h1>No notes found</h1>
    </div>
</template>

<script>
    import {db} from "../main";
    import Note from "./Note";


    export default {
        name: "NoteDisplay",
        components: {Note},
        data: function(){
            return{
                errors: '',
                elementToShow: null
            }
        },
        methods: {
            deleteItem: function (id) {
                if (id) {
                    db.collection("items").doc(id).delete().then(function () {
                        console.log('Document successfully deleted')
                    }).catch(function (error) {
                        this.errors = error
                    })
                } else {
                    this.errors = 'Cannot delete';
                }
            }
        }
    }
</script>

