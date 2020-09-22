import firebase from "firebase";
import Vue from 'vue'

let user = firebase.auth().currentUser;

if (user === null){
    let vm = new Vue({
        beforeMount (){
            this.$router.push({
                path: '/login'
            })
        }

    })
}