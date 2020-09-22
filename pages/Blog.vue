<template>
  <div>
    <banner text="Blog"></banner>
    <div class="container mx-auto mt-32 overflow-hidden">
      <!-- main-article  -->
      <div class="hidden sm:flex  sm:flex-wrap ">
        <header class="w-full px-5 lg:w-6/12 lg:px-0 lg:p-4">
          <img
            src="~/assets/img/blog/blog-1.jpg"
            alt="article"
            class="rounded-lg object-fill w-full"
          />
        </header>
        <footer class="text-white px-5 mt-5 w-full lg:px-0 lg:w-5/12 lg:px-4 lg:p-4 my-auto">
          <p class="text-gray-600 text-md">16 February 2018</p>
          <h2
            class="text-brown-400 font-bold text-2xl text-gray-900 leading-tight"
          >Lorem ipsum dolor sit amet, consectetur adipisc mauris ultrices placerat.</h2>
          <p
            class="text-gray-500 text-md mt-5"
          >Sed aliquam, mi in fermentum aliquam, sem lectus fringilla felis, et faucibus felis turpis ut turpis. Fusce quis arcu aliquet, egestas nunc et, maximus tortor.</p>

          <btn text="Read Article" w- class_names="w-5/12 bg-indigo-500 px-5 py-2 mt-4" />
        </footer>
      </div>
        <!-- all-articles -->
      <div class=" -mx-2">
        <div class="flex flex-wrap px-2 md:mt-16">
          <div
            class="article my-5 w-full md:w-1/2 lg:w-1/3 px-2 flex flex-wrap"
            :key="article"
            v-for="article in 6"
          >
            <header class="w-full px-5 lg:p-4">
              <img
                :src='"~/assets/img/blog/blog-"+article+".jpg"'
                alt="article"
                class="rounded-lg object-fill w-full"
              />
            </header>
            <footer class="text-white px-5 mt-5 w-full my-auto">
              <p class="text-gray-600 text-md">16 February 2018</p>
              <h2
                class="text-brown-400 font-bold text-2xl text-gray-900 leading-tight"
              >Lorem ipsum dolor sit amet, consectetur adipisc mauris ultrices placerat.</h2>
              <p
                class="text-gray-500 text-md mt-5"
              >Sed aliquam, mi in fermentum aliquam, sem lectus fringilla felis, et faucibus felis turpis ut turpis. Fusce quis arcu aliquet, egestas nunc et, maximus tortor.</p>

              <btn text="Read Article" w- class_names="w-5/12 bg-indigo-500 px-5 py-2 mt-4" />
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "~/components/utils/banner";
import heading from "~/components/utils/heading";
import btn from "~/components/utils/button";

export default {
  components: {
    banner,
    heading,
    btn
  }
};
</script>

<style scoped>
</style>