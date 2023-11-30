<script setup>
import VueSummernote from 'vue-summernote';
import 'summernote/dist/summernote.css';

const content = ref('');
const options = ref({
  height: 300,
  // Autres options Summernote ici
});

const saveContent = () => {
  console.log('Contenu enregistré :', content.value);
};
</script>

<template>
  <div>
    <vue-summernote v-model="content" :options="options"></vue-summernote>
    <button @click="saveContent">Enregistrer</button>
  </div>
</template>
<style>
</style>

