<script setup>
import { ref } from 'vue';
import { useLanguage } from '../composables/useLanguage';

const { currentLanguage, languages, setLanguage } = useLanguage();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (langCode) => {
  setLanguage(langCode);
  isOpen.value = false;
};
</script>

<template>
  <div class="relative">
    <!-- Language selector button -->
    <button 
      @click="toggleDropdown" 
      class="flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
      aria-haspopup="true"
    >
      <span>{{ languages[currentLanguage].name }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <!-- Dropdown -->
    <div 
      v-if="isOpen" 
      class="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50"
    >
      <div class="py-1">
        <button
          v-for="(lang, code) in languages"
          :key="code"
          @click="selectLanguage(code)"
          class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          :class="{ 'bg-gray-100 dark:bg-gray-600': currentLanguage === code }"
        >
          {{ lang.name }}
        </button>
      </div>
    </div>
  </div>
</template>
