import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onGalleryRefClick);

function createGallery(images) {
  const galleryImages = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  return galleryImages;
}

galleryRef.insertAdjacentHTML("beforeend", createGallery());

function onGalleryRefClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance =
    basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
}

console.log(galleryItems);
