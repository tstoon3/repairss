<script setup lang="ts">
import { NuxtLink } from "#components";
import { ref, onMounted } from "vue";

interface Users {
  name: string;
}

const users = ref<Users[]>([]);



</script>

<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- โลโก้ -->
      <div class="text-2xl font-bold text-black">
        Guest
      </div>

      <!-- ปุ่มเข้าสู่ระบบ -->
      <div class="flex items-center gap-3">
        <NuxtLink to="/login"
          class="border border-black text-white px-3 py-1 rounded-lg hover:bg-white hover:text-gray-800 transition bg-gray-800 text-sm">
          เข้าสู่ระบบ
        </NuxtLink>
        <button
          class="border border-black text-white px-3 py-1 rounded-lg hover:bg-white hover:text-gray-800 transition bg-gray-800 text-sm">
          สมัครสมาชิก
        </button>
      </div>
    </div>
  </nav>
</template>