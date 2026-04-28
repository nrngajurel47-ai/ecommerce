<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ categoryName }}</h1>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
    </div>

    <div v-if="products.length === 0" class="text-center py-16">
      <div class="text-6xl mb-4">📦</div>
      <h2 class="text-2xl font-bold mb-4">No products found</h2>
      <p class="text-gray-600">Check back later for new arrivals!</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@shared/stores/productStore'
import ProductCard from '@shared/components/ProductCard.vue'

const route = useRoute()
const productStore = useProductStore()

const categoryName = computed(() => {
  if (route.params.categoryId === 'all') return 'All Products'
  const category = productStore.categories.find(c => c.id === parseInt(route.params.categoryId))
  return category ? category.name : 'Products'
})

const products = computed(() => {
  return productStore.getProductsByCategory(route.params.categoryId)
})
</script>
