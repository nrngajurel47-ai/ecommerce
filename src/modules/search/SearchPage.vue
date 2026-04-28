<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Search Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Search Results</h1>
      <p v-if="searchQuery" class="text-gray-600">
        Showing results for "{{ searchQuery }}" ({{ filteredProducts.length }} items)
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Filters Sidebar -->
      <div class="hidden md:block">
        <div class="card p-4 sticky top-24">
          <h3 class="font-bold mb-4">Filters</h3>
          
          <!-- Category Filter -->
          <div class="mb-6">
            <h4 class="font-medium mb-2">Category</h4>
            <div class="space-y-2">
              <label class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded" />
                <span>All Categories</span>
              </label>
              <label v-for="cat in productStore.categories" :key="cat.id" class="flex items-center gap-2 text-sm">
                <input type="checkbox" class="rounded" />
                <span>{{ cat.name }}</span>
              </label>
            </div>
          </div>

          <!-- Price Range -->
          <div class="mb-6">
            <h4 class="font-medium mb-2">Price Range</h4>
            <div class="flex gap-2">
              <input type="number" placeholder="Min" class="input-field text-sm py-1" />
              <input type="number" placeholder="Max" class="input-field text-sm py-1" />
            </div>
            <button class="btn-primary w-full mt-2 text-sm py-2">Apply</button>
          </div>

          <!-- Rating Filter -->
          <div class="mb-6">
            <h4 class="font-medium mb-2">Rating</h4>
            <div class="space-y-2">
              <label class="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="rating" class="rounded" />
                <div class="flex">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" v-for="i in 4" :key="i" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span>& Up</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="md:col-span-3">
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id"
            :product="product"
          />
        </div>

        <div v-else class="text-center py-16">
          <div class="text-6xl mb-4">🔍</div>
          <h2 class="text-2xl font-bold mb-4">No products found</h2>
          <p class="text-gray-600 mb-8">Try adjusting your search or filters</p>
          <router-link to="/" class="btn-primary inline-block px-8 py-3">
            Browse All Products
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@shared/stores/productStore'
import ProductCard from '@shared/components/ProductCard.vue'

const route = useRoute()
const productStore = useProductStore()

const searchQuery = ref(route.query.q || '')

const filteredProducts = computed(() => {
  if (!searchQuery.value) return []
  return productStore.searchProducts(searchQuery.value)
})

watch(() => route.query.q, (newQuery) => {
  searchQuery.value = newQuery || ''
})
</script>
