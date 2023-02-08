<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores';
import Navbar from '../components/Navbar.vue';
import TShirtCard from '../components/TShirtCard.vue';

    export default{
        name: 'MerchandisePage',
        computed: {
            ...mapState(useAppStore, ['tShirt', 'loginUser'])
        },
        components: {Navbar, TShirtCard},
        methods: {
            ...mapActions(useAppStore, ['fetchTShirt', 'fetchLoginUser'])
        },
        created(){
            this.fetchTShirt()
             this.fetchLoginUser()
        }
    }
</script>

<template>
 <Navbar v-for="user in loginUser" :user="user" :key="user.id" />
    <div class="grid grid-cols-3">
        <TShirtCard v-for="ts in tShirt" :key="ts.id" :ts="ts" />
    </div>
</template>