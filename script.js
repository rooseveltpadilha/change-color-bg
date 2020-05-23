let changeColor = false;

const button = document.querySelector('#button')
const credits = document.querySelector('#credits')
const h1 = document.querySelector('h1')
const link = document.querySelector('a')

window.addEventListener('load', () => {
  button.addEventListener('click', change)
})

function change() {
  changeColor = !changeColor
  render();
}

function render() {
  if (changeColor) {
    document.body.style.backgroundColor = '#1d1e1e'
    button.style.backgroundColor = '#ffffff'
    button.style.color = '#1d1e1e'
    h1.style.color = '#ffffff'
    credits.style.color = '#ffffff'
    link.style.color = "#ffffff"
  } else {
    document.
      body.style.backgroundColor = '#ffffff'
    button.style.backgroundColor = '#1d1e1e'
    button.style.color = '#ffffff'
    h1.style.color = '#1d1e1e'
    credits.style.color = '#1d1e1e'
    link.style.color = "#1d1e1e"
  }
}
