<script setup="ts">
import { errorMessages } from 'vue/compiler-sfc';

const username = ref("");
const password = ref("");
const confpassword = ref("");

const submitUserid = async () => {
    if (password.value !== confpassword.value) {
        error.value = "รหัสผ่านไม่ตรงกัน";
        return;
    }
    try {
        const response = await fetch("http://localhost:4000/api_users/postuserid", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
                confpassword: confpassword.value,

            }),
        });
        if (response.ok) {
            alert("กรุณากรอกเพื่อบันทึกข้อมูลใช้ครั้งถัดไป")
            navigateTo('/ip_detail')

        } else {
            alert("เกิดข้อผิดพลาดในการบันทึก");
        }

    } catch (error) {
        console.error("Error เพราะส้นตรีนนี่ ", error);

        res.status(500).json({
            message: "Server Error",
            error: errorMessages,
        });
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
            <form @submit.prevent="submitUserid" class="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <input v-model="username" type="text" placeholder="ชื่อผู้ใช้"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    required />
                <input v-model="password" type="password" placeholder="รหัสผ่าน"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    required />
                <input v-model="confpassword" type="password" placeholder="ยืนยันรหัสผ่าน"
                    class="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    required />
                <button
                    class="w-full border border-black text-white py-2 rounded hover:bg-white transition bg-gray-800 hover:text-gray-800 text-sm sm:text-base">
                    ถัดไป
                </button>
                
                
            </form>
        </div>
    </div>
</template>