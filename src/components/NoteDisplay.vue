<style scoped>
    .noteContainer{
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        padding: 48px;
    }
    .note{
        width: 30%;
        padding: 16px;
    }
    .header{
        display: inline-block;
    }
    label {
        display: flex;
        margin: 16px 0;

    }

    label > input {
        width: 100%;
        margin-left: 8px;
    }
</style>

<template>
    <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
        <div class="header">
            <h2>My notes</h2>
            <label>Search: <input v-model="search"/></label>
        </div>
        <div class="noteContainer">
        <div class="note" v-for="(item, index) in this.$store.getters.getItems" :key="item.id" @mouseover="elementToShow = index" @mouseout="elementToShow = null">
            <template v-if="showItem(item)">
                <Note v-bind:item="item"></Note>
                <button @click="deleteItem(item.id)" v-show="elementToShow === index">Delete</button>
            </template>
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
                elementToShow: null,
                search: ''
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
            },
            showItem: function(item){
                console.log(item);
                const searchTerm = this.search.toLowerCase();
                if(searchTerm.length === 0){
                    return true;
                }
                if(item.book && item.book.toLowerCase().includes(searchTerm)){
                    return true;
                }
                if(item.author && item.author.toLowerCase().includes(searchTerm)){
                    return true;
                }
                if(item.title && item.title.toLowerCase().includes(searchTerm)){
                    return true;
                }
            }
        }
    }
</script>

