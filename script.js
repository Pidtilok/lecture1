const vegetables = [
  {
      name: `tomato`,
      icon: `🍅`,
      price: 2.3
  },
  {
      name: `carrot`,
      icon: `🥕`,
      price: 1.5
  },
  {
      name: `corn`,
      icon: `🌽`,
      price: 2.78,
      season: true
  }
];

class Vegetable {
  constructor (obj) {
    this.type = `Vegetable`;
    this.seasonKoef = 1.3;
    this.name = obj.name;
    this.icon = obj.icon;
    this.price = obj.price;

    if (obj.season) {
    this.seasonKoef = 1.3;
  } else {
     this.seasonKoef = 1.0;
  }
}

getPrice() {
  if(this.seasonKoef) {
    this.price = this.price * this.seasonKoef
  } 
  return this.price
}
getInfo() {
  return `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.getPrice()}.`;
}
}

const modVegetables = vegetables.map(el => new Vegetable(el));

const listVegetables = modVegetables.map((el) => `<li>${el.getInfo()}</li>`);

document.write(`<ul>${listVegetables.join('')}</ul>`);