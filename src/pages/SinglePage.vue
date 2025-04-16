<template>
  <div :aria-busy="state === 'loading'">
    <article v-if="post">
      <h1>{{ post.title }}</h1>
      <p>
        <img :src="thumbnail" alt="">
      </p>
      <p>
        {{ post.body }}
      </p>
      <p>
        <button class="secondary" @click="onEdit">Editer</button>
      </p>
      <PostForm
          :post="formData"
          v-if="formData"
          @close="formData = null"
          @save="onSave"
      />
    </article>
  </div>
</template>

<script setup>
import {useFetch} from "@/composable/useFetch.js";
import {computed, ref, toRaw} from "vue";
import PostForm from "@/components/PostForm.vue";
import {useRoute} from "vue-router";

const props = defineProps({
  id: String
})
const route = useRoute()
const formData = ref(null)
const {state, data: post} = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts/${props.id}`))
const thumbnail = computed(() => `https://picsum.photos/id/${props.id}/800/600`)

const onEdit = () => {
  formData.value = structuredClone(toRaw(post.value))
}
const onSave = (newPost) => {
  formData.value = null
  post.value = newPost
}
</script>
