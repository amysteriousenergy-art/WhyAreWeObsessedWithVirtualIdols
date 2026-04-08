/**
 * Landing Page - Scroll Zoom Hero Animation
 * Motion风格版本
 */

class LandingSection {
    constructor() {
        this.section = document.querySelector('#landing');
        this.canvas = document.querySelector('#particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        this.scrollProgress = 0;

        this.config = {
            particleCount: 120,
            connectionDistance: 100,
            mouseDistance: 120,
            baseSpeed: 0.25,
            colors: [
                'rgba(255, 243, 18, ',
                'rgba(255, 0, 136, ',
                'rgba(12, 220, 247, ',
                'rgba(255, 255, 255, '
            ]
        };

        this.mouse = { x: null, y: null };
        this.isActive = true;

        this.init();
    }

    init() {
        this.resize();
        this.initParticles();
        this.setupEventListeners();
        this.setupScrollAnimation();
        this.startRenderLoop();

        console.log('Landing section initialized (Motion style)');
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initParticles() {
        this.particles = [];
        const count = window.innerWidth < 768 ? 60 : this.config.particleCount;

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.baseSpeed,
                vy: (Math.random() - 0.5) * this.config.baseSpeed,
                size: Math.random() * 2 + 0.5,
                colorIndex: Math.floor(Math.random() * this.config.colors.length),
                opacity: Math.random() * 0.4 + 0.1,
                originalX: 0,
                originalY: 0
            });
        }

        this.particles.forEach(p => {
            p.originalX = p.x;
            p.originalY = p.y;
        });
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.initParticles();
        });

        if (!window.matchMedia('(pointer: coarse)').matches) {
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });

            window.addEventListener('mouseleave', () => {
                this.mouse.x = null;
                this.mouse.y = null;
            });
        }

        document.addEventListener('visibilitychange', () => {
            this.isActive = !document.hidden;
        });
    }

    setupScrollAnimation() {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.section,
                start: "top top",
                end: "+=150%",
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    this.scrollProgress = self.progress;
                },
                onLeave: () => {
                    this.isActive = false;
                },
                onEnterBack: () => {
                    this.isActive = true;
                }
            }
        });

        tl.fromTo('.landing-title-main', 
            { 
                scale: 0.8, 
                opacity: 0, 
                filter: 'blur(20px)',
                y: 40
            },
            { 
                scale: 1, 
                opacity: 1, 
                filter: 'blur(0px)',
                y: 0,
                duration: 0.25,
                ease: "power2.out"
            },
            0
        );

        tl.fromTo('.landing-title-sub',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.2 },
            0.15
        );

        tl.fromTo('.landing-meta',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.15 },
            0.3
        );

        tl.to('.landing-content', {
            scale: 1.2,
            opacity: 0,
            filter: 'blur(15px)',
            duration: 0.4,
            ease: "power2.in"
        }, 0.6);

        tl.to('.scroll-hint', {
            opacity: 0,
            y: 30,
            duration: 0.2
        }, 0.5);
    }

    updateParticles() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        const attraction = this.scrollProgress * 0.02;
        const spiralStrength = this.scrollProgress * 0.4;

        this.particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            if (this.scrollProgress > 0.3) {
                const dx = centerX - p.x;
                const dy = centerY - p.y;

                p.vx += dx * attraction * 0.01;
                p.vy += dy * attraction * 0.01;

                const angle = this.scrollProgress * Math.PI * 3 + i * 0.05;
                p.vx += Math.cos(angle) * spiralStrength * 0.08;
                p.vy += Math.sin(angle) * spiralStrength * 0.08;
            }

            if (this.mouse.x !== null && this.scrollProgress < 0.5) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.config.mouseDistance) {
                    const force = (this.config.mouseDistance - dist) / this.config.mouseDistance;
                    p.vx -= dx * force * 0.015;
                    p.vy -= dy * force * 0.015;
                }
            }

            p.vx *= 0.98;
            p.vy *= 0.98;

            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed < 0.08) {
                p.vx += (Math.random() - 0.5) * 0.08;
                p.vy += (Math.random() - 0.5) * 0.08;
            }
        });
    }

    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.lineWidth = 0.5;

        for (let i = 0; i < this.particles.length; i++) {
            let connections = 0;

            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.config.connectionDistance && connections < 3) {
                    const opacity = (1 - dist / this.config.connectionDistance) * 0.12;
                    this.ctx.strokeStyle = `rgba(255, 243, 18, ${opacity})`;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                    connections++;
                }
            }
        }

        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

            const scrollOpacity = 1 - this.scrollProgress * 0.5;
            const color = this.config.colors[p.colorIndex];
            this.ctx.fillStyle = color + (p.opacity * scrollOpacity) + ')';
            this.ctx.fill();

            if (!document.body.classList.contains('low-performance') && p.size > 1.5) {
                this.ctx.shadowBlur = 6;
                this.ctx.shadowColor = color + '0.3)';
            }
        });

        this.ctx.shadowBlur = 0;
    }

    render() {
        if (!this.isActive) return;

        this.updateParticles();
        this.drawParticles();
    }

    startRenderLoop() {
        const loop = () => {
            this.render();
            this.animationId = requestAnimationFrame(loop);
        };
        loop();
    }

    checkPerformance() {
        let frames = 0;
        const start = performance.now();

        const count = () => {
            frames++;
            if (performance.now() - start < 1000) {
                requestAnimationFrame(count);
            } else {
                if (frames < 30) {
                    document.body.classList.add('low-performance');
                    console.log('Low performance mode enabled');
                }
            }
        };
        requestAnimationFrame(count);
    }

    destroy() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const landing = new LandingSection();

    setTimeout(() => landing.checkPerformance(), 2000);

    window.landingSection = landing;
});
