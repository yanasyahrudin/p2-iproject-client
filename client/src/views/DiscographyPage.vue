<script>
import { mapActions, mapState } from 'pinia';
import CompactDiscCard from '../components/CompactDiscCard.vue';
import Navbar from '../components/Navbar.vue';

import { useAppStore } from '../stores';
export default {
    name: 'DiscographyPage',
    computed: {
        ...mapState(useAppStore, ['compactDisc', 'loginUser'])
    },
    components: { Navbar, CompactDiscCard},
    methods: {
        ...mapActions(useAppStore, ['fetchCompactDisc', 'fetchLoginUser'])
    },
    created(){
        this.fetchCompactDisc()
        this.fetchLoginUser()
        
    }

}
</script>

<template>
    <Navbar v-for="user in loginUser" :user="user" :key="user.id" />
    <div class="flex justify-center space-x-5 mt-5" >

        <CompactDiscCard v-for="cd in compactDisc" :key="cd.id" :cd="cd" />
    </div>
</template>