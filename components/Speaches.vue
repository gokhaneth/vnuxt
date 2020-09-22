<template>
  <section class="container mx-auto">
    <heading text="We will speak about" />

    <div class="flex flex-wrap">
      <div
        class="speach bg-gray-300 px-5 pt-10 w-full m-5 sm:mx-0 sm:my-5 sm:w-1/2 m-auto lg:w-1/3 relative flex flex-col border-8 border-white"
        :key="index"
        v-for="(speach, index) in all_speaches"
      >
        <h2 class="text-4xl font-bold text-gray-900 leading-none h-32">{{ speach.Speach_name }}</h2>
        <div class="instructor mt-56">
          <p class="text-xl font-extrabold text-gray-900">{{ speach.Instructor_name }}</p>
          <p class="text-lg text-gray-900">{{ speach.Instuctor_job }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "~/components/utils/heading";
import firebase from "firebase";

export default {
  data() {
    return {
      all_speaches: null
    };
  },
  methods: {},
  mounted() {
    var ref = firebase.database().ref(),
      vm = this;

    ref.on(
      "value",
      function(snapshot) {
        vm.all_speaches = snapshot.val().speaches;
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
  },
  components: {
    heading
  }
};
</script>

<style scoped>
.speach {
  height: 520px;
  border-radius: 20px;
  -ms-flex-item-align: stretch;
}
.speach,
.speach * {
  transition: all 0.4s ease-in-out;
  z-index: 999;
}

.speach:hover::after {
  opacity: 1 !important;
}

.speach::after {
  border-radius: 0.5rem;
  position: absolute;
  content: "";
  border: 8px;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#fb3abe),
    to(#f149e3)
  );
  background: linear-gradient(to right, #fb3abe, #f149e3);
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  z-index: -1;
}

.speach:hover p,
.speach:hover h2 {
  color: white !important;
}
</style>