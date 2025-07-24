window.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const container = document.querySelector(".cart-items"); 

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(({ image, name, brand, price }) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${image}" alt="${name}" class="cart-image">
      <div class="cart-details">
        <p><strong>${name}</strong></p>
        <p>Brand: ${brand}</p>
        <p>Price: ${price}</p>
        <a href="#" class="delete"><i class="fa-solid fa-trash "></i></a>
      </div>
    `;
    const removeBtn = div.querySelector(".delete")
    removeBtn.addEventListener("click",()=>{
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let newcart=cart.filter(item => item.name!==name);
      
      localStorage.setItem("cart", JSON.stringify(newcart));
      
      location.reload();
    })
    container.appendChild(div);
  });
});
