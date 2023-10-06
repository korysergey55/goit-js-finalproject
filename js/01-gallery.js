import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulBoxReff = document.querySelector('.gallery');

let instance

ulBoxReff.addEventListener('click', (evt) => {
  evt.preventDefault()

  const handleBtnEscape = (evt) => {
    console.log(evt.key)
    if (evt.key === 'Escape') instance.close()
  }

  instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="auto" height="auto">
  `, {
    onShow: () => { document.addEventListener('keydown', handleBtnEscape) },
    onClose: () => { document.removeEventListener('keydown', handleBtnEscape) },
  })
  instance.show()
})

const createMarkup = (reff) => {
  const images = galleryItems.map((item) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="">
        <img
           class="gallery__image"
           src="${item.preview}"
           data-source="${item.original}"
           alt="${item.description}"
        />
       </a>
    </li>`
  }).join('')
  reff.insertAdjacentHTML("afterbegin", images)
}
createMarkup(ulBoxReff)
