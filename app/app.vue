<script setup lang="ts">
import Comform_ip from './component/comform_ip.vue';
import Repairlist from './component/repairlist.vue';
import repairlist from './component/repairlist.vue';
import Index from './index.vue';


</script>
<template>
  <NuxtLayout />
  <body>
    <div class="min-h-screen">
      <Index />
      <Comform_ip />
       <Repairlist />
    </div>
  </body>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600&display=swap');
</style>
