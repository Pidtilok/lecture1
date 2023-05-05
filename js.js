const categoriesContainer = document.querySelector("#categoriesContainer");
const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const cartCount = document.querySelector(".cart__count");
cartCount.textContent = shoppingCart.length;

fetch("https://634e9f834af5fdff3a625f84.mockapi.io/products")
  .then((response) => response.json())
  .then((data) => {
    const categories = Array.from(
      new Set(data.map((product) => product.category))
    );
    categories.forEach((category) => {
      const section = document.createElement("section");
      section.classList.add("category");
      section.setAttribute("data-name", category);

      const heading = document.createElement("h2");
      heading.textContent = category;
      heading.classList.add("category__title");
      section.appendChild(heading);

      const productsContainer = document.createElement("div");
      productsContainer.classList.add("category__container");

      const products = data.filter((product) => product.category === category);
      products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("category__product");

        const image = document.createElement("img");
        image.classList.add("category__product-image");
        image.src = `./images/products/${product.img}.png`;
        image.alt = product.name;
        productElement.appendChild(image);

        const name = document.createElement("h3");
        name.classList.add("category__product-name");
        name.textContent = product.title;
        productElement.appendChild(name);

        const shopCar = document.createElement("img");
        shopCar.classList.add("category__product-shopCar");
        shopCar.src = "./images/shopping-cart.png";
        productElement.appendChild(shopCar);

        const priceContainer = document.createElement("div");
        priceContainer.classList.add("category__product-price-container");
        productElement.appendChild(priceContainer);

        const price = document.createElement("span");
        price.classList.add("category__product-price");
        price.textContent = `$${product.price}`;
        priceContainer.appendChild(price);

        if (product.sale) {
          const salePrice = document.createElement("span");
          salePrice.classList.add("category__product-sale-price");
          salePrice.textContent = ` $${
            product.price - product.price * (product.salePercent / 100)
          }`;
          productElement.appendChild(salePrice);

          const saleBadge = document.createElement("div");
          saleBadge.classList.add("category__product-sale-badge");
          saleBadge.textContent = `-${product.salePercent}%`;
          priceContainer.appendChild(saleBadge);
        }

        shopCar.addEventListener("click", () => {
          const index = shoppingCart.findIndex(
            (item) => item.id === product.id
          );
          if (index === -1) {
            const cartItem = { id: product.id, ...product };
            shoppingCart.push(cartItem);
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            shopCar.classList.add("product__cart-in");
            shopCar.src = "./images/green.jpeg";
            cartCount.textContent = shoppingCart.length;
          } else {
            shoppingCart.splice(index, 1);
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            shopCar.classList.remove("product__cart-in");
            shopCar.src = "./images/shopping-cart.png";
            cartCount.textContent = shoppingCart.length;
          }
        });

        if (shoppingCart.some((item) => item.id === product.id)) {
          shopCar.classList.add("product__cart-in");
          shopCar.src = "./images/green.jpeg";
        }
        productElement.appendChild(priceContainer);
        productsContainer.appendChild(productElement);
      });
      section.appendChild(productsContainer);
      categoriesContainer.appendChild(section);
    });
  });

const menuImage = document.querySelector(".menu__image");

menuImage.addEventListener("click", (event) => {
  event.preventDefault();

  const userStatus = localStorage.getItem("userStatus");
  if (userStatus === "loggedIn") {
    window.location.href = "./shoppingCart.html";
  } else {
    window.location.href = "./sing.html";
  }
});
