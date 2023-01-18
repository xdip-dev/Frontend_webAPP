<template>

    <h1>Task {{ title }}</h1>
    <Button text="TASK" color="green" />

</template>

<script setup>
import Button from "./Buttoninit.vue"

defineProps({
    title: {
        type: String,
        required: true,
        default: "defualt lol"
    },
});
</script>