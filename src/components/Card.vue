<template>
    <div class="card-colum center space">
        <div class="card h-100">
            <div class="card-header">
                <h5 class="card-title">{{ title }}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">{{ content }}</p>
            </div>
            <div class="card-footer">
                <CustomButton :pathto="to" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
    props: {
        title: String,
        content: String,
        to : String
    },
    components: {
        CustomButton: Button,
    },
}

</script>

<style scoped>
.center {
    text-align: center;
}

.space {
    margin: 20px;
    width: 300px;
}
</style>