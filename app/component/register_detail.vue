<script setup lang="ts">

const name = ref("")
const station = ref("");
const building = ref("");
const floor = ref<number | null>(null);
const anydesk = ref("");

const submitRegister = async () => {
    try {
        const response = await fetch("http://localhost:4000/api_users/postdetailuser", {
            method: "POST",
            headers: { "Conten  t-Type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                station: station.value,
                building: building.value,
                floor: floor.value,
                anydesk: anydesk.value,
                
            })
        });
        if (response.ok) {
            alert("ลงทะเบียนสำเร็จ")
            navigateTo('/app/pages/index.vue')
        } else {
            alert("เกิดข้อผิดพลาดในการลงทะเบียนโปรดลองใหม่")
        }

    } catch (error) {
        console.error("Error", error);
    }
};

</script>
<template>

    <Head>
        <title>สมัครสมาชิก - ระบบแจ้งซ่อม</title>
    </Head>
    <div class="flex items-center justify-center p-6 py-16">
        <div class="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
            <h2 class="text-xl sm:text-2xl font-semibold text-center text-black mb-4">
                สมัครสมาชิก
            </h2>
            <form @submit.prevent="submitRegister" class="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <input v-model="station" type="text" placeholder="หน่วยงาน"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    required />
                <input v-model="building" type="text" placeholder="อาคาร"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required/>
                <input v-model="floor" type="text" placeholder="ชั้น"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required/>
                <input v-model="anydesk" type="text" placeholder="Anydesk (ไม่จำเป็น)"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required/>
                <button
                    class="w-full border border-black text-white py-2 rounded hover:bg-white transition bg-gray-800 hover:text-gray-800 text-sm sm:text-base">
                    ลงทะเบียน
                </button>
            </form>
        </div>
    </div>
</template>