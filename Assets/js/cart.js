window.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const container = document.querySelector(".cart-items");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(({ image, name, brand, price }) => {
    const numericPrice = parseInt(price.toString().replace(/[^0-9]/g, ""));

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${image}" alt="${name}" class="cart-image">
      <div class="cart-details">
      <div class="top">
        <p><strong>${name}</strong></p>
        <p>Brand: ${brand}</p>
        </div>
        <div class="bottom">
        <div class="count">
        <button class="minus">-</button>
        <button class="plus">+</button>
        <input type="text" class="increment" value="1" readonly>
        </div>
        <p>total:
        <input type="text" class="priceadd" value="${numericPrice}" readonly></p>
        </div>
        <a href="#" class="delete"><i class="fa-solid fa-trash "></i></a>
      </div>
    `;
    let increment = div.querySelector('.increment');
    let plus = div.querySelector('.plus')
    let minus = div.querySelector('.minus')
    let priceadd = div.querySelector('.priceadd')
    plus.addEventListener("click", () => {
      increment.value = parseInt(increment.value) + 1;
      const quantity = parseInt(increment.value)
      const total = parseInt(numericPrice) * quantity
      priceadd.value = total;
    });
     minus.addEventListener("click", () => {
      if (parseInt(increment.value) > 1) {
        increment.value = parseInt(increment.value) - 1;
        const quantity = parseInt(increment.value)
        const total = parseInt(numericPrice) * quantity
        priceadd.value = total;
      }
    });
    const removeBtn = div.querySelector(".delete")
    removeBtn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let newcart = cart.filter(item => item.name !== name);

      localStorage.setItem("cart", JSON.stringify(newcart));

      location.reload();
    })
    container.appendChild(div);
    
   
  });
});

