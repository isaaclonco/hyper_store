let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Quando o usuário desce a de nav sobe 
        header.style.transform = 'translateY(-800%)';
    } else {
        // Quando o usuário sobe a nav desce 
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});



