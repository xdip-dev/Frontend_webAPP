 
<template>
  <div>
    <div v-if="showTable">
      <TableInteractive :columns="columns" :rowData="rowData" />
    </div>
    <div v-else>
      <RingLoader size="120px" />
    </div>
  </div>
</template>

<script>
import TableInteractive from '../../components/TableInteractive.vue';
import getPostPath from "../../utils/helper.js";
import { RingLoader } from "vue3-spinner";

export default {
  data() {
    return {
      columns: [],
      rowData: [],
      showTable: false,
    }
  },
  components: {
    TableInteractive: TableInteractive,
    RingLoader: RingLoader,
  },
  mounted() {
    fetch(getPostPath("/last_stock_state"))
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.rowData = response.data;
        let keys = Object.keys(this.rowData[0])
        keys.map(key => this.generateColumnFromObjectKeys(key))
        this.showTable = true
      })
  },
  methods: {
    generateColumnFromObjectKeys(key) {
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


<style scoped>
h1 {
  background-color: aquamarine;
}
</style>

