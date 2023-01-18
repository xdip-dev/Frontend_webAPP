<template>
    <div>
        <p>{{ name }}</p>
        <input ref="el" type="text" placeholder="Name" v-model="name">
        <div>
            <button @click="submitForm"
                    v-bind:disabled="name.length==0">Submit</button>
        </div>
    </div>

</template>

<script >

import { onMounted, ref } from 'vue'

export default {
    setup() {
        const name =ref('')
        const el=ref()

        const submitForm = () =>{
            console.log(`Form sub name = ${name.value}`)
        }

        onMounted(()=> {el.value.focus()})

        return {
            name,
            el,
            submitForm,
        }
    },
}

</script>



