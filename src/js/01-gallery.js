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
    const target = evt.target;
    if(target.classList.contains('gallery__image')) {
      const originalUrl = target.dataset.source;
      const modal = basicLightbox.create(`<img
    src="${originalUrl}"
    width='800' heigh='600'
  /> `)
  modal.show();
}};



