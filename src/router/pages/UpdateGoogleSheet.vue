<template>
    <div class="container">
        <div>
            <h2>Single File uploade for Google sheet update</h2>
            <hr />
                <input class="buttonCustom btn" type="file" @change="handleFileUpload($event)" />
            <br>
            <div class="minidistance">
                <div v-if="notLoading">
                    <button class="buttonCustom btn" v-on:click="submitFile()">
                        Submit
                    </button>
                </div>
                <div v-else="notLoading">
                        <RingLoader size="30px" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { RingLoader } from "vue3-spinner";
import getPostPath from "../../utils/helper.js";

export default {
    data() {
        return {
            file: '',
            notLoading: true
        }
    },
    components: {
        RingLoader: RingLoader
    },
    methods: {
        handleFileUpload(event) {
            this.file = event.target.files[0];
        },
        submitFile() {
            this.notLoading = false;
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post(getPostPath("/updategooglesheet"), formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(response => {
                console.log(response);
                console.log('SUCCESS!!');
                this.notLoading = true;


            })
                .catch(response => {
                    console.log(response);
                    console.log('FAILURE!!');

                });

            


        },
    },
}
</script>

<style scoped>
.minidistance{
    margin-top: 5px;
}
</style>