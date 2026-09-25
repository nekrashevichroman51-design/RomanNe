document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('open');
});

document.querySelectorAll('#mobile-nav .close-mobile-nav').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('mobile-nav')?.classList.remove('open');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const hash = link.hash;
        if (!hash || window.location.pathname !== link.pathname) return;
        e.preventDefault();
        const targetEl = document.querySelector(hash);
        if (!targetEl) return;
        // Учитываем высоту хедера
        const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
        window.scrollTo({
            top: targetEl.offsetTop - headerHeight,
            behavior: 'smooth'
        });
        // Закрываем мобильное меню при клике по ссылке
        document.getElementById('mobile-nav')?.classList.remove('open');
    });
});
