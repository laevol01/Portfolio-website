<template>
    <div>
      <button @click="downloadPDF" class="flex items-center justify-center hover:text-secondary_light text-sm text-gray sm:text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-3 w-3 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
            </svg>
        CV
        </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      downloadPDF() {
        window.open('https://erhvervsakademisydvest-my.sharepoint.com/personal/laevol01_easv365_dk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flaevol01%5Feasv365%5Fdk%2FDocuments%2FCV%2Epdf&parent=%2Fpersonal%2Flaevol01%5Feasv365%5Fdk%2FDocuments&ga=1', '_blank');
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  