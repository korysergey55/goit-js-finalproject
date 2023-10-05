import { galleryItems } from './gallery-items.js';

// Change code below this line
const ulBoxReff = document.querySelector('.gallery');

let instance

ulBoxReff.addEventListener('click', (evt) => {
  evt.preventDefault()
  instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="auto" height="auto">
  `)
  instance.show()

})

const handleBtnEscape = (evt) => {
  console.log(evt.key)
  if (evt.key === 'Escape') instance.close()
}

const btnEskEvent = ulBoxReff.addEventListener('keydown', _.throttle((evt) => {
  handleBtnEscape(evt)
}, 500))

// btnEskEvent.removeEventListener('keydown', handleBtnEscape)


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

console.log(galleryItems);
