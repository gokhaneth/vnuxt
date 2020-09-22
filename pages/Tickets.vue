<template>
    <div class="pt-16">
        <banner text="Tickets" />
        <section class="plans md:p-16 lg:p-32 bg-gray-300">
            <div class="container mx-auto">
                <div class="px-2">
                    <div class="flex flex-wrap -mx-2">
                        <card how_many=5  :headerText="{level: 'BEGGINER' ,time: 'One Day Pass', cost: '$90' }" wrapperClass="border-t-2 border-indigo-500" classes="card w-full flex  justify-center m-4 sm:m-0 md:w-1/2 md:mb-2 lg:w-1/3"></card>
                        <card how_many=6  :headerText="{level: 'RECOMMENDED' , time: 'Full Pass', cost: '$290'}" wrapperClass="border-t-2 border-green-500" classes="card w-full flex  justify-center m-4 sm:m-0 md:w-1/2 md:mb-2 lg:w-1/3"></card>
                        <card how_many=60 :headerText="{level: 'PRO' ,time: 'Investor Pack', cost: '$590'}"  wrapperClass="border-t-2 border-indigo-500" classes="card w-full flex  justify-center m-4 sm:m-0 md:w-1/2 md:mb-2 lg:w-1/3"></card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import banner from '~/components/utils/banner';
import card from '~/components/Card';

export default {
    data(){
        return {
            feats:['One day full pass.',' 100+ Speakers.', 'Breakfast.',' Access to workshops.', ' Access to investors and mentors.', ' Networking Database.',' After Party.','Private Mentoring Sessions.']
        }
    },
   components:{
       banner,
       card
   }
}
</script>