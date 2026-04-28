<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Checkout</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Checkout Form -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Shipping Address -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-6">Shipping Address</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-2">Full Name</label>
                <input v-model="formData.fullName" type="text" required class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Phone Number</label>
                <input v-model="formData.phone" type="tel" required class="input-field" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Address</label>
              <input v-model="formData.address" type="text" required class="input-field" placeholder="Street address" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium mb-2">Province</label>
                <select v-model="formData.province" required class="input-field">
                  <option value="">Select Province</option>
                  <option value="1">Province No. 1</option>
                  <option value="2">Madhesh Pradesh</option>
                  <option value="3">Bagmati Pradesh</option>
                  <option value="4">Gandaki Pradesh</option>
                  <option value="5">Lumbini Pradesh</option>
                  <option value="6">Karnali Pradesh</option>
                  <option value="7">Sudurpashchim Pradesh</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">City</label>
                <input v-model="formData.city" type="text" required class="input-field" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Postal Code</label>
                <input v-model="formData.postalCode" type="text" required class="input-field" />
              </div>
            </div>
          </form>
        </div>

        <!-- Payment Method -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-6">Payment Method</h2>
          <div class="space-y-3">
            <label class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-[#f85606]">
              <input type="radio" v-model="paymentMethod" value="cod" class="w-4 h-4" />
              <div class="flex-1">
                <div class="font-medium">Cash on Delivery</div>
                <div class="text-sm text-gray-600">Pay when you receive your order</div>
              </div>
              <span class="text-2xl">💵</span>
            </label>
            
            <label class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-[#f85606]">
              <input type="radio" v-model="paymentMethod" value="esewa" class="w-4 h-4" />
              <div class="flex-1">
                <div class="font-medium">eSewa</div>
                <div class="text-sm text-gray-600">Pay with eSewa wallet</div>
              </div>
              <span class="text-2xl">📱</span>
            </label>

            <label class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-[#f85606]">
              <input type="radio" v-model="paymentMethod" value="khalti" class="w-4 h-4" />
              <div class="flex-1">
                <div class="font-medium">Khalti</div>
                <div class="text-sm text-gray-600">Pay with Khalti digital wallet</div>
              </div>
              <span class="text-2xl">🟣</span>
            </label>

            <label class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-[#f85606]">
              <input type="radio" v-model="paymentMethod" value="card" class="w-4 h-4" />
              <div class="flex-1">
                <div class="font-medium">Credit/Debit Card</div>
                <div class="text-sm text-gray-600">Visa, Mastercard, etc.</div>
              </div>
              <span class="text-2xl">💳</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="card p-6 sticky top-24">
          <h2 class="text-xl font-bold mb-6">Order Summary</h2>
          
          <!-- Cart Items -->
          <div class="space-y-3 mb-6 max-h-64 overflow-y-auto">
            <div v-for="item in cartStore.items" :key="item.id" class="flex gap-3">
              <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded" />
              <div class="flex-1 min-w-0">
                <div class="text-sm line-clamp-2">{{ item.name }}</div>
                <div class="text-xs text-gray-600">Qty: {{ item.quantity }}</div>
                <div class="font-medium text-[#f85606]">Rs. {{ (item.price * item.quantity).toLocaleString() }}</div>
              </div>
            </div>
          </div>

          <div class="border-t pt-4 mb-6 space-y-2">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>Rs. {{ cartStore.totalPrice.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span class="text-green-600">FREE</span>
            </div>
          </div>

          <div class="border-t pt-4 mb-6">
            <div class="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span class="text-[#f85606]">Rs. {{ cartStore.totalPrice.toLocaleString() }}</span>
            </div>
          </div>

          <button 
            @click="handleSubmit"
            class="btn-primary w-full py-3 text-lg"
          >
            Place Order
          </button>

          <router-link to="/cart" class="text-[#f85606] text-center block mt-3 hover:underline">
            Back to Cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@shared/stores/cartStore'
import { useAuthStore } from '@shared/stores/authStore'

const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()

const paymentMethod = ref('cod')
const formData = ref({
  fullName: '',
  phone: '',
  address: '',
  province: '',
  city: '',
  postalCode: '',
})

function handleSubmit() {
  // In a real app, this would submit to an API
  alert('Order placed successfully! Thank you for shopping with Daraj.')
  cartStore.clearCart()
  router.push('/')
}
</script>
