<template>
<Header :mensaje="texto"></Header>
<div class="container">
    <Sidebar></Sidebar>
    <div class="content">
        <input type="text" v-model="texto">
        {{ texto }}
        <router-view></router-view>
    </div>
</div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import {ref} from 'vue';

const texto = ref('')
</script>
<style scoped>
.container {
    display: flex;
    margin-top: 10px;
    padding-top: 2px;
}
.content {
    
    flex: 1;
}
</style>