<template>
  <div>
    <h1>What did I learn today?</h1>
    <input v-model="myNotes"/><button @click="addNote">Add</button>
    <div v-if="errors !== ''">{{errors}}</div>
    <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
      <h2>My notes</h2>
      <div v-for="item in this.$store.getters.getItems" :key="item.id">
        {{item.title}}<button @click="deleteItem(item.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {db} from "../main";

  export default {
    name: "Display",
    beforeCreate: function(){
      this.$store.dispatch('setItems')
    },
    data:function () {
      return{
        myNotes:'',
        errors: ''
      }
    },
    methods:{
      addNote: function () {
        this.errors = '';

        if (this.myNotes !== '') {
          db.collection('items').add({
            title: this.myNotes,
            created_at: Date.now()
          }).then((response) => {
            if (response) {
              this.myNotes = ''
            }
          }).catch(error => this.errors = error)
        } else this.errors = "Message missing";
        console.log('My notes: ' + this.myNotes);
      },
      deleteItem: function(id){
        if(id){
          db.collection("items").doc(id).delete().then(function () {
            console.log('Document successfully deleted')
          }).catch(function(error){
            this.errors = error
          })
        }else{
          this.errors = 'Cannot delete';
        }
      }
    }
  }
</script>

<style scoped>

</style>