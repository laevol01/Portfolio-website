<template>
  <div class="mx-8">
    <h1 class="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 underline-offset-4 text-grey font-bold">Illustrationer, der springer ud af skærmen: Grafisk magi</h1>
    <p class="my-4 font-light">Selv med en simpel pensel og min trofaste iPad foran mig, er jeg fyldt med glæde og passion, når jeg skaber. Med lidt magi fra Adobe Illustrator og Adobe Fresco tager mine tanker form som levende logoer, plakater og illustrationer. Farverne danser, linjerne synger, og hvert værk er som et vindue til en ny verden af fortælling. Jeg kan ikke lade være med at smile, når jeg ser min kunst tage form fra de første digitale streger til det endelige mesterværk. Det er en sand fornøjelse at dele denne rejse med jer gennem mine skabninger.</p>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
      <div v-for="(imageGroup, index) in illustrationerImages" :key="index" class="grid gap-4">
        <div v-for="(imageUrl, i) in imageGroup" :key="i" class=" m-1">
          <img class="h-full max-w-full object-cover grayscale hover:grayscale-0" :src="imageUrl" alt="Gallery Image">
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import Gallery from './Gallery.vue';

  export default {
    components: {
      Gallery,
    },
    data() {
      return {
        illustrationerImages: [
          [
            'https://cdn.dribbble.com/userupload/12480674/file/original-b87dd4823ec57a046800c4a5b1560455.png?resize=752x',
            'https://cdn.dribbble.com/userupload/14108904/file/original-ed55ebff5df52ea6abcc6741bd499f11.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/14108900/file/original-803bffe20b7f9c25e93f2ba0998a908d.png?resize=752x',
          ],
          [
            'https://cdn.dribbble.com/userupload/14108887/file/original-034b476487bdb716c0bab78cb2abaa5b.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/14108872/file/original-834f5a73112bfe3afe236e50ca096c66.png?resize=752x',
            'https://cdn.dribbble.com/userupload/14108858/file/original-a205b59c628ff48ae267cc7d1849fed8.png?resize=752x',
          ],
          [
            'https://cdn.dribbble.com/userupload/14108847/file/original-a0cb3409720da7d851c01e70c80cf960.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/14108832/file/original-c267bc4ee96b057a6acab9326d938f3e.png?resize=752x',
            'https://cdn.dribbble.com/userupload/14108820/file/original-d2171973be992d575a79e3269c9862af.png?resize=752x',
          ],
          [
            'https://cdn.dribbble.com/userupload/14108814/file/original-d6c0e364f0496666b8dfed0a6df015ae.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/14108790/file/original-a684d2388a907be832bf8fa9fa3e7e12.png?resize=752x',
            'https://cdn.dribbble.com/userupload/12553778/file/original-621eeb6eae39c98c97e150547473eab2.jpeg?resize=752x',
          ],
          [
            'https://cdn.dribbble.com/userupload/14108778/file/original-b6e701b2f77aab9751e153208ff45ff7.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/14108753/file/original-4aa21a7ca8df26e4ab3dca252f1a0418.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/14108745/file/original-8fbbc5650b23e8f75482085208df4abe.png?resize=752x',
          ],
          [
            'https://cdn.dribbble.com/userupload/12553868/file/original-27a618874f7a1f0f8d8033f67bd3388a.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/12553787/file/original-024700576f8090d35d505f2a86621828.jpeg?resize=752x',
            'https://cdn.dribbble.com/userupload/12553801/file/original-2ea0be3dd0b8d510c11e420083a8d7af.jpeg?resize=752x',
          ],
        ],
      };
    },
  };
  </script>

  
  