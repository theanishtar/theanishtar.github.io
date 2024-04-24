var lastScrollTop = 0;


// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var header = document.querySelector('.header');

    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }


    // Kiểm tra nếu người dùng đã lăn xuống đủ một phần trang
    var currentScrollTop = window.scrollY;
    // Kiểm tra nếu ko ở đầu trang
    if (currentScrollTop > 0)
        header.classList.add('h-shadow');
    else
        header.classList.remove('h-shadow');

    // Kiểm tra hướng lăn chuột
    if (currentScrollTop > lastScrollTop) {
        // Lăn xuống
        header.classList.add('hidden');
    } else {
        // Lăn lên
        header.classList.remove('hidden');
    }

    // Lưu trạng thái scroll hiện tại cho lần sau
    lastScrollTop = currentScrollTop;
});

// Lắng nghe sự kiện click để cuộn lên đầu trang
// document.getElementById("scrollToTopBtn").addEventListener("click", function () {
// 	window.scrollTo({
// 		top: 0,
// 		behavior: "smooth"
// 	});
// });

function scrollOnTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
