<template>
  <section>
    <div class="flex flex-wrap mt-20">
      <div class="image self-stretch w-full lg:w-1/3 bg-cover bg-no-repeat lg:bg-center"></div>
      <div class="w-full lg:w-2/3 px-5 lg:pt-64 lg:px-16 bg-gray-300">
        <div class="container mx-auto">
          <h4 class="font-bold text-lg my-10 md:text-2xl text-gray-900">Workshops</h4>
          <p
            class="font-bold text-4xl mb-10 md:text-6xl text-gray-900 lg:leading-none"
          >Learn from the most talented people.</p>
          <p class="text-xl font-normal text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ornare rutrum risus a semper. Duis venenatis ultrices tellus vel cursus.
            Nunc tristique varius justo, laoreet tempus ex viverra ut. Curabitur laoreet egestas augue.
          </p>
          <div class="flex flex-wrap my-10 btns">
            <btn class_names="bg-blue-700 w-5/12 tracking-widest text-white" text="more info"/>
            <div class="w-1/12"></div>
            <btn class_names="bg-green-500 w-6/12 tracking-widest text-white" text="buy tickets"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import 'tailwindcss';
.image{
  background-image: url('~assets/img/workshop.jpg');
  min-height: 500px ;
}
</style>

<script>
import btn from "~/components/utils/button"
export default {
  components:{
    btn
  }
}
</script>