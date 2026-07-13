/* --- MẢNG DỮ LIỆU THÔNG TIN SẢN PHẨM --- */
const product = [
    {
        id: 10,
        name: "Gold Wing 2025",
        category: "phan-khoi-lon",
        price: "1.231.500.000 VNĐ",
        description: "Kỳ quan công nghệ đường trường – Đỉnh cao của sự sang trọng, tiện nghi đỉnh cấp cùng khối động cơ 6 xi-lanh đối xứng vận hành êm ái vô song.",
        image: "../assets/goldwing-2025.jpg",
        link: "chi-tiet.4.html",
        
        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-goldwing.mp4", 
        design_title: "Hệ thống giải trí đỉnh cao tích hợp màn hình TFT 7 inch và túi khí an toàn",
        detail_image: "../assets/goldwing-dongco.jpg", 
        spec_engine: "Động cơ 6 xi-lanh phẳng, SOHC, 24 van, dung tích 1.833cc, hộp số ly hợp kép DCT 7 cấp",
        spec_fuel: "21,1 lít" 
    },
    {
        id: 11,
        name: "CBR1000RR-R Fireblade SP 2024",
        category: "phan-khoi-lon",
        price: "1.051.000.000 VNĐ",
        description: "Chiến mã trường đua thực thụ được trang bị những công nghệ đỉnh cao bước ra từ giải đua MotoGP, mang lại cảm giác lái phấn khích tột độ.",
        image: "../assets/cbr1000rrr-2024.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-cbr1000.mp4", 
        design_title: "Hệ thống cánh gió khí động học tăng lực ép và phuộc điện tử Ohlins Smart EC",
        detail_image: "../assets/cbr1000-dongco.jpg", 
        spec_engine: "Động cơ 4 xi-lanh thẳng hàng, DOHC, làm mát bằng chất lỏng, dung tích 999cc",
        spec_fuel: "16,1 lít" 
    },
    {
        id: 12,
        name: "Africa Twin 2026 – Bản Adventure Sports",
        category: "phan-khoi-lon",
        price: "620.990.000 VNĐ",
        description: "Người bạn đồng hành vĩ đại trên mọi cung đường khám phá xuyên lục địa với kính chắn gió lớn chỉnh điện và bình xăng dung tích khủng.",
        image: "../assets/africa-twin-adventure-2026.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-africatwin-adv.mp4", 
        design_title: "Hệ thống giảm xóc điện tử Showa EERA và lốp không săm chuyên dụng",
        detail_image: "../assets/africatwin-dongco.jpg", 
        spec_engine: "Động cơ xi-lanh đôi song song, 8 van Unicam, làm mát bằng chất lỏng, dung tích 1.084cc",
        spec_fuel: "24,8 lít" 
    },
    {
        id: 13,
        name: "Africa Twin 2026 – Bản Tiêu chuẩn",
        category: "phan-khoi-lon",
        price: "540.990.000 VNĐ",
        description: "Chiến binh vượt địa hình thực thụ với thiết kế gọn gàng, khoảng sáng gầm lớn, sẵn sàng lao vào những thử thách Off-road khắc nghiệt nhất.",
        image: "../assets/africa-twin-standard-2026.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-africatwin-std.mp4", 
        design_title: "Thiết kế đuôi xe tối giản thể thao kết hợp màn hình cảm ứng MID 6.5 inch",
        detail_image: "../assets/africatwin-std-dongco.jpg", 
        spec_engine: "Động cơ xi-lanh đôi song song, góc trục khuỷu 270 độ đặc trưng, dung tích 1.084cc",
        spec_fuel: "18,8 lít" 
    },
    {
        id: 14,
        name: "Rebel 1100 2025",
        category: "phan-khoi-lon",
        price: "399.990.000 VNĐ",
        description: "Sự giao thoa hoàn hảo giữa phong cách xe Bobber cổ điển hoang dã và sức mạnh cơ bắp hiện đại, mang lại tư thế ngồi vô cùng bệ vệ.",
        image: "../assets/rebel-1100-2025.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-rebel1100.mp4", 
        design_title: "Khung xe ống thép võng cổ điển cùng hệ thống kiểm soát lực kéo HSTC",
        detail_image: "../assets/rebel1100-dongco.jpg", 
        spec_engine: "Động cơ xi-lanh đôi song song, 4 thì, SOHC, làm mát bằng chất lỏng, dung tích 1.084cc",
        spec_fuel: "13,6 lít" 
    },   
    {
        id: 15,
        name: "CB1000 Hornet",
        category: "phan-khoi-lon",
        price: "339.900.000 VNĐ",
        description: "Quái vật đường phố thế hệ mới với ngôn ngữ thiết kế góc cạnh tối giản, khoe trọn khối động cơ cơ bắp uy lực đầy thách thức.",
        image: "../assets/cb1000-hornet.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-cb1000hornet.mp4", 
        design_title: "Cụm đèn pha LED đôi projector hầm hố và hệ thống bướm ga điện tử TBW",
        detail_image: "../assets/hornet-dongco.jpg", 
        spec_engine: "Động cơ 4 xi-lanh thẳng hàng DOHC thừa hưởng từ dòng Fireblade, dung tích 999cc",
        spec_fuel: "17,0 lít" 
    },
    {
        id: 16,
        name: "Transalp 2025",
        category: "phan-khoi-lon",
        price: "299.990.000 VNĐ",
        description: "Mẫu xe Adventure tầm trung đa năng lý tưởng cho những chuyến phiêu lưu cuối tuần hay những hành trình đi lại linh hoạt mỗi ngày.",
        image: "../assets/transalp-2025.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-transalp.mp4", 
        design_title: "Kiểu dáng gọn gàng tối ưu khí động học kết hợp 5 chế độ lái tùy chọn",
        detail_image: "../assets/transalp-dongco.jpg", 
        spec_engine: "Động cơ 8 van Unicam xi-lanh đôi song song thế hệ mới, dung tích 755cc",
        spec_fuel: "16,9 lít" 
    },
    {
        id: 17,
        name: "CBR650R 2024",
        category: "phan-khoi-lon",
        price: "264.990.000 VNĐ",
        description: "Dòng xe Sport-city tầm trung quốc dân sở hữu âm thanh động cơ 4 xi-lanh gầm rú đặc trưng cùng tư thế ngồi thoải mái lý tưởng.",
        image: "../assets/cbr650r-2024.jpg",
        link: "chi-tiet.4.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-cbr650r.mp4", 
        design_title: "Công nghệ ly hợp chống trượt 2 chiều Assist & Slipper Clutch mượt mà",
        detail_image: "../assets/cbr650r-dongco.jpg", 
        spec_engine: "Động cơ 4 xi-lanh thẳng hàng, DOHC 16 van, làm mát bằng chất lỏng, dung tích 649cc",
        spec_fuel: "15,4 lít" 
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