import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
container.addEventListener('click', handlerClick);

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
       <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
    />
  </a>
</li>
    `).join('')
}

function handlerClick(evt){
    evt.preventDefault();
    if(evt.target === evt.currentTarget) {
        return
    }
    const originalUrl = target.dataset.sourse();
    modal = basicLightbox.create(`<img
    class="gallery__image"
    src="${originalUrl}"
    data-source="${original}"
    alt="${description}"
  /> `)
  modal.show();
};

// console.log(basicLightbox);

