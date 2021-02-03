import closeIcon from '../images/icon-close.svg'
import hamburgerIcon from '../images/icon-hamburger.svg'

const $hero = document.getElementById('hero')
const $heroButton = document.getElementById('hero-button')
const $heroButtonImg = $heroButton.querySelector('img')

let menuIsOpened = false

function closeHeroMenu () {
  document.body.classList.remove('overflow-hidden')
  $hero.classList.remove('hero__menu_opened')
  $heroButtonImg.src = hamburgerIcon
}

function openHeroMenu () {
  document.body.classList.add('overflow-hidden')
  $hero.classList.remove('hero__menu_opened')
  $hero.classList.add('hero__menu_opened')
  $heroButtonImg.src = closeIcon
}

$heroButton.addEventListener('click', () => {
  if (menuIsOpened) {
    closeHeroMenu()
  } else {
    openHeroMenu()
  }
  menuIsOpened = !menuIsOpened
})

for (const $anchor of document.querySelectorAll('.hero__overlay a')) {
  $anchor.addEventListener('click', () => {
    $hero.classList.remove('hero__menu_opened')
  })
}
