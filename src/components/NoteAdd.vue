<style scoped>
    .addContainer {
        height: 100vh;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mainInput, q {
        width: 100%;
    }

    button{
        background: transparent;
        color:inherit;
        border: none;
        cursor: pointer;
        padding: 0 0 2px;
        border-bottom: 1px solid #2c3e50;
    }

    button:first-child{
        margin-right: 16px;
    }

    button:hover{
        font-weight: bold;
        border-bottom: 2px solid #2c3e50;
    }

    .addButtonContainer{
        display: flex;
        justify-content: center;
    }

    input {
        border: none;
        border-bottom: 1px solid darkgray;
        padding: 4px;
        outline: none
    }

    .menu-popover-enter,
    .menu-popover-leave-to {
        opacity: 0;
        transform: rotateY(50deg);
    }

    .menu-popover-enter-to,
    .menu-popover-leave {
        opacity: 100%;
        transform: rotateY(0deg);
    }

    .menu-popover-enter-active,
    .menu-popover-leave-active {
        transition: opacity, transform 200ms ease-out;
    }

    .dropdown {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .dropdown > label {
        width: 50%;
        display: flex;
        margin: 16px 0;

    }

    .dropdown > label > input {
        width: 100%;
        margin-left: 8px;
    }

    @media only screen and (min-width: 768px) {
        .addContainer {
            width: 40%;
        }
    }
</style>

<template>
    <div class="addContainer">
        <h1>What did I learn today?</h1>
        <q><input v-model="myNotes" class="mainInput"/></q>
        <transition name="menu-popover">
            <div class="dropdown" v-show="myNotes.length > 0">
                <label>Author: <input v-model="author"/></label>
                <label>Source: <input v-model="book"/></label>
                <div class="addButtonContainer">
                    <button @click="addQuote">Add as quote</button>
                    <button @click="addItem">Add as note</button>
                </div>
            </div>
        </transition>
        <!--        <label>Is it a quote?<input @click="toggleQuote" type="checkbox"></label>-->
        <!--        <button @click="addPrevious">Use previous book: </button>-->
        <!--        <div v-if="errors !== ''">{{errors}}</div>-->
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
                quote: false,
                showAdd: false
            }
        },
        methods: {
            addQuote: function () {
                this.quote = true;
                this.addItem();
            },
            addItem: function () {
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
                            this.resetFields();
                        }
                    }).catch(error => this.errors = error)
                } else this.errors = "Message missing";
                console.log('My notes: ' + this.myNotes);
            },
            addPrevious: function () {
                if (this.$store.getters.getItems && this.$store.getters.getItems.length > 0) {
                    const lastItem = this.$store.getters.getItems;
                    console.log(lastItem[lastItem.length - 1]);
                    console.log(lastItem);
                    this.myNotes = lastItem[lastItem.length - 1].title;
                }
            },
            toggleQuote: function () {
                this.quote = !this.quote;
            },
            resetFields: function () {
                this.myNotes = '',
                    this.author = '',
                    this.book = '',
                    this.errors = '',
                    this.quote = false,
                    this.showAdd = false
            }

        }
    }
</script>

