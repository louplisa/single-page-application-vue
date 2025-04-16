<template>
<div class="blog">
  <main>
    <RouterView v-slot="{Component}">
      <FadeSlideTransition>
        <component :is="Component"></component>
      </FadeSlideTransition>
    </RouterView>
  </main>
  <aside>
    <h2>Sidebar</h2>
    <RouterView name="sidebar"></RouterView>
  </aside>
</div>
</template>

<script setup>

import FadeSlideTransition from "@/components/FadeSlideTransition.vue";
</script>


<style>
.blog {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 1rem;
}
</style>