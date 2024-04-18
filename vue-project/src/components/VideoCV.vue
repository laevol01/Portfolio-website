<template>
    <div class="my-8 flex justify-center items-center">
      <div class="w-4/5 h-96">
        <iframe class="object-cover overflow-hidden w-full h-full scale-105" src="https://www.youtube.com/embed/h_PmGaLoTmY?si=RTtPuFAcnvgJCrnG?rel=0" title="YouTube video player" allow="accelerometer" allowfullscreen muted="false"></iframe>      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoUrl: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .aspect-w-16 {
    width: 100%;
  }
  .aspect-h-9 {
    height: 0;
    padding-bottom: 56.25%;
  }
  </style>
  