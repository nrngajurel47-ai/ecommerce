# Daraj - E-commerce Platform (Vue 3 + TailwindCSS)

A fully functional e-commerce frontend inspired by Daraz.com.np, built with Vue 3, TailwindCSS, Pinia, and Vue Router following Domain-Driven Design (DDD) modular architecture.

## 🚀 Features

### Core E-commerce Features
- **Home Page** - Hero banners, flash sales, featured products, categories
- **Product Listing** - Category-based product browsing with filters
- **Product Detail** - Full product information, image gallery, reviews, stock status
- **Shopping Cart** - Add/remove items, quantity management, price calculations
- **Checkout** - Shipping address form, multiple payment methods (COD, eSewa, Khalti, Card)
- **Search** - Product search with filtering options
- **Authentication** - Login/Register pages with social login UI
- **Order History** - View past orders with tracking

### Technical Features
- **DDD Modular Architecture** - Clean separation of concerns
- **Pinia State Management** - Cart, Auth, and Product stores
- **Vue Router** - Full routing with guards and lazy loading
- **Composables** - Reusable logic (useCurrency, useCart)
- **TailwindCSS v4** - Modern utility-first styling
- **Responsive Design** - Mobile-first approach
- **Local Storage Persistence** - Cart and auth state persistence

## 🏗️ Project Structure

```
src/
├── core/                    # Core application setup
│   ├── router.js           # Vue Router configuration
│   └── pinia.js            # Pinia store setup
├── modules/                 # Domain modules (DDD)
│   ├── home/               # Home page module
│   │   ├── HomePage.vue
│   │   └── CategoryPage.vue
│   ├── product/            # Product module
│   │   └── ProductDetailPage.vue
│   ├── cart/               # Cart module
│   │   └── CartPage.vue
│   ├── checkout/           # Checkout module
│   │   └── CheckoutPage.vue
│   ├── search/             # Search module
│   │   └── SearchPage.vue
│   ├── auth/               # Authentication module
│   │   ├── LoginPage.vue
│   │   └── RegisterPage.vue
│   └── order/              # Order module
│       └── OrderHistoryPage.vue
├── shared/                  # Shared resources
│   ├── components/         # Reusable components
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   └── ProductCard.vue
│   ├── stores/             # Pinia stores
│   │   ├── cartStore.js
│   │   ├── authStore.js
│   │   └── productStore.js
│   ├── composables/        # Reusable composables
│   │   ├── useCurrency.js
│   │   └── useCart.js
│   └── assets/             # Static assets
│       └── main.css
├── App.vue                  # Root component
└── main.js                  # Application entry point
```

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **TailwindCSS v4** - Utility-first CSS framework
- **Pinia** - Vue store with intuitive API
- **Vue Router 4** - Official router for Vue.js
- **Axios** - HTTP client

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Features

### Color Scheme
- Primary Orange: `#f85606` (Daraz-inspired)
- Secondary Blue: `#0f1471`
- Background Gray: `#f5f5f5`

### UI Components
- Responsive navigation header with search
- Product cards with hover effects
- Flash sale countdown timers
- Category icons grid
- Shopping cart sidebar
- Checkout form with validation
- Order status badges
- Social login buttons

### Special Features
- Flash Sale badges with animations
- Discount percentage displays
- Stock level indicators
- Rating stars display
- Breadcrumb navigation
- Sticky headers and sidebars
- Smooth page transitions

## 🔌 State Management

### Cart Store (`cartStore.js`)
- `items` - Cart items array
- `totalItems` - Computed total quantity
- `totalPrice` - Computed total price
- `addToCart(product)` - Add item to cart
- `removeFromCart(productId)` - Remove item
- `updateQuantity(productId, quantity)` - Update quantity
- `clearCart()` - Empty cart

### Auth Store (`authStore.js`)
- `user` - Current user object
- `isAuthenticated` - Computed auth status
- `login(userData)` - Login user
- `logout()` - Logout user

### Product Store (`productStore.js`)
- `products` - All products
- `categories` - Product categories
- `featuredProducts` - Featured items
- `flashSaleProducts` - Flash sale items
- `getProductById(id)` - Get single product
- `getProductsByCategory(categoryId)` - Filter by category
- `searchProducts(query)` - Search products

## 🌐 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Main landing page |
| `/product/:id` | ProductDetailPage | Product details |
| `/cart` | CartPage | Shopping cart |
| `/checkout` | CheckoutPage | Checkout process |
| `/search` | SearchPage | Search results |
| `/category/:id` | CategoryPage | Category listing |
| `/orders` | OrderHistoryPage | User orders (protected) |
| `/login` | LoginPage | User login |
| `/register` | RegisterPage | User registration |

## 💡 Key Highlights

1. **Modular DDD Architecture** - Each domain has its own module
2. **Composition API** - Using `<script setup>` syntax throughout
3. **Reusable Components** - Shared components for consistency
4. **Composables** - Extracted reusable logic
5. **Type Safety Ready** - Easy to add TypeScript
6. **Performance Optimized** - Lazy loading routes
7. **SEO Friendly** - Meta tags and semantic HTML
8. **Accessibility** - Proper ARIA labels and keyboard navigation

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] User profile management
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Real-time order tracking
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] PWA capabilities
- [ ] Image optimization
- [ ] Infinite scroll pagination

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

Built with ❤️ for Nepal's e-commerce community

---

**Note**: This is a frontend demo with mock data. In production, you would integrate with a backend API for real data persistence, authentication, and payment processing.
