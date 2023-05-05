const selectedItems = JSON.parse(localStorage.getItem("shoppingCart")) || [];
const orderedItemsContainer = document.querySelector("#orderedItems");

selectedItems.forEach((item) => {
  const productElement = document.createElement("div");
  productElement.classList.add("ordered__product");

  const image = document.createElement("img");
  image.classList.add("ordered__product-image");
  image.src = `./images/products/${item.img}.png`;
  image.alt = item.title;
  productElement.appendChild(image);

  const name = document.createElement("h3");
  name.classList.add("ordered__product-name");
  name.textContent = item.title;
  productElement.appendChild(name);

  const price = document.createElement("span");
  price.classList.add("ordered__product-price");
  price.textContent = "$" + item.price;
  productElement.appendChild(price);

  const saleBadge = document.createElement("div");
  saleBadge.classList.add("ordered__product-sale-badge");
  if (item.sale) {
    saleBadge.textContent = `-${item.salePercent}%`;
  } else {
    saleBadge.textContent = "-";
  }
  productElement.appendChild(saleBadge);

  const quantity = document.createElement("span");
  quantity.classList.add("ordered__product-quantity");
  quantity.textContent = item.count || 1;
  productElement.appendChild(quantity);
  
  const totalCost = document.createElement("span");
  totalCost.classList.add("ordered__product-total-cost");
  totalCost.textContent = "$" + (item.price * (item.count || 1));
  productElement.appendChild(totalCost);

  orderedItemsContainer.appendChild(productElement);
});

localStorage.removeItem("shoppingCart");


const deleteAccountButton = document.querySelector(".info__btn");
deleteAccountButton.addEventListener("click", () => {
    fetch(`${usersUrl}?name=${localStorage.getItem('userName')}`)
      .then(response => response.json())
      .then(data => {
        const user = data[0];
        user.status = false;
        localStorage.removeItem('userStatus');
        localStorage.removeItem('userName');
        fetch(`${usersUrl}/${user.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        })
          .then(() => {
            window.location.href = './index.html';
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  });




