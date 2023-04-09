let form = document.querySelector('form')
let searchJoke = document.querySelector('#search')
let randomJoke = document.querySelector('random')
let categoryJoke = document.querySelector('#category')
let wrapper = document.querySelector('#wrapper')
let liked = document.querySelector('#liked')


let getSearchJoke = (word) => fetch (`https://api.chucknorris.io/jokes/search?query=${word}`)
let getRandomJoke = () => fetch('https://api.chucknorris.io/jokes/random')
let getCategoryJoke = (category) => fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)

let animalJoke = document.querySelector('.animal')
let carrerJoke = document.querySelector('.carrer')
let celebrityJoke = document.querySelector('.celebrity')
let devJoke = document.querySelector('.dev')


animalJoke.addEventListener('click', () => {
  animalJoke.classList.toggle('active')
  carrerJoke.classList.remove('active')
  celebrityJoke.classList.remove('active')
  devJoke.classList.remove('active')
})

carrerJoke.addEventListener('click', () => {
  carrerJoke.classList.toggle('active')
  animalJoke.classList.remove('active')
  celebrityJoke.classList.remove('active')
  devJoke.classList.remove('active')
})

celebrityJoke.addEventListener('click', () => {
  celebrityJoke.classList.toggle('active')
  animalJoke.classList.remove('active')
  carrerJoke.classList.remove('active')
  devJoke.classList.remove('active')
})

devJoke.addEventListener('click', () => {
  devJoke.classList.toggle('active')
  animalJoke.classList.remove('active')
  carrerJoke.classList.remove('active')
  celebrityJoke.classList.remove('active')
})

let render = (joke) => {
  
  joke.forEach(joke => {
    let img = document.createElement('img')
    let mes = document.createElement('img')
    let time = document.createElement('p');
    let div = document.createElement('div')
    let id = document.createElement('p')
    let url = document.createElement('a')

let saveToFavorites = (joke) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(joke);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderLikedJoke(joke);
}

let removeFromFavorites = (joke) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  let index = favorites.findIndex(fav => fav.id === joke.id);
  favorites.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  removeLikedJoke(joke);
}

let renderLikedJoke = (joke) => {
  let div = document.createElement('div');
  div.classList.add('jokes');
  div.innerHTML = joke.value;
  div.setAttribute('data-id', joke.id);
  liked.appendChild(div);


  let like = document.createElement('img');
  like.src = './heart.svg';
  like.classList.toggle('like');
  like.onclick = function() {
  img.src = './Vector1.svg',removeFromFavorites(joke);
}
  div.appendChild(like);

  let mesF = document.createElement('img')
  mesF.src = './Group 2.svg'
  mesF.classList.add('mesF')
  div.appendChild(mesF)

  let hoursAgo = Math.floor((new Date() - new Date(joke.created_at)) / (1000 * 60 * 60));
  time.innerText = `Last update: ${hoursAgo} hours ago`;
  let timeF = document.createElement('p')
  timeF.innerText = `Last update: ${hoursAgo} hours ago`;
  timeF.classList.add('timeF')
  div.appendChild(timeF)

  let urlF = document.createElement('a')
    urlF.href = joke.url
    urlF.innerText = 'ID: ' +  joke.url
    urlF.classList.add('urlF')
    div.appendChild(urlF)
}

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.forEach(joke => {
  if (!document.querySelector(`[data-id="${joke.id}"]`)) {
    renderLikedJoke(joke);
  }
});

let removeLikedJoke = (joke) => {
  let id = joke.id;
  let div = liked.querySelector(`[data-id="${id}"]`);
  if (div) {
    div.remove();
  }
}

    div.classList.add('joke')
    div.innerHTML = joke.value

    url.href = joke.url
    url.innerText = 'ID: ' +  joke.url
    
    img.src = './Vector1.svg'
    img.classList.add('heart')
    img.classList.add('heart2')

    mes.src = './Group 1.svg'
    mes.classList.add('mes')

    let hoursAgo = Math.floor((new Date() - new Date(joke.created_at)) / (1000 * 60 * 60));
    time.innerText = `Last update: ${hoursAgo} hours ago`;
    time.classList.add('time')


    img.addEventListener('click', () => {
      img.classList.toggle('heart') ?
          (img.src = './Vector1.svg', removeFromFavorites(joke)) :
          (img.src = './heart.svg', saveToFavorites(joke))
    })


    div.append(img)
    div.append(mes)
    wrapper.append(div)
    div.append(time);
    div.append(id)
    div.append(url)
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (document.querySelector('input[name="joke"]:checked').value === "Search") {
    getSearchJoke(document.querySelector('#keyword').value)
      .then(response => response.json())
      .then(res => render(res.result))
  } else if (document.querySelector('input[name="joke"]:checked').value === "Random") {
    getRandomJoke()
      .then(response => response.json())
      .then(res => render([res]))
  }
  let button = document.querySelector('.button')
    button.addEventListener('click', () => {
      if (document.querySelector('input[name="joke"]:checked').value === "From categories") {
        if (animalJoke.classList.contains('active')) {
          getCategoryJoke('animal')
        .then(response => response.json())
        .then(res => render([res]))
      } else if (carrerJoke.classList.contains('active')) {
        getCategoryJoke('career')
          .then(response => response.json())
          .then(res => render([res]))
      } else if (celebrityJoke.classList.contains('active')) {
        getCategoryJoke('celebrity')
          .then(response => response.json())
          .then(res => render([res]))
      } else if (devJoke.classList.contains('active')) {
        getCategoryJoke('dev')
          .then(response => response.json())
          .then(res => render([res]))
      }
    }
  })
})