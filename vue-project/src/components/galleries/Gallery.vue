<template>
  <div class="mx-12">
    <h1 class="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 underline-offset-4 text-grey font-bold">Gallery</h1>
    <p v-if="mediaType === 'illustrations'" class="my-4 font-regular">Here are some illustrations:</p>
    <p v-else-if="mediaType === 'images'" class="my-4 font-regular">Here are some images:</p>
    <p v-else-if="mediaType === 'videos'" class="my-4 font-regular">Here are some videos:</p>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
      <div v-for="(mediaGroup, index) in mediaGroups" :key="index" class="grid gap-4">
        <div v-for="(mediaItem, i) in mediaGroup" :key="i">
          <template v-if="mediaType === 'illustrations' || mediaType === 'images'">
            <img v-if="mediaType === 'images'" :src="mediaItem" class="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" alt="Gallery Image">
            <img v-else :src="mediaItem.url" class="h-auto max-w-full rounded-lg grayscale hover:grayscale-0" :alt="mediaItem.alt">
          </template>
          <template v-else-if="mediaType === 'videos'">
            <iframe :src="mediaItem" width="280" height="157.5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaType: {
      type: String,
      required: true,
    },
    mediaItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    mediaGroups() {
      const groups = [];
      const groupSize = 6; // Adjust this based on your grid layout
      for (let i = 0; i < this.mediaItems.length; i += groupSize) {
        groups.push(this.mediaItems.slice(i, i + groupSize));
      }
      return groups;
    },
  },
};
</script>
