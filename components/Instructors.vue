<template>
    <div id="speakers" class="py-10">
        <div class="container mx-auto">
            <heading text="Keynote Speakers" class="ml-5" />
            
            <div class="flex flex-wrap mt-5">
                
                <div class="w-full mx-5 mb-10 sm:w-1/2 sm:mx-0 sm:px-4 lg:w-1/3" :key="NOd" v-for="(NOd) in object.number">
                    <img :src="require('~/assets/img/speaker-' + NOd + '.jpg')" class="rounded-lg" alt="Jessica Doe">
                    <h3 class="font-bold text-4xl">Jessica Doe</h3>
                    <p class="font-light">Former Lead UX Hulu</p>
                </div>
                
                
            </div>
                <btn v-if="!object.all" class_names="bg-indigo-800 mx-5 mt-10 px-10 text-white" text="all speakers"/>
        </div>
    </div>
</template>

<script>
import heading from '~/components/utils/heading';
import btn from "~/components/utils/button"

export default {
    data(){
        return{
           images: []
        }
    },
    props:{
        object:{
            number: Number,
            all: Boolean
        }
    },
    components:{
        heading,
        btn
    },
    computed: {
        counter(){
            return this.$store.state.counter
        }
    }
}
</script>