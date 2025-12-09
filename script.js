const memberDetails = {
    1: {
        name: 'Nguyễn Bá Duy',
        role: 'Nhóm trưởng',
        mssv: '25127040',
        email: 'nbduy2506@clc.fitus.edu.vn',
        avatar: 'img/NguyenBaDuy.jpg',
        bio: 'Chịu trách nhiệm điều phối chung, lập kế hoạch và đảm bảo tiến độ dự án. Luôn giữ tinh thần lạc quan cho cả nhóm.',
        skills: 'Quản lý dự án, Lãnh đạo, Thuyết trình',
        hobby: 'Đọc sách, Cafe, Code dạo'
    },
    2: {
        name: 'Phạm Khánh Tâm',
        role: 'Thành viên',
        mssv: '25127135',
        email: 'pktam2530@clc.fitus.edu.vn',
        avatar: 'img/PhamKhanhTam.jpg', 
        bio: 'Thành viên tích cực với tư duy logic sắc bén. Chuyên trị các vấn đề hóc búa về kỹ thuật.',
        skills: 'Phân tích dữ liệu, Giải quyết vấn đề',
        hobby: 'Nghe nhạc, Chơi game, Tìm hiểu công nghệ'
    },
    3: {
        name: 'Trần Ngô Gia Hân',
        role: 'Thành viên',
        mssv: '25127192',
        email: 'tnghan2536@clc.fitus.edu.vn',
        avatar: 'img/TranNgoGiaHan.jpg',
        bio: 'Phụ trách mảng sáng tạo và hình ảnh. Mang đến những ý tưởng thiết kế độc đáo cho nhóm.',
        skills: 'Thiết kế UI/UX, Sáng tạo nội dung',
        hobby: 'Vẽ, Nhiếp ảnh, Du lịch'
    },
    4: {
        name: 'Nguyễn Gia Bảo',
        role: 'Thành viên',
        mssv: '25127280',
        email: 'ngbao2527@clc.fitus.edu.vn',
        avatar: 'img/NguyenGiaBao.jpg',
        bio: 'Cẩn thận, tỉ mỉ trong từng dòng code. Luôn đảm bảo sản phẩm đạt chất lượng tốt nhất.',
        skills: 'Lập trình Backend, Tối ưu hóa',
        hobby: 'Bóng đá, Code, Xem phim'
    },
    5: {
        name: 'Lê Thiên Long',
        role: 'Thành viên',
        mssv: '25127410',
        email: 'ltlong2515@clc.fitus.edu.vn',
        avatar: 'img/LeThienLong.jpg',
        bio: 'Đam mê nghiên cứu các công nghệ mới. Luôn tìm tòi các giải pháp hiện đại để áp dụng.',
        skills: 'Nghiên cứu, AI/Machine Learning',
        hobby: 'Nghiên cứu khoa học, Chơi cờ'
    },
    6: {
        name: 'Trương Lê Quân',
        role: 'Thành viên',
        mssv: '25127477',
        email: 'tlquan2513@clc.fitus.edu.vn',
        avatar: 'img/TruongLeQuan.jpg',
        bio: 'Người kết nối các thành viên. Đảm bảo mọi người đều hiểu rõ nhiệm vụ và phối hợp nhịp nhàng.',
        skills: 'Giao tiếp, Teamwork, Testing',
        hobby: 'Thể thao, Nấu ăn, Camping'
    }
};

function createBubbles() {
    const waterBg = document.getElementById('waterBg');
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 60 + 20;
        
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        
        bubble.style.animationDelay = Math.random() * 15 + 's';
        bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        waterBg.appendChild(bubble);
    }
}

function showMemberDetail(id) {
    const modal = document.getElementById('memberModal');
    const content = document.getElementById('modalContent');
    const member = memberDetails[id];
    
    // Đã xóa phần lấy chữ cái đầu (initial)

    // Xử lý HTML cho ảnh avatar
    const avatarHtml = member.avatar 
        ? `<img src="${member.avatar}" alt="${member.name}" onerror="this.style.display='none'">` 
        : ``;

    content.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.5s;">
            <div class="modal-avatar-large">
                ${avatarHtml}
            </div>
            <h2 style="color: #0083b0; margin-bottom: 0.5rem; font-size: 2rem;">${member.name}</h2>
            <span style="background: #00b4db; color: white; padding: 0.3rem 1rem; border-radius: 15px; font-size: 0.9rem;">
                ${member.role}
            </span>
        </div>
        
        <div style="margin-top: 2rem; display: grid; gap: 1.5rem;">
            <div class="info-group" style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #0083b0;">
                <h4 style="color: #666; margin-bottom: 0.5rem;"><i class="fas fa-user-circle"></i> Giới thiệu</h4>
                <p style="line-height: 1.6;">${member.bio}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="info-group">
                    <h4 style="color: #666; margin-bottom: 0.5rem;"><i class="fas fa-graduation-cap"></i> Thông tin</h4>
                    <p><strong>MSSV:</strong> ${member.mssv}</p>
                    <p style="word-break: break-all;"><strong>Email:</strong> ${member.email}</p>
                </div>
                <div class="info-group">
                    <h4 style="color: #666; margin-bottom: 0.5rem;"><i class="fas fa-tools"></i> Kỹ năng & Sở thích</h4>
                    <p><strong>Skills:</strong> ${member.skills}</p>
                    <p><strong>Hobby:</strong> ${member.hobby}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('memberModal').style.display = 'none';
}

function viewImage(src) {
    const modal = document.getElementById('imageViewer');
    const modalImg = document.getElementById('fullImage');
    
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeImageViewer() {
    document.getElementById('imageViewer').style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const header = document.querySelector('header');
            const headerHeight = header.offsetHeight;

            if (targetSection) {
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

window.onclick = function(event) {
    const memberModal = document.getElementById('memberModal');
    const imageModal = document.getElementById('imageViewer');
    if (event.target === memberModal) closeModal();
    if (event.target === imageModal) closeImageViewer();
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
        closeImageViewer();
    }
});