import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulBoxReff = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'image-title', });

ulBoxReff.addEventListener('click', (evt) => {
  evt.preventDefault()

  gallery.open('show.simplelightbox', function () {
    // console.log('show.simplelightbox')
    (
      `< a href = "images/image1.jpg" > 
          <img
            src="${evt.target.dataset.source}"
            width="auto"
            height="auto"
            alt="${item.description}" 
            title="${item.description}" 
          />
      </ >`
    )
  });
})


const createMarkup = (reff) => {
  const images = galleryItems.map((item) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="images/image1.jpg">
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
