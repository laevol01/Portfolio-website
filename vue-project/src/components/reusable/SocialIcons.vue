<template>
    <div class="py-4 grid grid-rows-3 grid-flow-col gap-4">
        <a :href="getSocialLink('dribbble')" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="#303538" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M11.94141,2c-1.50135,0 -2.92162,0.34128 -4.20117,0.9375c-0.00839,-0.00245 -0.017,-0.00538 -0.02539,-0.00781l-0.00781,0.02539c-3.39905,1.59944 -5.76562,5.04858 -5.76562,9.04492c0,5.511 4.48899,10 10,10c5.51101,0 10,-4.489 10,-10c0,-5.511 -4.48899,-10 -10,-10zM11.94141,4c1.71643,0 3.21506,0.65418 4.51563,1.56836c-0.63158,0.62762 -1.36711,1.18275 -2.17773,1.63477c-1.06128,-1.2799 -2.35273,-2.29902 -3.71094,-3.0625c0.44505,-0.08275 0.89909,-0.14062 1.37305,-0.14062zM7.97656,5.14453c1.54962,0.58307 3.10645,1.53976 4.35938,2.88672c-2.08021,0.63168 -4.46322,0.59348 -6.85547,-0.50586c0.66403,-0.95775 1.51295,-1.77138 2.49609,-2.38086zM17.95508,6.86328c0.85758,1.00527 1.3963,2.22368 1.67188,3.57031c-1.12288,-0.1382 -2.26828,-0.07285 -3.39062,0.1543c-0.22799,-0.61692 -0.50552,-1.19983 -0.82227,-1.74805c0.94352,-0.5571 1.80217,-1.22555 2.54102,-1.97656zM4.4707,9.37109c3.17969,1.52219 6.40425,1.41226 9.14258,0.34766c0.26914,0.45082 0.50501,0.9285 0.70117,1.43555c-3.13363,1.22551 -5.82938,3.80527 -6.89844,7.27344c-2.05184,-1.44588 -3.47461,-3.71743 -3.47461,-6.42773c0,-0.93352 0.23762,-1.79713 0.5293,-2.62891zM17.80078,12.38672c0.68554,-0.01235 1.35427,0.10557 2.01758,0.22266c-0.20019,2.53792 -1.5423,4.74561 -3.52344,6.07227c0.46032,-1.32835 0.81518,-3.07625 0.60547,-5.20703c-0.03181,-0.32276 -0.08104,-0.63629 -0.13672,-0.94531c0.11562,-0.02343 0.22986,-0.06313 0.3457,-0.08203c0.23275,-0.03797 0.46289,-0.05643 0.69141,-0.06055zM14.83203,13.13477c0.02753,0.17804 0.06006,0.35378 0.07813,0.53711c0.33768,3.43105 -0.85487,5.48539 -1.31836,6.15039c-0.53131,0.11288 -1.08195,0.17773 -1.65039,0.17773c-0.97299,0 -1.87894,-0.23508 -2.74023,-0.55078c0.76032,-2.94412 3.01789,-5.18965 5.63086,-6.31445z"></path></g></g>
            </svg>      
        </a>
        <a :href="getSocialLink('youtube')" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M43.2,33.9c-0.4,2.1 -2.1,3.7 -4.2,4c-3.3,0.5 -8.8,1.1 -15,1.1c-6.1,0 -11.6,-0.6 -15,-1.1c-2.1,-0.3 -3.8,-1.9 -4.2,-4c-0.4,-2.3 -0.8,-5.7 -0.8,-9.9c0,-4.2 0.4,-7.6 0.8,-9.9c0.4,-2.1 2.1,-3.7 4.2,-4c3.3,-0.5 8.8,-1.1 15,-1.1c6.2,0 11.6,0.6 15,1.1c2.1,0.3 3.8,1.9 4.2,4c0.4,2.3 0.9,5.7 0.9,9.9c-0.1,4.2 -0.5,7.6 -0.9,9.9z" fill="#303538"></path><path d="M20,31v-14l12,7z" fill="#ffffff"></path></g></g>
            </svg>      
        </a>
        <a :href="getSocialLink('facebook')" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M24,5c-10.49341,0 -19,8.50659 -19,19c0,10.49341 8.50659,19 19,19c10.49341,0 19,-8.50659 19,-19c0,-10.49341 -8.50659,-19 -19,-19z" fill="#303538"></path><path d="M26.572,29.036h4.917l0.772,-4.995h-5.69v-2.73c0,-2.075 0.678,-3.915 2.619,-3.915h3.119v-4.359c-0.548,-0.074 -1.707,-0.236 -3.897,-0.236c-4.573,0 -7.254,2.415 -7.254,7.917v3.323h-4.701v4.995h4.701v13.729c0.931,0.14 1.874,0.235 2.842,0.235c0.875,0 1.729,-0.08 2.572,-0.194z" fill="#ffffff"></path></g></g>
            </svg>
        </a>
        <a :href="getSocialLink('github')" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="#303538" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
            </svg>
        </a>
        <a :href="getSocialLink('instagram')" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="#303538" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z"></path></g></g>
            </svg>   
        </a>
        <a :href="getSocialLink('pinterest')" target="_blank" rel="noopener noreferrer" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="#303538" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68213,0 -23,10.31787 -23,23c0,9.88416 6.26758,18.33026 15.03638,21.57697c-0.25256,-2.25159 -0.21295,-5.93903 0.2038,-7.72437c0.39026,-1.677 2.52124,-10.68713 2.52124,-10.68713c0,0 -0.64331,-1.28833 -0.64331,-3.1911c0,-2.99017 1.73242,-5.22119 3.88983,-5.22119c1.83496,0 2.71979,1.37762 2.71979,3.0282c0,1.8457 -1.17346,4.60266 -1.78125,7.15784c-0.5069,2.14093 1.07336,3.88654 3.18365,3.88654c3.82123,0 6.75848,-4.0296 6.75848,-9.84534c0,-5.14758 -3.698,-8.74719 -8.97955,-8.74719c-6.11676,0 -9.70728,4.58856 -9.70728,9.33099c0,1.84735 0.71118,3.82867 1.6001,4.90698c0.17529,0.21332 0.20093,0.39941 0.14886,0.61603c-0.1629,0.67889 -0.52509,2.13928 -0.59705,2.4386c-0.09344,0.39447 -0.31177,0.47632 -0.71863,0.28693c-2.68579,-1.25031 -4.3645,-5.17566 -4.3645,-8.32959c0,-6.78156 4.92682,-13.0108 14.20654,-13.0108c7.45886,0 13.25476,5.31384 13.25476,12.41791c0,7.41003 -4.67291,13.37299 -11.15686,13.37299c-2.17889,0 -4.22638,-1.13202 -4.92676,-2.46918c0,0 -1.07831,4.10486 -1.34045,5.11121c-0.45245,1.74042 -2.38928,5.34601 -3.36157,6.9837c2.22424,0.71851 4.59357,1.11102 7.05377,1.11102c12.68262,0 23,-10.31738 23,-23c0,-12.68213 -10.31738,-23 -23,-23z"></path></g></g>
            </svg>
        </a>
    </div>
  </template>
  
  <script setup>
  const getSocialLink = (platform) => {
    switch (platform) {
      case 'dribbble':
        return 'https://dribbble.com/laerke3710';
      case 'youtube':
        return 'https://youtube.com/@lrks3555?si=gNwaxBeK4cw835Bl';
      case 'facebook':
        return 'https://www.facebook.com/profile.php?id=100005271158064';
      case 'github':
        return 'https://github.com/laevol01';
      case 'instagram':
        return 'https://www.instagram.com/engelberg.laerke/';
      case 'pinterest':
        return 'https://pin.it/3ouoVGrjJ';
      default:
        return '#';
    }
  };
  </script>
  
  <script>
    import { ref } from 'vue';
 </script>

  <style scoped>
  .social-icon {
    display: inline-block;
    margin-right: 10px;
  }
  </style>
  