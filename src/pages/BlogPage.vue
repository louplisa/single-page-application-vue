<template>
  <h1>Blog</h1>
  <div v-if="state === 'error'">
    Impossible de charger les articles depuis le serveur
  </div>
  <div v-else :aria-busy="state === 'loading'">
    <Grid>
      <PostCard v-for="post in posts" :key="post.id" :post="post"/>
    </Grid>
  </div>
  <div class="pagination">
    <button @click="page--" :disabled="page === 1">Page précédente</button>
    <button @click="page++">Page suivante</button>
  </div>
</template>

<script setup>

import {computed, onMounted, ref, watch} from "vue";
import PostCard from "@/components/PostCard.vue";
import Grid from "@/components/Grid.vue";
import {useFetch} from "@/composable/useFetch.js";

const page = ref(1)

const {state, data: posts} = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page.value}`))

</script>

<style>
.pagination {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>