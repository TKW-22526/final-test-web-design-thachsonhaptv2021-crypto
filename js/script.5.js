/* --- MẢNG DỮ LIỆU THÔNG TIN SẢN PHẨM --- */
const product = [
    {
        id: 18,
        name: "Honda UC3",
        category: "xe-dien",
        price: "78.545.455 VNĐ",
        description: "Mẫu xe ga điện thông minh cao cấp với phạm vi di chuyển vượt trội lên đến 120km cho một lần sạc, kết hợp kiểu dáng hiện đại mang xu hướng tương lai.",
        image: "../assets/xedien1.jpg",
        link: "chi-tiet.5.html",
        
        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-uc3.mp4", 
        design_title: "Công nghệ đèn LED định vị tương lai và hệ thống quản lý năng lượng thông minh",
        detail_image: "../assets/xedien1dongco.jpg", 
        spec_engine: "Mô-tơ điện công suất tối đa 6.0 kW, Tốc độ tối đa đạt 82 km/h",
        spec_fuel: "~120km / 1 lần sạc" 
    },
    {
        id: 19,
        name: "Honda CUV e:",
        category: "xe-dien",
        price: "44.181.818 VNĐ",
        description: "Thiết kế tối giản sang trọng, vận hành êm ái lý tưởng cho lối sống đô thị năng động (Giá bán tiêu chuẩn chưa bao gồm pin).",
        image: "../assets/xedien2.jpg",
        link: "chi-tiet.5.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-cuve.mp4", 
        design_title: "Cơ chế đổi pin nhanh Honda Mobile Power Pack e: tiện lợi",
        detail_image: "../assets/xedien2dongco.jpg", 
        spec_engine: "Mô-tơ điện hiệu suất cao công suất 6.0 kW, Tốc độ tối đa đạt 80 km/h",
        spec_fuel: "~73km / 1 lần sạc" 
    },
    {
        id: 20,
        name: "Honda ICON e:",
        category: "xe-dien",
        price: "20.520.000 VNĐ",
        description: "Mẫu xe điện nhỏ gọn, linh hoạt với mức giá cực kỳ dễ tiếp cận, lựa chọn hoàn hảo cho học sinh, sinh viên di chuyển hàng ngày (Giá bán chưa gồm pin).",
        image: "../assets/xedien3.jpg",
        link: "chi-tiet.5.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-icone.mp4", 
        design_title: "Trọng lượng siêu nhẹ cùng sàn để chân rộng rãi, màu sắc trẻ trung",
        detail_image: "../assets/xedien3dongco.jpg", 
        spec_engine: "Mô-tơ điện tối ưu đô thị công suất 1.81 kW, Tốc độ tối đa đạt 48 km/h",
        spec_fuel: "~71km / 1 lần sạc" 
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