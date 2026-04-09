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
            <!--总结文本 -->
            <section class="summary-text" style="padding: 80px;">
                <p style="font-size: 16px; color: #747e91; text-align: center; max-width: 600px; margin: 0 auto; line-height: 1.9;">
                    虚拟偶像的风靡，从来不止是形象的新奇，更是数字时代情感需求的投射。它满足了年轻人对审美、陪伴、探索的多元需求，用技术搭建起现实与虚拟的情感桥梁。虚拟歌姬承载文化与音乐理想，虚拟主播给予温暖实时陪伴，AI 虚拟主播展现技术与人性的交织，三者共同勾勒出数字时代偶像的全新模样。
                    在平台经济与数字文化盛行的当下，虚拟偶像成为新型情感载体，打破时空与身份的限制，为年轻人提供稳定、自由、个性化的精神陪伴。这场关于虚拟偶像的迷恋，不仅是一场文化潮流，更是数字时代情感表达与价值追求的深刻变革，预示着人机共生、双向共建的新型文化生态正在到来。
                </p>
            </section>
           

            <!-- 扩展内容区域（隐藏） -->
             <!-- <div class="extended-content">
                <div class="extended-header">
                    <div class="extended-line"></div>
                    <span class="extended-tag">扩展标题</span>
                    <div class="extended-line"></div>
                </div>-->
                
                <!-- <div class="extended-grid">
                    <!-- 卡片 1 -->
                    <!-- <div class="extended-card">
                        <div class="card-number">01</div>
                        <h4>作者</h4>
                        <p>陈植贤</p>
                    </div> -->
                    
                    <!-- 卡片 2 -->
                    <!-- <div class="extended-card">
                        <div class="card-number">02</div>
                        <h4>标题二</h4>
                        <p>这里填写具体内容文本...</p>
                    </div> -->
                    
                    <!-- 卡片 3 -->
                    <!-- <div class="extended-card highlight">
                        <div class="card-number">03</div>
                        <h4>标题三（高亮）</h4>
                        <p>这里填写具体内容文本...</p>
                    </div> -->
                </div>
                
                <!-- 引用块 -->
                <div class="extended-quote references-section">
                    <div class="quote-icon">“</div>
                    <h3 class="references-title">参考文献</h3>
                    <div class="references-list">
                        <cite>[1] 国家发展改革委，中央网信办。国家 "十四五" 数字经济发展规划 [R]. 北京：国家发展和改革委员会，2021.</cite>
                        <cite>[2] 新华网《环球》杂志。中国虚拟偶像产业发展报告 [R]. 北京：新华网，2024.</cite>
                        <cite>[3] Bilibili. Bilibili 虚拟主播行业生态年度报告 [R/OL]. (2024) [2026-04-09]. https://www.bilibili.com .</cite>
                        <cite>[4] 中国信息通信研究院。中国虚拟数字人产业发展白皮书 [R]. 北京：中国信息通信研究院，2024.</cite>
                        <cite>[5] 艾瑞咨询。中国虚拟偶像行业研究报告 [R]. 北京：艾瑞咨询集团，2023.</cite>
                        <cite>[6] 前瞻产业研究院. 2024-2029 年中国虚拟偶像行业市场前瞻与投资战略规划分析报告 [R]. 深圳：前瞻产业研究院，2024.</cite>
                        <cite>[7] 国金证券传媒行业研究中心。虚拟偶像行业专题：从内容到商业化的全链路分析 [R]. 上海：国金证券股份有限公司，2023.</cite>
                        <cite>[8] 中国演出行业协会. 2023 年中国虚拟演出市场发展报告 [R]. 北京：中国演出行业协会，2024.</cite>
                        <cite>[9] 易观分析。中国虚拟偶像市场发展年度综合分析 [R]. 北京：易观分析，2023.</cite>
                        <cite>[10] QuestMobile. 中国移动互联网虚拟偶像用户洞察报告 [R]. 北京：北京贵士信息科技有限公司，2024.</cite>
                    </div>
                </div>
                
                <!-- 时间轴（隐藏） -->
                <!--<div class="extended-timeline">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2024</span>
                            <h5>时间节点一</h5>
                            <p>描述内容...</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="timeline-date">2025</span>
                            <h5>时间节点二</h5>
                            <p>描述内容...</p>
                        </div>
                    </div>
                </div>
            </div>-->
            <!-- 项目信息 -->
            <div class="project-info">
                <div class="info-divider"></div>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">研究对象</span>
                        <span class="info-value">洛天依 · 阿萨Aza · Neuro-sama</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">作者</span>
                        <span class="info-value">陈植贤</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">指导老师</span>
                        <span class="info-value">梁爽</span>
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

                // 扩展内容动画
        const extendedCards = document.querySelectorAll('.extended-card');
        extendedCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.extended-grid',
                        start: "top 75%"
                    }
                }
            );
        });

        gsap.fromTo('.extended-quote',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.extended-quote',
                    start: "top 80%"
                }
            }
        );

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.extended-timeline',
                        start: "top 80%"
                    }
                }
            );
        });

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
        // 总结文本动画
        gsap.fromTo('.summary-text',
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.summary-text',
                    start: "top 80%"
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
