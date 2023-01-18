<template>
    <div>
        <input ref="input" type="text" name="input_ref" id="input_ref" :list="listModel">
        <p>
            <button class="buttonCustom btn" @click="sendDataToServer" type="submit">Show Nomenclature</button>
        </p>
        <div v-if="showTable">
            <TableInteractive :columns="columns" :rowData="rowData" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import Table from '../../components/Table.vue';
import TableInteractive from '../../components/TableInteractive.vue';
import getPostPath from "../../utils/helper.js";

export default {
    setup() {


        return {}
    },
    data() {
        return {
            listModel: [],
            columns: [],
            rowData: [],
            showTable: false,
            reference: "",
        }
    },

    mounted() {
        fetch(getPostPath("/nomenclature"))
            .then(res => res.json())
            .then(data => {
                this.listModel = data;
            })
    },

    methods: {
        sendDataToServer() {
            this.reference = this.$refs.input.value;
            axios.post(getPostPath("/nomenclature"), this.reference, {
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                console.log(response);
                this.showTable=true;
                this.rowData = response.data.data;
                let keys = Object.keys(this.rowData[0])
                keys.map(key => this.generateColumnFromObjectKeys(key))

            }).catch(error => {
                console.log(error)
            })
        },
        generateColumnFromObjectKeys (key){
            this.columns.push({
                label: key,
                field: key,
                filterable: true,
                filterOptions: {
                        enabled: true,
                    }
            })
        }

    },
    components: {
        Table: Table,
        TableInteractive:TableInteractive,
    }

}
</script>

<style scoped>

button{
    margin: 1% 0% 1%;
}

</style>