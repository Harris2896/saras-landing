/** Bound to the Saras order workbook. Deploy as web app, execute as owner.
 * The public endpoint accepts orders only; it never returns customer records.
 */
const SHEET_ID = '1lIPylj7rz-kVPyLxaDteCc5Ag_e-xCo93MUM5qh7fyE';
const CATALOG = {
 'le':['1 Nước hoa Saras',199000,20000],
 'dau-do':['Bánh Dẻo Nhân Đậu Đỏ',329000,0],
 'ngot-ngao':['Bánh Dẻo Nhân Đôi Ngọt Ngào',329000,0],
 'men-li':['Bánh Nướng Nhân Men Lì',329000,0],
 'song-hy':['Bánh Dẻo Nhân Song Hỷ Thơm Lừng',559000,0],
 'vuot-nang':['Bánh Dẻo Nhân Ngoan Xinh Yêu Vượt Nắng',629000,0],
 'trung-muoi':['Bánh Nhân Trứng Muối',589000,0],
 'thap-cam':['Bánh Nhân Thập Cẩm',799000,0],
 'tu-quy':['Bánh Lồng Đèn Bánh Dẻo Nhân “Tứ Quý Ngọt Ngào”',499000,0],
 'luc-vi':['Bánh Lồng Đèn Bánh Nướng Nhân “Lục Vị Thơm Lừng”',799000,0]
};
function reply(value){return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);}
function textCell(value,max){const v=String(value||'').trim().slice(0,max);return /^[=+\-@\t\r]/.test(v)?"'"+v:v;}
function doGet(){return reply({ok:true,service:'Saras order intake'});}
function doPost(e){
 const lock=LockService.getScriptLock();
 try{
  if(!e||!e.postData||e.postData.contents.length>7000)return reply({ok:false,message:'Dữ liệu không hợp lệ.'});
  const d=JSON.parse(e.postData.contents);
  if(d.website||d.consent!==true||!Object.prototype.hasOwnProperty.call(CATALOG,d.combo))return reply({ok:false,message:'Vui lòng kiểm tra thông tin đặt hàng.'});
  if(!/^[a-f0-9-]{36}$/i.test(d.requestId||'')||!/^0[35789]\d{8}$/.test(d.phone||'')||typeof d.customer!=='string'||!d.customer.trim()||d.customer.length>80||typeof d.address!=='string'||d.address.trim().length<5||d.address.length>400||String(d.note||'').length>500)return reply({ok:false,message:'Vui lòng kiểm tra họ tên, số điện thoại và địa chỉ.'});
  if(!lock.tryLock(20000))return reply({ok:false,message:'Hệ thống đang bận. Vui lòng thử lại sau ít giây.'});
  const sheet=SpreadsheetApp.openById(SHEET_ID).getSheetByName('Đơn hàng');
  if(!sheet)throw new Error('Missing order sheet');
  const orderId='SARAS-'+d.requestId;
  const lastRow=sheet.getLastRow();
  if(lastRow>1&&sheet.getRange(2,1,lastRow-1,1).createTextFinder(orderId).matchEntireCell(true).findNext())return reply({ok:true,orderId});
  const cache=CacheService.getScriptCache();const digest=Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,d.phone).map(b=>(b+256).toString(16).slice(-2)).join('');
  if(cache.get('phone-'+digest))return reply({ok:false,message:'Bạn vừa gửi một đơn. Vui lòng chờ một phút trước khi gửi đơn tiếp theo.'});
  const c=CATALOG[d.combo];const row=[orderId,Utilities.formatDate(new Date(),'Asia/Ho_Chi_Minh','yyyy-MM-dd HH:mm:ss'),textCell(d.customer,80),"'"+d.phone,textCell(d.address,400),d.combo,c[0],c[1],c[2],c[1]+c[2],textCell(d.note,500),'Có',textCell(d.utm_source,250),textCell(d.utm_medium,250),textCell(d.utm_campaign,250),textCell(d.utm_content,250),textCell(d.utm_term,250),textCell(d.fbclid,250),'Mới'];
  sheet.appendRow(row);SpreadsheetApp.flush();cache.put('phone-'+digest,'1',60);
  return reply({ok:true,orderId});
 }catch(error){return reply({ok:false,message:'Chưa thể ghi nhận đơn. Vui lòng thử lại hoặc liên hệ Saras qua Zalo.'});}
 finally{if(lock.hasLock())lock.releaseLock();}
}
