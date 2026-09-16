'use strict';
const quickSelect=document.querySelector('#quick-combo');
if(quickSelect){
COMBOS.forEach(c=>{const option=document.createElement('option');option.value=c.id;option.textContent=SHORT_NAMES[c.id]+' — '+money(c.price);quickSelect.append(option);});quickSelect.value='dau-do';
function updateQuickTotal(){const c=COMBOS.find(c=>c.id===quickSelect.value);const totalEl=document.querySelector('#quick-total');if(totalEl)totalEl.textContent=money(c.price+c.ship);}
quickSelect.addEventListener('change',updateQuickTotal);updateQuickTotal();
const quickForm=document.querySelector('#quick-form');
if(quickForm){quickForm.addEventListener('submit',e=>{e.preventDefault();if(window.setCombo){window.setCombo(quickSelect.value);}else{form.elements.combo.value=quickSelect.value;updateSummary();}document.querySelector('#dat-hang').scrollIntoView({behavior:'instant'});form.elements.customer.focus({preventScroll:true});});}
}
