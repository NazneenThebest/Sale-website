// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Doodle Animation
const canvas = document.getElementById('doodleCanvas');
const ctx = canvas.getContext('2d');
let doodles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createDoodle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        speed: Math.random() * 2 + 1
    };
}

function drawDoodle(doodle) {
    ctx.beginPath();
    ctx.arc(doodle.x, doodle.y, doodle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fill();
}

function updateDoodles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    doodles.forEach(doodle => {
        doodle.y -= doodle.speed;
        if (doodle.y < -doodle.size) {
            doodle.y = canvas.height + doodle.size;
        }
        drawDoodle(doodle);
    });
    requestAnimationFrame(updateDoodles);
}

for (let i = 0; i < 30; i++) {
    doodles.push(createDoodle());
}
updateDoodles();

