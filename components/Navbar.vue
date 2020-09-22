<template>
  <div class="relative">
    <nav class="animated py-5 px-3 sm:p-0 md:pt-4 lg:pl-2 lg:py-5 fadeIn flex items-center flex-wrap absolute z-50 w-full object-top">
      <div class="logo w-3/4 sm:w-full sm:text-center lg:w-1/6">
        <img src="~/assets/img/logo.png" class="sm:inline" alt="logo" />
      </div>

      <button @click="toggle" class="border-gray-400 bg-black w-1/4 py-2 px-1 rounded sm:hidden">
        <span class="text-white">Menu</span>
        <i class="fas fa-bars text-white"></i>
      </button>

      <div
        id="collabse"
        class="block w-11/12 mx-auto mt-5 hidden sm:mt-0 sm:flex flex-wrap sm:w-full sm:mx-auto lg:flex lg:w-5/6"
      >
        <div class="bg-black sm:bg-transparent flex items-center text-center sm:w-full lg:w-9/12">
          <ul class="w-full">
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/"
                active-class="active"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
              >home</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/speakers"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >SPEAKERS</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/Tickets"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >TICKETS</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/Blog"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >BLOG</nuxt-link>
            </li>
            <li class="text-center my-2 sm:inline-block">
              <nuxt-link
                to="/Contact"
                class="p-5 text-white font-black inline-block p-4 uppercase"
                exact
                active-class="active"
              >CONTACT</nuxt-link>
            </li>
          </ul>
        </div>

        <div v-if="this.user.name" class="bg-black pt-5 top-social text-center sm:bg-transparent sm:w-full lg:w-3/12">
          <div class="user flex flex-wrap" >
            <p
              class="rounded-full h-1/5 flex items-center justify-center bg-gray-500 w-1/5 uppercase"
            >{{ (this.user.name).split('')[0] + (this.user.name).split('')[1] }}</p>
            <div class="w-4/5">
              <span class="text-white text-lg">{{ this.user.name }}</span>

              <a href="#" class="mx-2 text-white bg-indigo-700 px-2 py-3">
                <i class="fas fa-search px-2 py-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>

nav {
  background: linear-gradient(to right, #ff1a6b, #2a34d0);
}

.active {
  background-color: rgb(31, 50, 221);
}
#collabse{
  z-index: 999
}
</style>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    toggle() {
      $("#collabse").slideToggle(300);
    }
  }
};
</script>