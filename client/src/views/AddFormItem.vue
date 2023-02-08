<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'AddFormItem',
    components: { Navbar }
} 
</script>

<template>
     <Navbar/>
    <main class="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
        <header class="my-6">
            <h2 class="text-center font-semibold uppercase text-gray-300">Your StarGazer</h2>
            <p class="text-center font-extrabold text-slate-800 tracking-tight text-6xl">Add your item</p>
        </header>
        <form class="w-full grid gap-2 px-4">
            <div class="flex justify-between items-center">
                <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700">Name</label>
                <div class="flex-1">
                    <input required placeholder="name" type="text" id="name"
                        class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent">
                </div>
            </div>
            <div class="flex justify-between items-center">
                <label for="stock" class="w-32 text-right pr-4 font-bold text-gray-700">Stock</label>
                <div class="flex-1">
                    <input required placeholder="5" type="number" id="stock"
                        class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent">
                </div>
            </div>
            <div class="flex justify-between items-center">
                <label for="itemUrl" class="w-32 text-right pr-4 font-bold text-gray-700">Item Url</label>
                <div class="flex-1">
                    <input required placeholder="itemUrl" type="text" id="itemUrl"
                        class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent">
                </div>
            </div>
            <div class="flex justify-between items-center">
                <label for="price" class="w-32 text-right pr-4 font-bold text-gray-700">Price</label>
                <div class="flex-1">
                    <input required placeholder="100000" type="number" id="price"
                        class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent">
                </div>
            </div>
            <div class="flex justify-between items-center">
                <label for="description" class="self-start w-32 text-right mt-2 pr-4 font-bold text-gray-700">Description</label>
                <textarea id="description" name="description" placeholder="description me" rows="3"
                    class="disabled:bg-gray-100 w-full flex-1 placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"></textarea>
            </div>
            
            <div class="flex justify-start items-center">
                <div class="w-32 text-right pr-4 font-bold text-gray-900 active:bg-red-500" id="label-email">Subscribe</div>
                <div class="flex items-center">
                    <input id="subscribe" style="accent-color: black;" name="subscribe" type="checkbox" checked
                        class="checked:ring-red-500 checked:ring-2 mr-2 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300 rounded">
                    <label for="subscribe" class="text-gray-700">yes</label>
                </div>
            </div>
            <div class="flex justify-start items-center">
                <div class="w-32 text-right pr-4 font-bold text-gray-900" id="label-email">Notifications</div>
                <div class="flex items-center mr-4">
                    <input id="notifications-all" name="notifications" type="radio"
                        class="indeterminate:ring-2 indeterminate:ring-red-500 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300">
                    <label for="notifications-all" class="ml-1 block text-gray-700">All</label>
                </div>
                <div class="flex items-center">
                    <input id="notifications-none" name="notifications" type="radio"
                        class="indeterminate:ring-2 indeterminate:ring-red-500 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300">
                    <label for="notifications-none" class="ml-1 block text-gray-700">None</label>
                </div>
            </div>

            <div class="flex justify-end">
                <button type="button"
                    class="bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 ">Cancel</button>
                <button type="submit"
                    class="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-slate-800 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">Update</button>
            </div>

        </form>
    </main>
</template>

<style>

</style>