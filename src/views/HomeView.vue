
<script>
import axios from 'axios'
import Gallery from '@/components/Gallery'
import Customer from '@/components/Customer'
import OurProject from '@/components/OurProject'
import DetailProject from '@/components/DetailProject'
import Archivement from '@/components/Archivement'
import Personal from '@/components/Personal'
import Footer from '@/components/Footer'

export default {
  name: 'HomeView',
  data(){
    return{
      imgSrcOurProject: "",
      imgSrcGallery: "",
      imgSrcPersonel:"",
    }
  },
  components: {
    Gallery,
    Customer,
    OurProject,
    DetailProject,
    Archivement,
    Personal,
    Footer,
  },
  methods:{
    async fetchData(url){
        const res = await axios(url)
        return res
      },
    },  
    async created(){
      const gallery = 'https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/gallery';
      const ourproject = 'https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/ourproject';
      const personel = 'https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/personel';
      
      const dataGallery = await this.fetchData(gallery)
      const dataOurProject = await this.fetchData(ourproject)
      const dataPersonel = await this.fetchData(personel)

      this.imgSrcGallery = dataGallery.data;
      this.imgSrcOurProject = dataOurProject.data;
      this.imgSrcPersonel = dataPersonel.data;
      
      this.loading = false
      console.log(this.imgSrcOurProject)
    },
}
</script>

<template>
  <main >
        <Gallery :imgData="imgSrcGallery"/>
        <Customer />
        <OurProject :imgData2="imgSrcOurProject" />
        <DetailProject :imgData2="imgSrcOurProject" />
        <Archivement />
        <Personal :imgData3="imgSrcPersonel"/>
        <Footer/>
  </main>
</template>
