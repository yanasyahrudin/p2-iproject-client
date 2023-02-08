<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores';

export default {
    name: "CompactDiscCard",
    methods: {
        ...mapActions(useAppStore, ['fetchCompactDisc'])
    },
    props: ['cd']
}
</script>

<template>
    <div id="whoobe-3fery"
        class="w-full md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
        <img :src="cd?.itemUrl" alt="img" title="img" class="w-full h-auto object-cover rounded-t-lg" id="whoobe-ixxe5">
        <div id="whoobe-1okdg" class="w-full p-4 justify-start flex flex-col">
            <h4 class="border-b-2 text-3xl" id="whoobe-3mr7n">{{ cd?.name }}</h4>
            <p class="my-4" id="whoobe-950fw">{{ cd?.description }}</p>
            <a href="" >
            </a>
            <button value="button" class="my-4 px-4 py-2 text-white hover:bg-slate-500 bg-slate-800"
                id="whoobe-jkkr2">Read more</button>
        </div>
    </div>
</template>