import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulBoxReff = document.querySelector('.gallery');

ulBoxReff.addEventListener('click', (evt) => {
  evt.preventDefault()
})

const createMarkup = (reff) => {
  const images = galleryItems.map((item) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.preview}">
        <img
           class="gallery__image"
           src="${item.preview}"
           data-source="${item.original}"
           alt="${item.description}"
           title=${item.description}
        />
       </a>
    </li>`
  }).join('')
  reff.insertAdjacentHTML("afterbegin", images)
}
createMarkup(ulBoxReff)
let gallery = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250 });

