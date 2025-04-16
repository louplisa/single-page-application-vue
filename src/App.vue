<template>
  <div class="container">
    <Header/>
    <RouterView/>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style>
.container {
  padding-top: 2rem;
  max-width: calc(100vw - 4rem);
}
</style>