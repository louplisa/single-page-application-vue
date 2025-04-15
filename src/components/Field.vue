<template>
<div>
  <label :for="id">{{ label }}</label>
  <textarea v-if="type === 'textarea'" v-model="model" :id="id"></textarea>
  <input v-else v-model="model" :type="type" :id="id">
</div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  }
})
const model = defineModel()
</script>
