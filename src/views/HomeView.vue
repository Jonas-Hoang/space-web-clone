<template>
  <main v-if="!loading">
       <Gallery />
        <Customer />
        <OurProject/>
        <DetailProject/>
        <Archivement />
        <Personal />
        <Footer/>
  </main>
  <main v-else >
    
  </main>
</template>

<script>

import Gallery from '@/components/Gallery.vue'
import Customer from '@/components/Customer.vue'
import OurProject from '@/components/OurProject.vue'
import DetailProject from '@/components/DetailProject.vue'
import Archivement from '@/components/Archivement'
import Personal from '@/components/Personal'
import Footer from '@/components/Footer'
export default {
  name: 'HomeView',
  components: {
    Gallery,
    Customer,
    OurProject,
    DetailProject,
    Archivement,
    Personal,
    Footer,
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
  
      this.imgSrc = data.srcImg;
      this.loading = false
    },
}
</script>
