<script setup>
import { reactive } from 'vue';

defineProps({
    text:String,
    color:String
});

function onClick(){
    console.log("clicked")
};

const state = reactive({count : 0});

</script>

<template>
    <button @click="state.count++" :style="{background:color}" >count is {{state.count}}</button>
</template>

