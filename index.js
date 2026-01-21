import{a as d,S as p,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="54287285-776a87bf4c277c8bc3886317f",y="https://pixabay.com/api/";async function g(s){try{return(await d.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),t}}const h=new p(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery"),u=document.querySelector(".loader");function L(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function w(){l.innerHTML=""}function b(){u.classList.add("is-visible")}function c(){u.classList.remove("is-visible")}const f=document.querySelector(".form"),v=f.querySelector('input[name="search-text"]');f.addEventListener("submit",async s=>{s.preventDefault();const t=v.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query!"});return}w(),b();try{const r=await g(t);if(c(),r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r.hits)}catch{c(),a.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map
