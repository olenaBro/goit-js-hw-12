import{a as g,S as y,i}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const b="54287285-776a87bf4c277c8bc3886317f",L="https://pixabay.com/api/";async function w(s,r=1){try{return(await g.get(L,{params:{key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(e){throw console.error("Error fetching images from Pixabay:",e.message),e}}const v=new y(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more");function S(s){if(!s||s.length===0)return;const r=s.map(e=>`
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
    `).join("");p.insertAdjacentHTML("beforeend",r),v.refresh()}function M(){p.innerHTML=""}function q(){h.classList.add("is-visible")}function u(){h.classList.remove("is-visible")}function $(){m.hidden=!1}function d(){m.hidden=!0}let f="",l=1,a=0;const P=document.querySelector(".form"),R=document.querySelector(".load-more");P.addEventListener("submit",E);R.addEventListener("click",onLoadMore);async function E(s){s.preventDefault();const r=s.currentTarget.elements.searchQuery.value.trim();if(!r){i.warning({title:"Attention",message:"Please enter what to search for!",position:"topRight"});return}f=r,l=1,a=0,M(),d(),q();try{const e=await w(f,l);a=e.totalHits||0;const n=e.hits||[];if(u(),n.length===0){i.error({title:"No results",message:"Unfortunately, nothing was found for your query...",position:"topRight"});return}S(n),l*15<a?$():(d(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),i.success({title:"Success!",message:`Found ${a} images`,position:"topRight"}),smoothScroll()}catch{u(),i.error({title:"Error",message:"Something went wrong... Try again",position:"topRight"})}}
//# sourceMappingURL=index.js.map
