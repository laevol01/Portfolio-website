<template>
    <div>
    <footer class="absolute w-full bg-primary_light">
        <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-row items-center">
          <RouterLink :to="{name: 'home'}">   
            <span class="text-sm text-gray sm:text-center"> <p>&copy; 2024 LØRKS</p></span>
          </RouterLink>
          <div class="flex gap-4 flex-1 justify-end relative items-center">
            <RouterLink :to="{name: 'about'}" class="hover:text-secondary_light text-sm">Om mig</RouterLink>
            <RouterLink :to="{name: 'contact'}" class="hover:text-secondary_light text-sm">Kontakt</RouterLink>
            <RouterLink :to="{name: 'work'}" class="hover:text-secondary_light text-sm">Work</RouterLink>
            <PdfButton/>
          </div>
        </div>
</footer>
    </div>
</template>

<script setup> 
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import PdfButton from './reusable/pdf.vue';
    
  const isSubmenuOpen = ref(false);
  
  function toggleSubmenu() {
    isSubmenuOpen.value = !isSubmenuOpen.value;
  }
  
  function closeSubmenu() {
    isSubmenuOpen.value = false;
  }

  
</script>

<style lang="scss" scoped>
footer{
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>