<template>
  <div id="timer" class="p-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap sm:flex-col lg:flex-row">
        <div class="w-full md:text-center lg:w-1/2">
          <h2 class="text-4xl md:text-5xl text-white font-black">Next Event</h2>
          <h4 class="inline-block text-2xl text-white font-light">August 25, 2019</h4>
          <span class="py-1 px-3 text-white bg-pink-400">Starting @ 09:00 AM</span>
        </div>

        <div class="w-full md:text-center md:mt-10 lg:mt-0 lg:w-1/2" v-if="!timer_done">
          <div class="flex flex-wrap">
            <div class="hidden w-2/6 sm:hidden"></div>
            <div class="w-2/4 sm:w-1/4">
              <span class="text-white text-5xl font-black">{{ days }} :</span>
              <p class="text-white gont-light uppercase">days</p>
            </div>
            <div class="w-2/4 sm:w-1/4">
              <span class="text-white text-5xl font-black">{{ hours }} :</span>
              <p class="text-white gont-light uppercase">hours</p>
            </div>
            <div class="w-2/4 sm:w-1/4">
              <span class="text-white text-5xl font-black">{{ minutes }} :</span>
              <p class="text-white gont-light uppercase">minutes</p>
            </div>
            <div class="w-2/4 sm:w-1/4">
              <span class="text-white text-5xl font-black">{{ second }}</span>
              <p class="text-white gont-light uppercase">second</p>
            </div>
          </div>
        </div>
        <div class="w-2/3" v-if="timer_done">DONE</div>
      </div>
    </div>
  </div>
</template>

<style scoped >
#timer {
  background-color: #201d6d;
}
</style>

<script>
export default {
  data() {
    return {
      days: 88,
      hours: 7,
      minutes: 20,
      second: 33,
      timer_done: false
    };
  },
  mounted() {
    setInterval(() => {
      if (this.second !== 0) this.second -= 1;
      else {
        if (this.minutes !== 0) {
          this.second = 60;
          this.minutes -= 1;
        } else {
          if (this.hours !== 0) {
            this.second = 60;
            this.minutes = 60;
            this.hours -= 1;
          } else {
            if (this.days !== 0) {
              this.second = 60;
              this.days -= 1;
            } else this.timer_done = true;
          }
        }
      }
    }, 1000);
  }
};
</script>