// 初始化AOS动画库
AOS.init({
    duration: 1000,
    once: true
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(11, 27, 52, 0.95)';
    } else {
        navbar.style.background = 'var(--nav-bg)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 产品轮播功能
const productSlider = {
    currentSlide: 0,
    slides: document.querySelectorAll('.product-card'),
    
    init() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        prevBtn.addEventListener('click', () => this.slide('prev'));
        nextBtn.addEventListener('click', () => this.slide('next'));
        
        // 初始化显示
        this.updateSlides();
    },
    
    slide(direction) {
        if (direction === 'next') {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        } else {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        }
        this.updateSlides();
    },
    
    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
        });
    }
};

// 初始化产品轮播
if (document.querySelector('.product-slider')) {
    productSlider.init();
} 