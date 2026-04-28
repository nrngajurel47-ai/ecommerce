import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const categories = ref([
    { id: 1, name: 'Electronics', icon: '📱' },
    { id: 2, name: 'Fashion', icon: '👕' },
    { id: 3, name: 'Home & Living', icon: '🏠' },
    { id: 4, name: 'Beauty & Personal Care', icon: '💄' },
    { id: 5, name: 'Sports & Outdoors', icon: '⚽' },
    { id: 6, name: 'Groceries', icon: '🛒' },
    { id: 7, name: 'Baby & Kids', icon: '👶' },
    { id: 8, name: 'Automotive', icon: '🚗' },
  ])
  
  const featuredProducts = computed(() => {
    return products.value.filter(p => p.isFeatured).slice(0, 10)
  })
  
  const flashSaleProducts = computed(() => {
    return products.value.filter(p => p.onFlashSale).slice(0, 8)
  })
  
  function loadProducts() {
    // Mock data - in real app this would come from API
    products.value = [
      {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 159999,
        originalPrice: 179999,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
        rating: 4.8,
        reviews: 245,
        sold: 1200,
        category: 'Electronics',
        isFeatured: true,
        onFlashSale: true,
        discount: 11,
        description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
        stock: 50,
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 149999,
        originalPrice: 169999,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
        rating: 4.7,
        reviews: 189,
        sold: 980,
        category: 'Electronics',
        isFeatured: true,
        onFlashSale: false,
        discount: 12,
        description: 'Premium Android smartphone with S Pen and AI features.',
        stock: 35,
      },
      {
        id: 3,
        name: 'Nike Air Jordan 1',
        price: 18999,
        originalPrice: 24999,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
        rating: 4.9,
        reviews: 567,
        sold: 2340,
        category: 'Fashion',
        isFeatured: true,
        onFlashSale: true,
        discount: 24,
        description: 'Classic basketball sneakers with premium leather upper.',
        stock: 120,
      },
      {
        id: 4,
        name: 'Sony WH-1000XM5 Headphones',
        price: 34999,
        originalPrice: 44999,
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
        rating: 4.8,
        reviews: 423,
        sold: 1560,
        category: 'Electronics',
        isFeatured: true,
        onFlashSale: false,
        discount: 22,
        description: 'Industry-leading noise canceling wireless headphones.',
        stock: 75,
      },
      {
        id: 5,
        name: 'MacBook Pro 16"',
        price: 299999,
        originalPrice: 349999,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400',
        rating: 4.9,
        reviews: 312,
        sold: 450,
        category: 'Electronics',
        isFeatured: true,
        onFlashSale: true,
        discount: 14,
        description: 'Powerful laptop with M3 Pro chip for professionals.',
        stock: 25,
      },
      {
        id: 6,
        name: 'Adidas Running Shoes',
        price: 12999,
        originalPrice: 16999,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        rating: 4.6,
        reviews: 789,
        sold: 3200,
        category: 'Fashion',
        isFeatured: false,
        onFlashSale: true,
        discount: 24,
        description: 'Lightweight running shoes with responsive cushioning.',
        stock: 200,
      },
      {
        id: 7,
        name: 'Smart Watch Series 9',
        price: 49999,
        originalPrice: 59999,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
        rating: 4.7,
        reviews: 234,
        sold: 890,
        category: 'Electronics',
        isFeatured: true,
        onFlashSale: false,
        discount: 17,
        description: 'Advanced health and fitness tracking smartwatch.',
        stock: 60,
      },
      {
        id: 8,
        name: 'Gaming Chair Pro',
        price: 24999,
        originalPrice: 34999,
        image: 'https://images.unsplash.com/photo-1598550476439-cce12e6dac5b?w=400',
        rating: 4.5,
        reviews: 456,
        sold: 1230,
        category: 'Home & Living',
        isFeatured: false,
        onFlashSale: true,
        discount: 29,
        description: 'Ergonomic gaming chair with lumbar support.',
        stock: 45,
      },
    ]
  }
  
  function getProductById(id) {
    return products.value.find(p => p.id === parseInt(id))
  }
  
  function getProductsByCategory(categoryId) {
    if (categoryId === 'all') return products.value
    const category = categories.value.find(c => c.id === parseInt(categoryId))
    if (!category) return []
    return products.value.filter(p => p.category === category.name)
  }
  
  function searchProducts(query) {
    if (!query) return []
    const lowerQuery = query.toLowerCase()
    return products.value.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
    )
  }
  
  // Initialize products
  loadProducts()
  
  return {
    products,
    categories,
    featuredProducts,
    flashSaleProducts,
    getProductById,
    getProductsByCategory,
    searchProducts,
  }
})
