function toggleMenu() {
    const navLinks = document.querySelector('.nav-links')
    const hamburguer = document.querySelector('.hamburguer')

    navLinks.classList.toggle('active')

    if (navLinks.classList.contains('active')) {
        hamburguer.innerHTML = '&times;'
    } else {
        hamburguer.innerHTML = '&#9776;'
    }
}

const hamburguer = document.getElementById('hamburguer')
hamburguer.addEventListener('click', toggleMenu) // adição de evento que sera acionado ao clicar e abrira um toggle com as opções do menu



// Testmonial script btn abaixo 

let currentSlide = 0;
function showSlides() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentSlide) {
            card.classList.add('active');
        }
    });
}

function changeSlide(n) {
    const cards = document.querySelectorAll('.testimonial-card');
    currentSlide = (currentSlide + n + cards.length) % cards.length;
    showSlides();
}

// Inicializa o carrossel
showSlides();

// Auto Slide a cada 5 segundos
setInterval(() => changeSlide(1), 4000);

// função de troca de Div na seção "Empresas"

// Seleciona os conteúdos e botões
const content01 = document.querySelector('.empresas-content01');
const content02 = document.querySelector('.empresas-content02');
const slideButton01 = document.querySelector('.slide-section-01');
const slideButton02 = document.querySelector('.slide-section-02');

// Função para mostrar o conteúdo 01 e esconder o conteúdo 02
slideButton01.addEventListener('click', () => {
    content01.style.display = 'block';
    content02.style.display = 'none';
});

// Função para mostrar o conteúdo 02 e esconder o conteúdo 01
slideButton02.addEventListener('click', () => {
    content01.style.display = 'none';
    content02.style.display = 'block';
});

// Função de deslocamento de acordo com mouse

let lastX = 0, lastY = 0;

function moveBackground(event) {
    const parallaxImage = document.querySelector('.parallax-image');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calcula o movimento
    const moveX = ((mouseX / window.innerWidth) - 0.5) * 50;
    const moveY = ((mouseY / window.innerHeight) - 0.5) * 50;

    // Mover o background de forma suave
    if (Math.abs(lastX - mouseX) > 5 || Math.abs(lastY - mouseY) > 5) {
        parallaxImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        lastX = mouseX;
        lastY = mouseY;
    }
}

document.addEventListener('mousemove', (e) => requestAnimationFrame(() => moveBackground(e)));

