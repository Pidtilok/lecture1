class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };
  
  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };
  
  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };
  
  static STUFFING_SALAD = {
    price: 20,
    calories: 5,
  };
  
  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  };
  
  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };
  
  static TOPPING_SAUCE = {
    price: 15,
    calories: 0,
  };

  #size;
  #stuffing;
  #toppings;
  
  constructor(size, stuffing) {
    this.#size = size;
    this.#stuffing = stuffing;
    this.#toppings = [];
  }
  
  addTopping(topping) {
    this.#toppings.push(topping);
  }
  
  calculatePrice() {
    const toppingsPrice = this.#toppings.reduce((acc, topping) => {
      return acc + topping.price;
    }, 0);
    
    return this.#size.price + this.#stuffing.price + toppingsPrice;
  }
  
  calculateCalories() {
    const toppingsCalories = this.#toppings.reduce((acc, topping) => {
      return acc + topping.calories;
    }, 0);
    
    return this.#size.calories + this.#stuffing.calories + toppingsCalories;
  }
  
  get size() {
    return this.#size;
  }
  
  set size(size) {
    this.#size = size;
  }
  
  get stuffing() {
    return this.#stuffing;
  }
  
  set stuffing(stuffing) {
    this.#stuffing = stuffing;
  }
  
  get toppings() {
    return this.#toppings;
  }
}
            
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());