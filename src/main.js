import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

// async function onSearch(e) {
//   e.preventDefault();

//   const query = e.currentTarget.elements.searchQuery.value.trim();

//   if (query === '') {
//     iziToast.warning({
//       title: 'Attention',
//       message: 'Please enter what you are searching for!',
//       position: 'topRight',
//     });
//     return;
//   }

//   currentQuery = query;
//   currentPage = 1;
//   totalHits = 0;
//   clearGallery();
//   hideLoadMoreButton();
//   showLoader();

//   try {
//     const data = await getImagesByQuery(currentQuery, currentPage);

//     totalHits = data.totalHits;
//     const images = data.hits;

//     hideLoader();

//     if (images.length === 0) {
//       iziToast.error({
//         title: 'No results',
//         message:
//           'Unfortunately, nothing was found for your query. Try another query!',
//         position: 'topRight',
//       });
//       return;
//     }

//     createGallery(images);

//     if (images.length === 15 && currentPage * 15 < totalHits) {
//       showLoadMoreButton();
//     }

//     iziToast.success({
//       title: 'Success!',
//       message: `Found ${totalHits} images`,
//       position: 'topRight',
//     });

//     smoothScroll();
//   } catch (error) {
//     hideLoader();
//     iziToast.error({
//       title: 'Error',
//       message: 'Something went wrong... Try again',
//       position: 'topRight',
//     });
//   }
// }

// async function onLoadMore() {
//   currentPage += 1;
//   showLoader();
//   hideLoadMoreButton(); 

//   try {
//     const data = await getImagesByQuery(currentQuery, currentPage);
//     const images = data.hits;

//     hideLoader();

//     createGallery(images);

//     if (currentPage * 15 >= totalHits) {
//       hideLoadMoreButton();
//       iziToast.info({
//         message: "We're sorry, but you've reached the end of search results.",
//         position: 'topRight',
//       });
//     } else {
//       showLoadMoreButton();
//     }

//     smoothScroll();
//   } catch (error) {
//     hideLoader();
//     showLoadMoreButton(); 
//     iziToast.error({
//       title: 'Error',
//       message: 'Failed to load the next page',
//       position: 'topRight',
//     });
//   }
// }

// function smoothScroll() {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild?.getBoundingClientRect() || { height: 400 };

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }

async function onSearch(e) {
  e.preventDefault();

  const query = e.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Attention', message: 'Please enter what to search for!', position: 'topRight' });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();           
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits || 0;
    const images = data.hits || [];

    hideLoader();

    if (images.length === 0) {
      iziToast.error({ title: 'No results', message: 'Unfortunately, nothing was found for your query...', position: 'topRight' });
      return;
    }

    createGallery(images);

    const hasMore = currentPage * 15 < totalHits;

    if (hasMore) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    iziToast.success({ title: 'Success!', message: `Found ${totalHits} images`, position: 'topRight' });

    smoothScroll();
  } catch (error) {
    hideLoader();
    iziToast.error({ title: 'Error', message: 'Something went wrong... Try again', position: 'topRight' });
  }
}



