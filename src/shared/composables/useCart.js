import { ref, computed } from 'vue'

export function useCart() {
  const isCartOpen = ref(false)
  
  function openCart() {
    isCartOpen.value = true
  }
  
  function closeCart() {
    isCartOpen.value = false
  }
  
  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }
  
  return {
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
  }
}
