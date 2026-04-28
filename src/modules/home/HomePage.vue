<template>
  <div class="min-h-screen">
    <!-- Hero Banner -->
    <section class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- Main Banner -->
        <div class="lg:col-span-2 relative h-64 md:h-96 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
            alt="Hero Banner"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div class="text-white p-8">
              <h2 class="text-3xl md:text-5xl font-bold mb-4">Mega Sale!</h2>
              <p class="text-lg md:text-xl mb-6">Up to 80% Off on Electronics</p>
              <button class="btn-primary text-lg px-8 py-3">Shop Now</button>
            </div>
          </div>
        </div>

        <!-- Side Banners -->
        <div class="hidden lg:flex flex-col gap-4">
          <div class="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
            <div class="text-center p-6">
              <h3 class="text-2xl font-bold mb-2">Fashion Week</h3>
              <p class="mb-4">50% Off</p>
              <button class="bg-white text-purple-500 px-4 py-2 rounded font-bold hover:bg-gray-100">Explore</button>
            </div>
          </div>
          <div class="flex-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
            <div class="text-center p-6">
              <h3 class="text-2xl font-bold mb-2">Home & Living</h3>
              <p class="mb-4">From Rs. 999</p>
              <button class="bg-white text-green-500 px-4 py-2 rounded font-bold hover:bg-gray-100">Shop</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-6">Shop by Category</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <router-link 
          v-for="category in productStore.categories" 
          :key="category.id"
          :to="`/category/${category.id}`"
          class="card flex flex-col items-center p-4 hover:border-[#f85606] transition-colors cursor-pointer"
        >
          <div class="text-4xl mb-2">{{ category.icon }}</div>
          <span class="text-sm text-center font-medium">{{ category.name }}</span>
        </router-link>
      </div>
    </section>

    <!-- Flash Sale Section -->
    <section class="container mx-auto px-4 py-8" v-if="productStore.flashSaleProducts.length > 0">
      <div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 text-white mb-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-3xl font-bold flex items-center gap-2">
              ⚡ Flash Sale
            </h2>
            <p class="mt-2">Ends in:</p>
            <div class="flex gap-2 mt-2">
              <div class="bg-white text-red-500 px-3 py-1 rounded font-bold">08</div>
              <div class="bg-white text-red-500 px-3 py-1 rounded font-bold">:</div>
              <div class="bg-white text-red-500 px-3 py-1 rounded font-bold">45</div>
              <div class="bg-white text-red-500 px-3 py-1 rounded font-bold">:</div>
              <div class="bg-white text-red-500 px-3 py-1 rounded font-bold">32</div>
            </div>
          </div>
          <button class="bg-white text-red-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <ProductCard 
          v-for="product in productStore.flashSaleProducts" 
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <!-- Featured Products -->
    <section class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold">Featured Products</h2>
        <router-link to="/category/all" class="text-[#f85606] font-medium hover:underline">
          View All →
        </router-link>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ProductCard 
          v-for="product in productStore.featuredProducts" 
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <!-- Just For You Section -->
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-6">Just For You</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ProductCard 
          v-for="product in productStore.products.slice(0, 10)" 
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="text-center mt-8">
        <button class="btn-primary px-8 py-3">Load More</button>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="card flex flex-col items-center text-center p-6">
          <div class="text-4xl mb-3">🚚</div>
          <h3 class="font-bold mb-2">Free Delivery</h3>
          <p class="text-sm text-gray-600">On orders above Rs. 1000</p>
        </div>
        <div class="card flex flex-col items-center text-center p-6">
          <div class="text-4xl mb-3">💰</div>
          <h3 class="font-bold mb-2">Cash on Delivery</h3>
          <p class="text-sm text-gray-600">Pay when you receive</p>
        </div>
        <div class="card flex flex-col items-center text-center p-6">
          <div class="text-4xl mb-3">↩️</div>
          <h3 class="font-bold mb-2">Easy Returns</h3>
          <p class="text-sm text-gray-600">7 days return policy</p>
        </div>
        <div class="card flex flex-col items-center text-center p-6">
          <div class="text-4xl mb-3">🔒</div>
          <h3 class="font-bold mb-2">Secure Payment</h3>
          <p class="text-sm text-gray-600">100% secure transactions</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from '@shared/stores/productStore'
import ProductCard from '@shared/components/ProductCard.vue'

const productStore = useProductStore()
</script>
