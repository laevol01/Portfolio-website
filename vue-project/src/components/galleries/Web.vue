<template>
  <div class="mx-12">
    <h1 class="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 underline-offset-4 text-grey font-bold">Byg din digitale drøm: Webudvikling med kreativitet og kode</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 md:mt-8">
      <div v-for="(image, index) in images" :key="index">
        <div class="relative">
          <a :href="index === 0 ? 'https://www.eksamentrapholt.dk/' : '#'" target="_blank">
            <img class="h-full max-w-full" :src="image.src" :alt="image.alt">
          </a>
          <h2 class="text-grey text-left text-2xl">{{ image.title }}</h2>
          <p class="text-grey text-left pr-2 font-light text-pretty">{{ image.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: "https://i.pinimg.com/736x/3e/d2/f6/3ed2f6b9113e362b6d3007b23014ed8b.jpg", alt: "Trapholt", title: "Trapholt", description: "Denne hjemmeside blev produceret i forbindelse med vores 1. semester projekt. Den er stadig online, og du skal være velkommen til at tjekke den ud!" },
        { src: "https://i.pinimg.com/originals/48/f7/cd/48f7cd04e8dfb67c81887740941dc3b8.jpg", alt: "Jacob Ulv Maskinstation", title: "Jacob Ulv Maskinstation", description: "Denne hjemmeside er har jeg produceret, med Wordpress, for en maskinstation. Hjemmesiden er stadig under produktion, og kan derfor ikke besøges." },
      ],
    };
  },
};
</script>

<style>
</style>
