/* --- MẢNG DỮ LIỆU THÔNG TIN SẢN PHẨM --- */
const product = [
    {
        id: 1,
        name: "Super Cub C125",
        category: "xe-so",
        price: "86.488.363 VNĐ",
        description: "Động cơ dung tích 125cc, SOHC, trang bị PGM-FI, đạt công suất tối đa 6,87kW và mô men xoắn cực đại 10,15Nm mang lại khả năng vận hành mạnh mẽ và tiết kiệm nhiên liệu tối ưu.",
        image: "../assets/super-cub-c125.jpg",
        link: "chi-tiet.2.html",
        
        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-supercub.mp4", 
        design_title: "Thiết kế hoài cổ nguyên bản phối màu thời thượng độc bản",
        detail_image: "../assets/supercub-dongco.jpg", 
        spec_engine: "Động cơ dung tích 125cc, SOHC, trang bị PGM-FI, đạt công suất tối đa 6,87kW và mô men xoắn cực đại 10,15Nm mang lại khả năng vận hành mạnh mẽ và tiết kiệm nhiên liệu tối ưu",
        spec_fuel: "3,7 lít" 
    },
    {
        id: 2,
        name: "Future 125 FI",
        category: "xe-so",
        price: "30.622.909 VNĐ",
        description: "Mẫu xe số cao cấp với kiểu dáng lịch lãm, mặt nạ trước mạ chrome sang trọng cùng động cơ 125cc mạnh mẽ và siêu tiết kiệm nhiên liệu.",
        image: "../assets/future-125.jpg",
        link: "chi-tiet.2.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-future.mp4", 
        design_title: "Mặt nạ trước Chrome chữ V lịch lãm kết hợp cụm đèn LED cường độ cao",
        detail_image: "../assets/future-dongco.jpg", 
        spec_engine: "Động cơ 125cc danh tiếng của Honda được áp dụng trên Future 125 FI vốn luôn nhận được sự yêu mến lớn từ khách hàng Việt Nam, nay vẫn duy trì chất lượng cao, đi kèm với thiết kế lọc gió, giúp tăng công suất tối đa, mô-men xoắn cực đại và khả năng tăng tốc mạnh mẽ.",
        spec_fuel: "4,6 lít" 
    },
    {
        id: 3,
        name: "Honda CT125",
        category: "xe-so",
        price: "85.997.455 VNĐ",
        description: "Phong cách Adventure bụi bặm, tối ưu hóa cho những hành trình khám phá, di chuyển linh hoạt trên nhiều địa hình phức tạp khác nhau.",
        image: "../assets/ct125.jpg",
        link: "chi-tiet.2.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-ct125.mp4", 
        design_title: "Ống xả đặt cao đặc trưng phong cách Scrambler cá tính",
        detail_image: "../assets/ct125-dongco.jpg", 
        spec_engine: "Xe được trang bị động cơ 125cc PGM FI, làm mát bằng không khí, 1 xy-lanh, SOHC 2 van, 4 thì, mạnh mẽ, tiết kiệm nhiên liệu và bền bỉ, là lựa chọn lý tưởng cho di chuyển cả phố xá và địa hình nhẹ.",
        spec_fuel: "5,3 lít" 
    },
    {
        id: 4,
        name: "Wave Alpha phiên bản cổ điển",
        category: "xe-so",
        price: "19.037.455 VNĐ",
        description: "Sự kết hợp hoàn hảo giữa kiểu dáng thon gọn quốc dân cùng bộ tem phối màu retro hoài cổ mang nét cuốn hút hoàn toàn khác biệt.",
        image: "../assets/wave-alpha-classic.jpg",
        link: "chi-tiet.2.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-waveclassic.mp4", 
        design_title: "Bộ tem hoài cổ phối màu Retro trầm ấm, thanh lịch và nổi bật",
        detail_image: "../assets/wave-dongco.jpg", 
        spec_engine: "Wave Alpha được trang bị động cơ 110cc bền bỉ, hiệu suất cao mà vẫn đảm bảo khả năng tiết kiệm nhiên liệu một cách vượt trội, từ đó đem lại cảm giác lái thú vị và tiết kiệm chi phí vận hành.",
        spec_fuel: "3,7 lít" 
    },
    {
        id: 5,
        name: "Honda Blade",
        category: "xe-so",
        price: "18.900.000 VNĐ",
        description: "Kiểu dáng thể thao, các đường cắt góc cạnh uyển chuyển khơi dậy tinh thần thể thao đầy năng động cho phân khúc xe số phổ thông.",
        image: "../assets/blade.jpg",
        link: "chi-tiet.2.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-blade.mp4", 
        design_title: "Thân xe thon gọn, đường nét cắt xẻ khí động học thể thao mạnh mẽ",
        detail_image: "../assets/blade-dongco.jpg", 
        spec_engine: "Kế thừa các tính năng ưu việt của động cơ Honda như độ bền cao, vận hành ổn định, Honda Blade sở hữu bộ động cơ 110cc tiết kiệm nhiên liệu vượt trội và bảo vệ môi trường, đáp ứng tiêu chuẩn khí thải Euro 3 nghiêm ngặt.",
        spec_fuel: "3,7 lít" 
    },   
    {
        id: 6,
        name: "Wave Alpha 110",
        category: "xe-so",
        price: "17.957.455 VNĐ",
        description: "Vua xe số phổ thông tối ưu, tiết kiệm nhiên liệu tối đa, chi phí vận hành thấp cùng thiết kế gọn nhẹ đáp ứng mọi nhu cầu đi lại hàng ngày.",
        image: "../assets/wave-alpha-110.jpg",
        link: "chi-tiet.2.html",

        // ===== DỮ LIỆU ĐỘNG CHO TRANG CHI TIẾT =====
        video: "../assets/video-wave110.mp4", 
        design_title: "Trọng lượng xe nhẹ, tư thế ngồi thoải mái phù hợp với mọi vóc dáng",
        detail_image: "../assets/wave110-dongco.jpg", 
        spec_engine: "Wave Alpha được trang bị động cơ 110cc bền bỉ, hiệu suất vượt trội mà vẫn đảm bảo khả năng tiết kiệm nhiên liệu một cách tối ưu, từ đó đem lại cảm giác lái thú vị và tiết kiệm chi phí vận hành.",
        spec_fuel: "3,7 lít" 
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