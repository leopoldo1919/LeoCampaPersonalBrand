<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ t('projects.title') }}</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
        <p class="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          {{ t('projects.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-blue-600 text-white py-1 px-3 text-sm">{{ t('projects.project1.tag') }}</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ t('projects.project1.title') }}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ t('projects.project1.description') }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Vue.js</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Tailwind CSS</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Chart.js</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">{{ t('projects.viewLive') }}</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">{{ t('projects.viewCode') }}</a>
            </div>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Project 2" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-purple-600 text-white py-1 px-3 text-sm">{{ t('projects.project2.tag') }}</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ t('projects.project2.title') }}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ t('projects.project2.description') }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">React Native</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Firebase</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Redux</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">{{ t('projects.viewLive') }}</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">{{ t('projects.viewCode') }}</a>
            </div>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Project 3" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-green-600 text-white py-1 px-3 text-sm">{{ t('projects.project3.tag') }}</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ t('projects.project3.title') }}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              {{ t('projects.project3.description') }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Vue.js</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Node.js</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">MongoDB</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">{{ t('projects.viewLive') }}</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">{{ t('projects.viewCode') }}</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a href="#" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
          {{ t('projects.viewAll') }}
        </a>
      </div>
    </div>
  </section>
</template>
