<template>
  <main> 
   <div class="flex sm:flex-row justify-evenly bg-primary_light drop-shadow-md"><PersonalInfo />  <SocialIcons /></div> 
    <Form />

  </main>
</template>

<script setup>
import { ref } from 'vue';
import Form from "@/components/Form.vue";
import SocialIcons from "@/components/reusable/SocialIcons.vue";
import PersonalInfo from "../components/PersonalInfo.vue";
</script>

<script>
export default {
  components: {
    Form,
    SocialIcons,
    PersonalInfo
  }
}
</script>
