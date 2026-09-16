'use strict';
const COMBOS = [
 {id:'le',group:'Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)',name:'1 Nước hoa Saras',detail:'1 nước hoa Nam hoặc Nữ tùy chọn (9ml)',price:199000,old:199000,ship:20000,gift:'Chọn mùi hương ở phần lời nhắn',badge:''},
 {id:'dau-do',group:'Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)',name:'Bánh Dẻo Nhân Đậu Đỏ',detail:'1 nước hoa Nam + 1 nước hoa Nữ',price:329000,old:398000,ship:0,gift:'Tặng túi quà nơ hoa lụa (Freeship)',badge:''},
 {id:'ngot-ngao',group:'Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)',name:'Bánh Dẻo Nhân Đôi Ngọt Ngào',detail:'2 nước hoa Nữ',price:329000,old:398000,ship:0,gift:'Tặng túi quà nơ hoa lụa (Freeship)',badge:''},
 {id:'men-li',group:'Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)',name:'Bánh Nướng Nhân Men Lì',detail:'2 nước hoa Nam: Columbus + Rocky',price:329000,old:398000,ship:0,gift:'Tặng túi quà nơ hoa lụa (Freeship)',badge:''},
 {id:'song-hy',group:'Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)',name:'Bánh Dẻo Nhân Song Hỷ Thơm Lừng',detail:'2 nước hoa Nam + 2 nước hoa Nữ',price:559000,old:796000,ship:0,gift:'Tặng túi mica nơ hoa lụa cao cấp (Freeship - Bán chạy nhất)',badge:'Bán chạy nhất',badgeClass:'hot'},
 {id:'vuot-nang',group:'Nhóm Hộp Quà Thể Thao & Skincare Nữ',name:'Bánh Dẻo Nhân Ngoan Xinh Yêu Vượt Nắng',detail:'KCN SPF 100 + SRM Clover + Serum',price:629000,old:832000,ship:0,gift:'TẶNG 1 NƯỚC HOA CATCHY 9ML + Hộp quà thắt nơ vàng Saras (Freeship)',badge:'Tặng Catchy 9ml',badgeClass:'gift-badge'},
 {id:'trung-muoi',group:'Nhóm Hộp Quà Skincare & Nước Hoa Theo Vị Nhân Bánh',name:'Bánh Nhân Trứng Muối',detail:'KCN + EX + CL + Helen',price:589000,old:856000,ship:0,gift:'Hộp quà cao cấp Saras (Freeship)',badge:''},
 {id:'thap-cam',group:'Nhóm Hộp Quà Skincare & Nước Hoa Theo Vị Nhân Bánh',name:'Bánh Nhân Thập Cẩm',detail:'KCN + SRM + Serum + FC + DL + ED',price:799000,old:1230000,ship:0,gift:'Hộp quà cao cấp Saras (Freeship - Tiết kiệm nhất)',badge:'Tiết kiệm nhất',badgeClass:'save'},
 {id:'tu-quy',group:'Nhóm Set Lồng Đèn Nước Hoa Mica Trong Suốt',name:'Bánh Lồng Đèn Bánh Dẻo Nhân “Tứ Quý Ngọt Ngào”',detail:'4 nước hoa Nữ tùy chọn',price:499000,old:796000,ship:0,gift:'Hộp/Túi mica trong suốt thắt nơ (Freeship)',badge:''},
 {id:'luc-vi',group:'Nhóm Set Lồng Đèn Nước Hoa Mica Trong Suốt',name:'Bánh Lồng Đèn Bánh Nướng Nhân “Lục Vị Thơm Lừng”',detail:'6 nước hoa Saras tùy chọn',price:799000,old:1194000,ship:0,gift:'Hộp/Túi mica trong suốt thắt nơ (Freeship)',badge:''}
];
const money=n=>new Intl.NumberFormat('vi-VN').format(n)+'đ';
const form=document.querySelector('#order-form');const status=document.querySelector('#form-status');const root=document.querySelector('#combo-options');
const GROUPS=['Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)','Nhóm Hộp Quà Thể Thao & Skincare Nữ','Nhóm Hộp Quà Skincare & Nước Hoa Theo Vị Nhân Bánh','Nhóm Set Lồng Đèn Nước Hoa Mica Trong Suốt'];
const GROUP_TABS=[
 {id:'all',label:'Tất cả (10)',group:null},
 {id:'grp-0',label:'🌸 Nước hoa (5)',group:'Nhóm Túi Quà Hoa Lụa / Hộp 2 Ngăn (Nước Hoa Nam - Nữ)'},
 {id:'grp-1',label:'☀️ Vượt Nắng (1)',group:'Nhóm Hộp Quà Thể Thao & Skincare Nữ'},
 {id:'grp-2',label:'✨ Vị Bánh (2)',group:'Nhóm Hộp Quà Skincare & Nước Hoa Theo Vị Nhân Bánh'},
 {id:'grp-3',label:'🏮 Lồng Đèn (2)',group:'Nhóm Set Lồng Đèn Nước Hoa Mica Trong Suốt'}
];
let sheetTabId='all';
const SHORT_NAMES={'le':'1 nước hoa Nam / Nữ','dau-do':'Đậu Đỏ · 1 Nam + 1 Nữ','ngot-ngao':'Đôi Ngọt Ngào · 2 Nữ','men-li':'Men Lì · 2 Nam','song-hy':'Song Hỷ · 2 Nam + 2 Nữ','vuot-nang':'Vượt Nắng · Bộ skincare','trung-muoi':'Trứng Muối · 4 sản phẩm','thap-cam':'Thập Cẩm · 6 sản phẩm','tu-quy':'Tứ Quý · 4 nước hoa Nữ','luc-vi':'Lục Vị · 6 nước hoa'};

function getComboImage(id){
 if(id==='vuot-nang'||id==='trung-muoi'||id==='thap-cam')return 'albatross.webp';
 if(id==='men-li')return 'colombus.webp';
 if(id==='ngot-ngao')return 'helen.webp';
 if(id==='le')return 'catchy.webp';
 return 'gift.webp';
}

function openSheet(){
 const bd=document.querySelector('#combo-modal-backdrop');
 if(bd){
  bd.hidden=false;
  document.body.classList.add('modal-sheet-open');
  updateSheetFooter();
  const checkedItem=bd.querySelector('.combo-sheet-item.is-selected');
  if(checkedItem)checkedItem.scrollIntoView({block:'nearest'});
 }
}

function closeSheet(){
 const bd=document.querySelector('#combo-modal-backdrop');
 if(bd){
  bd.hidden=true;
  document.body.classList.remove('modal-sheet-open');
 }
}

function switchSheetTab(tabId){
 sheetTabId=tabId;
 const bd=document.querySelector('#combo-modal-backdrop');
 if(!bd)return;
 bd.querySelectorAll('.sheet-tab').forEach(btn=>{
  const isAct=btn.dataset.sheetTab===tabId;
  btn.classList.toggle('is-active',isAct);
  btn.setAttribute('aria-selected',String(isAct));
 });
 bd.querySelectorAll('.combo-sheet-item').forEach(item=>{
  if(tabId==='all'||item.dataset.groupId===tabId){
   item.style.display='';
  }else{
   item.style.display='none';
  }
 });
}

function updateSheetFooter(combo){
 const c=combo||chosen();
 const nameEl=document.querySelector('#sheet-footer-name');
 const priceEl=document.querySelector('#sheet-footer-price');
 const shipEl=document.querySelector('#sheet-footer-ship');
 if(nameEl)nameEl.textContent=c.name;
 if(priceEl)priceEl.textContent=money(c.price);
 if(shipEl){
  shipEl.textContent=c.ship===0?'Freeship':'+20k ship';
  shipEl.className='sheet-footer-ship '+(c.ship===0?'free':'fee');
 }
}

function updateTriggerBox(){
 const c=chosen();
 const img=getComboImage(c.id);
 const imgEl=document.querySelector('#trigger-image');if(imgEl){imgEl.src='assets/'+img;imgEl.alt=c.name;}
 const nameEl=document.querySelector('#trigger-name');if(nameEl)nameEl.textContent=c.name;
 const detailEl=document.querySelector('#trigger-detail');if(detailEl)detailEl.textContent=c.detail;
 const priceEl=document.querySelector('#trigger-price');if(priceEl)priceEl.textContent=money(c.price);
 const oldEl=document.querySelector('#trigger-old');if(oldEl)oldEl.textContent=c.old>c.price?money(c.old):'';
 const shipEl=document.querySelector('#trigger-ship');if(shipEl)shipEl.textContent=c.ship===0?'Freeship':'+20k ship';
 const giftEl=document.querySelector('#trigger-gift');if(giftEl)giftEl.textContent='🎁 '+c.gift;
 const badgeEl=document.querySelector('#trigger-badge');
 if(badgeEl){
  badgeEl.textContent=c.badge||'';
  badgeEl.style.display=c.badge?'block':'none';
  badgeEl.className='trigger-badge '+(c.badgeClass||'');
 }
}

function renderCustomSelect(){
 root.innerHTML='';
 const trigger=document.createElement('div');
 trigger.className='custom-combo-trigger';
 trigger.id='combo-trigger';
 trigger.role='button';
 trigger.tabIndex=0;
 trigger.setAttribute('aria-haspopup','dialog');
 trigger.setAttribute('aria-label','Chạm để thay đổi combo quà tặng');
 trigger.innerHTML=`
  <div class="trigger-thumb">
   <img id="trigger-image" src="assets/gift.webp" alt="Ảnh combo quà tặng" width="56" height="56">
   <span class="trigger-badge" id="trigger-badge">Bán chạy nhất</span>
  </div>
  <div class="trigger-main">
   <div class="trigger-top">
    <strong id="trigger-name">Bánh Dẻo Nhân Song Hỷ Thơm Lừng</strong>
    <span class="trigger-btn">Đổi combo ▾</span>
   </div>
   <div class="trigger-desc" id="trigger-detail">2 nước hoa Nam + 2 nước hoa Nữ</div>
   <div class="trigger-bottom">
    <div class="trigger-prices">
     <span class="trigger-price" id="trigger-price">559.000đ</span>
     <del class="trigger-old" id="trigger-old">796.000đ</del>
     <span class="trigger-ship" id="trigger-ship">Freeship</span>
    </div>
    <div class="trigger-gift" id="trigger-gift">🎁 Tặng túi mica nơ hoa lụa cao cấp</div>
   </div>
  </div>`;
 trigger.addEventListener('click',openSheet);
 trigger.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSheet();}});
 root.append(trigger);

 const backdrop=document.createElement('div');
 backdrop.className='combo-modal-backdrop';
 backdrop.id='combo-modal-backdrop';
 backdrop.hidden=true;
 
 const sheet=document.createElement('div');
 sheet.className='combo-modal-sheet';
 sheet.id='combo-modal-sheet';
 sheet.role='dialog';
 sheet.setAttribute('aria-modal','true');
 sheet.setAttribute('aria-labelledby','sheet-heading-title');

 sheet.innerHTML=`
  <div class="sheet-drag-handle"></div>
  <div class="sheet-header">
   <div>
    <h3 id="sheet-heading-title">Chọn combo quà tặng</h3>
    <p>Chạm vào combo bạn muốn để chọn nhanh</p>
   </div>
   <button type="button" class="sheet-close" id="sheet-close" aria-label="Đóng bảng chọn">✕ Đóng</button>
  </div>
  <div class="sheet-body" id="sheet-combo-list"></div>
  <div class="sheet-footer">
   <div class="sheet-footer-summary">
    <div class="sheet-footer-info">
     <span class="sheet-footer-label">Combo đang chọn:</span>
     <strong class="sheet-footer-name" id="sheet-footer-name">Bánh Dẻo Nhân Song Hỷ Thơm Lừng</strong>
    </div>
    <div class="sheet-footer-price-wrap">
     <strong class="sheet-footer-price" id="sheet-footer-price">559.000đ</strong>
     <span class="sheet-footer-ship free" id="sheet-footer-ship">Freeship</span>
    </div>
   </div>
   <button type="button" class="sheet-confirm-btn" id="sheet-confirm">XÁC NHẬN CHỌN COMBO ➜</button>
  </div>`;

 const sheetList=sheet.querySelector('#sheet-combo-list');
 for(let i=0;i<COMBOS.length;i++){
  const c=COMBOS[i];
  const grpIndex=GROUPS.indexOf(c.group);
  const grpId='grp-'+grpIndex;
  const item=document.createElement('label');
  item.className='combo-sheet-item'+(c.id==='song-hy'?' is-selected':'');
  item.dataset.groupId=grpId;
  item.dataset.comboId=c.id;
  item.htmlFor='radio-combo-'+c.id;

  const badgeHtml=c.badge?`<span class="combo-badge ${c.badgeClass}">${c.badge}</span>`:'';
  const oldHtml=c.old>c.price?`<del class="combo-sheet-old">${money(c.old)}</del>`:'';
  const shipTag=c.ship===0?'<span class="combo-ship-tag free">Freeship</span>':'<span class="combo-ship-tag ship-fee">+20k ship</span>';
  const img=getComboImage(c.id);

  item.innerHTML=`
   <div class="sheet-radio-indicator">
    <input type="radio" name="combo" id="radio-combo-${c.id}" value="${c.id}" ${c.id==='song-hy'?'checked':''}>
    <span class="custom-radio"></span>
   </div>
   <img class="combo-sheet-thumb" src="assets/${img}" alt="${c.name}" width="48" height="48">
   <div class="combo-sheet-info">
    <div class="combo-sheet-top">
     <strong class="combo-sheet-title">${c.name}</strong>
     ${badgeHtml}
    </div>
    <div class="combo-sheet-desc">${c.detail}</div>
    <div class="combo-sheet-gift">🎁 ${c.gift}</div>
    <div class="combo-sheet-prices">
     <span class="combo-sheet-price">${money(c.price)}</span>
     ${oldHtml}
     ${shipTag}
    </div>
   </div>`;
  
  item.addEventListener('click',e=>{
   setCombo(c.id);
   updateSheetFooter(c);
   setTimeout(closeSheet,180);
  });
  sheetList.append(item);
 }

 backdrop.append(sheet);
 root.append(backdrop);

 sheet.querySelector('#sheet-close').addEventListener('click',closeSheet);
 sheet.querySelector('#sheet-confirm').addEventListener('click',closeSheet);
 backdrop.addEventListener('click',e=>{
  if(e.target===backdrop)closeSheet();
 });
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&!backdrop.hidden)closeSheet();
 });
}
renderCustomSelect();
function getSelectedComboId(){const checked=form.querySelector('input[name="combo"]:checked');return checked?checked.value:'song-hy';}
function chosen(){const id=getSelectedComboId();return COMBOS.find(c=>c.id===id)||COMBOS[4];}
function setCombo(id){
 const input=form.querySelector(`input[name="combo"][value="${id}"]`);if(input){input.checked=true;}
 root.querySelectorAll('.combo-sheet-item').forEach(card=>{const r=card.querySelector('input[type="radio"]');card.classList.toggle('is-selected',Boolean(r&&r.checked));});
 updateTriggerBox();updateSummary();updateSheetFooter();const qs=document.querySelector('#quick-combo');if(qs&&qs.value!==id){qs.value=id;qs.dispatchEvent(new Event('change'));}
}
window.setCombo=setCombo;window.updateSummary=updateSummary;
function updateSummary(){
 const c=chosen();
 document.querySelector('#summary-name').textContent=c.name;
 document.querySelector('#subtotal').textContent=money(c.price);
 document.querySelector('#shipping').textContent=c.ship?money(c.ship):'Miễn phí';
 document.querySelector('#total').textContent=money(c.price+c.ship);
 const img=getComboImage(c.id);
 const selCard=document.querySelector('#selected-combo-card');
 if(selCard){selCard.innerHTML=`<img src="assets/${img}" alt="Ảnh sản phẩm minh họa" width="64" height="64"><div><strong>${c.name}</strong><span>${c.detail}</span><small>${c.gift}</small></div>`;}
 updateTriggerBox();
 updateSheetFooter(c);
 root.querySelectorAll('.combo-sheet-item').forEach(card=>{const r=card.querySelector('input[type="radio"]');card.classList.toggle('is-selected',Boolean(r&&r.checked));});
}
root.addEventListener('change',e=>{if(e.target&&e.target.name==='combo'){setCombo(e.target.value);}});updateSummary();
document.querySelectorAll('[data-pick]').forEach(b=>b.addEventListener('click',()=>{setCombo(b.dataset.pick);document.querySelector('#dat-hang').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
form.elements.phone.addEventListener('input',()=>form.elements.phone.setCustomValidity(''));
let requestId=null;let busy=false;
form.addEventListener('submit',async e=>{e.preventDefault();if(busy)return;const data=new FormData(form);const phone=String(data.get('phone')).replace(/[\s().-]/g,'').replace(/^\+84/,'0');if(!/^0[35789]\d{8}$/.test(phone)){form.elements.phone.setCustomValidity('Vui lòng nhập số điện thoại di động Việt Nam hợp lệ.');form.elements.phone.reportValidity();return;}if(!String(data.get('customer')).trim()||!String(data.get('address')).trim()){status.textContent='Vui lòng nhập đầy đủ họ tên và địa chỉ nhận hàng.';return;}if(!form.reportValidity()||data.get('website'))return;
 busy=true;const btn=document.querySelector('#submit-order');btn.disabled=true;btn.textContent='Đang gửi thông tin…';status.className='';status.textContent='';requestId=requestId||crypto.randomUUID();
 try{if(!window.SARAS_ORDER_ENDPOINT)throw new Error('Form chưa được kích hoạt nhận đơn. Bạn có thể đặt qua Zalo hoặc hotline Saras.');const campaign={};const params=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'].forEach(k=>campaign[k]=(params.get(k)||'').slice(0,250));const response=await fetch(window.SARAS_ORDER_ENDPOINT,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},signal:AbortSignal.timeout(25000),body:JSON.stringify({requestId,combo:chosen().id,customer:String(data.get('customer')).trim(),phone,address:String(data.get('address')).trim(),note:String(data.get('note')).trim(),consent:true,website:'',...campaign})});const result=await response.json();if(!response.ok||!result.ok)throw new Error(result.message||'Chưa gửi được đơn. Vui lòng thử lại hoặc liên hệ Saras qua Zalo.');status.className='success';status.textContent=`Saras đã nhận thông tin đặt hàng. Mã đơn: ${result.orderId}. Nhân viên sẽ liên hệ xác nhận trước khi giao.`;requestId=null;form.reset();updateSummary();window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'order_submitted',order_id:result.orderId});}
 catch(error){status.className='error';status.textContent=error.message==='Unexpected end of JSON input'||error instanceof SyntaxError?'Form chưa được kích hoạt nhận đơn. Bạn có thể đặt qua Zalo hoặc hotline Saras.':error.message;}
 finally{busy=false;btn.disabled=false;btn.innerHTML='XÁC NHẬN ĐẶT HÀNG NGAY <span>➜</span>';}
});
