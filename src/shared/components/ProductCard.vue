<template>
  <div class="card h-full flex flex-col">
    <!-- Product Image -->
    <router-link :to="`/product/${product.id}`" class="relative aspect-square overflow-hidden rounded-lg mb-3">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      <!-- Discount Badge -->
      <div v-if="product.discount" class="absolute top-2 left-2 bg-[#f85606] text-white text-xs font-bold px-2 py-1 rounded">
        -{{ product.discount }}%
      </div>
      <!-- Flash Sale Badge -->
      <div v-if="product.onFlashSale" class="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
        ⚡ Flash Sale
      </div>
    </router-link>

    <!-- Product Info -->
    <router-link :to="`/product/${product.id}`" class="flex-1">
      <h3 class="text-sm line-clamp-2 mb-2 hover:text-[#f85606] transition-colors">
        {{ product.name }}
      </h3>
      
      <!-- Price -->
      <div class="mb-2">
        <div class="flex items-center gap-2">
          <span class="text-lg font-bold text-[#f85606]">
            Rs. {{ product.price.toLocaleString('en-NP') }}
          </span>
          <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">
            Rs. {{ product.originalPrice.toLocaleString('en-NP') }}
          </span>
        </div>
      </div>

      <!-- Rating & Sold -->
      <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
        <div class="flex items-center">
          <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="ml-1">{{ product.rating }}</span>
        </div>
        <span>•</span>
        <span>{{ product.sold }} sold</span>
      </div>

      <!-- Location -->
      <div class="text-xs text-gray-400">
        Kathmandu, Nepal
      </div>
    </router-link>

    <!-- Add to Cart Button -->
    <button 
      @click="handleAddToCart"
      class="btn-primary w-full mt-3 text-sm"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '@shared/stores/cartStore'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cartStore = useCartStore()

function handleAddToCart() {
  cartStore.addToCart(props.product)
}
</script>
