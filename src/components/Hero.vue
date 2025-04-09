<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <section id="hero" class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('hero.title') }}</h1>
          <h2 class="text-2xl md:text-3xl font-semibold mb-6">{{ t('hero.subtitle') }}</h2>
          <p class="text-lg mb-8">{{ t('hero.description') }}</p>
          <div class="flex space-x-4">
            <a href="#contact" class="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
              {{ t('hero.contactBtn') }}
            </a>
            <a href="#projects" class="bg-transparent hover:bg-white/10 border-2 border-white font-bold py-2 px-6 rounded-full transition duration-300">
              {{ t('hero.projectsBtn') }}
            </a>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="bg-white p-4 rounded-full shadow-xl max-w-xs mx-auto">
            <div class="rounded-full overflow-hidden aspect-square">
              <img 
                src="../assets/LeoFotoPerfil.jpeg" 
                alt="Leo Campa" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
