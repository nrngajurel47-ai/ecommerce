import { ref } from 'vue'

export function useCurrency() {
  const currency = 'NPR'
  
  function formatPrice(price) {
    return `Rs. ${price.toLocaleString('en-NP')}`
  }
  
  function formatDiscount(originalPrice, salePrice) {
    const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100)
    return `${discount}% OFF`
  }
  
  return {
    currency,
    formatPrice,
    formatDiscount,
  }
}
