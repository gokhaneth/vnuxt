<template>
  <client-only placeholder="loading...">
    <carousel :perPage="1" :autoPlay="true" :autoplayTimeout="50">
      <slide :key="index" v-for="(slide , index) in 3">
        <div class="container mx-auto">
          <div class="banner min-h-screen md:h-screen flex flex-wrap">
            <div class="text-white pl-5 mt-64 mb-10 w-3/4">
              <span class="block font-light text-4xl leading-tite">
                February 9
                <sup>TH</sup> - 15
                <sup>TH</sup> 2019
              </span>
              <h1 class="mb-2 uppercase font-black text-4xl md:text-6xl leading-tite"> Summit <br/> Conference <br/> 2019 </h1>
              <h2 class="font-bold text-3xl pb-10">World Trade Center, Gibraltar</h2>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </client-only>
</template>

<style>
.banner {
  width: 100% !important;
}

.VueCarousel-slide {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.VueCarousel-slide:nth-child(1) {
  background-image: url("~assets/img/slider/bg-1.jpg");
}
.VueCarousel-slide:nth-child(2) {
  background-image: url("~assets/img/slider/bg-2.jpg");
}
.VueCarousel-slide:nth-child(3) {
  background-image: url("~assets/img/slider/bg-3.jpg");
}

.VueCarousel{
  display: flex;
  flex-direction: row 
}

.VueCarousel-wrapper{
  width: 100%
}

.VueCarousel-pagination {
  position: absolute;
  width: auto !important;
  bottom: 31%;
  right: 10px;
  display: flex;
  justify-content: flex-end;
}

.VueCarousel-pagination div.VueCarousel-dot-container {
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 0;
}

.VueCarousel-pagination div.VueCarousel-dot-container button:focus {
  outline: 0;
  box-shadow: 0;
}
</style>

<script>
export default {};
</script>
