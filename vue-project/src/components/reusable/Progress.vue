<template>
    <div class="w-full my-5">
        <div>{{ name }}</div>
        <div class="flex justify-between items-center">
            <div class="w-full bg-secondary_light h-3 rounded-full">
            <div :style="{ width: progress + '%' }" class="bg-grey h-3 rounded-full"></div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      progress: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100 // Ensure progress value is between 0 and 100
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  