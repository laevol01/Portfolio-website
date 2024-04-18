<template>
  <header class="top-0 bg-secondary shadow-lg relative">
    <nav class="flex flex-col sm:flex-row items-center gap-4 text-primary py-6 mx-8">
        <RouterLink :to="{name: 'home'}">
            <div class="flex justify-start gap-3 flex-1">
               <p class="text-4xl font-bold hover:text-secondary_light">LØRKS</p>
            </div>
        </RouterLink>

        <div class="flex gap-4 flex-1 justify-end relative">
            <RouterLink :to="{name: 'about'}" class="hover:text-secondary_light text-xl">Om mig</RouterLink>
            <RouterLink :to="{name: 'contact'}" class="hover:text-secondary_light text-xl">Kontakt</RouterLink>
            <button @click="toggleSubmenu" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center hover:text-secondary_light text-xl">
              <span class="mr-1">Work</span> 
              <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div v-show="isSubmenuOpen" @click.away="closeSubmenu" id="dropdownNavbar" class="z-10 absolute top-full right-0 mt-2 font-normal bg-secondary divide-y rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-primary" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink to="/illustrationer" class="block px-4 py-2 hover:bg-secondary_light">Illustrationer</RouterLink>
                </li>
                <li>
                  <RouterLink to="/videoer" class="block px-4 py-2 hover:bg-secondary_light">Videoer</RouterLink>
                </li>
                <li>
                  <RouterLink to="/billeder" class="block px-4 py-2 hover:bg-secondary_light">Billeder</RouterLink>
                </li>
                <li>
                  <RouterLink to="/web" class="block px-4 py-2 hover:bg-secondary_light">Web</RouterLink>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script setup> 
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
    
  const isSubmenuOpen = ref(false);
  
  function toggleSubmenu() {
    isSubmenuOpen.value = !isSubmenuOpen.value;
  }
  
  function closeSubmenu() {
    isSubmenuOpen.value = false;
  }
</script>
