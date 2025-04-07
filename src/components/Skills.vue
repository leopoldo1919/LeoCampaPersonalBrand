<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ t('skills.title') }}</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
        <p class="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          {{ t('skills.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frontend Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div class="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('skills.frontend.title') }}</h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.frontend.skill1') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.frontend.skill2') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.frontend.skill3') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.frontend.skill4') }}</span>
            </li>
          </ul>
        </div>
        
        <!-- UI/UX Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div class="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('skills.ui.title') }}</h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.ui.skill1') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.ui.skill2') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.ui.skill3') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.ui.skill4') }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Other Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div class="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ t('skills.other.title') }}</h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.other.skill1') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.other.skill2') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.other.skill3') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">✓</span>
              <span>{{ t('skills.other.skill4') }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
