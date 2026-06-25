document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        // Відкриття / Закриття меню при кліку на бургер
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Закриваємо меню, якщо користувач вибрав якийсь пункт
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Елементи бургер-меню
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Елементи Модального Вікна Оплати
    const modal = document.getElementById('orderModal');
    const closeBtn = document.getElementById('closeModal');
    const orderButtons = document.querySelectorAll('.btn-price'); // Кнопки "Замовити" з тарифів
    
    const modalTariffName = document.getElementById('modalTariffName');
    const modalTariffFeatures = document.getElementById('modalTariffFeatures');

    if (modal && orderButtons) {
        // Відкриття модалки при кліку на "Замовити"
        orderButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Знаходимо картку тарифу, на яку клікнули
                const card = button.closest('.price-card');
                const tariffTitle = card.querySelector('h3').innerText;
                const tariffFeatures = card.querySelector('.price-features').innerHTML;
                const tariffPrice = card.querySelector('.price-value').innerHTML;

                // Переносимо дані з картки у спливаюче вікно
                modalTariffName.innerText = tariffTitle;
                modalTariffFeatures.innerHTML = `
                    <div style="font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 15px;">${tariffPrice}</div>
                    <ul>${tariffFeatures}</ul>
                `;

                // Показуємо вікно
                modal.classList.add('open');
            });
        });

        // Закриття модалки при кліку на хрестик
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        // Закриття модалки при кліку на область навколо вікна
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
});