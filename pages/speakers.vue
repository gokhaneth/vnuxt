<template>
    <div class="pt-16">
        <banner text="Speakers" />
        <div class="container mx-auto">
            <heading text="Special Guests" />
            <card />
            <card />
        </div>
        <BuyTeckits />
        <speakers :object=pass > </speakers>
       
    </div>
</template>

<style scoped>

</style>

<script>
import banner from '~/components/utils/banner';
import heading from '~/components/utils/heading';
import card from '~/components/GuestCard';
import BuyTeckits from '~/components/BuyTeckits';
import speakers from '~/components/Instructors';

export default {
    data(){
        return{
            pass:{
                 number: 6 ,
                 all: true
            }
        }
    },
    components:{
        banner,
        heading,
        card,
        BuyTeckits,
        speakers
    }
}
</script>