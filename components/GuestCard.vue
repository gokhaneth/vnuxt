<template>
  <div class="guest flex flex-wrap p-2 sm:p-0 my-5">
    <div class="guest-img w-full sm:w-1/3">
      <img
        src="~/assets/img/speakers/guest-1.jpg"
        class="object-cover w-full h-full rounded-lg"
        alt="guest-1"
      />
    </div>
    <section class="w-full sm:w-2/3 guest-card info text-gray-900">
      <header class="guest--name md:ml-3">
        <h2 class="font-extrabold text-4xl sm:text-5xl pt-10">Jessica Doe</h2>
        <span class="font-bold">Former Lead UX Hulu</span>
      </header>
      <div class="guest--info md:ml-3">
        <p
          class="my-8 text-lg"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat dui, tincidunt vitae tortor at, ultrices faucibus mauris. Vestibulum quis auctor risus. Donec fringilla faucibus eros, ut suscipit risus accumsan eu. Sed aliquam, mi in fermentum aliquam, sem lectus fringilla felis, et faucibus felis turpis ut turpis.</p>
        <p
          class="mb-8 text-lg"
        >Fusce quis arcu aliquet, egestas nunc et, maximus tortor. In fermentum pellentesque justo, at sollicitudin felis commodo sed. Integer tempus lorem sem, vitae euismod felis sodales non.</p>
      </div>

      <div class="guest--social flex content-between md:ml-3">
        <a
          href="#"
          class="rounded-full w-8 h-8 text-center text-white"
          style="background-color: #EA4C89"
        >
          <i class="fab fa-dribbble align-middle"></i>
        </a>
        <a
          href="#"
          class="rounded-full w-8 h-8 text-center ml-2 text-white"
          style="background-color: #0057FF"
        >
          <i class="fab fa-behance align-middle"></i>
        </a>
        <a
          href="#"
          class="rounded-full w-8 h-8 text-center ml-2 text-white"
          style="background-color: #4267B2"
        >
          <i class="fab fa-facebook-f align-middle"></i>
        </a>
        <a
          href="#"
          class="rounded-full w-8 h-8 text-center ml-2 text-white"
          style="background-color: #0077B5"
        >
          <i class="fab fa-linkedin-in align-middle"></i>
        </a>
        <a
          href="#"
          class="rounded-full w-8 h-8 text-center ml-2 text-white"
          style="background-color: #1DA1F2"
        >
          <i class="fab fa-twitter align-middle"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.info span {
  display: block;
  font-size: 18px;
  font-weight: 400;
  margin-top: 8px;
}
</style>
