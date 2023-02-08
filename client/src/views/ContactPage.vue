<script>
import Navbar from '../components/Navbar.vue';
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';
export default {
    name: 'ContactPage',
    components: { Navbar },
        computed: {
        ...mapState(useAppStore, ['loginUser'])
    },
       methods: {
        ...mapActions(useAppStore, [ 'fetchLoginUser'])
    },
       created(){
    
        this.fetchLoginUser()
        
    }
}
</script>

<template>
    <div>
        <Navbar v-for="user in loginUser" :user="user" :key="user.id" />
        <div class="container flex">
            <img src="https://morfemband.files.wordpress.com/2015/03/morfem-2015-1-hires.jpg?w=768&h=488" alt="">

            <div >
                Get in touch <br>
                Band enquiries and bookings: <br>
                Chiara <br>
                Mobile: 0815 89 86 915 <br>
                Email: morfem.info@gmail.com
            </div>

        </div>
    </div>
</template>