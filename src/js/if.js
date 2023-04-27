import { refs, loadMoreClick } from "./../index";

//* Безкінечний скрол

export function registerIntersectionObserver() {

  const onObserver = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreClick();
    }
       
  })
};

const options = {
  rootMargin: '300px',
}

const observer = new IntersectionObserver(onObserver, options);

observer.observe(refs.btnLoadMoreEl);
}
