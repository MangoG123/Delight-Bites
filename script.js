document.addEventListener('DOMContentLoaded', () => {
    fetchMenuItems();

    // Function to fetch menu items from an API (example API URL)
    async function fetchMenuItems() {
        try {
            let response = await fetch('https://api.example.com/menu'); // Replace with actual API endpoint
            let data = await response.json();
            displayMenuItems(data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    }

    // Function to display menu items
    function displayMenuItems(items) {
        const menuItemsContainer = document.getElementById('menu-items');
        items.forEach(item => {
            let menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="addToCart('${item.name}', ${item.price})">Order</button>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }
});

// Function to add item to cart (simplified)
function addToCart(item, price) {
    alert(`${item} added to cart for $${price.toFixed(2)}`);
}

// Simulate accepting orders (for restaurants/cloud kitchens)
function acceptOrder(orderId) {
    alert(`Order ${orderId} has been accepted.`);
}


