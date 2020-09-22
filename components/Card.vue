<template>
    <div :class=classes>
        <div :class=wrapperClass class="h-full py-8 bg-white lg:px-2 lg:mx-4 md:mx-2 mx-0  text-center rounded-lg">

            <header class="text-center lg:p-8">
                <p class="text-xl font-bold text-gray-700">{{headerText.level}}</p>
                <p class="text-4xl font-extrabold">{{headerText.time}}</p>
                <p class="text-5xl font-extrabold text-indigo-600">{{headerText.cost}}</p>
            </header>
            <hr class="border-gray-300">
            <ul class="lg:pl-16 p-8 text-left">
                <li class="my-2" :key='index' v-for="(feat,index) in feats">
                    <img v-if="index<how_many" src="~/assets/img/check.png" alt="check" class="inline-block mx-2">
                    <img v-else src="~/assets/img/close.png" alt="check" class="inline-block mx-2">
                    <span class="text-gray-600">{{feat}}</span>
                </li>
            </ul>
            <btn class_names="bg-green-400 px-8 text-white" text="BUY TICKETS"/>

        </div>
    </div>
</template>

<script>
import btn from '~/components/utils/button';

export default {
    data(){
        return {
            feats:['One day full pass.',' 100+ Speakers.', 'Breakfast.',' Access to workshops.', ' Access to investors and mentors.', ' Networking Database.',' After Party.','Private Mentoring Sessions.']
        }
    },
    props:{
        how_many: String,
        headerText: Object,
        classes: String,
        wrapperClass: String,
    },
   components:{
        btn
   }
}
</script>