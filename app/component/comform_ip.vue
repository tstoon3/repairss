<script setup>

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
      <h2 class="text-xl sm:text-2xl font-semibold text-center text-blue-600 mb-4">
        บันทึกแจ้งซ่อม
      </h2>
      <form class="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        <input type="text" placeholder="ชื่อ" class="w-full border rounded px-3 py-2 text-sm sm:text-base" required />
        <input type="text" placeholder="หน่วยงาน" class="w-full border rounded px-3 py-2 text-sm sm:text-base" required />
        <input type="text" placeholder="อาคาร" class="w-full border rounded px-3 py-2 text-sm sm:text-base" />
        <input type="text" placeholder="ชั้น" class="w-full border rounded px-3 py-2 text-sm sm:text-base" />
        <textarea
          class="w-full h-28 sm:h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
          placeholder="อาการที่รับแจ้ง..." required></textarea>

        <div>
          <label for="service_list" class="block mb-1 text-sm sm:text-base font-medium text-gray-700">
            ประเภทการรับบริการ :
          </label>
          <select name="service_list" id="service_list"
            class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required>
            <option disabled selected>-- เลือกหัวข้อ --</option>
            <option value="computer">คอมพิวเตอร์ PC</option>
            <option value="notebook">คอมพิวเตอร์ NOTEBOOK</option>
            <option value="printer">Printer</option>
            <option value="warranty_expired">เครื่องหมดสัญญา</option>
            <option value="other">อื่น ๆ </option>
          </select>
        </div>

        <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 text-sm sm:text-base">
          ส่งข้อมูล
        </button>
      </form>
    </div>
  </div>
</template>
