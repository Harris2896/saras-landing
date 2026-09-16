'use strict';
const docViewer=document.querySelector('#document-viewer');
document.querySelectorAll('[data-document]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#document-title').textContent=b.dataset.title;const img=document.querySelector('#document-image');img.src=b.dataset.document;img.alt=b.dataset.title;docViewer.showModal();document.body.classList.add('document-open');}));
document.querySelector('#close-document').addEventListener('click',()=>docViewer.close());
docViewer.addEventListener('close',()=>document.body.classList.remove('document-open'));
docViewer.addEventListener('click',e=>{if(e.target===docViewer){const r=docViewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)docViewer.close();}});

const zoomDocument=document.querySelector('#zoom-document');zoomDocument.addEventListener('click',()=>{const on=zoomDocument.getAttribute('aria-pressed')!=='true';zoomDocument.setAttribute('aria-pressed',String(on));zoomDocument.textContent=on?'Thu nhỏ':'Phóng lớn 2×';docViewer.classList.toggle('is-zoomed',on);});docViewer.addEventListener('close',()=>{docViewer.classList.remove('is-zoomed');zoomDocument.setAttribute('aria-pressed','false');zoomDocument.textContent='Phóng lớn 2×';});
