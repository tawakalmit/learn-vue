<script setup>
import {RouterLink} from "vue-router"
</script>

<template>
<div class="w-full bg-[#2c3e50]">
<nav class="w-10/12 mx-auto h-16 flex items-center justify-between">
    <div>
        <img src="/favicon.ico" alt="logo">
    </div>
    <ul class="w-6/12 flex justify-around">
        <li><RouterLink to="/" class="text-white">Home</RouterLink></li>
        <li><RouterLink to="/about" class="text-white">About</RouterLink></li>
        <li><RouterLink to="/products" class="text-white">Products</RouterLink></li>
        <li><RouterLink to="/contact" class="text-white">Contact</RouterLink></li>
        <li><RouterLink to="/faq" class="text-white">FAQ</RouterLink></li>
    </ul>
</nav>
</div>
</template>

<style>

</style>