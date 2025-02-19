<template>
<Header></Header>
<div class="container">
    <Sidebar></Sidebar>
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
</script>
<style scoped>
.container {
    display: flex;
    margin-top: 10px;
    padding-top: 50px;
}
.content {
    
    flex: 1;
}
</style>