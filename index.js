document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобільна навігація (Працює всюди)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        // Відкриття / Закриття меню при кліку на бургер
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Зупиняємо вспливання
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Закриваємо меню, якщо користувач вибрав якийсь пункт
        document.querySelectorAll('#navLinks a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Закривати меню, якщо клікнули поза ним
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 2. Модальне Вікно Оплати (Працює тільки там, де є картки тарифів)
    const modal = document.getElementById('orderModal');
    const closeBtn = document.getElementById('closeModal');
    const orderButtons = document.querySelectorAll('.btn-price');
    
    const modalTariffName = document.getElementById('modalTariffName');
    const modalTariffFeatures = document.getElementById('modalTariffFeatures');

    if (modal && orderButtons.length > 0 && closeBtn) {
        orderButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const card = button.closest('.price-card');
                if (!card) return;

                const tariffTitle = card.querySelector('h3')?.innerText || '';
                const tariffFeatures = card.querySelector('.price-features')?.innerHTML || '';
                const tariffPrice = card.querySelector('.price-value')?.innerHTML || '';

                if (modalTariffName) modalTariffName.innerText = tariffTitle;
                if (modalTariffFeatures) {
                    modalTariffFeatures.innerHTML = `
                        <div style="font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 15px;">${tariffPrice}</div>
                        <ul>${tariffFeatures}</ul>
                    `;
                }

                modal.classList.add('open');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
});