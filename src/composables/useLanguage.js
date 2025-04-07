import { ref, computed, watch } from 'vue';
import { en } from '../locales/en';
import { es } from '../locales/es';
import { ca } from '../locales/ca';

// Create a reactive state that persists across component instances
const currentLanguage = ref(localStorage.getItem('language') || 'en');

// Available languages
const languages = {
  en: { name: 'English', code: 'en', translations: en },
  es: { name: 'Español', code: 'es', translations: es },
  ca: { name: 'Català', code: 'ca', translations: ca }
};

// Save language preference to localStorage when it changes
watch(currentLanguage, (newLang) => {
  localStorage.setItem('language', newLang);
  document.documentElement.setAttribute('lang', newLang);
}, { immediate: true });

export function useLanguage() {
  // Function to change the current language
  const setLanguage = (langCode) => {
    if (languages[langCode]) {
      currentLanguage.value = langCode;
    }
  };

  // Get the current translations
  const t = computed(() => {
    return (key) => {
      const keys = key.split('.');
      let value = languages[currentLanguage.value].translations;
      
      for (const k of keys) {
        if (value && value[k]) {
          value = value[k];
        } else {
          // If translation is missing, fall back to English or return the key
          const fallback = languages.en.translations;
          let fbValue = fallback;
          for (const fbk of keys) {
            if (fbValue && fbValue[fbk]) {
              fbValue = fbValue[fbk];
            } else {
              return key; // No translation found, return the key
            }
          }
          return fbValue;
        }
      }
      
      return value;
    };
  });

  return {
    currentLanguage,
    languages: computed(() => languages),
    setLanguage,
    t
  };
}
