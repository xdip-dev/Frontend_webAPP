<template>
    <div>
        <h1>la</h1>
        <input ref="input" type="text" name="input_ref" id="input_ref" :list="listModel">
        <p>
            <button class="buttonCustom btn" @click="sendDataToServer" type="submit">Show Nomenclature</button>
        </p>
        <p>
            <button class="buttonCustom btn" @click="check" type="submit">look</button>
        </p>
        <div>
            <vue-good-table ref="test" :columns="columns" :rows="rowData" />
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { ref,toRaw } from 'vue';
import getPostPath from "../../utils/helper.js";
import 'vue-good-table-next/dist/vue-good-table-next.css';
import { VueGoodTable } from 'vue-good-table-next';


export default {
    setup() {


        return {}
    },
    components: {
        VueGoodTable
    },
    data() {
        return {
            listModel: [],
            columns: [],
            rowData: [],
        }
    },

    mounted() {       
        
        fetch(getPostPath("/test"))
            .then(res => res.json())
            .then(data => {
                this.listModel = data;
            })
    },

    methods: {
        sendDataToServer() {
            this.reference = this.$refs.input.value;
            axios.post(getPostPath("/test"), this.reference, {
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                this.rowData = response.data.data;

                let keys = Object.keys(this.rowData[0])
                keys.map(key => this.generateColumnFromObjectKeys(key))
                console.log(this.columns);

            }).catch(error => {
                console.log(error)
            })
        },
        check() {
            console.log(this.$refs.test.filteredRows[0].children);
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

    }

}
</script>

<style  scoped>

</style>

<!-- [
                { label: "id", field: "ref_pf_id", filterable: true },
                { label: "ref", field: "Reference", filterable: true },
                { label: "des", field: "Designare_componente", filterable: true },
                {
                    label: "ref_c", field: "Ref_componante", filterable: true, filterOptions: {
                        enabled: true,
                    }
                },
            ] -->

            <!-- { ref_pf_id: 22551, Reference: 'J0101122', Designare_componente: 'PC FUME FL VERT CAT 3 DETOURE', Ref_componante: 'J306517FVB6VER' }, -->