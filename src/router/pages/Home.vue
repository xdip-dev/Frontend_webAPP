<template>
    <div class="row row-cols-sm-3">     
        <Card title="Quantity" content="Last Qty" to="/last_stock_state"/>   
        <Card title="Nomenclature" content="nomenclature for 1 ref" to="/nomenclature"/>
        <Card title="Update GS" content="Update google sheet" to="/updategooglesheet"/>
        <Card title="test" content="testing purpuse" to="/test"/>       
    </div>
</template>

<script>
import Card from '../../components/Card.vue';
export default{
    components:{
        Card:Card
    }
}
</script>