document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animações ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.benefit, .steps li, .testimonial, .features-list li, .pricing-plan, .gallery-item');
hiddenElements.forEach((el) => observer.observe(el));

// Validação do formulário
function validateForm(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    const phone = event.target.querySelector('input[type="tel"]').value;
    if (!email.includes('@') || !phone.match(/^\d{10,11}$/)) {
        alert('Por favor, insira um e-mail e WhatsApp válidos.');
        return false;
    }
    // Simular envio do formulário
    alert('Inscrição enviada com sucesso!');
    return true;
}

// Temporizador de oferta
function startCountdown() {
    const endDate = new Date('2025-08-15T23:59:59').getTime();
    const timerElement = document.getElementById('timer');

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            timerElement.innerHTML = 'Oferta encerrada!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    setInterval(updateTimer, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);

// Pop-up de saída
const popup = document.getElementById('exit-popup');
const closePopup = document.querySelector('.close-popup');

document.addEventListener('mouseout', (e) => {
    if (e.clientY < 0) {
        popup.style.display = 'flex';
    }
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});