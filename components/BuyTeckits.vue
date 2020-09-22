<template>
     <section class="buy-tickets py-8">
            <div class="mx-auto container text-center">
                <h2 class="text-white text-6xl font-bold text-center">Save your spot today!</h2>
                <p class="text-center text-white text-xl font-semibold py-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Vestibulum ornare rutrum risus a semper. Duis venenatis ultrices <br> tellus vel cursus. Nunc tristique varius justo, laoreet tempus ex <br> viverra ut. Curabitur laoreet egestas augue.
                </p>
                <btn class_names="bg-green-500 px-8 text-white" text="BUY TICKETS"/>
            </div>
        </section>
</template>

<style scoped>
.buy-tickets{ 
    background-size: cover;
    background: url('~assets/img/speakers/call-to-bg.jpg') no-repeat center center;
}
</style>

<script>
import btn from '~/components/utils/button';


export default {
    components:{

        btn
    }
}
</script>