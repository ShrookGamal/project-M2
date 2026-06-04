const navbar = document.querySelector('.navbar');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideDrawer = document.getElementById('sideDrawer');
const overlay = document.getElementById('menuOverlay');

// تغيير شكل الناف بار عند السكرول
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

// فتح وإغلاق القائمة الجانبية
openMenu.onclick = () => sideDrawer.classList.add('open');
closeMenu.onclick = () => sideDrawer.classList.remove('open');

// إغلاق عند الضغط على الروابط
document.querySelectorAll('.drawer-content a').forEach(link => {
    link.onclick = () => sideDrawer.classList.remove('open');
});
// أنميشن الظهور عند السكرول
function reveal() {
    const reveals = document.querySelectorAll(".reveal-left, .reveal-right");
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("reveal-active");
        }
    });
}

window.addEventListener("scroll", reveal);

// لتفعيلها فور التحميل إذا كان السكشن ظاهراً
reveal();
function reveal() {
    const reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up, .reveal-down");
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("reveal-active");
        }
    });
}
// تهيئة سلايدر المعرض المطور
var gallerySwiper = new Swiper(".myGallerySwiper", {
    slidesPerView: 1, // عرض صورة واحدة في الموبايل
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // عندما تكون الشاشة أكبر من 768px (ديسكتاب)
        768: {
            slidesPerView: 3, // عرض 3 صور
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});
// ميزة Scroll Spy لتحديد السكشن النشط
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a, .drawer-content a");

function scrollSpy() {
    let currentSectionId = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // إذا كان السكرول الحالي قد تجاوز بداية السكشن بمسافة بسيطة
        if (window.pageYOffset >= sectionTop - 150) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

// تشغيل الدالة عند السكرول
window.addEventListener("scroll", scrollSpy);

// تشغيلها مرة واحدة عند تحميل الصفحة للتأكد من الحالة الابتدائية
scrollSpy();

// تحسين: إغلاق القائمة الجانبية عند الضغط على رابط (للموبايل)
document.querySelectorAll('.drawer-content a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('sideDrawer').classList.remove('open');
    });
});