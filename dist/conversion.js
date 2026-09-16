'use strict';
(() => {
 const nudge=document.querySelector('#gift-nudge');
 const pick=document.querySelector('#nudge-pick');
 const order=document.querySelector('#dat-hang');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const NOTIFICATIONS = [
  {name:'Nguyễn Thùy Linh',city:'Hà Nội',combo:'Combo Song Hỷ 4 vị',time:'3 phút trước',id:'song-hy',image:'gift.webp'},
  {name:'Trần Tuấn Anh',city:'TP.HCM',combo:'Combo Thể Thao Vượt Nắng',time:'6 phút trước',id:'vuot-nang',image:'albatross.webp'},
  {name:'Lê Thu Trang',city:'Đà Nẵng',combo:'Combo Bánh Dẻo Đậu Đỏ',time:'2 phút trước',id:'dau-do',image:'gift.webp'},
  {name:'Vũ Hoàng Nam',city:'Hải Phòng',combo:'Combo Thập Cẩm Tiết Kiệm',time:'8 phút trước',id:'thap-cam',image:'albatross.webp'},
  {name:'Đỗ Minh Trí',city:'Bà Rịa - Vũng Tàu',combo:'Bánh Nướng Nhân Men Lì (2 chai)',time:'1 phút trước',id:'men-li',image:'colombus.webp'},
  {name:'Lương Hải Yến',city:'Bắc Ninh',combo:'Combo Song Hỷ Thơm Lừng (Túi hoa lụa)',time:'5 phút trước',id:'song-hy',image:'gift.webp'},
  {name:'Phạm Quỳnh Nga',city:'Cần Thơ',combo:'Bánh Lồng Đèn Tứ Quý Ngọt Ngào',time:'11 phút trước',id:'tu-quy',image:'gift.webp'},
  {name:'Đặng Minh Khoa',city:'Bình Dương',combo:'Bánh Nướng Nhân Men Lì',time:'4 phút trước',id:'men-li',image:'colombus.webp'},
  {name:'Phan Thanh Tùng',city:'Đồng Nai',combo:'Combo Vượt Nắng (Tặng Catchy 9ml)',time:'9 phút trước',id:'vuot-nang',image:'albatross.webp'},
  {name:'Hoàng Phương Thảo',city:'Hà Nội',combo:'Bánh Dẻo Đôi Ngọt Ngào',time:'7 phút trước',id:'ngot-ngao',image:'helen.webp'},
  {name:'Bùi Diệu Hương',city:'Huế',combo:'Bánh Dẻo Nhân Đôi Ngọt Ngào',time:'12 phút trước',id:'ngot-ngao',image:'helen.webp'},
  {name:'Nguyễn Bích Ngọc',city:'Quảng Ninh',combo:'Bánh Lồng Đèn Lục Vị Thơm Lừng',time:'15 phút trước',id:'luc-vi',image:'gift.webp'},
  {name:'Trịnh Quốc Bảo',city:'Thanh Hóa',combo:'Combo Bánh Nhân Trứng Muối',time:'14 phút trước',id:'trung-muoi',image:'albatross.webp'},
  {name:'Võ Thảo My',city:'Nha Trang',combo:'Bánh Lồng Đèn Tứ Quý Ngọt Ngào',time:'17 phút trước',id:'tu-quy',image:'gift.webp'},
  {name:'Hà Mai Chi',city:'TP.HCM',combo:'1 Nước hoa Saras (SR Catchy 9ml)',time:'19 phút trước',id:'le',image:'catchy.webp'},
  {name:'Tô Đức Huy',city:'Hà Nội',combo:'Combo Bánh Nhân Thập Cẩm (6 món)',time:'22 phút trước',id:'thap-cam',image:'albatross.webp'}
 ];
 let dismissed=false,last=-1,timer,hideTimer;
 const hide=()=>{nudge.hidden=true;clearTimeout(hideTimer);};
 const inForm=()=>{const r=order.getBoundingClientRect();return r.top<innerHeight&&r.bottom>0;};
 const schedule=()=>{clearTimeout(timer);if(!dismissed)timer=setTimeout(show,15000+Math.random()*5000);};
 function show(){
  if(!dismissed&&!document.hidden&&!inForm()&&!document.querySelector('dialog[open]')&&!document.activeElement?.matches('input,textarea,select')&&!reduced.matches){
   let i;do{i=Math.floor(Math.random()*NOTIFICATIONS.length);}while(i===last);last=i;const item=NOTIFICATIONS[i];
   document.querySelector('#nudge-copy').innerHTML=`<strong>${item.name} (${item.city})</strong> vừa đặt thành công <b>${item.combo}</b> – <span class="nudge-ago">${item.time}</span>`;
   document.querySelector('#nudge-image').src='assets/'+item.image;
   pick.dataset.pick=item.id;
   nudge.hidden=false;hideTimer=setTimeout(hide,7000);
  }schedule();
 }
 document.querySelector('#nudge-close').addEventListener('click',()=>{dismissed=true;clearTimeout(timer);hide();});
 pick.addEventListener('click',hide);
 document.addEventListener('visibilitychange',()=>{hide();if(document.hidden)clearTimeout(timer);else schedule();});
 document.addEventListener('focusin',()=>{const editing=order.contains(document.activeElement);document.body.classList.toggle('form-active',editing);if(editing)hide();});
 new IntersectionObserver(entries=>{if(entries[0].isIntersecting)hide();}).observe(order);
 document.querySelectorAll('.ad-button[href="#dat-hang"],.mobile-bar .btn,[data-pick],#submit-order').forEach((b,i)=>{b.classList.add('cta-live');b.style.animationDelay=(i%4)*.6+'s';});
 document.querySelectorAll('a[href="#dat-hang"]').forEach(a=>a.addEventListener('click',()=>{hide();if(document.querySelector('#document-viewer').open)document.querySelector('#document-viewer').close();}));
 schedule();
})();
