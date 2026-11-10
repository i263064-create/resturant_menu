let currentSelectedItem = '';

function sayHello() {
    console.log("Say Hello button was clicked");
    window.alert("Hello! Welcome to my page.");
}

function openOrderModal(itemName) {
    currentSelectedItem = itemName;
    const modal = document.getElementById('orderModal');
    const modalTitle = document.getElementById('modalTitle');
    
    modalTitle.textContent = `Order ${itemName}`;
    modal.style.display = 'flex';
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

function handleOrderSubmit(event) {
    event.preventDefault();
    const size = document.getElementById('itemSize').value;
    const qty = document.getElementById('itemQuantity').value;
    
    alert(`Thank you! Your order for ${qty} x ${size} ${currentSelectedItem} has been received.`);
    closeOrderModal();
}

window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderModal();
    }
};
