document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Controle do Botão Flutuante do WhatsApp
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    function handleScroll() {
        if (window.scrollY > 300) { // Mostra o botão após rolar 300px
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';
        } else {
            whatsappBtn.style.opacity = '0';
            whatsappBtn.style.visibility = 'hidden';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa na carga para ajustar a visibilidade inicial


    // 2. Rolagem Suave para Links Internos (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o salto brusco
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Garante que o topo do elemento fique visível
                });
            }
        });
    });
});