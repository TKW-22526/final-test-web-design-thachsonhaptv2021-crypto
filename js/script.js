/* --- MẢNG DỮ LIỆU THÔNG TIN SẢN PHẨM --- */
const product = [
    {
        id: 1,
        name: "SH350i",
        category: "tay-ga",
        price: "152.390.000 VNĐ",
        description: "Dòng xe tay ga cao cấp thế hệ mới sang trọng, đẳng cấp và sở hữu khối động cơ eSP+ mạnh mẽ vượt trội.",
        image: "../assets/sh-160-125-2026.jpg",
        link: "chi-tiet.html",
        
        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-350i-2026.jpg", 
        design_title: "Hệ thống đèn Full-LED thiết kế sang trọng đẳng cấp",
        detail_image: "../assets/sh350idongco.jpg", 
        spec_engine: "Động cơ eSP+, 4 van, làm mát bằng chất lỏng, dung tích 329.6cc",
        spec_fuel: "13,2 lít" 
    },
    {
        id: 2,
        name: "Honda Vision",
        category: "tay-ga",
        price: "31.506.545 VNĐ",
        description: "Mẫu xe ga quốc dân nhỏ gọn, thanh lịch, tối ưu khả năng tiết kiệm nhiên liệu tối đa cho người sử dụng.",
        image: "../assets/vision.1.jpg",
        link: "chi-tiet.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-vision.mp4", 
        design_title: "Mặt đồng hồ LED hiện đại kết hợp màn hình LCD trẻ trung",
        detail_image: "../assets/visiondongco.jpg", 
        spec_engine: "Động cơ eSP thông minh thế hệ mới, làm mát bằng không khí, dung tích 109.5cc",
        spec_fuel: "4,9 lít" 
    },
    {
        id: 3,
        name: "SH mode",
        category: "con-tay",
        price: "64.004.727 VNĐ",
        description: "Thiết kế phía trước được gợi cảm hứng từ những chai nước hoa cao cấp, tạo nên vẻ đẹp thanh lịch & sang trọng.",
        image: "../assets/xetayga1.jpg",
        link: "chi-tiet.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-shmode.mp4", 
        design_title: "Đường nét điêu khắc Châu Âu mang hơi thở thời thượng",
        detail_image: "../assets/xetayga1dongco.jpg", 
        spec_engine: "Động cơ thông minh 4 van eSP+ mới mượt mà, xy-lanh đơn dung tích 124.8cc",
        spec_fuel: "5,6 lít" 
    },
    {
        id: 4,
        name: "Vario 160",
        category: "vario",
        price: "56.690.000 VNĐ",
        description: "Vario 160 khẳng định vị thế riêng biệt với thiết kế tổng thể mang DNA thể thao độc đáo, cá tính; động cơ eSP+ công suất 160cc mạnh mẽ cùng trang bị hệ thống đèn LED hiện đại xứng đáng là mẫu xe ga thể thao phù hợp với các khách hàng thích phong cách phá cách và năng động..",
        image: "../assets/vario.jpg",
        link: "chi-tiet.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-vario160.mp4", 
        design_title: "Khung dập thế hệ mới eSAF cứng cáp kết hợp lốp bản lớn thể thao",
        detail_image: "../assets/variodongco.jpg", 
        spec_engine: "Động cơ eSP+ 4 van hiệu suất cao vượt trội, làm mát bằng chất lỏng, dung tích 156.9cc",
        spec_fuel: "5,5 lít" 
    },
    {
        id: 5,
        name: "Air blade 160",
        category: "xe-dien",
        price: "58.790.000 VNĐ",
        description: "Air Blade 2026 sở hữu thiết kế được làm mới hoàn toàn, hướng đến phong cách hiện đại và tối giản. Kiểu dáng thể thao mạnh mẽ nhưng không kém phần lịch lái, cùng phối màu mới lạ trên từng phiên bản, tạo nên diện mạo nam tính, cuốn hút và đầy khác biệt.",
        image: "../assets/airblade.jpg",
        link: "chi-tiet.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-airblade.mp4", 
        design_title: "Cụm đèn LED chữ X thể thao góc cạnh, uy lực và nam tính",
        detail_image: "../assets/airbladedongco.jpg", 
        spec_engine: "Động cơ eSP+ đột phá công nghệ 4 van, làm mát bằng dung dịch, dung tích 156.9cc",
        spec_fuel: "4,4 lít" 
    },   
    {
        id: 6,
        name: "Lead ABS",
        category: "Lead ABS",
        price: "45.841.091 VNĐ",
        description: "Phiên bản đặc biệt tiếp tục được trang bị hệ thống chống bó cứng phanh ABS trên bánh trước giúp hạn chế tình trạng trượt bánh khi phanh gấp ngay cả trên những đoạn đường trơn ướt, giúp người lái tự tin khám phá mọi cung đường.",
        image: "../assets/leadabs.jpg",
        link: "chi-tiet.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-lead.mp4", 
        design_title: "Mặt nạ trước Chrome chữ V tinh tế sang trọng cùng hộc đựng đồ U-box 37 lít",
        detail_image: "../assets/leadabsdongco.jpg", 
        spec_engine: "Động cơ eSP+ 4 van thế hệ mới vận hành êm ái, phun xăng điện tử PGM-FI, dung tích 124.8cc",
        spec_fuel: "6,0 lít" 
    }   
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