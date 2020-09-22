<template>
    <div class="banner pl-0 sm:pl-24 p-32 flex justify-content-end">
        <h3 class="text-white font-bold text-6xl">{{ text }}</h3>
    </div>
</template>

<script>
export default {
    props:{
        text: String,
    }
}
</script>

<style scoped>
.banner{
    background-image: url('~assets/img/speakers-bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover
}
</style>