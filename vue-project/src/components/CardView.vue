<template>
  <div class="my-16 lg:mx-5 xxl:mx-16 flex justify-center">
    <div class="grid grid-cols-1 gap-8 xl:grid-cols-4 sm:grid-cols-2">
      <RouterLink v-for="(card, index) in cards" :key="index" :to="`/${card.kind.toLowerCase()}`" class="max-w-sm overflow-hidden shadow-md bg-primary_light">
        <div class="flex justify-center items-center h-80">
          <img :class="{'w-80 h-80 object-cover border-primary_light brightness-125': card.kind === 'Videos', 'w-80 h-80 object-cover border-primary_light': card.kind !== 'Videos'}" :src="card.img" alt="Card image">
        </div>
        <div class="text-center py-4">
          <div class="font-regular text-xl mb-2">{{ card.kind }}</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const cards = [
  { kind: 'Illustrationer', img: 'https://cdn.dribbble.com/userupload/14108820/file/original-d2171973be992d575a79e3269c9862af.png?resize=300x300'},
  { kind: 'Videoer', img: 'https://i.pinimg.com/originals/81/72/01/8172011d7a66c8d995037109deb8add8.jpg'},
  { kind: 'Billeder', img: 'https://i.pinimg.com/originals/0d/42/6b/0d426b0f1bf722071bc1a15517f5179d.jpg'},
  { kind: 'Web', img: 'https://i.pinimg.com/originals/48/f7/cd/48f7cd04e8dfb67c81887740941dc3b8.jpg'}
];
</script>

<style lang="scss" scoped>
img {
  border-style: solid;
  border-width: 15px;
}
</style>
