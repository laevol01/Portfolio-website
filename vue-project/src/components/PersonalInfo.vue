<template>
  <div class="personal-info py-4 flex flex-col text-grey">
    <h1 class="text-xl underline underline-offset-8">Kontakt mig direkte</h1>
    <div class="info-item">
      <span>Navn:</span>
      <span class="font-light">{{ name }}</span>
    </div>
    <div class="info-item">
      <span>Adresse:</span>
      <span class="font-light">{{ address }}</span>
    </div>
    <div class="info-item">
      <span>Telefonnummer:</span>
      <span class="font-light">{{ phoneNumber }}</span>
    </div>
    <div class="info-item">
      <span>E-mail:</span>
      <span class="font-light">{{ email }}</span>
    </div>
  </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';

  const name = ref("Lærke Volhøj Engelberg");
  const address = ref("Jernbanegade 28, 6650 Brørup");
  const phoneNumber = ref("+4522362525");
  const email = ref("laerke3710@gmail.com");
  </script>
  
  <style scoped>
  .info-item {
    margin: 20px 0 10px 0;
  }
  
  .info-item span {
    margin-right: 10px;
  }
  </style>
  