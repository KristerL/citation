import Vue from "vue";
import Vuex from "vuex";
import {db} from '../main'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: null,
        inputOpen: false
    },
    getters: {
        getItems: state => {
            return state.items
        },
        getInputOpen: state => {
            return state.inputOpen
        }
    },
    mutations: {
        setItems: state => {
            let items = [];

            db.collection('items').orderBy('created_at').onSnapshot((snapshot => {
                items = [];
                snapshot.forEach(doc => {
                    items.push({id: doc.id, title: doc.data().title, author: doc.data().author, book: doc.data().book, quote: doc.data().quote})
                });

                state.items = items
            }))
        },
        triggerInputOpen: state => {
            console.log("here");
            state.inputOpen = !state.inputOpen;
        }
    },
    actions: {
        setItems: context => {
            context.commit('setItems')
        }
    },
    modules: {}
});
