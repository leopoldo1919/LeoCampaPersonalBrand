<script setup>
import { useLanguage } from '../composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">Leo Campa</h3>
          <p class="mb-4 text-gray-400">
            {{ t('footer.description') }}
          </p>
          <p class="text-gray-400">
            &copy; {{ new Date().getFullYear() }} Leo Campa. {{ t('footer.rights') }}
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li><a href="#hero" class="text-gray-400 hover:text-white transition duration-300">{{ t('nav.home') }}</a></li>
            <li><a href="#about" class="text-gray-400 hover:text-white transition duration-300">{{ t('nav.about') }}</a></li>
            <li><a href="#skills" class="text-gray-400 hover:text-white transition duration-300">{{ t('nav.skills') }}</a></li>
            <li><a href="#projects" class="text-gray-400 hover:text-white transition duration-300">{{ t('nav.projects') }}</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition duration-300">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t('footer.connect') }}</h4>
          <ul class="space-y-2">
            <li><a href="https://www.linkedin.com/in/leo-camp%C3%A0-a750101a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BGK4ISn%2BJRkeCEaeVOcWTjQ%3D%3D" class="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
            <li><a href="https://github.com/leopoldo1919" class="text-gray-400 hover:text-white transition duration-300">GitHub</a></li>
            <li><a href="https://qr.me-qr.com/H9R4xFWk" class="text-gray-400 hover:text-white transition duration-300">CV</a></li>
            <li><a href="https://www.instagram.com/leaver1919/?e=006249fc-e5ed-4245-83ef-92bcbeb65b62&g=5" class="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>{{ t('footer.builtWith') }}</p>
        <p>{{ t('footer.clarityWarning') }}</p>
      </div>
    </div>
  </footer>
</template>
