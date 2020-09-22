<template>
  <div>
    <banner text="Contact" />

    <div class="flex flex-wrap flex-col-reverse sm:flex-row">
      <div class="w-full sm:w-auto pr-5 sm:w-1/2 flex">
        <div class="w-full map px-2 sm:px-0 relative my-6 sm:my-0">
          <iframe
            class="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.813490649247!2d-73.99671288184456!3d40.730048447813495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599aff739a83%3A0xea0adbc1f438a974!2sThe+Public+Theater!5e0!3m2!1sen!2sbd!4v1564162536545!5m2!1sen!2sbd"
            height="738"
            style="border:0"
            allowfullscreen
          ></iframe>
          <div class="contact-address bg-blue-500 p-16 text-white absolute rounded-lg">
            <h4 class="text-xl text-white">Contact Info</h4>
            <ul>
              <li>
                <i class="fas fa-map-marker-alt text-white"></i>
                <span class="text-gray-400">
                  4127 Raoul Wallenber4127 Raoul Wallen berg
                  Place
                </span>
              </li>
              <li>
                <i class="fas fa-mobile text-white"></i>
                <span class="text-gray-400">203-808-8613</span>
              </li>
              <li>
                <i class="far fa-envelope text-white"></i>
                <span class="text-gray-400">hello@youremail.com</span>
              </li>
            </ul>
            <div class="triangle-border"></div>
          </div>
        </div>
      </div>
      <div class="w-full px-2 sm:px-0 sm:w-1/2 my-8">
        <heading text="Get in Touch" />
        <form class="flex flex-wrap px-2" action="#">
          <div class="flex w-full -mx-2">
            <input type="text" class="w-1/2 px-2 bg-gray-200 py-5 px-8" placeholder="Your name" />
            <input
              type="text"
              class="w-1/2 px-2 border-l-8 bg-gray-200 py-5 px-8"
              placeholder="Your Email"
            />
          </div>
          <div class="-mx-2 flex w-full">
            <input
              type="text"
              class="w-full mt-2 text-black bg-gray-200 py-5 px-8"
              placeholder="Subject"
            />
          </div>

          <div class="-mx-2 flex w-full">
            <textarea
              name="details"
              id="details"
              cols="30"
              class="w-full mt-2 bg-gray-200 py-5 px-8"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-address {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input,
textarea {
  outline: none;
  border-left-color: white;
  transition: all 0.4s ease;
}
input:focus,
textarea:focus {
  outline: none;
  border-bottom: 2px solid #f21e7d;
}
</style>

<script>
import banner from "~/components/utils/banner";
import heading from "~/components/utils/heading";

export default {
  components: {
    banner,
    heading
  }
};
</script>