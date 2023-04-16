let form = document.querySelector('form')
let createHerosWrapper = document.querySelector('#createHeros')

let render = (hero) => {
  let heroBlock = document.createElement('form')
  heroBlock.innerHTML = `
  <div>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" data-name="name" value=${hero.name}>
    </div>

    <div>
      <label for="comics">Comics:</label>
      <select name="comics" id="comics" data-name="comics" value=${hero.comics}>
        <option value="Marvel">Marvel</option>
        <option value="DC">DC</option>
      </select>
    </div>

    <div>
      <label for="" data-name="favourite" ${hero.favourite ? 'checked' : ''}>Favourite:</label>
      <input type="checkbox">
    </div>

    <div>
      <button type="submit" class="update">Update</button>
      <button type="submit" class="delete">Delete</button>
    </div>
    `
    createHerosWrapper.append(heroBlock)

    let deleteBtn = heroBlock.querySelector('.delete')
    deleteBtn.addEventListener('click', async (e) => {
      e.preventDefault()
    await deleteHero(hero.id)
    heroBlock.remove()
  })

  let updateBtn = heroBlock.querySelector('.update')
    updateBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      let name = heroBlock.querySelector('input[data-name="name"]')
      let comics = heroBlock.querySelector('select')
      let favourite = heroBlock.querySelector('input[type="checkbox"]')
      let updatedHero = {
        name: name.value,
        comics: comics.value,
        favourite: favourite.checked,
      }
      await updateHero(hero.id, updatedHero)
    })
}

let createHero = async (obj) => {
  let result = await fetch('https://63693f7228cd16bba71904e4.mockapi.io/heroes',{
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res => res.json())

  let newHero = result.find(hero => hero.name.toLowerCase() === obj.name.toLowerCase())

  if (newHero) {
    alert(`Герой з ім'ям "${newHero.name}" вже є в базі даних.`)
  } else {
    let result = await fetch('https://63693f7228cd16bba71904e4.mockapi.io/heroes',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
    render(result)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let name = form.querySelector('input[data-name="name"]')
  let comics = form.querySelector('select')
  let favourite = form.querySelector('input[type="checkbox"]')

  let newHero = {
    name: name.value,
    comics: comics.value,
    favourite: favourite.checked,
  }
  createHero(newHero)
})

let getExistedHeros = async() => {
  let result = await fetch('https://63693f7228cd16bba71904e4.mockapi.io/heroes', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res => res.json())

  result.forEach(element => {
    render(element)
  });
}
getExistedHeros()


let deleteHero = async (id) => {
  await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })
} 

let updateHero = async (id, obj) => {
  await fetch(`https://63693f7228cd16bba71904e4.mockapi.io/heroes/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
  })
}