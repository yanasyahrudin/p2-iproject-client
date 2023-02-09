<script>
import Navbar from '../components/Navbar.vue';
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores';

export default {
    name: "HomePage",
    components: { Navbar },
    computed :{
        ...mapState(useAppStore, ['loginUser', 'dataSpotify'])
    },
    methods: {
      ...mapActions(useAppStore, ['fetchLoginUser', 'spotify']),

    },
    created() {
      this.fetchLoginUser()
      this.spotify()
    }

}
</script>

<template>
  <Navbar/>
    <div class="container">
        <div class="row">
           
            <section
      class="relative bg-[url(https://morfemband.files.wordpress.com/2015/04/img_2727-2.jpg?w=768&h=512)] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
              
              Welcome to
            Morfem UnOfficial Site
              <strong class="block font-extrabold text-rose-700">
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Morfem is a music group from the capital city of Indonesia.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
          
              <a
                href="#"
                class="block w-full rounded bg-slate-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-slate-600 sm:w-auto"
              >
                Get Started
              </a>
           

            <a
              href="https://morfemband.wordpress.com/"
              target="_blank"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-slate-800 shadow hover:text-slate-500 focus:outline-none focus:ring active:text-slate-600 sm:w-auto"
            >
              Learn More
            </a>
          </div><br><br>
          <div>
            <a :href="dataSpotify.data.uri" type="" class="rounded-full py-2 px-6 bg-green-500" placeholder="new song" >Listen {{ dataSpotify.data.name }} on spotify</a>
          </div>
        </div>
      </div>
      
    </section>
        </div>
    </div>
</template>