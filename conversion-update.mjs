import fs from 'node:fs';
let h=fs.readFileSync('dist/index.html','utf8');
const cards=[
 ['dau-do','Dành cho hai người','Một chút hương cho anh, một chút dịu dàng cho em. Set Đậu Đỏ gồm 1 nước hoa Nam và 1 nước hoa Nữ, kèm túi quà nơ hoa lụa.','329.000đ','gift.webp'],
 ['song-hy','Gửi thương đến cả nhà','Hai hương Nam, hai hương Nữ trong cùng một lựa chọn. Song Hỷ là gợi ý khi bạn muốn chuẩn bị quà cho nhiều người thân.','559.000đ','gift.webp'],
 ['vuot-nang','Cho người thích vận động','Chống nắng Albatross, làm sạch cùng Clover và serum trong bộ Vượt Nắng. Kèm Catchy 9ml và hộp quà nơ vàng Saras.','629.000đ','albatross.webp'],
 ['tu-quy','Tặng hội bạn thân','Bốn nước hoa Nữ tùy chọn để mỗi người chọn một sắc hương riêng. Set Tứ Quý kèm hộp/túi mica trong suốt thắt nơ.','499.000đ','helen.webp'],
 ['luc-vi','Một món quà, nhiều sắc hương','Sáu nước hoa tùy chọn cho những ngày và những tâm trạng khác nhau. Ghi mùi bạn muốn vào lời nhắn để Saras xác nhận.','799.000đ','gift.webp']
];
const section=`<section class="gift-guide ad-section" id="goi-y-qua"><div class="ad-container"><p class="ad-kicker">GỢI Ý CHỌN QUÀ TỪ SARAS</p><h2>Chọn đúng người.<br><em>Gửi đúng yêu thương.</em></h2><p class="guide-intro">5 gợi ý để bạn tìm được bộ quà phù hợp. Mọi combo bên dưới đều miễn phí giao hàng.</p><div class="guide-grid mobile-slider" data-slider="Gợi ý chọn quà">${cards.map((c,i)=>`<article class="guide-card"><div class="guide-top"><span>0${i+1}</span><img src="assets/${c[4]}" alt="Ảnh sản phẩm Saras minh họa" width="100" height="100" loading="lazy"></div><h3>${c[1]}</h3><p>${c[2]}</p><strong>${c[3]}</strong><button type="button" class="ad-button" data-pick="${c[0]}">CHỌN BỘ QUÀ NÀY <span>➜</span></button></article>`).join('')}</div></div></section>`;
h=h.replace('<section class="ad-faq',section+'<section class="ad-faq');
// Retain source attribution without off-page navigation; product CTAs target the form.
h=h.replace(/<a\b([^>]*?)href="(?:https?:|tel:|mailto:)[^"]*"([^>]*)>([\s\S]*?)<\/a>/g,(all,a,b,body)=>{
 const attrs=(a+b).replace(/\s*(target|rel)="[^"]*"/g,'');
 if(/footer-logo/.test(attrs))return `<a${attrs} href="#dat-hang">${body}</a>`;
 if(/đánh giá gốc/.test(body))return '<p class="review-source">Nguồn: đánh giá sản phẩm trên sarasbeauty.vn · 02/12/2025</p>';
 if(/Zalo|Tìm hiểu serum/.test(body))return `<a${attrs} href="#dat-hang">ĐỂ LẠI THÔNG TIN ĐỂ SARAS TƯ VẤN ➜</a>`;
 return `<span${attrs}>${body.replace(/ ↗/g,'')}</span>`;
});
h=h.replace('<a id="document-source" target="_blank" rel="noopener">Mở hồ sơ PDF đầy đủ trên Google Drive ↗</a>','<p id="document-source">Bản scan từ hồ sơ công bố do thương hiệu cung cấp.</p>');
h=h.replace('</head>','<link rel="stylesheet" href="conversion.css"></head>');
h=h.replace('<script src="config.js">','<aside id="gift-nudge" class="gift-nudge" aria-label="Gợi ý quà Saras" hidden><button type="button" id="nudge-close" aria-label="Tắt gợi ý tự động">×</button><img id="nudge-image" src="assets/gift.webp" alt="Sản phẩm Saras" width="64" height="64"><div><small>GỢI Ý QUÀ TẶNG SARAS</small><p id="nudge-copy"></p><button type="button" id="nudge-pick" data-pick="song-hy">Chọn combo này ➜</button></div></aside><script src="config.js">');
h=h.replace('</body>','<script src="conversion.js" defer></script></body>');
fs.writeFileSync('dist/index.html',h);
let d=fs.readFileSync('dist/documents.js','utf8');d=d.replace("document.querySelector('#document-source').href=b.dataset.source;",'');fs.writeFileSync('dist/documents.js',d);
