<script setup lang="ts">
import { ref } from 'vue';

function resetForm() {
  // ✅ รีเซ็ตทุกตัวในบรรทัดเดียวด้วย array + forEach
  [name, station, building, floor, anydesk, service_type, note].forEach(field => {
    if (typeof field.value === "number") field.value = null;
    else field.value = "";
  });
}


const name = ref("");
const station = ref("");
const building = ref("");
const floor = ref<number | null>(null);
const anydesk = ref("");
const service_type = ref("");
const note = ref("");


const submitForm = async () => {
  try{
    const response = await fetch("http://localhost:4000/api/postrepairs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        station: station.value,
        building: building.value,
        floor: floor.value,
        anydesk: anydesk.value,
        service_type: service_type.value,
        note: note.value,
      }),
    });

     if (response.ok) {
      alert("บันทึกสำเร็จ!");
      resetForm();

    } else {
      alert("เกิดข้อผิดพลาดในการบันทึก");
    }

} catch(error){
    console.error("Error เพราะส้นนี่",error);
  }

  
};
</script>

<template>
  <div class="flex items-center justify-center p-4">
    <div class="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
      <h2 class="text-xl sm:text-2xl font-semibold text-center text-blue-600 mb-4">
        บันทึกแจ้งซ่อม
      </h2>
      <form @submit.prevent="submitForm" class="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        <input v-model="name" type="text" placeholder="ชื่อ"
          class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required />
        <input v-model="station" type="text" placeholder="หน่วยงาน"
          class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required />
        <input v-model="building" type="text" placeholder="อาคาร"
          class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
        <input v-model.number="floor" type="number" min="0" max="10" placeholder="ชั้น"
          class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
        <input v-model="anydesk" type="text" placeholder="AnyDesk"
          class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
        <div>
          <label for="service_list" class="block mb-1 text-sm sm:text-base font-medium text-gray-700">
            ประเภทการรับบริการ :
          </label>
          <select v-model="service_type" name="service_type" id="service_type"
            class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            required>
            <option value="" disabled>-- เลือกหัวข้อ --</option>
            <option value="computerPC">คอมพิวเตอร์ PC</option>
            <option value="network">อินเตอร์เน็ต</option>
            <option value="printer">Printer</option>
            <option value="notebook">NOTEBOOK</option>
            <option value="sarabun">สารบัญ</option>
            <option value="warranty_expired">เครื่องหมดสัญญา</option>
            <option value="other">อื่น ๆ </option>
          </select>
        </div><input v-model="note" type="text" placeholder="รายละเอียด"
          class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required />
        <button 
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 text-sm sm:text-base">
          ส่งข้อมูล
        </button>
      </form>
    </div>
  </div>
</template>
