<script setup lang="ts">
import Comform_ip from '~/component/comform_ip.vue'
import Navbar from '~/component/navbar.vue'
import Repairlist from '~/component/repairlist.vue'
</script>

<template>
  <div>
    <Head>
      <title>หน้าแรก - ระบบแจ้งซ่อม</title>
      <link rel="icon" href="/logo.ico">
    </Head>

    <Navbar />
    <Comform_ip />
    <Repairlist />
  </div>
</template>
