<template>
<article class="post">
  <a :href="link">
    <img :src="thumbnail" alt="">
  </a>
  <h2>
    <a :href="link">
      {{ post.title }}
    </a>
  </h2>
  <p>{{ post.body }}</p>
</article>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  post: Object
})
const link = computed(() => `#post:${props.post.id}`)
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