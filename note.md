- Templates Engines (handlebar)
    + Giúp viết các mã HTML gọn gàng hơn
    + Tạo các script viết tắt khi chạy dễ dàng và gọn gàng hơn
    + 
- SASS 

- Basic Routing
    + URI tồn tại duy nhất
    + request: chứa thông tin yêu cầu gửi lên
    + response: tùy chỉnh kết quả trả về qua res

- GET METHOD
    + Mặc định khi người dùng click vào 1 thẻ a hay nhập link gì đó thì phương thức GET luôn được gọi
    + Nhận dữ liệu từ phía server về phía cilent
    + Khi gửi dữ liệu thì nó sẽ đính trên URL
    + Submit dưới dạng Query Parameter
    + Lấy dữ liệu: req.query

- Query parameters
    + Truyền được dữ liệu qua URL
    https://www.google.com.vn/search?q=f8 lap trinh&ref=f8&author=sondn

    + Đều sử dụng được ở các phương thức như: POST, GET, PUT, ...

- POST METHOD
    + Gửi dữ liệu từ phía cilent về phía server
    + Khi gửi dữ liệu thì nó không đính trên URL (gửi ngầm)
    + Submit dưới dạng Form Data
    + lấy dữ liệu: req.body

- Mô hình MVC
    + Model
    + View
    + Controller

- Code formatter
    + prettier
    + lint-staged
    + husky