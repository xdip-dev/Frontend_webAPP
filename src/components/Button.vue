<template>
    <div>
        <button class="buttonCustom btn" @click="goRouter(pathto)">
            Go
        </button>
    </div>
</template>

<script>
export default{
    props:{
        pathto:String
    },
    methods:{
        goRouter (path){
            this.$router.push(path)
        }
    }
}
</script>

<style scoped>


</style>