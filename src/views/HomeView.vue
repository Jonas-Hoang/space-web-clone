<template>
  <main v-if="!loading">
       <Gallery />
      
      
  </main>
  <main v-else >
    
  </main>
</template>

<script>

import Gallery from '@/components/Gallery.vue'


export default {
  name: 'HomeView',
  components: {
    Gallery,
  },
  data(){
    return {
      loading:true,
      
      imgSrc: '',
      
      loadingImage: require('../assets/giphy.gif')
    }
  },
  methods:{
    async fetchData(){
        const res = await fetch('https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/gallery')
        const data = await res.json()
        return data
      },
    },
    async created(){
      const data= await this.fetchData()
      console.log(data);
      this.imgSrc = data.srcImg;
      this.loading = false
    },
}
</script>
