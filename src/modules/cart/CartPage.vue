<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

    <div v-if="cartStore.items.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-4">
        <div 
          v-for="item in cartStore.items" 
          :key="item.id"
          class="card p-4 flex gap-4"
        >
          <!-- Product Image -->
          <router-link :to="`/product/${item.id}`" class="w-24 h-24 flex-shrink-0">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover rounded" />
          </router-link>

          <!-- Product Info -->
          <div class="flex-1">
            <router-link :to="`/product/${item.id}`" class="font-medium hover:text-[#f85606] line-clamp-2">
              {{ item.name }}
            </router-link>
            
            <div class="mt-2">
              <span class="text-lg font-bold text-[#f85606]">
                Rs. {{ item.price.toLocaleString('en-NP') }}
              </span>
              <span v-if="item.originalPrice" class="text-sm text-gray-400 line-through ml-2">
                Rs. {{ item.originalPrice.toLocaleString('en-NP') }}
              </span>
            </div>

            <!-- Quantity Controls -->
            <div class="flex items-center gap-4 mt-3">
              <div class="flex items-center border rounded">
                <button 
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  class="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span class="px-4 py-1 border-x">{{ item.quantity }}</span>
                <button 
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button 
                @click="removeFromCart(item.id)"
                class="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>

          <!-- Subtotal -->
          <div class="text-right">
            <div class="font-bold text-lg">
              Rs. {{ (item.price * item.quantity).toLocaleString('en-NP') }}
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="card p-6 sticky top-24">
          <h2 class="text-xl font-bold mb-6">Order Summary</h2>
          
          <div class="space-y-3 mb-6">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal ({{ cartStore.totalItems }} items)</span>
              <span>Rs. {{ cartStore.totalPrice.toLocaleString('en-NP') }}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span class="text-green-600">FREE</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>Rs. 0</span>
            </div>
          </div>

          <div class="border-t pt-4 mb-6">
            <div class="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span class="text-[#f85606]">Rs. {{ cartStore.totalPrice.toLocaleString('en-NP') }}</span>
            </div>
          </div>

          <router-link to="/checkout" class="btn-primary w-full py-3 block text-center mb-3">
            Proceed to Checkout
          </router-link>

          <router-link to="/" class="text-[#f85606] text-center block hover:underline">
            Continue Shopping
          </router-link>

          <!-- Benefits -->
          <div class="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Free Delivery</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Cash on Delivery</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>7 Days Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty Cart -->
    <div v-else class="text-center py-16">
      <div class="text-6xl mb-4">🛒</div>
      <h2 class="text-2xl font-bold mb-4">Your cart is empty</h2>
      <p class="text-gray-600 mb-8">Add some products to get started!</p>
      <router-link to="/" class="btn-primary inline-block px-8 py-3">
        Start Shopping
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@shared/stores/cartStore'

const cartStore = useCartStore()

function updateQuantity(productId, newQuantity) {
  cartStore.updateQuantity(productId, newQuantity)
}

function removeFromCart(productId) {
  cartStore.removeFromCart(productId)
}
</script>
