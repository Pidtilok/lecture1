let windowWidth = document.body.clientWidth;
let windowHeight = document.body.clientHeight;

setInterval ( () => {
  let left = Math.floor(Math.random() * (windowWidth - 100));
  let top = Math.floor(Math.random() * (windowHeight - 1));

  document.querySelector('.block').style.left = left + 'px';
  document.querySelector('.block').style.top = top + 'px';
  }, 1000);   

setInterval ( () => {
  let color = Math.floor(Math.random() * 123242).toString(16);
  document.querySelector('.block').style.backgroundColor = '#' + color;
}, 1000);