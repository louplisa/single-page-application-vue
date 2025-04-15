<template>
  <Modal title="Editer l'article">
    <form action="" @submit.prevent="onSubmit">
      <Alert type="danger" v-if="state === 'error'" @close="state = 'idle'">
        Mise à jour échouée
      </Alert>
      <Field label="Titre" id="title" v-model="post.title"/>
      <Field label="Contenu" id="content" v-model="post.body" type="textarea"/>
      <button :disabled="state === 'loading'">Modifier</button>
    </form>
  </Modal>
</template>

<script setup>
import Modal from "@/components/Modal.vue";
import {ref} from "vue";
import Field from "@/components/Field.vue";
import Alert from "@/components/Alert.vue";

const props = defineProps({
  post: Object
})
const emits = defineEmits('save')
const state = ref('idle')
const onSubmit = () => {
  state.value = 'loading'
  fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {
    method: 'put',
    body: JSON.stringify(props.post),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
      .then(r => {
        if (r.ok) {
          return r.json()
        }
        throw new Error("Impossible de modifier l'article")
      })
      .then(data => {
        emits('save', data)
        state.value = 'idle'
      })
      .catch(e => {
        state.value = 'error'
      })
}

</script>
