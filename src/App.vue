
<script setup>
import Navbar from "./components/Navbar.vue"
import Header from "./components/Header.vue";
import MyForm from "./components/MyForm.vue";

</script>

<template>
  <Navbar />
  <div>
      <router-view :class="routerClass"/>
  </div>
</template>

<script scoped>
import {ref} from"vue";
import { RouterView } from "vue-router";

export default {
data() {
    return {
      routerClass: 'router-view-container'
    }
  }

}
</script>

<style scoped>
.router-view-container {
  padding: 20px;
}
</style>

