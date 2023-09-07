const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

(toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
}));

// 드롭다운 메뉴 토글
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

const image = document.getElementById('follow-image');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    image.style.left = `${mouseX}px`;
    image.style.top = `${mouseY}px`;
});