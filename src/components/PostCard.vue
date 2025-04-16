<template>
<article class="post">
  <RouterLink :to="link">
    <img :src="thumbnail" alt="">
  </RouterLink>
  <h2>
    <RouterLink :to="link">
      {{ post.title }}
    </RouterLink>
  </h2>
  <p>{{ post.body }}</p>
</article>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  post: Object
})
const link = computed(() => ({
  name: 'posts.show',
  params: { id: props.post.id }
}))
const thumbnail = computed(() => `https://picsum.photos/id/${props.post.id}/200/180`)
</script>

<style>
.post {
  margin: 0;
  align-self: flex-start;
}

.post a {
  text-decoration: none;
}

.post img {
  width: calc(100% + 2 * var(--pico-block-spacing-horizontal));
  max-width: none;
  height: auto;
  margin: calc(var(--pico-block-spacing-horizontal) * -1);
  margin-bottom: 1rem;
}
</style>