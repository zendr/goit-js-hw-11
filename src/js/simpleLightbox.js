import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//* Великі зображення
export var lightbox = new SimpleLightbox('.photo-card a', {
    // captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  }
);