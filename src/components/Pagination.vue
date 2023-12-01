<!-- Pagination.vue -->
<template>
  <div class="pagination mt-4 text-center">
    <button class="btn btn-primary" @click="prevPage" :disabled="currentPage === 1">Précédent</button>
    <span>{{ currentPage }}</span>
    <button class="btn btn-primary" @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
  </div>
</template>
  
<script setup>
  // Dans votre composant Pagination.vue
import { ref, defineProps, defineEmits } from 'vue';

const { currentPage, totalPages } = defineProps(['current-page', 'total-pages']);
const emit = defineEmits();

const updatePage = (newPage) => {
  emit('update-page', newPage);
};
</script>

<!-- Reste du composant -->

  
<style scoped>
  /* Ajoutez vos styles CSS si nécessaire */
</style>
  