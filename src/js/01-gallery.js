import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `
    <li class='gallery__item'>
        <img src="${preview}" alt="${original}">
        <p> ${description} </p>
    </li>
    `).join('')
}
