<template>
  <main>
      <VideoCover :videoId="videoId" />
      <p class="absolute inline-block align-top top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary font-semibold z-10 sm:text-6xl md:text-8xl lg:text-9xl text-5xl">PORTFOLIO</p>
    <div class="flex flex-col gap-x-0.5 sm:flex-row justify-evenly bg-primary_light drop-shadow-md">
      <Button title="LinkedIn" @click="openLinkedInProfile"/>      
      <Button title="Video CV" @click="handleButtonClick('Video CV')"/>
      <Button title="Kontakt" @click="handleButtonClick('Kontakt')"/>
    </div>
    <CardView :cards="cards" class="mt-16"></CardView>
  </main>
</template>

<style>
</style>

<script>
export default {
  components: {
    VideoCover,
    CardView,
    Button
  },
  data() {
    return {
      videoId: "videoId",
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
