<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ t('about.title') }}</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <div class="relative">
            <img 
              src="../assets/LeoFotoFull.jpeg" 
              alt="Leo Campa Live" 
              class="rounded-lg shadow-xl max-w-sm mx-auto"
            />
          </div>
        </div>
        
        <div class="md:w-1/2 md:pl-12">
          <div class="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md inline-block mb-3">
            <p class="font-bold text-sm">{{ t('about.experience') }}</p>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ t('about.jobTitle') }}</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            {{ t('about.paragraph1') }}
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            {{ t('about.paragraph2') }}
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Vue.js</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">React</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Tailwind CSS</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
