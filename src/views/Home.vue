<script setup>
import Jumbotron from "../components/Jumbotron.vue";
import Card from "../components/Card.vue";
</script>

<template>
    <Jumbotron />
    <div class="-mt-[21rem] mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ecf0f1" fill-opacity="1" d="M0,96L120,128C240,160,480,224,720,240C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
    </div>
    <div class="w-6/12 h-[15rem] mx-auto flex items-center justify-center">
        <p class="text-center text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, in distinctio dolorem modi tenetur temporibus. Ullam, possimus aut cumque, numquam sequi culpa, unde velit minus tempore non officiis quaerat rem.</p>
    </div>
    <div class="w-10/12 mx-auto flex justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>

</template>