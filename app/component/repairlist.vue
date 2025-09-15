<script setup lang="ts">
import { ref } from "vue"
import data from "/Toon/Nuxt/repairss/app/component/data.json"

interface RepairItem {
  id: number
  title: string
  user: string
  status: string
  date: string
}

const isTableView = ref(true) // ค่าเริ่มต้นเป็นตาราง
const toggleView = () => {
  isTableView.value = !isTableView.value
}

const repairs: RepairItem[] = data;

</script>
<template>
  <div class="p-6 kanit-thin">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">รายการแจ้งซ่อม</h2>
      <button
        @click="toggleView"
        class="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        เปลี่ยนเป็น {{ isTableView ? 'Card' : 'Table' }}
      </button>
    </div>

    <!-- Table View -->
    <div v-if="isTableView" class="overflow-x-auto">
      <table class="min-w-full border border-gray-200 rounded-lg shadow">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-2 text-left">ID</th>
            <th class="px-4 py-2 text-left">หัวข้อ</th>
            <th class="px-4 py-2 text-left">ผู้แจ้ง</th>
            <th class="px-4 py-2 text-left">สถานะ</th>
            <th class="px-4 py-2 text-left">วันที่</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="item in repairs" :key="item.id" class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ item.id }}</td>
            <td class="px-4 py-2">{{ item.title }}</td>
            <td class="px-4 py-2">{{ item.user }}</td>
            <td class="px-4 py-2">
              <span
                :class="[
                  'px-2 py-1 text-sm rounded-full',
                  item.status === 'รอดำเนินการ' ? 'bg-yellow-100 text-yellow-800' :
                  item.status === 'กำลังดำเนินการ' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                ]"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="px-4 py-2">{{ item.date }}</td>
            
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Card View -->
    <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in repairs"
        :key="item.id"
        class="p-4 border rounded-lg shadow hover:shadow-md transition glass-effect"
      >
        <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
        <p class="text-sm text-gray-600">ผู้แจ้ง: {{ item.user }}</p>
        <p class="text-sm text-gray-600">วันที่: {{ item.date }}</p>
        <p class="mt-2">
          <span
            :class="[
              'px-2 py-1 text-sm rounded-full',
              item.status === 'รอดำเนินการ' ? 'bg-yellow-100 text-yellow-800' :
              item.status === 'กำลังดำเนินการ' ? 'bg-blue-100 text-blue-800' :
              'bg-green-100 text-green-800'
            ]"
          >
            {{ item.status }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

