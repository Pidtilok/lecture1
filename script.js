let colorWrap = $('<div></div>').addClass('colorWrap');
let colorTitle = $('<p></p>').addClass('colorsTitle').text('Solid Black');
let carImg = $('<img></img>').addClass('carImg').attr('src', 'https://mc-astro.github.io/tesla-roadster-colors/img/black.jpg');

$('.root').prepend(colorWrap);
$('.root').prepend(colorTitle);
$('.root').prepend(carImg);


let getCarColor = () =>
  $.ajax({
    url: "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json",
    dataType: "json",
    success: function (data) {
      renderCar(data);
    }
  });

let renderCar = (data) => {
  $.each(data, function () {
    let color = $('<div></div>').addClass('color').css("background-color", this.color);
    $('.colorWrap').append(color);
    color.on("click", () => {
      $(".carImg").attr("src", `https://mc-astro.github.io/tesla-roadster-colors/img/${this.img}.jpg`);
      $(".text").text(this.title);
    });
  });
};

getCarColor();