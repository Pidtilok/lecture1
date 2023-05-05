const usersUrl = "https://634e9f834af5fdff3a625f84.mockapi.io/users";

// const usersUrl = 'https://6454cea3a74f994b33498016.mockapi.io/Work';

const menuLogin = document.querySelector(".menu__login");
const logoutButton = document.querySelector(".logout-button");
const infoItem = document.querySelector(".info__item");

function checkLoginStatus() {
  const userStatus = localStorage.getItem("userStatus");
  const userName = localStorage.getItem("userName");

  if (userStatus === "loggedIn" && userName) {
    menuLogin.textContent = userName;
    menuLogin.classList.add("user-name");
    logoutButton.style.display = "block";

    fetch(`${usersUrl}?name=${userName}`)
      .then((response) => response.json())
      .then((data) => {
        const user = data[0];
        infoItem.innerHTML = `
          <div class="info__name">Name: ${user.name}</div>
          <div class="info__email">Email: ${user.email}</div>
        `;
      })
      .catch((error) => console.error(error));
  } else {
    menuLogin.innerHTML = '<a href="./sing.html">Log in</a>';
    menuLogin.classList.remove("user-name");
    logoutButton.style.display = "none";
  }
}
checkLoginStatus();

const signInForm = document.querySelector(".login-form");
const signInEmailInput = document.querySelector("#email");
const signInPasswordInput = document.querySelector("#password");
const signInError = document.querySelector(".error");

logoutButton.addEventListener("click", () => {
  fetch(`${usersUrl}?name=${localStorage.getItem("userName")}`)
    .then((response) => response.json())
    .then((data) => {
      const user = data[0];
      user.status = false;
      localStorage.removeItem("userStatus");
      localStorage.removeItem("userName");
      fetch(`${usersUrl}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          window.location.href = "./index.html";
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
});

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = signInEmailInput.value;
  const password = signInPasswordInput.value;

  fetch(`${usersUrl}?email=${email}&password=${password}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        signInError.classList.add("active");
        signInError.textContent = "Invalid email";
      } else {
        const user = data[0];
        if (user.password !== password) {
          signInError.classList.add("active");
          signInError.textContent = "Invalid password";
        } else {
          localStorage.setItem("userStatus", "loggedIn");
          localStorage.setItem("userName", user.name);
          user.status = true;
          fetch(`${usersUrl}/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          })
            .then(() => {
              menuLogin.textContent = user.name;
              menuLogin.classList.add("user-name");
              logoutButton.style.display = "block";
              window.location.href = "./index.html";
            })
            .catch((error) => console.error(error));
        }
      }
    })
    .catch((error) => console.error(error));
});

const registrationForm = document.querySelector(".registr__form");
const registrationNameInput = registrationForm.querySelector("#name");
const registrationEmailInput = registrationForm.querySelector("#verifyEmail");
const registrationPasswordInput =
  registrationForm.querySelector("#verifyPassword");
const registrationVerifyInput = registrationForm.querySelector("#verify");
const registrationButton = registrationForm.querySelector(
  'button[type="submit"]'
);
const registrationError = registrationForm.querySelector(".error");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = registrationNameInput.value;
  const email = registrationEmailInput.value;
  const password = registrationPasswordInput.value;
  const verify = registrationVerifyInput.value;

  if (password !== verify) {
    registrationError.classList.add("active");
    registrationError.textContent = "Password not matches!";
    return;
  }

  fetch(`${usersUrl}?email=${email}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        registrationError.classList.add("active");
        registrationError.textContent = `User with email ${email} already exist!`;
      } else {
        const user = {
          name,
          email,
          password,
          status: true,
          orders: [],
          shoppingCart: [],
        };
        fetch(usersUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then(() => {
            window.location.href = "./index.html";
          })
          .catch((error) => console.error(error));
      }
    })
    .catch((error) => console.error(error));
});
