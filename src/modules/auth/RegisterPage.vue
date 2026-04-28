<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full">
      <div class="card p-8">
        <h1 class="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p class="text-center text-gray-600 mb-8">Join Daraj for the best shopping experience.</p>

        <form @submit.prevent="handleRegister" class="space-y-5">
          <div>
            <label class="block text-sm font-medium mb-2">Full Name</label>
            <input 
              v-model="formData.name"
              type="text" 
              required 
              class="input-field"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input 
              v-model="formData.email"
              type="email" 
              required 
              class="input-field"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Phone Number</label>
            <input 
              v-model="formData.phone"
              type="tel" 
              required 
              class="input-field"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Password</label>
            <input 
              v-model="formData.password"
              type="password" 
              required 
              class="input-field"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label class="flex items-start gap-2 text-sm">
              <input type="checkbox" required class="rounded mt-1" />
              <span>I agree to the <a href="#" class="text-[#f85606] hover:underline">Terms & Conditions</a> and <a href="#" class="text-[#f85606] hover:underline">Privacy Policy</a></span>
            </label>
          </div>

          <button type="submit" class="btn-primary w-full py-3 text-lg">
            Create Account
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Already have an account? 
            <router-link to="/login" class="text-[#f85606] font-medium hover:underline">
              Login
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@shared/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
})

function handleRegister() {
  // Mock registration - in real app this would call an API
  const user = {
    name: formData.value.name,
    email: formData.value.email,
  }
  authStore.login(user)
  router.push('/')
}
</script>
