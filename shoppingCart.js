const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
const cartContainer = document.querySelector("#shoppingItems");

cart.forEach((item) => {
  const productElement = document.createElement("div");
  productElement.classList.add("cart__product");

  const image = document.createElement("img");
  image.classList.add("cart__product-image");
  image.src = `./images/products/${item.img}.png`;
  image.alt = item.title;
  productElement.appendChild(image);

  const name = document.createElement("h3");
  name.classList.add("cart__product-name");
  name.textContent = item.title;
  productElement.appendChild(name);

  const price = document.createElement("span");
  price.classList.add("cart__product-price");
  price.textContent = "$" + item.price;
  productElement.appendChild(price);

  const saleBadge = document.createElement("div");
  saleBadge.classList.add("cart__product-sale-badge");
  if (item.sale) {
    saleBadge.textContent = `-${item.salePercent}%`;
  } else {
    saleBadge.textContent = "-";
  }
  productElement.appendChild(saleBadge);

  const quantityInput = document.createElement("input");
  quantityInput.classList.add("cart__product-quantity");
  quantityInput.type = "number";
  quantityInput.value = item.count || 1;
  productElement.appendChild(quantityInput);

  const updateTotal = () => {
    const newCount = Number(quantityInput.value);
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    cart[itemIndex].count = newCount;
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    updateTotalPrice();
    updateSalePrice();
  };

  quantityInput.addEventListener("input", updateTotal);
  quantityInput.dispatchEvent(new Event("input"));

  function updateSalePrice() {
    if (item.sale) {
      const salePrice = item.price - item.price * (item.salePercent / 100);
      const saleTotal = item.count * salePrice;
      total.textContent = `$${saleTotal.toFixed(1)}`;
      salePriceElement.textContent = `$${salePrice.toFixed(1)}`;
      saleBadge.textContent = `-${item.salePercent}%`;
    } else {
      const totalValue = item.price * item.count;
      total.textContent = `$${totalValue.toFixed(1)}`;
      saleBadge.textContent = " - ";
    }
  }

  const total = document.createElement("span");
  total.classList.add("cart__product-total");
  if (item.sale) {
    const salePrice = item.price - item.price * (item.salePercent / 100);
    const saleTotal = item.count * salePrice;
    total.textContent = `$${saleTotal.toFixed(1)}`;
  } else {
    const totalValue = item.price * item.count;
    total.textContent = `$${totalValue.toFixed(1)}`;
  }
  productElement.appendChild(total);

  const deleteBtn = document.createElement("img");
  deleteBtn.classList.add("cart__product-delete");
  deleteBtn.src = `./images/delete.png`;
  productElement.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    cart.splice(itemIndex, 1);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    productElement.remove();
    cartCount.textContent = cart.length;

    updateTotalPrice();
  });

  cartContainer.appendChild(productElement);
});

const totalItem = document.querySelector(".order__item");
const totalPrice = document.createElement("span");
totalItem.appendChild(totalPrice);

function updateTotalPrice() {
  const totalAmount = cart.reduce((acc, item) => {
    if (item.sale) {
      const salePrice = item.price - item.price * (item.salePercent / 100);
      const saleTotal = item.count * salePrice;
      return acc + saleTotal;
    } else {
      const totalValue = item.price * item.count;
      return acc + totalValue;
    }
  }, 0);

  totalPrice.textContent = `$${totalAmount.toFixed(1)}`;
}

updateTotalPrice();

const completeBtn = document.querySelector(".order__btn");
completeBtn.addEventListener("click", () => {
  window.location.href = "./account.html";
});
