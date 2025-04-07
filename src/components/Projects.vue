<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
        <p class="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-blue-600 text-white py-1 px-3 text-sm">Web App</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">E-commerce Dashboard</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A comprehensive dashboard for e-commerce store owners with real-time analytics and inventory management.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Vue.js</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Tailwind CSS</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Chart.js</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Live</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
            </div>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Project 2" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-purple-600 text-white py-1 px-3 text-sm">Mobile App</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Fitness Tracker</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A mobile-first application for tracking workouts, nutrition, and progress with personalized recommendations.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">React Native</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Firebase</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Redux</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Live</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
            </div>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          <div class="relative">
            <img src="https://via.placeholder.com/600x400" alt="Project 3" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-green-600 text-white py-1 px-3 text-sm">Website</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Restaurant Booking Platform</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A responsive website for a restaurant chain with online reservation system and menu management.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Vue.js</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">Node.js</span>
              <span class="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">MongoDB</span>
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Live</a>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a href="#" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
          View All Projects
        </a>
      </div>
    </div>
  </section>
</template>
