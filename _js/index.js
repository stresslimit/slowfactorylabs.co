// import initFastclick from './fastclick.min'
// import { init as mobile_menu, close_mobile_menu } from './mobile-menu'
import Typewriter from './typewriter'
let words = [
  'Science & Design',
  'Regenerative Aesthetics',
  'Bio-Design',
  'Waste-led Design',
  'Regenerative Systems',
  'Waste to Resource'
]

window.addEventListener('load', (e) => {

  externalLinks()
  // initFastclick()
  // mobile_menu()
  const f = document.getElementById('js-typewriter')
  if ( f )
    Typewriter(shuffle(words), f)

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

})


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}
