import{a as v,S,i as s}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const q="54287285-776a87bf4c277c8bc3886317f",M="https://pixabay.com/api/";async function p(r,o=1){try{return(await v.get(M,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(e){throw console.error("Error fetching images from Pixabay:",e.message),e}}const R=new S(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more");function b(r){if(!r||r.length===0)return;const o=r.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img
            src="${e.webformatURL}"
            alt="${e.tags}"
            loading="lazy"
            width="320"
            height="220"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");g.insertAdjacentHTML("beforeend",o),R.refresh()}function E(){g.innerHTML=""}function w(){m.classList.add("is-visible")}function l(){m.classList.remove("is-visible")}function f(){y.hidden=!1}function u(){y.hidden=!0}let h="",i=1,c=0;const $=document.querySelector(".form"),B=document.querySelector(".load-more");$.addEventListener("submit",P);B.addEventListener("click",x);u();async function P(r){r.preventDefault();const o=r.currentTarget.elements.searchQuery.value.trim();if(!o){s.warning({title:"Attention",message:"Please enter what to search for!",position:"topRight"});return}h=o,i=1,c=0,E(),u(),w();try{const e=await p(h,i);c=e.totalHits||0;const a=e.hits||[];if(l(),a.length===0){s.error({title:"No results",message:"Unfortunately, nothing was found for your query...",position:"topRight"});return}b(a),i*15<c&&f(),s.success({title:"Success!",message:`Found ${c} images`,position:"topRight"}),L()}catch{l(),s.error({title:"Error",message:"Something went wrong... Try again",position:"topRight"})}}async function x(){i+=1,w(),u();try{const o=(await p(h,i)).hits;l(),b(o),i*15>=c?(u(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):f(),L()}catch{l(),f(),s.error({title:"Error",message:"Failed to load the next page",position:"topRight"})}}function L(){var o;const{height:r}=((o=document.querySelector(".gallery").firstElementChild)==null?void 0:o.getBoundingClientRect())||{height:400};window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
