const div = document.querySelector('.block');
const bodyWidth = parseInt(document.body.clientWidth);
const bodyHeight = parseInt(document.body.clientHeight);
div.style.top = `${bodyHeight/2 - 50}px`;
div.style.left = `${bodyWidth/2 - 50}px`;
div.style.width = '100px';
div.style.height = '100px';



function border() {
    if (parseInt(div.style.left) < 0) {
      div.style.left = parseInt(div.style.left) + 20 + 'px';
    alert('BEMS!');
    } else if (parseInt(div.style.left)  > bodyWidth - 100) {
      div.style.left = parseInt(div.style.left) - 20 + 'px';
      alert('BEMS!');
    } else if (parseInt(div.style.top) < 0) {
      div.style.top = parseInt(div.style.top) + 20 + 'px';
      alert('BEMS!');
    } else  if (parseInt(div.style.top)  > bodyHeight - 100) {
      div.style.top = parseInt(div.style.top) - 20 + 'px';
      alert('BEMS!');
    }
}

function movement(event) {

    switch (event.key) {
        case 'ArrowLeft': 
        div.style.left = parseInt(div.style.left) - 10 + 'px';
            break;
        case 'ArrowRight':
        div.style.left = parseInt(div.style.left) + 10 + 'px';
            break;
        case 'ArrowUp': 
        div.style.top = parseInt(div.style.top) - 10 + 'px';
            break;
        case 'ArrowDown': 
        div.style.top = parseInt(div.style.top) + 10 + 'px';
            break;
        case ' ':
        div.style.top = parseInt(div.style.top) - 10 + 'px';
            setTimeout(() => {
              div.style.top = parseInt(div.style.top) + 10 + 'px';
            }, 200)
            break;
        case 'Control':
        div.style.transform = 'translate(-50%, -50%) scaleY(0.6) scaleX(1.25)';
            setTimeout(() => {
              div.style.transform = 'translate(-50%, -50%) scaleY(1) scaleX(1)';
            }, 2000)
          break;
    }
    border();
}

document.addEventListener('keydown', movement);


// const div = document.querySelector(".block");

// const bodyWidth = parseInt(document.body.clientWidth);
// const bodyHeight = parseInt(document.body.clientHeight);

// div.style.left = `${bodyWidth/2 - 50}px`;
// div.style.top = `${bodyHeight/2 - 50}px`;
// div.style.height = '100px';
// div.style.width = '100px';

// function attention() {
//   let bem = document.createElement('div');
//   bem.innerText = 'Бемс!';
//   bem.classList.add('bem');
//   div.appendChild(bem);
//   bem.style.color = 'red;'
// }


// function border () {
//   if (parseInt(div.style.left) < 0) {
//     div.style.left = parseInt(div.style.left) + 20 + 'px';
//     attention()
//   } else if(parseInt(div.style.left) > bodyWidth) {
//     div.style.left = parseInt(div.style.left) - 20 + 'px';
//     attention()
//   } else if(parseInt(div.style.top) < 0) {
//     div.style.top = parseInt(div.style.top) + 20 + 'px';
//     attention()
//   } else if(parseInt(div.style.top) > bodyHeight) {
//     div.style.top = parseInt(div.style.top) - 20 + 'px';
//     attention()
//   }
// }

// function movement(event) {


//   if(event.keyCode === 32) {
//     div.style.top = (parseInt(div.style.top) - 10) + 'px';
//     setTimeout(() => {
//       div.style.top = (parseInt(div.style.top) + 10) + 'px';
//     }, 2000)
//   }

//   else if(event.keyCode === 40) {
//     div.style.top = (parseInt(div.style.top) + 10) + 'px'
//   }

//   else if(event.keyCode === 38) {
//     div.style.top = Math.max(0, parseInt(div.style.top) - 10) + 'px';
//   }
//   else if(event.keyCode === 37) {
//     div.style.left = Math.max(0, parseInt(div.style.left) - 10) + 'px';
//   }

//   else if(event.keyCode === 39) {
//     div.style.left = (parseInt(div.style.left) + 10) + 'px';
//   } 
//   else if(event.keyCode === 17) {
//     div.style.transform = 'translate(-50%, -50%) scaleY(0.6) scaleX(1.25)';
//     setTimeout(() => {
//       div.style.transform = 'translate(-50%, -50%) scaleY(1) scaleX(1)';
//     }, 2000)
//   } 
// }
// // border();
// document.addEventListener('keydown', movement)