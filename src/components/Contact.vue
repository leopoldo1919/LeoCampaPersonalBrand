<script setup>
import { useLanguage } from '../composables/useLanguage';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const { t } = useLanguage();

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Form states
const isLoading = ref(false);
const formStatus = ref(null); // null, 'success', 'error'
const errorMessage = ref('');

// Validation state
const errors = ref({});

// Validate form
const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required';
    isValid = false;
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email';
    isValid = false;
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Subject is required';
    isValid = false;
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

// Submit form
const submitForm = async (e) => {
  e.preventDefault();
  
  // Validate form first
  if (!validateForm()) {
    return;
  }
  
  isLoading.value = true;
  formStatus.value = null;
  
  try {
    const response = await emailjs.send(
      'service_sc8kd2g', // Your EmailJS service ID 
      'template_cyh6477', // Your EmailJS template ID
      {
        from_name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message
      },
      'F-XviRyAwFEKoFPMY' // Your EmailJS public key
    );
    
    if (response.status === 200) {
      formStatus.value = 'success';
      // Reset form
      formData.value = { name: '', email: '', subject: '', message: '' };
    } else {
      formStatus.value = 'error';
      errorMessage.value = 'Something went wrong. Please try again.';
    }
  } catch (error) {
    formStatus.value = 'error';
    errorMessage.value = error.message || 'Failed to send message. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

// EmailJS initialization
emailjs.init('F-XviRyAwFEKoFPMY'); // Same public key as above
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ t('contact.title') }}</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
        <p class="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.formTitle') }}</h3>
          
          <!-- Form status alerts -->
          <div v-if="formStatus === 'success'" class="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">
            {{ t('contact.successMessage') || 'Your message has been sent successfully!' }}
          </div>
          
          <div v-if="formStatus === 'error'" class="mb-4 p-3 bg-red-100 text-red-800 rounded-lg">
            {{ errorMessage }}
          </div>
          
          <form @submit="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.name') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                :class="{'border-red-500': errors.name}"
                placeholder="John Doe" 
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>
            
            <div class="mb-4">
              <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.email') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                :class="{'border-red-500': errors.email}"
                placeholder="john@example.com" 
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>
            
            <div class="mb-4">
              <label for="subject" class="block text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.subject') }}</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                :class="{'border-red-500': errors.subject}"
                placeholder="Project Inquiry" 
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.message') }}</label>
              <textarea 
                id="message" 
                rows="5" 
                v-model="formData.message"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" 
                :class="{'border-red-500': errors.message}"
                placeholder="Your message..."
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex justify-center items-center"
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              {{ isLoading ? t('contact.sending') || 'Sending...' : t('contact.send') }}
            </button>
          </form>
        </div>
        
        <div class="flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.contactTitle') }}</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-gray-900 dark:text-white font-medium">{{ t('contact.emailLabel') }}</h4>
                  <p class="text-gray-700 dark:text-gray-300">leo1919campa@gmail.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-gray-900 dark:text-white font-medium">{{ t('contact.phoneLabel') }}</h4>
                  <p class="text-gray-700 dark:text-gray-300">+34 615 93 67 59</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-gray-900 dark:text-white font-medium">{{ t('contact.locationLabel') }}</h4>
                  <p class="text-gray-700 dark:text-gray-300">Cassà de la selva, Girona, CAT</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.followTitle') }}</h3>
            <div class="flex space-x-4">
              <a href="https://www.instagram.com/leaver1919/?e=006249fc-e5ed-4245-83ef-92bcbeb65b62&g=5" class="bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 p-3 rounded-full transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/leo-camp%C3%A0-a750101a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BGK4ISn%2BJRkeCEaeVOcWTjQ%3D%3D" class="bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 p-3 rounded-full transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                </svg>
              </a>
              <a href="https://github.com/leopoldo1919" class="bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 p-3 rounded-full transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
