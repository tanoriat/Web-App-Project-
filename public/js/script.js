const cart = [];

function sayWelcome() {
  console.log("Welcome to Money Bouquets!");
}


function buildBouquet() {
  const size = document.getElementById('size').value;
     const occasion = document.getElementById('occasion').value;
         const wrap = document.getElementById('wrap').value;
             const delivery = document.querySelector('input[name="delivery"]:checked');
                const extras = document.querySelectorAll('input[name="extra"]:checked');

  if (!size || !occasion) {
        alert("Please select a size and occasion.");
    return false;
  }

     const deliveryText = delivery ? delivery.value : "Standard";
         const extrasText = [];
  extras.forEach(e => extrasText.push(e.value));

     const bouquetDesc = `${size} ${occasion} bouquet with ${wrap} wrap, Delivery: ${deliveryText}, Extras: ${extrasText.join(", ") || "None"}`;
  
  cart.push(bouquetDesc);
     updateCartDisplay();
     alert(`${bouquetDesc} added to cart!`);
  return false; // prevent form reload
}

function updateCartDisplay() {
  const list = document.getElementById('cartList');
    list.innerHTML = '';
    cart.forEach((item, index) => {
 const li = document.createElement('li');
    li.textContent = `${index + 1}. ${item}`;
    list.appendChild(li);
  });
}



function checkout() {
    if (cart.length === 0) {
     alert("Your cart is empty!");
    return;
  }
  const cartData = encodeURIComponent(JSON.stringify(cart));
     window.location.href = `order.html?cart=${cartData}`;
}

function updateImage(selectId, imgId) {
    const select = document.getElementById(selectId);
            const img = document.getElementById(imgId);
        img.src = `/public/images/${select.value}`;
}
//function placeOrder(selectId) {
     const select = document.getElementById(selectId);
         const selectedBouquet = select.value;
  window.location.href = `order.html?bouquet=${encodeURIComponent(selectedBouquet)}`;
//}

function addDropdownBouquet(selectId) {
  const select = document.getElementById(selectId);
  const selectedBouquet = select.options[select.selectedIndex].text;
  cart.push(`Preset bouquet: ${selectedBouquet}`);
  updateCartDisplay();
  alert(`${selectedBouquet} added to cart!`);
}

