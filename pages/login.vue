<template>
  <div class="container mx-auto pt-24">
    <div class="login border border-black p-10 mx-auto rounded-lg flex flex-wrap">
      <h2
        v-if="signInStatus"
        class="text-center w-full uppercase text-2xl font-extrabold mb-4"
      >sign in</h2>
      <h2
        v-if="!signInStatus"
        class="text-center w-full uppercase text-2xl font-extrabold mb-4"
      >sign up</h2>

      <div class="container mx-auto">
        <div class="form flex flex-wrap">
          <div class="input mb-2 w-1/2 m-0 inline-block" v-if="!signInStatus">
            <label for="name" class="text-xl font-bold">Name</label>
            <input
              class="bg-white w-5/6 block focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="name"
              name="name"
              v-model="name"
              autocomplete="off"
              placeholder="Mohammed Ayman"
            />
          </div>

          <div class="input mb-2 w-1/2 m-0 inline-block" v-if="!signInStatus">
            <label for="img" class="text-xl font-bold">Image</label>
            <input
              class="bg-white w-5/6 block focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="url"
              name="img"
              v-model="img"
              autocomplete="off"
              placeholder="Enter Image url"
            />
          </div>

          <div class="input mb-2 w-1/2 m-0 inline-block">
            <label for="email" class="text-xl font-bold">Email</label>
            <input
              class="bg-white w-5/6 block focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="email"
              name="email"
              v-model="email"
              placeholder="jane@example.com"
            />
          </div>

          <div class="input mb-2 w-1/2 m-0 inline-block">
            <label for="password" class="text-xl font-bold">password</label>
            <input
              class="bg-white w-5/6 block focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="password"
              name="password"
              v-model="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      <button
        @click="signIn"
        v-if="signInStatus"
        class="mt-4 w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
      >sign in</button>
      <button
        @click="signUp"
        v-if="!signInStatus"
        class="mt-4 w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
      >sign up</button>

      <br />
      <button
        class="text-blue-500 focus:outline-none focus:text-blue-700 hover:text-blue-700 text-center block w-full"
        @click="signInStatus = !signInStatus"
      >
        <span v-if="!signInStatus">You have account already</span>
        <span v-if="signInStatus">Create an account already</span>
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      signInStatus: false,
      name: null,
      img: null,
      email: null,
      password: null
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        })
        .then(res => {
            this.$store.commit('assignUser', {name: res.user.displayName, img: res.user.photoURL, email: res.user.email})

            this.$router.push({
                path: '/'
            })
        });
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        })
        .then(() => {
          let user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: this.name,
            photoURL: this.img
          });

         this.$store.commit('assignUser', {name: this.name, img: this.img, email: this.email})

            this.$router.push({
                path: '/'
            })
        });
    },
    update() {
      let user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: this.name,
        photoURL: this.img
      });
    },
    updatePassword() {
      let user = firebase.auth().currentUser;
      var newPassword = getASecureRandomPassword();

      user
        .updatePassword(newPassword)
        .then(function() {
          // Update successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    },
    resetEmail() {
      var auth = firebase.auth();
      var emailAddress = "user@example.com";

      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          // Email sent.
        })
        .catch(function(error) {
          // An error happened.
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  }
};
</script>