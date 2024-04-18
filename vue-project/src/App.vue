<template>
  <div class="flex flex-col min-h-screen font-Josefin bg-primary">
    <SiteNavigation />
    <RouterView />
    <FooterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';
import FooterView from './components/FooterView.vue';
</script>

<script>
export default {
  components: {
    SiteNavigation,
    FooterView
  }
}
</script>