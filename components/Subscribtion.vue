<template>
  <section>
    <div class="container  mx-auto px-5 py-32 bg-cover bg-no-repeat bg-center">
      
      <h2 class="text-2xl sm:text-4xl font-extrabold text-white">Never miss another seminar</h2>
      <p
        class="font-light text-xl text-white leading-tite font-lg sm:leading-smug md:w-8/12 my-10"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare rutrum risus a semper. Duis venenatis ultrices tellus vel cursus. Nunc tristique varius justo, laoreet tempus ex viverra ut. Curabitur laoreet egestas augue.</p>
        <input
          class="bg-transparent w-full md:w-9/12 focus:outline-none focus:outline-none border border-gray-300 rounded-lg px-4 py-4 appearance-none leading-normal"
          type="email"
          placeholder="jane@example.com"
        />
        <div class="md:hidden w-1/12"></div>
        <btn class_names="bg-green-500 text-white mx-auto w-9/12 mt-10 sm:mt-0 sm:mx-0 sm:px-2  sm:w-2/12 text-center" text="subscripe " />
    </div>
  </section>
</template>

<script>
import btn from "~/components/utils/button";

export default {
  components: {
    btn
  }
};
</script>

<style scoped>
section {
  background-image: url("~assets/img/subs-bg.jpg");
}
</style>