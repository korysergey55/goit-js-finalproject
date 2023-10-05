import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

// Change code below this line
const ulBoxReff = document.querySelector('.gallery');

ulBoxReff.addEventListener('click', (evt) => {
  evt.preventDefault()
  console.log(evt.target.dataset)
  console.log(evt.target.src)
})

const createMarkup = (reff) => {
  const images = galleryItems.map((item) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="">
        <img
           class="gallery__image"
           src="${item.original}"
           data-source="${item.preview}"
           alt="${item.description}"
        />
       </a>
    </li>`
  }).join('')
  reff.insertAdjacentHTML("afterbegin", images)
}
createMarkup(ulBoxReff)

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

console.log(galleryItems);
