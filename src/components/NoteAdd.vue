<style scoped>
    .addContainer{
        width: 30%;
        border-left: 1px solid #2c3e50;
        height:100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<template>
    <div class="addContainer">
        <h1>What did I learn today?</h1>
        <label>Note: <input v-model="myNotes"/></label>
        <label>Author: <input v-model="author"/></label>
        <label>Book: <input v-model="book"/></label>
        <label>Is it a quote?<input @click="toggleQuote" type="checkbox"></label>
        <button @click="addNote">Add</button>
        <button @click="addPrevious">Use previous book: </button>
        <div v-if="errors !== ''">{{errors}}</div>
    </div>
</template>

<script>
    import {db} from "../main";

    export default {
        name: "NoteAdd",
        beforeCreate: function () {
            this.$store.dispatch('setItems')
        },
        data: function () {
            return {
                myNotes: '',
                author: '',
                book: '',
                errors: '',
                quote: false
            }
        },
        methods: {
            addNote: function () {
                this.errors = '';

                if (this.myNotes !== '') {
                    db.collection('items').add({
                        title: this.myNotes,
                        created_at: Date.now(),
                        author: this.author,
                        book: this.book,
                        quote: this.quote
                    }).then((response) => {
                        if (response) {
                            this.myNotes = ''
                        }
                    }).catch(error => this.errors = error)
                } else this.errors = "Message missing";
                console.log('My notes: ' + this.myNotes);
            },
            addPrevious: function () {
                if(this.$store.getters.getItems && this.$store.getters.getItems.length > 0){
                    const lastItem = this.$store.getters.getItems;
                    console.log(lastItem[lastItem.length -1]);
                    console.log(lastItem);
                    this.myNotes = lastItem[lastItem.length -1].title;
                }
            },
            toggleQuote: function (){
                this.quote = !this.quote;
            }

        }
    }
</script>

