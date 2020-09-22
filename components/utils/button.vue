<template>
    <button
        class="uppercase py-5 font-bold rounded-lg"
        :class="class_names"
    >{{ text }}</button>
</template>
<script>
export default {
    props: {
        class_names: String,
        text: String
    }
}
</script>