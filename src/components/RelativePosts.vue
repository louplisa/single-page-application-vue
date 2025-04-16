<template>
<h4>Articles relatifs</h4>
  <ul v-if="data">
    <li v-for="post in data">
      <RouterLink :to="{name: 'posts.show', params: {id: post.id}}">{{ post.title }}</RouterLink>
    </li>

  </ul>
</template>
<script setup>
import {useFetch} from "@/composable/useFetch.js";
import {computed} from "vue";

const {data} = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts?_limit=5`))
</script>