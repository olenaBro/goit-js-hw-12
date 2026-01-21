import{a as v,S,i}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const q="54287285-776a87bf4c277c8bc3886317f",R="https://pixabay.com/api/";async function p(r,t=1){try{return(await v.get(R,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}catch(e){throw console.error("Error fetching images from Pixabay:",e.message),e}}const E=new S(".gallery a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more");function b(r){if(!r||r.length===0)return;const t=r.map(e=>`
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
    `).join("");g.insertAdjacentHTML("beforeend",t),E.refresh()}function $(){g.innerHTML=""}function w(){m.classList.add("is-visible")}function l(){m.classList.remove("is-visible")}function d(){y.hidden=!1}function f(){y.hidden=!0}let h="",a=1,c=0;const B=document.querySelector(".form"),M=document.querySelector(".load-more");B.addEventListener("submit",P);M.addEventListener("click",x);async function P(r){r.preventDefault();const t=r.currentTarget.elements.searchQuery.value.trim();if(t===""){i.warning({title:"Attention",message:"Please enter what you are searching for!",position:"topRight"});return}h=t,a=1,c=0,$(),f(),w();try{const e=await p(h,a);c=e.totalHits;const s=e.hits;if(l(),s.length===0){i.error({title:"No results",message:"Unfortunately, nothing was found for your query. Try another query!",position:"topRight"});return}b(s),s.length===15&&a*15<c&&d(),i.success({title:"Success!",message:`Found ${c} images`,position:"topRight"}),L()}catch{l(),i.error({title:"Error",message:"Something went wrong... Try again",position:"topRight"})}}async function x(){a+=1,w(),f();try{const t=(await p(h,a)).hits;l(),b(t),a*15>=c?(f(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):d(),L()}catch{l(),d(),i.error({title:"Error",message:"Failed to load the next page",position:"topRight"})}}function L(){var t;const{height:r}=((t=document.querySelector(".gallery").firstElementChild)==null?void 0:t.getBoundingClientRect())||{height:400};window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
