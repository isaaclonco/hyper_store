let cart = [];
    let cartVisible = false;

    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartIcon.addEventListener('click', () => {
      cartVisible = !cartVisible;
      cartModal.classList.toggle('active');
    });

    function addToCart(title, price) {
      cart.push({ title, price });
      updateCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      cartCount.textContent = cart.length;
      
      cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.title}</h4>
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
          </div>
          <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        </div>
      `).join('');

      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Game card hover effect
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
      });
    });