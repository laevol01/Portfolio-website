<template>
  <main>

    <CardView :cards="cards" class="mt-16"></CardView>
  </main>
</template>

<style>
</style>

<script>
export default {
  components: {
    CardView,
    Button
  },
  data() {
    return {
    };
  },
  methods: {
    handleButtonClick(buttonTitle) {
      console.log(`Button "${buttonTitle}" clicked`);
      
      if (buttonTitle === 'Video CV') {
        this.$router.push('/about');
      } else if (buttonTitle === 'Kontakt') {
        this.$router.push('/contact');
      }
    },
    openLinkedInProfile() {
      window.open("https://www.linkedin.com/in/l%C3%A6rke-engelberg/", "_blank");
    },
  }
};
</script>



<script setup>
import { RouterLink } from 'vue-router';
import VideoCover from "@/components/VideoCover.vue";
import CardView from "@/components/CardView.vue";
import Button from "../components/reusable/Button.vue";
import { ref } from 'vue';
</script>