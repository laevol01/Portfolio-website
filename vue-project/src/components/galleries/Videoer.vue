<template>
  <div class="mx-8">
    <h1 class="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 underline-offset-4 text-grey font-bold">Grib øjeblikket: Videoer, der fortæller historier</h1>
    <p class="my-4 font-light">At filme og redigere videoer er ikke bare en passion for mig det er mit hjertebarn. Hver dag sætter jeg mig foran skærmen og fordyber mig i verdenen af kreativitet og teknik. Min primære redigeringsplatform er Final Cut Pro, hvor jeg formår at omsætte mine visioner til virkelighed. Dog er jeg ikke bange for at udforske andre værktøjer som Adobe Premiere Pro og After Effects, hvilket udvider mine muligheder for at skabe fantastiske videoer.
    <br>Min kærlighed til at filme strækker sig især til min DJI Mavic 2 drone, der giver mig mulighed for at fange fantastiske luftbårne øjeblikke og perspektiver. Men jeg begrænser mig ikke kun til luften jeg griber også fat i kameraet og telefonen for at indfange hverdagens skønhed og begivenheder.
    <br>At arbejde med video er ikke blot en opgave for mig, det er en rejse, hvor jeg konstant udfordrer mig selv til at forbedre mine færdigheder og skabe noget unikt hver gang. Det er min passion, min fornøjelse og min styrke og jeg ser frem til at fortsætte med at udforske og skabe i videomediet.</p>
  </div>
    <div class="flex flex-wrap justify-center gap-4 m-8 ">
      <div v-for="(videoId, index) in videoIds" :key="index">
        <div class="xs:w-96 xs:h-52 w-64 h-36 overflow-hidden flex justify-center items-center">
          <iframe :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=1&loop=1`" class="object-cover w-full h-full scale-105" frameborder="0" allow="autoplay" allowfullscreen></iframe>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      videoIds: [],
    };
  },
  created() {
    this.extractVideoIds();
  },
  methods: {
    extractVideoIds() {
      const videoUrls = [
        'https://youtu.be/Yrfl8siMWPQ',
        'https://youtu.be/WlvADmtURew',
        'https://youtu.be/U2c21HHRnXU',
      ];

      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

      videoUrls.forEach(url => {
        const matches = url.match(regex);
        if (matches && matches.length > 1) {
          this.videoIds.push(matches[1]);
        }
      });
    }
  }
};
</script>

<style>
/* Add any custom styling here */
</style>
