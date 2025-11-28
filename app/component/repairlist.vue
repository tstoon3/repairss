<script setup lang="ts">
import { ref, onMounted } from "vue";

interface RepairItem {
  id: number;
  service_type: string | null;
  name: string;
  status: string | null;
  note: string;
  created_at: string;
}

// เก็บข้อมูลจาก API
const repairs = ref<RepairItem[]>([]);

// ฟังก์ชันดึงข้อมูลจาก API
const fetchRepairs = async () => {
  try {
    const res = await fetch("http://localhost:4000/api_cases/getrepairs");
    const data: RepairItem[] = await res.json(); // แปลงเป็น JSON แล้วเก็บ
    repairs.value = data;
  } catch (err) {
    console.error("โหลดข้อมูลล้มเหลว:", err);
  }
};

const formatDate = (datetime: string | number | Date) =>
datetime ? new Date(datetime).toLocaleDateString("th-TH") : "-";

const formatTime = (datetime: string | number | Date) =>
datetime ? new Date(datetime).toLocaleTimeString("th-TH", { hour12: false }) : "-";

// ดึงข้อมูลทันทีเมื่อ component ถูก mount
onMounted(fetchRepairs);

//เหลือ table รีเซ็ท

</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">📋 รายการแจ้งซ่อม</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-200 rounded-lg shadow">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-2 text-left">ID</th>
            <th class="px-4 py-2 text-left">หัวข้อ</th>
            <th class="px-4 py-2 text-left">ผู้แจ้ง</th>
            <th class="px-4 py-2 text-left">อาการที่แจ้ง</th>
            <th class="px-4 py-2 text-left">สถานะ</th>
            <th class="px-4 py-2 text-left">วันที่</th>
            <th class="px-4 py-2 text-left">เวลา</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="item in repairs" :key="item.id" class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ item.id }}</td>
            <td class="px-4 py-2">{{ item.service_type }}</td>
            <td class="px-4 py-2">{{ item.name }}</td>
            <td class="px-4 py-2 truncate max-w-[200px]">{{ item.note }}</td>
            <td class="px-4 py-2">
              <span
                :class="[
                  'px-2 py-1 text-sm rounded-full',
                  item.status === 'รอดำเนินการ'
                    ? 'bg-yellow-100 text-yellow-800'
                    : item.status === 'กำลังดำเนินการ'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                ]"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="px-4 py-2">{{formatDate(item.created_at)}}</td>
            <td class="px-4 py-2">{{formatTime(item.created_at)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
