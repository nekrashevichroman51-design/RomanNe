document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = document.getElementById(link.getAttribute('href').substring(1));
        if (!targetId) return;
        
        // Учитываем высоту хедера
        const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
        window.scrollTo({
            top: targetId.offsetTop - headerHeight - 20,
            behavior: 'smooth'
        });
    });
});
