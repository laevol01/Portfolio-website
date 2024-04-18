<template>
    <div>
      <h1 class="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 underline-offset-4 text-grey font-bold">{{ title }}</h1>
      <p class="my-4 font-light">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String
    }
  };
  </script>
  