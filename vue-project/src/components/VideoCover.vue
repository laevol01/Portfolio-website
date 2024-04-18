<template>
  <div class="video-container">
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="autoplay"
      allowfullscreen
></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      id: "videoId",
      type: String,
      required: true,
    },
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/gQ60neqHccc?autoplay=1&controls=0&rel=0&mute=1&loop=1`;
    },
  },
};
</script>

<style>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 300px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  border: 0;
}
</style>


  