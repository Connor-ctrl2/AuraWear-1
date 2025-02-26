document.addEventListener('DOMContentLoaded', async () => {
  loadFeaturedProducts();
  loadCartItems();
});

async function loadFeaturedProducts() {
  const productsDiv = document.querySelector('.product-grid');
  // Fetch products from your database or API and display them
  // Example:
  const products = [
      { id: 1, name: 'T-Shirt', price: 20 },
      { id: 2, name: 'Jeans', price: 40 },
      { id: 3, name: 'Jacket', price: 60 }
  ];

  productsDiv.innerHTML = products.map(product => `
      <div class="product-item">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
  `).join('');
}

async function loadCartItems() {
  const cartDiv = document.querySelector('.cart-grid');
  // Fetch cart items from your database or API and display them
  // Example:
  const cartItems = [
      { id: 1, name: 'T-Shirt', price: 20, quantity: 2 },
      { id: 2, name: 'Jeans', price: 40, quantity: 1 }
  ];

  cartDiv.innerHTML = cartItems.map(item => `
      <div class="cart-item">
          <h3>${item.name}</h3>
          <p>$${item.price} x ${item.quantity}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
  `).join('');
}

function shopNow() {
  window.location.href = 'cart.html';
}

function addToCart(productId) {
  // Add product to cart in your database or API
  alert('Product added to cart!');
}

function removeFromCart(itemId) {
  // Remove item from cart in your database or API
  alert('Item removed from cart!');
}

function checkout() {
  // Handle checkout process
  alert('Proceeding to checkout!');
}