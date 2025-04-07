<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <div class="relative">
            <!-- Replace with another image of yourself -->
            <img 
              src="https://via.placeholder.com/600x600" 
              alt="Leo Campa working" 
              class="rounded-lg shadow-xl max-w-sm mx-auto"
            />
            <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg">
              <p class="font-bold">5+ Years Experience</p>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2 md:pl-12">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Developer & UI Designer</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Hello! I'm Leo Campa, a passionate frontend developer with a keen eye for design and user experience. 
            I specialize in creating responsive, accessible, and performant web applications using modern technologies 
            like Vue.js, React, and Tailwind CSS.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            My journey in web development started 5 years ago, and since then, I've worked with various clients 
            from startups to established businesses, helping them bring their digital visions to life.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Vue.js</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">React</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Tailwind CSS</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">JavaScript</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">UI/UX</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
