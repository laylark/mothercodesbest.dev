const particles = [];

class Confetti {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.speed = Math.random() * 3;
        this.angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;

        this.el = document.createElement('div');
        this.el.className = 'confetti';
        this.el.style.left = this.x + 'px';
        this.el.style.top = this.y + 'px';
        document.body.appendChild(this.el);

        setTimeout(() => {
            this.el.remove();
            particles.splice(particles.indexOf(this), 1);
            // this.explode();
        }, 5000);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.el.style.left = this.x + 'px';
        this.el.style.top = this.y + 'px';
        this.vx += 0.02;
    }
}

// explode() {
//     const particle = new Confetti();
//     particle.setPosition(this.x, this.y);
//     particles.push(particle);
// }

const animate = () => {
    const particle = new Confetti();
    particles.push(particle);
    particles.forEach(confetti => confetti.update());
    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
