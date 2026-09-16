# Saras Beauty — Landing page Trung Thu

Landing page tĩnh, responsive, sử dụng ảnh Drive được nêu trong tài liệu gốc. 10 combo và giá lấy từ Google Docs của khách hàng.

## Xem trang

Phục vụ thư mục `dist` bằng một HTTP server. Bản đang chạy tại http://127.0.0.1:4178/.

## Google Sheet nhận đơn

https://docs.google.com/spreadsheets/d/1lIPylj7rz-kVPyLxaDteCc5Ag_e-xCo93MUM5qh7fyE/edit

Sheet đã được tạo, hiện chưa có đơn hàng. Endpoint nhận đơn chưa được triển khai vì trình duyệt chưa có phiên đăng nhập Google.

1. Mở Sheet, chọn Tiện ích mở rộng → Apps Script.
2. Dán nội dung `google-apps-script/Code.gs`.
3. Triển khai → Bản triển khai mới → Ứng dụng web. Chạy với tư cách chủ sở hữu; cho phép khách truy cập endpoint. Sheet vẫn giữ riêng tư.
4. Chủ tài khoản hoàn tất bước cấp quyền Google, lấy URL `/exec`.
5. Điền URL vào `dist/config.js`.
6. Gửi một đơn thử có nhãn TEST, xác nhận đơn xuất hiện đúng một lần trên Sheet rồi mới chạy ads.

Giao diện chỉ báo thành công khi endpoint trả về `ok: true`. Có kiểm tra số điện thoại, đồng ý liên hệ, chống gửi trùng bằng mã yêu cầu, kiểm tra giá ở phía Apps Script, khóa ghi đồng thời và chặn công thức do dữ liệu khách nhập. Thông tin UTM/FBCLID đi kèm đơn hàng. Chưa cài mã Meta Pixel/Google Ads vì chưa có ID.

## Nội dung

Nguồn chính: https://docs.google.com/document/d/1GGnOLFdpp777Nf8OBDy4CfOBFXT96Gk_c_TY_AV4jdA/edit

Ảnh người mẫu: các file DSC02137-1.jpg, DSC02016.jpg, Helen.jpg trong thư mục Drive liên kết từ Docs. Ảnh nhóm sản phẩm bổ sung từ sarasbeauty.vn, có chú thích là hình minh họa. Link hồ sơ công bố và kiểm nghiệm dùng đúng Drive trong Docs.

Giữ thông điệp, nhóm lợi ích, quà tặng, toàn bộ combo và chính sách. Không phát popup giả giao dịch, không thêm lời chứng thực của người mẫu. Các tuyên bố tuyệt đối về an toàn, trị vấn đề da và chống nắng 8–12h được diễn đạt lại phù hợp công dụng và hướng dẫn sử dụng. Cần chủ thương hiệu xác nhận số liệu 50.000 khách / 4,9 sao trước khi thêm vào trang.

## Triển khai

Mã Sites đã đăng ký được lưu tại `.openai/hosting.json`; không tạo Site thứ hai. Chưa publish: plugin Sites trên ổ đĩa bị mất trong phiên, chưa có skill/helper hosting để hoàn tất luồng xuất bản. Thư mục `dist` có thể được đặt ở một hosting tĩnh hoặc tích hợp dưới đường dẫn riêng của website Saras. Không có thay đổi nào trên sarasbeauty.vn.

## Redesign mobile first

Đã dựng và kiểm tra lần lượt 11 nhóm section theo King Monster. Phân tích từng section: REFERENCE-SECTIONS.md. Nguồn ảnh và prompt imagegen: ASSET-SOURCES.md.

Logo xanh-vàng chính thức, CTA đỏ, thẻ combo dọc trên điện thoại, sticky CTA, gallery ảnh, chọn mùi và review có nguồn. Ảnh WebP tối ưu, lazy-load phần dưới. Đã kiểm tra 320/390/768/1440px, nút chọn combo, tổng tiền, form nhanh và chọn mùi.
