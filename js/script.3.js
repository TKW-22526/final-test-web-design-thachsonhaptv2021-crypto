/* --- MẢNG DỮ LIỆU THÔNG TIN SẢN PHẨM --- */
const product = [
    {
        id: 1,
        name: "CBR150R",
        category: "con-tay",
        price: "72.290.000 VNĐ",
        description: "Mẫu xe mô tô phân khối nhỏ mang đậm DNA thể thao từ các dòng xe lịch sử nhà Honda, sở hữu tư thế ngồi chồm khí động học đầy uy lực.",
        image: "../assets/cbr150r.jpg",
        link: "chi-tiet.3.html",
        
        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-cbr150r.mp4", 
        design_title: "Cụm đèn pha LED đôi sắc sảo và phuộc trước Upside Down thể thao",
        detail_image: "../assets/cbr150r-dongco.jpg", 
        spec_engine: "Động cơ DOHC 4 van, xy-lanh đơn, làm mát bằng dung dịch, hộp số 6 cấp chuyển số mượt mà",
        spec_fuel: "12,0 lít" 
    },
    {
        id: 2,
        name: "WINNER R",
        category: "con-tay",
        price: "46.360.000 VNĐ",
        description: "Siêu phẩm xe côn tay thế hệ mới bứt phá mạnh mẽ, thiết kế góc cạnh khí động học cùng những đường cắt táo bạo, cá tính.",
        image: "../assets/winner-r.jpg",
        link: "chi-tiet.3.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-winnerr.mp4", 
        design_title: "Thiết kế mặt nạ thể thao gọn gàng kết hợp phanh an toàn ABS bánh trước",
        detail_image: "../assets/winnerr-dongco.jpg", 
        spec_engine: "Động cơ DOHC mạnh mẽ 150cc, 6 số, làm mát bằng dung dịch tối ưu công suất cực đại",
        spec_fuel: "4,5 lít" 
    },
];

/* --- HÀM TẠO TỪNG THẺ SẢN PHẨM Ở TRANG DANH SÁCH --- */
function createTtem(obj) {  
    const listProducts = document.getElementById("product-list"); 
    if (!listProducts) return;

    const colContainer = document.createElement("div");
    colContainer.setAttribute("class", "col d-flex");

    const item = document.createElement("div"); 
    item.setAttribute("class", "card w-100 p-3 shadow-sm border-0 align-items-center justify-content-between text-center"); 

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image mb-3 d-flex align-items-center justify-content-center");
    containerImage.setAttribute("style", "height: 160px; width: 100%;");

    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.name);
    img.setAttribute("style", "max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 8px;");
    containerImage.appendChild(img);

    const containerInfo = document.createElement("div"); 
    containerInfo.setAttribute("class", "info-content w-100 d-flex flex-column gap-2");  

    const nameProduct = document.createElement("h5");
    nameProduct.setAttribute("class", "fw-bold text-dark mb-0");
    nameProduct.innerHTML = obj.name;
    
    const price = document.createElement("p");
    price.setAttribute("class", "fw-bold fs-5 mb-0");
    price.setAttribute("style", "color: #1b0d79;"); 
    if (typeof obj.price === 'number') {
        price.innerHTML = obj.price.toLocaleString('vi-VN') + ".000 đồng";
    } else {
        price.innerHTML = obj.price;
    }

    const description = document.createElement("p");
    description.setAttribute("class", "text-muted small mb-2 text-start text-truncate-2");
    description.setAttribute("style", "display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 38px;");
    description.innerHTML = obj.description || "Chưa có mô tả chi tiết cho dòng sản phẩm này.";

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", `${obj.link}?masp=${obj.id}`);
    linkProduct.setAttribute("class", "btn w-100 fw-bold py-2 mt-auto text-white");
    linkProduct.setAttribute("style", "background-color: #1b0d79; border-color: #1b0d79;");

    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);
    colContainer.appendChild(item);
    listProducts.appendChild(colContainer);
}

/* --- HÀM DUYỆT MẢNG VÀ TẢI TOÀN BỘ SẢN PHẨM --- */
function loadAllProducts(objArray) {
    const listProducts = document.getElementById("product-list"); 
    if (listProducts) {
        listProducts.innerHTML = ""; 
    }
    for (let i = 0; i < objArray.length; i++) {
        createTtem(objArray[i]);
    }
}