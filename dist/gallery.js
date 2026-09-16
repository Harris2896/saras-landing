'use strict';
(()=>{
 const buttons=[...document.querySelectorAll('[data-gallery]')];
 if(!buttons.length)return;
 const hero=document.querySelector('#gallery-main');
 const indexEl=document.querySelector('#gallery-index');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let activeIdx=0;
 let timer=null;
 let userPaused=false;
 let pauseTimeout=null;

 const pick=(idx)=>{
  activeIdx=(idx+buttons.length)%buttons.length;
  const btn=buttons[activeIdx];
  if(hero){
   hero.src=btn.dataset.gallery;
   hero.alt=btn.getAttribute('aria-label').replace(/Xem ảnh \d+: /,'');
  }
  if(indexEl)indexEl.textContent=String(activeIdx+1).padStart(2,'0');
  buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===activeIdx)));
 };

 buttons.forEach((b,i)=>{
  b.addEventListener('click',()=>{
   userPaused=true;
   clearTimeout(pauseTimeout);
   pauseTimeout=setTimeout(()=>{userPaused=false;},6000);
   pick(i);
  });
 });

 const galleryContainer=document.querySelector('.ad-gallery')||hero;
 if(galleryContainer){
  galleryContainer.addEventListener('mouseenter',()=>{userPaused=true;});
  galleryContainer.addEventListener('mouseleave',()=>{userPaused=false;});
  galleryContainer.addEventListener('touchstart',()=>{
   userPaused=true;
   clearTimeout(pauseTimeout);
   pauseTimeout=setTimeout(()=>{userPaused=false;},6000);
  },{passive:true});
 }

 let isVisible=false;
 if('IntersectionObserver' in window&&galleryContainer){
  new IntersectionObserver(([e])=>{isVisible=e.isIntersecting;},{threshold:0.2}).observe(galleryContainer);
 }else{
  isVisible=true;
 }

 const startAuto=()=>{
  stopAuto();
  if(reduced.matches)return;
  timer=setInterval(()=>{
   if(isVisible&&!userPaused&&!document.hidden&&!document.body.classList.contains('modal-sheet-open')){
    pick(activeIdx+1);
   }
  },4000);
 };
 const stopAuto=()=>{if(timer){clearInterval(timer);timer=null;}};

 startAuto();
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAuto();else startAuto();});
})();
