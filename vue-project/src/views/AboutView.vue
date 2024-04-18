<template>
  <div class="mx-24 flex flex-col justify-center">
    <h1 class="text-4xl font-bold text-grey text-left mt-8 border-b-2 border-grey pb-2">{{ pageTitle }}</h1>

    <p v-if="showFullText" class="my-4 text-lg font-light gap-8 text-pretty columns-1">{{ fullText }}</p>
    <p v-else class="my-4 text-lg font-light gap-8 text-pretty columns-1">{{ shortText }}</p>

    <button class="text-grey hover:text-secondary" @click="toggleTextVisibility">
      {{ showFullText ? 'Vis mere' : 'Vis mindre' }}
    </button>

    <MeetMeSection :title="meetMeTitle" :description="meetMeDescription" />

    <VideoCV :videoUrl="videoUrl" />

    <div class="my-16">
      <h1 class="text-2xl font-bold text-grey text-left my-8">{{ itSkillsTitle }}</h1>
      <ProgressBar v-for="skill in itSkills" :key="skill.name" :name="skill.name" :progress="skill.progress" />

      <h1 class="text-2xl font-bold text-grey text-left my-8">{{ languageSkillsTitle }}</h1>
      <ProgressBar v-for="skill in languageSkills" :key="skill.name" :name="skill.name" :progress="skill.progress" />
    </div>
  </div>
</template>

<script>
import VideoCV from '@/components/VideoCV.vue';
import ProgressBar from '@/components/reusable/Progress.vue';
import MeetMeSection from '@/components/MeetMe.vue';

export default {
  components: {
    VideoCV,
    ProgressBar,
    MeetMeSection 
  },
  data() {
    return {
      showFullText: true,
      pageTitle: "Hvem er LØRKS?",
      fullText: "I min fritid er jeg aktiv i to små virksomheder, hvor jeg står for deres sociale medier samt produktion af indhold, herunder videoer og billeder, ofte skabt med forskellige værktøjer som telefon, kamera eller drone. Jeg har også erfaring med at redigere videoer til YouTube og Instagram, og jeg har en stor passion for at skabe indhold, der fanger og engagerer seeren. Musik spiller en stor rolle i mit liv, og jeg behersker instrumenter som trommer, klaver, ukulele samt synger. Jeg er også en kreativ person og finder glæde ved at skrive musik, tegne, male både fysisk og digitalt og at bygge/recycle ting. Jeg har samt en passion for LEGO og kaffe. Min rejse inden for multimediedesign startede, da jeg altid havde drømt om at være lærer, men opdagede derefter multimediedesign-uddannelsen og indså, at det var alt, jeg elskede at lave. Jeg er utrolig glad for den vej, jeg har valgt, da jeg nu hver dag glæder mig til at stå op og komme i gang med mit arbejde, og jeg altid er ivrig efter at lære nyt. Mine mange interesser inkluderer altid at lære nye ting, men musik og kreativitet i form af redigering og illustration har altid været en konstant i mit liv. Selvom jeg har ADHD, ser jeg ikke det som en negativ faktor. Tværtimod brænder jeg for det, jeg elsker, og har et højt koncentrationsniveau og drive. Jeg nyder at arbejde i teams, hvilket tidligere har været en udfordring på grund af min lyst til kontrol, men jeg har lært, at det gavner mig meget at arbejde sammen med andre. Jeg er dygtig til at kommunikere og har gode taleevner. Mit mål og mine ambitioner med uddannelsen er at arbejde i et content creation team for en større virksomhed, primært inden for redigeringsprocessen, men jeg finder også idé- og konceptudviklingsprocessen spændende.",
      shortText: "Jeg er Lærke, en 22-årig bosat i Brørup og studerende inden for multimediedesign i Esbjerg. Min primære motivation inden for mit uddannelsesområde er video-redigering og content creation. Jeg brænder også for webudvikling samt design og grafisk design. I min fritid er jeg aktiv i to små virksomheder, hvor jeg står for deres sociale medier samt produktion af indhold, herunder videoer og billeder, ofte skabt med forskellige værktøjer som telefon, kamera eller drone. Jeg har også erfaring med at redigere videoer til YouTube og Instagram, og jeg har en stor passion for at skabe indhold, der fanger og engagerer seeren. Musik spiller en stor rolle i mit liv, og jeg behersker instrumenter som trommer, klaver, ukulele samt synger. Jeg er også en kreativ person og finder glæde ved at skrive musik, tegne, male både fysisk og digitalt og at bygge/recycle ting. Jeg har samt en passion for LEGO og kaffe.",
      meetMeTitle: "Mød mig",
      meetMeDescription: "Som et skoleprojekt skulle vi lave et video CV. Se med her og lær mig lidt bedre at kende. Eller download mit CV nederst på siden.",
      videoUrl: "VideoCV",
      itSkillsTitle: "It kompetencer",
      languageSkillsTitle: "Sprog kompetencer",
      itSkills: [
        { name: "Adobe Fresco", progress: 88 },
        { name: "Adobe Illustrator", progress: 85 },
        { name: "Adobe Indesign", progress: 75 },
        { name: "Adobe Photoshop", progress: 50 },
        { name: "Final Cut Pro", progress: 98 }
      ],
      languageSkills: [
        { name: "Dansk", progress: 100 },
        { name: "Engelsk", progress: 100 },
        { name: "Italiensk", progress: 40 },
        { name: "Tysk", progress: 80 }
      ]
    };
  },
  methods: {
    toggleTextVisibility() {
      this.showFullText = !this.showFullText;
    }
  }
};
</script>
