<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Top Bar -->
    <div class="bg-[#0f1471] text-white text-xs py-2">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex gap-4">
          <a href="#" class="hover:text-gray-300">Sell on Daraj</a>
          <a href="#" class="hover:text-gray-300">Customer Care</a>
        </div>
        <div class="flex gap-4">
          <a href="/login" v-if="!authStore.isAuthenticated" class="hover:text-gray-300">Login</a>
          <a href="/register" v-if="!authStore.isAuthenticated" class="hover:text-gray-300">Sign Up</a>
          <div v-else class="flex items-center gap-2">
            <span>{{ authStore.user?.name }}</span>
            <button @click="handleLogout" class="hover:text-gray-300">Logout</button>
          </div>
          <a href="/orders" class="hover:text-gray-300">Orders</a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center gap-8">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <div class="text-3xl font-bold text-[#f85606]">Daraj</div>
          <span class="text-xs text-gray-500">Online Shop</span>
        </router-link>

        <!-- Search Bar -->
        <div class="flex-1 max-w-2xl">
          <form @submit.prevent="handleSearch" class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search in Daraj"
              class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#f85606]"
            />
            <button type="submit" class="absolute right-0 top-0 h-full bg-[#f85606] text-white px-6 rounded-r-lg hover:bg-[#e04d04]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </form>
        </div>

        <!-- Cart Icon -->
        <router-link to="/cart" class="relative flex items-center gap-2 text-gray-700 hover:text-[#f85606]">
          <div class="relative">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span v-if="cartStore.totalItems > 0" 
                  class="absolute -top-2 -right-2 bg-[#f85606] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {{ cartStore.totalItems }}
            </span>
          </div>
          <span class="hidden md:block font-medium">Cart</span>
        </router-link>
      </div>
    </div>

    <!-- Categories Navigation -->
    <nav class="border-t">
      <div class="container mx-auto px-4">
        <div class="flex items-center gap-6 overflow-x-auto py-3">
          <router-link to="/category/all" class="flex items-center gap-2 text-sm font-medium whitespace-nowrap hover:text-[#f85606]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            All Categories
          </router-link>
          <template v-for="category in productStore.categories" :key="category.id">
            <router-link 
              :to="`/category/${category.id}`"
              class="flex items-center gap-2 text-sm whitespace-nowrap hover:text-[#f85606]"
            >
              <span>{{ category.icon }}</span>
              <span>{{ category.name }}</span>
            </router-link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@shared/stores/cartStore'
import { useAuthStore } from '@shared/stores/authStore'
import { useProductStore } from '@shared/stores/productStore'

const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()
const productStore = useProductStore()

const searchQuery = ref('')

function handleSearch() {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value } })
    searchQuery.value = ''
  }
}

function handleLogout() {
  authStore.logout()
  router.push('/')
}
</script>
