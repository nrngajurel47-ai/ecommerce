<template>
  <div class="container mx-auto px-4 py-8" v-if="product">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-6">
      <ol class="flex gap-2">
        <li><router-link to="/" class="hover:text-[#f85606]">Home</router-link></li>
        <li>/</li>
        <li><router-link :to="`/category/${product.category}`" class="hover:text-[#f85606]">{{ product.category }}</router-link></li>
        <li>/</li>
        <li class="text-gray-900">{{ product.name }}</li>
      </ol>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Product Images -->
      <div class="lg:col-span-1">
        <div class="card p-4 sticky top-24">
          <img 
            :src="product.image" 
            :alt="product.name"
            class="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <div class="grid grid-cols-4 gap-2">
            <button 
              v-for="i in 4" 
              :key="i"
              class="border rounded overflow-hidden hover:border-[#f85606]"
            >
              <img :src="product.image" class="w-full aspect-square object-cover" />
            </button>
          </div>
        </div>
      </div>

      <!-- Product Info -->
      <div class="lg:col-span-2">
        <div class="card p-6 mb-6">
          <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
          
          <!-- Rating -->
          <div class="flex items-center gap-4 mb-6">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400 fill-current" v-for="i in 5" :key="i" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="ml-2 font-medium">{{ product.rating }}</span>
            </div>
            <span class="text-gray-400">|</span>
            <span class="text-gray-600">{{ product.reviews }} Reviews</span>
            <span class="text-gray-400">|</span>
            <span class="text-gray-600">{{ product.sold }} Sold</span>
          </div>

          <!-- Price -->
          <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <div class="flex items-center gap-4 mb-2">
              <span class="text-3xl font-bold text-[#f85606]">
                Rs. {{ product.price.toLocaleString('en-NP') }}
              </span>
              <span v-if="product.originalPrice" class="text-xl text-gray-400 line-through">
                Rs. {{ product.originalPrice.toLocaleString('en-NP') }}
              </span>
              <span v-if="product.discount" class="bg-[#f85606] text-white px-2 py-1 rounded text-sm font-bold">
                -{{ product.discount }}%
              </span>
            </div>
            <p class="text-sm text-gray-600">Inclusive of all taxes</p>
          </div>

          <!-- Stock Status -->
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-2">
              <span v-if="product.stock > 0" class="text-green-600 font-medium">✓ In Stock</span>
              <span v-else class="text-red-600 font-medium">✗ Out of Stock</span>
              <span class="text-gray-600">({{ product.stock }} available)</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-[#f85606] h-2 rounded-full" 
                :style="{ width: `${Math.min((product.stock / 100) * 100, 100)}%` }"
              ></div>
            </div>
          </div>

          <!-- Quantity Selector -->
          <div class="mb-6">
            <label class="block text-sm font-medium mb-2">Quantity</label>
            <div class="flex items-center gap-2">
              <button 
                @click="decrementQuantity"
                class="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <input 
                v-model.number="quantity"
                type="number" 
                min="1"
                :max="product.stock"
                class="w-20 text-center border rounded py-2"
              />
              <button 
                @click="incrementQuantity"
                class="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <button 
              @click="handleAddToCart"
              class="btn-primary flex-1 py-4 text-lg"
            >
              Add to Cart
            </button>
            <button 
              @click="handleBuyNow"
              class="btn-secondary flex-1 py-4 text-lg"
            >
              Buy Now
            </button>
          </div>
        </div>

        <!-- Description -->
        <div class="card p-6 mb-6">
          <h2 class="text-xl font-bold mb-4">Product Description</h2>
          <p class="text-gray-700 leading-relaxed">{{ product.description }}</p>
        </div>

        <!-- Specifications -->
        <div class="card p-6">
          <h2 class="text-xl font-bold mb-4">Specifications</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="border-b pb-2">
              <span class="text-gray-600">Category</span>
              <p class="font-medium">{{ product.category }}</p>
            </div>
            <div class="border-b pb-2">
              <span class="text-gray-600">Brand</span>
              <p class="font-medium">Premium Brand</p>
            </div>
            <div class="border-b pb-2">
              <span class="text-gray-600">Warranty</span>
              <p class="font-medium">1 Year</p>
            </div>
            <div class="border-b pb-2">
              <span class="text-gray-600">Return Policy</span>
              <p class="font-medium">7 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '@shared/stores/productStore'
import { useCartStore } from '@shared/stores/cartStore'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() => {
  return productStore.getProductById(route.params.id)
})

function incrementQuantity() {
  if (quantity.value < product.value.stock) {
    quantity.value++
  }
}

function decrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function handleAddToCart() {
  const itemToAdd = { ...product.value, quantity: quantity.value }
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product.value)
  }
}

function handleBuyNow() {
  handleAddToCart()
  router.push('/checkout')
}
</script>
