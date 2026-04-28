<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">My Orders</h1>

    <div v-if="orders.length > 0" class="space-y-6">
      <div 
        v-for="order in orders" 
        :key="order.id"
        class="card p-6"
      >
        <div class="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b">
          <div>
            <div class="font-bold text-lg">Order #{{ order.id }}</div>
            <div class="text-sm text-gray-600">Placed on {{ order.date }}</div>
          </div>
          <div class="flex items-center gap-4">
            <span 
              class="px-3 py-1 rounded-full text-sm font-medium"
              :class="{
                'bg-green-100 text-green-700': order.status === 'Delivered',
                'bg-blue-100 text-blue-700': order.status === 'Processing',
                'bg-yellow-100 text-yellow-700': order.status === 'Shipped',
                'bg-red-100 text-red-700': order.status === 'Cancelled',
              }"
            >
              {{ order.status }}
            </span>
            <div class="font-bold text-[#f85606]">Rs. {{ order.total.toLocaleString() }}</div>
          </div>
        </div>

        <!-- Order Items -->
        <div class="space-y-3 mb-4">
          <div v-for="item in order.items" :key="item.id" class="flex gap-4">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded" />
            <div class="flex-1">
              <div class="font-medium">{{ item.name }}</div>
              <div class="text-sm text-gray-600">Qty: {{ item.quantity }}</div>
              <div class="text-[#f85606] font-medium">Rs. {{ (item.price * item.quantity).toLocaleString() }}</div>
            </div>
          </div>
        </div>

        <!-- Shipping Address -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="font-medium mb-2">Shipping Address</div>
          <div class="text-sm text-gray-600">
            {{ order.address.fullName }}<br />
            {{ order.address.address }}<br />
            {{ order.address.city }}, {{ order.address.postalCode }}<br />
            Phone: {{ order.address.phone }}
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-3 mt-4 pt-4 border-t">
          <button class="btn-primary px-6 py-2 text-sm">Track Order</button>
          <button v-if="order.status === 'Delivered'" class="border border-[#f85606] text-[#f85606] px-6 py-2 rounded text-sm hover:bg-orange-50">
            Write Review
          </button>
          <button v-if="order.status === 'Delivered'" class="border border-gray-300 text-gray-700 px-6 py-2 rounded text-sm hover:bg-gray-50">
            Return Item
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-16">
      <div class="text-6xl mb-4">📦</div>
      <h2 class="text-2xl font-bold mb-4">No orders yet</h2>
      <p class="text-gray-600 mb-8">Start shopping to see your orders here!</p>
      <router-link to="/" class="btn-primary inline-block px-8 py-3">
        Start Shopping
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mock orders data - in real app this would come from API
const orders = ref([
  {
    id: 'ORD-2025-001',
    date: 'Jan 15, 2025',
    status: 'Delivered',
    total: 179998,
    items: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 159999,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
      },
      {
        id: 3,
        name: 'Nike Air Jordan 1',
        price: 18999,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      },
    ],
    address: {
      fullName: 'Demo User',
      address: 'Thamel, Kathmandu',
      city: 'Kathmandu',
      postalCode: '44600',
      phone: '+977 9800000000',
    },
  },
])
</script>
