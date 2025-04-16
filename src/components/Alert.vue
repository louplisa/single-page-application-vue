<template>
  <div :class="classes">
    <slot></slot>
    <button aria-label="Close" @click="emits('close')">&times;</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: String
})
const emits = defineEmits(['close'])
const classes = computed(() => `alert alert-${props.type}`)
</script>

<style>
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert button {
  background: transparent;
  border: none;
  padding: .25rem;
  position: absolute;
  top: 0.5rem;
  right: 1.25rem;
}
</style>