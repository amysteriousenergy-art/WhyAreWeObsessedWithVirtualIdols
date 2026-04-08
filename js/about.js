/**
 * About Section - 关于页面
 * 项目总结与核心洞察
 */

class AboutSection {
    constructor() {
        this.section = document.querySelector('#about');
        if (!this.section) {
            this.section = document.createElement('section');
            this.section.id = 'about';
            this.section.className = 'section section-about';
            document.body.appendChild(this.section);
        }

        this.conclusionData = [
            {
                id: 'luo',
                name: '洛天依',
                icon: '🎵',
                type: '虚拟歌姬',
                insight: '技术形态决定内容形态——VOCALOID声库技术使洛天依成为<strong>纯粹的音乐符号</strong>，粉丝通过作品消费建立审美认同与文化归属。',
                need: '音乐审美 · 文化认同'
            },
            {
                id: 'aza',
                name: '阿萨Aza',
                icon: '🎤',
                type: '虚拟主播',
                insight: '中之人的实时表演创造了<strong>真实的情感连接</strong>，直播互动使粉丝从"观看者"转变为"陪伴者"，形成强社群归属感。',
                need: '情感陪伴 · 社群归属'
            },
            {
                id: 'neuro',
                name: 'Neuro-sama',
                icon: '🤖',
                type: 'AI虚拟主播',
                insight: 'AI技术开辟了<strong>全新的迷恋维度</strong>，粉丝在探索AI人格成长的过程中，体验到技术与人性交织的独特情感。',
                need: '技术探索 · AI人格'
            }
        ];

        this.init();
    }

    init() {
        this.renderContent();
        this.setupScrollAnimation();
        console.log('About section initialized');
    }

    renderContent() {
        this.section.innerHTML = `
            <div class="about-header">
                <div class="about-tag">Conclusion</div>
                <h2 class="about-title">为何迷恋？</h2>
                <p class="about-subtitle">从三类虚拟偶像看青年受众迷恋逻辑的深层差异</p>
            </div>

            <!-- 核心结论卡片 -->
            <div class="conclusion-cards">
                ${this.conclusionData.map(item => `
                    <div class="conclusion-card ${item.id}">
                        <div class="card-glow"></div>
                        <div class="conclusion-icon">${item.icon}</div>
                        <h3>${item.name}</h3>
                        <p>${item.insight}</p>
                        <div class="conclusion-meta">${item.need}</div>
                    </div>
                `).join('')}
            </div>

            <!-- 最终总结 -->
            <div class="final-conclusion">
                <div class="conclusion-box">
                    <h3>💡 核心发现</h3>
                    <p>三类虚拟偶像的<strong>技术形态差异</strong>，决定了其<strong>内容形态</strong>与<strong>粉丝迷恋逻辑</strong>的根本不同。</p>
                    <p>从洛天依的<strong>"作品-审美"</strong>模式，到阿萨Aza的<strong>"直播-陪伴"</strong>模式，再到Neuro-sama的<strong>"技术-探索"</strong>模式，虚拟偶像产业正在经历从<strong>传统粉丝经济</strong>向<strong>新型互动经济</strong>的演进。</p>
                    <p>这不仅是技术的迭代，更是<strong>青年文化消费方式</strong>的深刻变革——从被动接收到主动参与，从单向消费到双向共建，从人类中心到人机共生。</p>
                </div>
            </div>

            <!-- 项目信息 -->
            <div class="project-info">
                <div class="info-divider"></div>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">研究对象</span>
                        <span class="info-value">洛天依 · 阿萨Aza · Neuro-sama</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">数据来源</span>
                        <span class="info-value">Bilibili平台公开数据</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">研究维度</span>
                        <span class="info-value">粉丝画像 · 内容类型 · 消费行为 ·迷恋归因</span>
                    </div>
                </div>
            </div>

            <!-- 页脚 -->
            <div class="about-footer">
                <p class="footer-text">虚拟偶像数据新闻项目</p>
                <div class="footer-brand">迷恋 · OBSESSION</div>
                <p class="footer-tagline">探索虚拟与现实的情感边界</p>
            </div>
        `;
    }

    setupScrollAnimation() {
        // 头部动画
        gsap.fromTo('.about-header',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.section-about',
                    start: "top 70%"
                }
            }
        );

        // 结论卡片动画
        const conclusionCards = document.querySelectorAll('.conclusion-card');
        conclusionCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.conclusion-cards',
                        start: "top 75%"
                    }
                }
            );
        });

        // 最终总结动画
        gsap.fromTo('.final-conclusion',
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.final-conclusion',
                    start: "top 80%"
                }
            }
        );

        // 项目信息动画
        gsap.fromTo('.project-info',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.project-info',
                    start: "top 85%"
                }
            }
        );

        // 页脚动画
        gsap.fromTo('.about-footer',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.about-footer',
                    start: "top 90%"
                }
            }
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.querySelector('#about')) {
            window.aboutSection = new AboutSection();
        }
    }, 500);
});
