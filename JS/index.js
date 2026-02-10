const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));

const reveal = () => {
    document.querySelectorAll('section, footer, header').forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

document.getElementById("btn1").addEventListener("click", function () {
    window.location.href = "big.html";
});

// زرار الكارت الثاني → يفتح صفحة شراء 3 شهور
document.getElementById("btn2").addEventListener("click", function () {
    window.location.href = "int.html";
});

// زرار الكارت الثالث → يفتح صفحة شراء 6 شهور
document.getElementById("btn3").addEventListener("click", function () {
    window.location.href = "pro.html";
});

// سكريبت بسيط
document.querySelectorAll(".has-dropdown").forEach(item => {
    let timeout;

    item.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        item.classList.add("show");
    });

    item.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
            item.classList.remove("show");
        }, 250); // ← هنا الـ delay (2 ثانية)
    });
});