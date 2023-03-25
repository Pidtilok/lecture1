const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

  const userName = document.querySelector('#name').value;
  const burgerSize = document.querySelector('#size').value;
  const checkTopping = [...document.querySelectorAll('input[name="topping"]:checked')];
  const checkSpices = [...document.querySelectorAll('input[name="spices"]:checked')];
  const messages = document.querySelector('#message').value;

  event.preventDefault();


  let checkedT = checkTopping.map(el => {
    if(el.checked)
    return el.value
  }); 

  let checkedS = checkSpices.map(el => {
    if(el.checked)
    return el.value
  })

  let burgerPrice = 0;
  let calories = 0;

  if (burgerSize === 'small')  {
    burgerPrice += 50;
    calories = 20;
  } else if (burgerSize === 'big') {
    burgerPrice += 100;
    calories = 40;
  }

  checkTopping.forEach((checkedT) => {
    if (checkedT.value === 'cheese') {
      burgerPrice += 10;
      calories = calories + 20;
    } else if (checkedT.value === 'salad') {
      burgerPrice += 20;
      calories = calories + 5;
    } else if (checkedT.value === 'potato') {
      burgerPrice += 15;
      calories = calories + 10;
    }
  });
  checkSpices.forEach((checkedS) => {
    if (checkedS.value === 'spices') {
      burgerPrice = burgerPrice + 15;
    } else if (checkedS.value === 'mayo') {
      burgerPrice = burgerPrice + 20;
      calories = calories + 5;
    }
  });

  const randomValue = Math.floor(Math.random() * 21) + 10;

  form.reset();

  const message = document.createElement('div');
  message.innerHTML = `
    <p>Привіт ${userName}</p>
    <p>Ваше замовлення ${burgerSize} бургер з ${checkedT} та ${checkedS} буде готове через ${randomValue} хвилин</p>
    <p>Вартість замовлення: ${burgerPrice} грн, кількість калорій ${calories}</p>
    <p>Ваші побажання: ${messages}</p>
  `;
  document.body.appendChild(message);

});
