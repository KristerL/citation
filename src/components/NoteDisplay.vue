<style scoped>
    .noteContainer{
        width:70%;
        height: 100vh;
    }
</style>

<template>
    <div class="noteContainer" v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
        <h2>My notes</h2>
        <div v-for="item in this.$store.getters.getItems" :key="item.id">
            {{item.title}}
            <button @click="deleteItem(item.id)">Delete</button>
        </div>
    </div>
</template>

<script>
    import {db} from "../main";


    export default {
        name: "NoteDisplay",
        data: function(){
            return{
                errors: ''
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
            }}

    }
</script>

