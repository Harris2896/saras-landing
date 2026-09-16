# Phân tích và triển khai lần lượt — King Monster → Saras Beauty

Tham khảo: https://www.kingmonster.com.vn/kingmontervn
Thương hiệu / ảnh / review: https://sarasbeauty.vn/
Nội dung chiến dịch: Google Docs đã cung cấp.

Mẫu là landing page direct-response một cột, dùng ảnh dày, nền xanh đậm/vàng/trắng, nút đỏ, giá và form lặp lại. Mobile gốc có vùng cố định gây tràn ngang ở 390px. Saras dùng bố cục co giãn từ 320px, logo xanh-vàng chính thức, CTA đỏ, ảnh sản phẩm thật.

| Thứ tự | Khối mẫu | Layout / vai trò | Saras tương ứng | Trạng thái |
|---|---|---|---|---|
| 1 | SECTION23, SECTION2, SECTION26 | Header nhỏ, ảnh lớn + thumbnails, headline serif, quote nền tối, 3 chỉ số, CTA đỏ | Logo chính thức, gallery Drive, headline Docs, 3 thông tin có cơ sở, CTA | Đã dựng + kiểm tra mobile |
| 2 | SECTION24 | Nền xanh đậm, tiêu đề viền vàng, ảnh tròn vấn đề, lợi ích có số | 3 tình huống nắng/mồ hôi/chăm sóc da; minh họa AI | Đã dựng + kiểm tra mobile |
| 3 | SECTION19 | Form ưu đãi sớm, radio combo, giá lớn | Khối chọn quà nhanh dẫn đến form chính, giữ 10 giá Docs | Đã dựng + kiểm tra mobile |
| 4 | SECTION18 | Cam kết nổi bật và giấy tờ | Ảnh sản phẩm thật, thẻ hồ sơ và link tài liệu gốc | Đã dựng + kiểm tra mobile |
| 5 | SECTION4, SECTION31 | Ảnh sản phẩm và offer, headline định vị, CTA | Bộ quà Trung Thu / ảnh sản phẩm thật và ảnh không khí gói quà AI | Đã dựng + kiểm tra mobile |
| 6 | SECTION6, SECTION7 | Ảnh người nổi tiếng, quote, 4 điểm nổi bật | Gallery thương hiệu, lợi ích đúng dòng sản phẩm; không gán lời chứng thực giả | Đã dựng + kiểm tra mobile |
| 7 | SECTION28 | Danh sách mùi, card lựa chọn, mô tả tính cách | Nước hoa Nam/Nữ thật; chọn mùi đưa vào lời nhắn | Đã dựng + kiểm tra mobile |
| 8 | SECTION32 | Form đầy đủ, tóm tắt và niềm tin thanh toán | Form thông tin + combo + tổng tiền, Google Sheet | Đã dựng + kiểm tra mobile |
| 9 | SECTION8, SECTION12 | Lợi ích từng sản phẩm + nhắc lại ưu đãi | 3 bước skincare/hương thơm + CTA | Đã dựng + kiểm tra mobile |
| 10 | SECTION13 | Review theo sản phẩm có nguồn và sao | 3 review có thật trên website, giữ nguyên điểm 4/5 và 5/5 | Đã dựng + kiểm tra mobile |
| 11 | SECTION25 | Footer hotline, địa chỉ, chính sách | Logo thật, địa chỉ/showroom và hotline Saras | Đã dựng + kiểm tra mobile |

Kiểm tra mỗi khối ở mobile trước khi chuyển sang khối tiếp theo. Ảnh tạo bởi AI là ảnh minh họa, không dùng làm chứng cứ đánh giá khách hàng.

## Kiểm tra toàn trang

- 320, 390, 768 và 1440px: kiểm tra bố cục và phần tử tràn ngang; đã sửa min-content của thẻ combo tại 320px.
- CTA chọn combo cập nhật form, giá và phí ship; form nhanh chuyển thông tin sang bước xác nhận.
- Chọn mùi hương ghi vào lời nhắn và có trạng thái đã chọn.
- Review giữ nguyên người viết Thanh Huyền, ngày 02/12/2025 và điểm 5/5, 4/5, 5/5 theo sản phẩm gốc.
- Không có ảnh hỏng hay lỗi JavaScript trong phiên kiểm tra.
- node verify.mjs: kiểm tra file, anchors và logic Apps Script mock đều qua; chưa gửi đơn thật.
- Google Sheet đã có, chưa kích hoạt endpoint; chưa publish website.
