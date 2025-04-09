const closeBtn = document.querySelector('.foricon');
const topBanner = document.querySelector('.top');

closeBtn.addEventListener('click', function(e) {
    e.preventDefault(); // agar <a> bo'lsa, sahifa refresh bo'lmasligi uchun
    topBanner.style.display = 'none';
});

const aboutItem = document.querySelector('.menu-item');

    aboutItem.addEventListener('click', function (e) {
        e.preventDefault(); // sahifa refresh bo‘lmasligi uchun
        aboutItem.classList.toggle('active'); // toggle orqali ko‘rsatadi yoki yashiradi
    });
