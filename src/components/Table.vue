<template>
    <div>
        <table class="table table-hover">
            <thead class="table-light">
                <tr>
                    <th scope="col" v-for="column in columns">{{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, i) in rowData" :key="i">
                    <td v-for="col in columns.length">{{ data[col - 1] }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        columns: {
            type:Array,
            required: true,
        },
        rowData: {
            type:Array,
            required: true,
        },
    },
}
</script>

<style>

</style>