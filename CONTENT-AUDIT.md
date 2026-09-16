# Đối chiếu Google Docs — 16/09/2026

Nguồn: https://docs.google.com/document/d/1GGnOLFdpp777Nf8OBDy4CfOBFXT96Gk_c_TY_AV4jdA/edit

Đã đọc lại bản hiện tại trong tab Ý TƯỞNG. Giá, thành phần và quà tặng của 10 lựa chọn đã có từ lần dựng trước; lần này bổ sung nội dung và tư liệu còn thiếu. Trang bám thông điệp Docs nhưng không sao chép nguyên văn những số liệu/chứng thực chưa có bằng chứng.

| Phần trong Docs | Đối chiếu và thay đổi |
|---|---|
| 1. Header | Logo thật, slogan Vẹn tròn hương sắc, sticky header và CTA đỏ còn nguyên. Thêm ảnh trong thư mục Á hậu vào gallery đầu trang. |
| 2. Hero | Giữ headline và slogan. Khôi phục đầy đủ quote trong Docs, bổ sung chữ PHONG CÁCH vào subheadline. |
| 3. Uy tín/cam kết | COD, freeship combo, đổi trả lỗi sản xuất trong 7 ngày đã có. Không thêm 50.000+, 4,9 sao và chống nắng/lưu hương 8–12h khi chưa có dữ liệu chứng minh. |
| 4. Vấn đề | Khôi phục đúng ba chủ đề: da cháy nắng/đen sạm; vùng dưới cánh tay thâm sạm/ướt áo; mùi mồ hôi. Viết gọn cho mobile, không hứa giải quyết triệt để. |
| 5. Giải pháp | Bổ sung hai khối, tổng cộng 8 điểm. Làm rõ Albatross, Clover, serum SR Lilac Sage, hương liệu, thiết kế mini và hồ sơ sản phẩm. Bổ sung ảnh serum thật vào khối công dụng. |
| 6. Hồ sơ/chứng nhận | Thay thẻ chữ bằng 3 bản scan có dấu tiếp nhận, có xem lớn 2× và link PDF gốc. Thêm link cả hai tài liệu thử nghiệm SPF. Gọi đúng tên phiếu công bố; không suy diễn thành chứng nhận “chuẩn y khoa” hoặc an toàn tuyệt đối. |
| 7. Đặt hàng | Đủ 10 lựa chọn; tất cả giá bán, giá gốc và phí ship đã đối chiếu. Khôi phục tên đầy đủ hai combo lồng đèn; đồng bộ tên trong mã nhận đơn. Thêm tiêu đề quà hoa lụa và CTA xác nhận theo Docs. Thời gian giao do Saras xác nhận. |
| 8. Popup giao dịch | Không tạo thông báo người vừa mua giả. Chưa có nguồn đơn hàng thật cho tính năng này. |

## Ảnh bổ sung

Từ thư mục tên “Á hậu [Ngoài trời]” trong Drive khách hàng, không tự gán tên cá nhân hay danh hiệu cụ thể:

- LTD05532.JPG → portrait68.webp; Drive ID 1p8yCJhIGoATNYYg3WjqUqzlPKx9ozTvH.
- LTD05498.JPG → portrait78.webp; Drive ID 1yk0PLjVNyqA-y9GqdlzxB4CRy5y23db9.
- LTD05418.JPG → portrait90.webp; Drive ID 1XfLoNG8zIDgldCKj7vjaH11YKiqPPViB.
- LTD05399.JPG → portrait99.webp; Drive ID 1WiE0b8oCfOBNDbWUKME6ZPZIIg61JiHr.

## Scan đã kiểm tra trực quan

| Sản phẩm | Số tiếp nhận trên bản scan | Ngày |
|---|---|---|
| Albatross Sunscreen | 1320/25/CBMP-LA | 15/05/2025 |
| SR Clover | 1319/25/CBMP-LA | 15/05/2025 |
| SR Helen | 1473/25/CBMP-LA | 26/05/2025 |

Ảnh là trang đầu nguyên bản PDF, không chỉnh số, dấu hoặc nội dung. Người xem có thể mở hồ sơ đầy đủ từ từng thẻ. Tài liệu thử nghiệm SPF chỉ dẫn về nguồn; không sao chép thành chứng nhận bảo đảm hiệu quả cho mọi người.

## Nội dung cần dữ liệu bổ sung nếu muốn dùng nguyên văn

- 50.000+ khách hàng và điểm đánh giá tổng hợp 4,9 sao.
- Thời gian lưu hương/chống nắng 8–12 giờ, “khử triệt để”, “an toàn tuyệt đối”, “chuẩn y khoa”.
- “Duy nhất hôm nay”, số lượng bán chạy nhất và cam kết giao trước rằm cần chương trình/giao vận thực tế.
- CTA “giảm đến 30%” không khớp trần giảm tính từ bảng giá: combo Tứ Quý giảm khoảng 37,3%. Trang dùng CTA ưu đãi Trung Thu, hiển thị rõ giá từng combo.

Kiểm tra: node verify-content.mjs đối chiếu giá của cả 10 lựa chọn với Docs và giữa giao diện/Apps Script. node verify.mjs kiểm tra assets, anchors và logic nhận đơn mock. Google Sheet vẫn chưa có endpoint triển khai.
