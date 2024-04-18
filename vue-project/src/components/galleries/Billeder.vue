<template>
  <div class="mx-8">
    <h1 class="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 underline-offset-4 text-grey font-bold">Skab billedskønhed: Billeder, der fanger øjne</h1>
    <p class="my-4 font-light">Med kamera, telefon og drone som mine trofaste redskaber, fanger jeg øjeblikke og perspektiver, der fortæller historier i billeder. Min passion strækker sig ud over selve optagelsen; det er i redigeringens verden og skabelsen af mockups til reklameformål, at jeg virkelig trives. Gennem nøje tilrettelagt bearbejdning i Photoshop forvandler jeg hvert billede til en kraftfuld markedsføringsressource, der fanger opmærksomheden på sociale medieplatforme. Mit mål er at levere visuel æstetik og indhold af høj kvalitet, der bringer virksomheder og deres budskaber i centrum for opmærksomheden.</p>
    <div class="flex columns-sm md:grid-cols-6 gap-4">
      <div v-for="(imageGroup, index) in billederImages" :key="index" class="">
        <div v-for="(imageUrl, i) in imageGroup" :key="i">
          <img class="h-auto max-w-full grayscale hover:grayscale-0 my-2" :src="imageUrl" alt="Gallery Image">
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
        billederImages: [
          [
          'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/415261845_820980236705033_2195954748046527873_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UZI0f-kPUCkAb4AAW1m&_nc_oc=AdidiPnnZXJq0saXvPSYUw9nwRYCq8cQlaEuXGY5Cioy6smaejQQ0MDIMeqqHODuONI&_nc_ht=scontent.faar2-2.fna&oh=00_AfADrM3-XiuSnmQdW2gxWbT07RyhtJryMCleUwR8HWsa_Q&oe=6625CF5D',      
          'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414360826_820980223371701_8468974443447318333_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rLPfyAgJo70Ab6xKtDP&_nc_ht=scontent.faar2-2.fna&oh=00_AfCUXhU_0CDO2jLYYLvYA11kcZOsK3-rbj0IgSnoPgeloQ&oe=6625E34A',
          'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414353463_820980213371702_5830836665043618291_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S3grZEhAvY4Ab4GpGJ6&_nc_ht=scontent.faar2-2.fna&oh=00_AfBbjYHp_Evx40MGllhFf2sMGTNaG8Xyd-pdBO_X3ln7_w&oe=6625D7F6',
          'https://i.pinimg.com/736x/77/5b/95/775b95a706e1d306239a64b08173afae.jpg'
          ],
          [
           'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414606849_820980160038374_4217366395212641635_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dyQotnaS4y0Ab5YUS_3&_nc_ht=scontent.faar2-2.fna&oh=00_AfDvyIuN-JBG1UXOyXJ6apZnOX8q6KbV5kJVqTzmw4iGOA&oe=6625EC3C',
           'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414820041_820980123371711_3309710688432198295_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=drAUTHukKZ8Ab5ChG75&_nc_ht=scontent.faar2-2.fna&oh=00_AfAPlNtp2euM3zfqQFsYRsyKs6eS_bAikdwfshTd4Qlv-g&oe=6625D5F0',
           'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414353860_820980090038381_8941616293966898752_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6Ulp_HwznA0Ab6ezy1_&_nc_oc=Adh--Aiea20ES6IW6zwalb1jTPX-w6PAc0rdSZCSfygqno1A-XpAu4gxCVpwqKmNvwI&_nc_ht=scontent.faar2-2.fna&oh=00_AfAt3RnuZideyCNVy_9DpalORVXw0HLVNG9T4b1UPtCBLA&oe=6625DE47',
          ],
          [
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/415150448_820979923371731_1779774373455483327_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2cJjVZFkI3UAb7k3-TR&_nc_ht=scontent.faar2-2.fna&oh=00_AfDE5Xr1-Zjk43IXjCiW2OSJvkx6FLfJftc_ojADAnN1_Q&oe=6625E12D',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/415273088_820979913371732_4973973259059384326_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MZqD4qECNGgAb6XFdvb&_nc_ht=scontent.faar2-2.fna&oh=00_AfDGlhggZLO8JyJaf-UBCHq6_tOwIC1DUfE8TQoZ5dlqyA&oe=6625F0B5',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414695198_820979886705068_2914686533780530259_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CDzUBaLB5C4Ab5cuFoH&_nc_ht=scontent.faar2-2.fna&oh=00_AfA2hu8R3-LCyfc6ZHPnkCLczczQEu8SwPE-H8S0v7-nUw&oe=6626021C',
          ],
          [
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414353588_820979813371742_4494097910044232492_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YvqdTuMZ4msAb5zz46S&_nc_ht=scontent.faar2-2.fna&oh=00_AfCYi4ZJXbXMYvzmVD05isVgSaJHdpC4euGw_uVZPlx6_Q&oe=6625EAB6',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414737411_820979753371748_5874583351780909262_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3KtXSnN0dNAAb7j2Yju&_nc_ht=scontent.faar2-2.fna&oh=00_AfCL2j8uY6seZy-J5czoiTHyY51FpOR0H_qYG_eivJ4xYQ&oe=6626023B',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/414732123_820979763371747_2329854538129082380_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aHuqZwAbsAAAb5XTrWX&_nc_ht=scontent.faar2-2.fna&oh=00_AfCMGL8FMm6tFu828F8C6D_6_Vul52s4GfNTa_sy00-Ojw&oe=662603F9',
          ],
          [
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/346813622_1886360238387207_1871765670871685604_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S-nUhFdFA_YAb6NdMv4&_nc_ht=scontent.faar2-2.fna&oh=00_AfDd6_ljqA0HA2ycMhB5Lsi72a9aAVGgFcnm4ea22qS-6A&oe=6625DC88',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/340986132_996436881518942_3809617832903364614_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xjBN13gdZvoAb74t8Es&_nc_ht=scontent.faar2-2.fna&oh=00_AfDpJVNpcDOG3eAbBLpFxqYCEEkCuEer1Kg101F9T7iP1A&oe=6625D1EC',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/340805372_1196522874374434_21145975529257630_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K1TbkjpE3aMAb5GF3uO&_nc_ht=scontent.faar2-2.fna&oh=00_AfCV549ORoq6Iyk-7zqJ_70MDoflqmqlQLccldXM7TPvuA&oe=6626065F',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/340786485_624266692372566_5086234765153474339_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mMKJsV8yhI8Ab5qwZJO&_nc_ht=scontent.faar2-2.fna&oh=00_AfBEkd9vubeN7M-lwpKrjnVptNWVPDaAF8f-GcH288zl-w&oe=6625D3FF',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/340918066_203752725699503_8353647892583949989_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Yi6-J-YXNLQAb5S9vIm&_nc_ht=scontent.faar2-2.fna&oh=00_AfBeyJ0A3xLobLL-ywdWj-ZgKdjkXw7gyeijoB3xQedUBQ&oe=6625E2AA',
            'https://scontent.faar2-2.fna.fbcdn.net/v/t39.30808-6/340841167_1185685002116517_17666124561147286_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AcF_r_-w5toAb55Q5UW&_nc_ht=scontent.faar2-2.fna&oh=00_AfCQQxywZHXAutuNqw-1pdPvchW2rdd1GQebDpsvLjH01g&oe=6625D3F4',
          ],
        ],
      };
    },
  };
  </script>
  
  