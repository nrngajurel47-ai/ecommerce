import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => user.value !== null)
  
  function login(userData) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }
  
  function logout() {
    user.value = null
    localStorage.removeItem('user')
  }
  
  function loadFromLocalStorage() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }
  
  // Load user on initialization
  loadFromLocalStorage()
  
  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
})
