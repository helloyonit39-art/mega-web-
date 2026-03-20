
const products = [
  { id: 1, name: "Linen Throw No. 3", category: "textiles", price: 148, stock: 12, rating: 4.8, reviews: 34, image: "linen-throw.jpg", tags: ["new", "bestseller"] },
  { id: 2, name: "Stoneware Vessel", category: "ceramics", price: 89, stock: 7, rating: 4.6, reviews: 21, image: "stoneware-vessel.jpg", tags: ["handmade"] },
  { id: 3, name: "Walnut Tray", category: "home", price: 125, stock: 5, rating: 4.9, reviews: 58, image: "walnut-tray.jpg", tags: ["bestseller"] },
  { id: 4, name: "Wool Cushion", category: "textiles", price: 72, stock: 20, rating: 4.5, reviews: 17, image: "wool-cushion.jpg", tags: ["new"] },
  { id: 5, name: "Clay Plate Set", category: "ceramics", price: 110, stock: 9, rating: 4.7, reviews: 43, image: "clay-plate-set.jpg", tags: ["handmade", "bestseller"] },
  { id: 6, name: "Brass Candle Holder", category: "lighting", price: 64, stock: 15, rating: 4.4, reviews: 29, image: "brass-candle.jpg", tags: [] },
  { id: 7, name: "Linen Napkins (4)", category: "textiles", price: 48, stock: 30, rating: 4.3, reviews: 11, image: "linen-napkins.jpg", tags: ["new"] },
  { id: 8, name: "Stone Soap Dish", category: "home", price: 38, stock: 18, rating: 4.6, reviews: 25, image: "stone-soap-dish.jpg", tags: [] },
];

const categories = [
  { id: "textiles", label: "Textiles", count: 3 },
  { id: "ceramics", label: "Ceramics", count: 2 },
  { id: "home", label: "Home", count: 2 },
  { id: "lighting", label: "Lighting", count: 1 },
];

const users = [
  { id: 101, name: "Jane Doe", email: "jane@example.com", location: "San Francisco, CA", joined: "2024-03-15", orders: 5 },
  { id: 102, name: "Liam Chen", email: "liam@example.com", location: "New York, NY", joined: "2023-11-02", orders: 12 },
  { id: 103, name: "Amara Osei", email: "amara@example.com", location: "London, UK", joined: "2025-01-20", orders: 2 },
  { id: 104, name: "Sofia Ruiz", email: "sofia@example.com", location: "Madrid, Spain", joined: "2024-07-08", orders: 8 },
];

const orders = [
  {
    id: "ORD-001", userId: 101, date: "2026-03-10", status: "delivered", total: 237,
    items: [{ productId: 1, qty: 1 }, { productId: 6, qty: 1 }]
  },
  {
    id: "ORD-002", userId: 102, date: "2026-03-14", status: "shipped", total: 110,
    items: [{ productId: 5, qty: 1 }]
  },
  {
    id: "ORD-003", userId: 103, date: "2026-03-18", status: "processing", total: 158,
    items: [{ productId: 3, qty: 1 }, { productId: 8, qty: 1 }]
  },
  {
    id: "ORD-004", userId: 104, date: "2026-03-19", status: "delivered", total: 269,
    items: [{ productId: 2, qty: 1 }, { productId: 4, qty: 1 }, { productId: 7, qty: 1 }]
  },
];

const reviews = [
  { id: 1, productId: 3, userId: 101, rating: 5, comment: "Absolutely beautiful. Looks even better in person.", date: "2026-02-28" },
  { id: 2, productId: 1, userId: 104, rating: 5, comment: "Super soft and drapes perfectly. Worth every penny.", date: "2026-03-01" },
  { id: 3, productId: 5, userId: 102, rating: 4, comment: "Great quality, slight variation in glaze which adds character.", date: "2026-03-15" },
  { id: 4, productId: 2, userId: 103, rating: 5, comment: "Minimalist and perfect. Ships well packed too.", date: "2026-03-19" },
];

const siteStats = {
  totalProducts: 8,
  totalUsers: 4,
  totalOrders: 4,
  revenue: 774,
  avgOrderValue: 193.5,
};

// Helper: get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Helper: get orders by user ID
function getOrdersByUser(userId) {
  return orders.filter(o => o.userId === userId);
}

// Helper: get reviews by product ID
function getReviewsByProduct(productId) {
  return reviews.filter(r => r.productId === productId);
}

// Helper: get products by category
function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}