<template>
<dialog ref="dialog">
  <article>
    <header>
      <button aria-label="Fermer" rel="prev" @click="emits('close')"></button>
      <h2>{{ title }}</h2>
    </header>
    <slot></slot>
  </article>
</dialog>
</template>

<script setup>
import {onMounted, ref} from "vue";

const dialog = ref()
defineProps({
  title: String
})
const emits = defineEmits(['close'])
onMounted(() => {
  dialog.value.show()
})
</script>
