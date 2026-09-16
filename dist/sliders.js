'use strict';
const sliderMobile=matchMedia('(max-width:719px)');
document.querySelectorAll('[data-slider]').forEach((track,index)=>{
 const slides=[...track.children];track.id=track.id||'slider-'+index;
 const nav=document.createElement('div');nav.className='slider-controls';nav.setAttribute('aria-label','Điều khiển '+track.dataset.slider);
 const prev=document.createElement('button');prev.type='button';prev.className='slider-arrow';prev.textContent='←';prev.setAttribute('aria-label','Trước: '+track.dataset.slider);prev.setAttribute('aria-controls',track.id);
 const next=document.createElement('button');next.type='button';next.className='slider-arrow';next.textContent='→';next.setAttribute('aria-label','Tiếp: '+track.dataset.slider);next.setAttribute('aria-controls',track.id);
 const dots=document.createElement('div');dots.className='slider-dots';const count=document.createElement('span');count.className='slider-count';count.setAttribute('aria-live','polite');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');let current=0;
 const go=i=>{
  current=(i+slides.length)%slides.length;
  const target=slides[current];
  track.scrollTo({left:target.offsetLeft-slides[0].offsetLeft,behavior:reduced.matches?'instant':'smooth'});
 };
 slides.forEach((slide,i)=>{const dot=document.createElement('button');dot.type='button';dot.className='slider-dot';dot.setAttribute('aria-label',track.dataset.slider+': mục '+(i+1)+' / '+slides.length);dot.addEventListener('click',()=>go(i));dots.append(dot);});
 prev.addEventListener('click',()=>go(current-1));next.addEventListener('click',()=>go(current+1));nav.append(prev,dots,count,next);track.after(nav);
 const refresh=()=>{const left=track.getBoundingClientRect().left;let best=Infinity;slides.forEach((s,i)=>{const dist=Math.abs(s.getBoundingClientRect().left-left);if(dist<best){best=dist;current=i;}});[...dots.children].forEach((d,i)=>d.setAttribute('aria-current',i===current?'true':'false'));count.textContent=(current+1)+' / '+slides.length;};
 let pending=false;track.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{pending=false;refresh();});}},{passive:true});
 track.addEventListener('keydown',e=>{if(!sliderMobile.matches||e.target!==track)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(current+(e.key==='ArrowRight'?1:-1));}});
 const mode=()=>{if(sliderMobile.matches){track.setAttribute('tabindex','0');track.setAttribute('role','region');track.setAttribute('aria-label',track.dataset.slider+' — vuốt ngang để xem');}else{track.removeAttribute('tabindex');track.removeAttribute('role');track.removeAttribute('aria-label');}refresh();};sliderMobile.addEventListener('change',mode);mode();

 // Auto-slide mechanism
 let autoTimer=null;
 let isVisible=false;
 let userPaused=false;
 let pauseTimeout=null;

 const startAuto=()=>{
  stopAuto();
  if(reduced.matches)return;
  autoTimer=setInterval(()=>{
   if(isVisible&&!userPaused&&!document.hidden&&!document.body.classList.contains('modal-sheet-open')){
    if(track.scrollWidth>track.clientWidth+10){
     go(current+1);
    }
   }
  },3800+(index%3)*300);
 };

 const stopAuto=()=>{
  if(autoTimer){clearInterval(autoTimer);autoTimer=null;}
 };

 const pauseTemporarily=()=>{
  userPaused=true;
  clearTimeout(pauseTimeout);
  pauseTimeout=setTimeout(()=>{userPaused=false;},5000);
 };

 track.addEventListener('touchstart',pauseTemporarily,{passive:true});
 track.addEventListener('pointerdown',pauseTemporarily,{passive:true});
 track.addEventListener('mouseenter',()=>{userPaused=true;});
 track.addEventListener('mouseleave',()=>{userPaused=false;});
 prev.addEventListener('click',pauseTemporarily);
 next.addEventListener('click',pauseTemporarily);

 if('IntersectionObserver' in window){
  new IntersectionObserver(([e])=>{isVisible=e.isIntersecting;},{threshold:0.15}).observe(track);
 }else{
  isVisible=true;
 }

 startAuto();
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAuto();else startAuto();});
});
