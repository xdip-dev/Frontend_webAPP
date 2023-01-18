<template>
    <div>
        <h1>This is the data fetch from the server </h1>

        <br />
        <div v-if="columns.length">
            <button @click="sendDataToServer">{{ buttonText }}</button>
            <CustumTable v-bind:columns="columns" :rowData="rowData" />
        </div>
        <div v-else>
            Loading data...
        </div>
    </div>
</template>

<script>
import Table from '../../components/Table.vue';
import axios from 'axios';
import { ref } from "vue";

export default {
    data() {
        return {
            columns: [],
            indexes: [],
            rowData: [],
            allData: null,
            buttonText: "Submit",
            payload: {
                dataColumn: this.columns,
                dataRow: this.rowData,
            }
        }
    },

    mounted() {
        fetch("http://localhost:5000/api")
            .then(res => res.json())
            .then(data => {
                this.columns = data.columns;
                this.indexes = data.index;
                this.rowData = data.data;
                this.allData = data
            })
    },

    methods: {
        sendDataToServer() {

            this.setPayload();

            console.log(this.payload);

            // Send data to the server in a JSON format
            axios.post("http://localhost:5000/api", this.payload, {
                headers: { 'Content-Type': 'application/json' },
                responseType: 'blob'
            })
                .then(response => {
                    // create a Blob from the server response
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.csv'); //or any other extension you desire
                    document.body.appendChild(link);
                    link.click()
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })


        },
        setPayload() {
            this.payload.dataColumn = this.columns
            this.payload.dataRow = this.rowData
        }
    },

    components: {
        CustumTable: Table
    }

}


</script>

<!-- <div>
    <table class="table">
        <thead class="table-light">
            <tr>
                <th scope="col" v-for="column in columns" >{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data,i) in rowData" :key="i">
                 <td v-for="col in columns.length" >{{data[col-1]}}</td>
            </tr>

        </tbody>
    </table>
</div> -->