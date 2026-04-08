/**
 * What Section - 迷恋什么
 * 内容类型分析 - 歌曲和直播
 */

class WhatSection {
    constructor() {
        this.section = document.querySelector('#what');
        if (!this.section) {
            this.section = document.createElement('section');
            this.section.id = 'what';
            this.section.className = 'section section-what';
            document.body.appendChild(this.section);
        }

        this.contentData = [
            {
                id: 'luo',
                name: '洛天依',
                type: '歌曲主导型',
                icon: '🎵',
                total: 408,
                song: { count: 397, percentage: 97.3 },
                live: { count: 0, percentage: 0 },
                other: { count: 11, percentage: 2.7 },
                color: '#9BC6FF'
            },
            {
                id: 'aza',
                name: '阿萨Aza',
                type: '均衡型',
                icon: '🎤',
                total: 2543,
                song: { count: 1145, percentage: 45.04 },
                live: { count: 1398, percentage: 54.96 },
                other: { count: 0, percentage: 0 },
                liveStreams: 1772,
                avgDuration: '7小时',
                color: '#DDED4B'
            },
            {
                id: 'neuro',
                name: 'Neuro-sama',
                type: '直播主导型',
                icon: '🤖',
                total: 242,
                song: { count: 13, percentage: 5.37 },
                live: { count: 229, percentage: 94.63 },
                other: { count: 0, percentage: 0 },
                liveStreams: 308,
                avgDuration: '10小时',
                color: '#F8E2CB'
            }
        ];

        this.init();
    }

    init() {
        this.renderContent();
        this.setupScrollAnimation();
        console.log('What section initialized');
    }

    renderContent() {
        this.section.innerHTML = `
            <div class="what-header">
                <div class="what-tag">Content Analysis</div>
                <h2 class="what-title">迷恋什么？</h2>
                <p class="what-subtitle">从内容类型看三类虚拟偶像的差异：歌曲和直播</p>
            </div>

            <div class="content-comparison">
                <!-- 总结卡片 -->
                <div class="summary-cards">
                    ${this.contentData.map(item => `
                        <div class="summary-card ${item.id}">
                            <div class="card-icon-large">${item.icon}</div>
                            <div class="card-name">${item.name}</div>
                            <div class="card-type-label">${item.type}</div>
                            <div class="total-videos">${item.total}</div>
                            <div class="total-label">投稿视频</div>
                        </div>
                    `).join('')}
                </div>

                <!-- 详细数据 -->
                <div class="detail-grid">
                    ${this.contentData.map(item => `
                        <div class="detail-card ${item.id}">
                            <div class="detail-header">
                                <div class="detail-avatar">${item.icon}</div>
                                <div class="detail-info">
                                    <h3>${item.name}</h3>
                                    <span>${item.type}</span>
                                </div>
                            </div>

                            <div class="data-bars">
                                <div class="data-bar-item">
                                    <div class="bar-label">
                                        <span class="bar-name">歌曲类视频</span>
                                        <span class="bar-value">${item.song.count}个 (${item.song.percentage}%)</span>
                                    </div>
                                    <div class="bar-track">
                                        <div class="bar-fill song" style="width: 0%" data-width="${item.song.percentage}%"></div>
                                    </div>
                                </div>

                                <div class="data-bar-item">
                                    <div class="bar-label">
                                        <span class="bar-name">直播相关</span>
                                        <span class="bar-value">${item.live.count}个 (${item.live.percentage}%)</span>
                                    </div>
                                    <div class="bar-track">
                                        <div class="bar-fill live" style="width: 0%" data-width="${item.live.percentage}%"></div>
                                    </div>
                                </div>

                                ${item.other.count > 0 ? `
                                <div class="data-bar-item">
                                    <div class="bar-label">
                                        <span class="bar-name">其他</span>
                                        <span class="bar-value">${item.other.count}个 (${item.other.percentage}%)</span>
                                    </div>
                                    <div class="bar-track">
                                        <div class="bar-fill other" style="width: 0%" data-width="${item.other.percentage}%"></div>
                                    </div>
                                </div>
                                ` : ''}
                            </div>

                            <div class="stats-row">
                                <div class="stat-box">
                                    <div class="stat-number">${item.total}</div>
                                    <div class="stat-desc">投稿视频<br>总数</div>
                                </div>
                                ${item.liveStreams ? `
                                <div class="stat-box">
                                    <div class="stat-number">${item.liveStreams}</div>
                                    <div class="stat-desc">直播场次<br>场均${item.avgDuration}</div>
                                </div>
                                ` : `
                                <div class="stat-box">
                                    <div class="stat-number">0</div>
                                    <div class="stat-desc">直播场次<br>专注作品</div>
                                </div>
                                `}
                            </div>

                            ${item.song.percentage > 90 ? '<span class="tag-special">歌曲创作者</span>' : ''}
                            ${item.live.percentage > 90 ? '<span class="tag-special">直播达人</span>' : ''}
                            ${Math.abs(item.song.percentage - item.live.percentage) < 20 ? '<span class="tag-special">均衡发展</span>' : ''}
                        </div>
                    `).join('')}
                </div>

                <!-- 总结文案区域 -->
                <div class="conclusion-section">
                    <div class="conclusion-header">
                        <div class="conclusion-line"></div>
                        <span class="conclusion-tag">核心洞察</span>
                        <div class="conclusion-line"></div>
                    </div>

                    <div class="conclusion-content">
                        <h3 class="conclusion-title">技术形态决定内容形态，内容形态分化迷恋逻辑</h3>

                        <div class="conclusion-cards">
                            <div class="conclusion-card luo">
                                <div class="card-accent" style="background: linear-gradient(90deg, #9BC6FF, #697EFD);"></div>
                                <div class="conclusion-icon">🎵</div>
                                <h4>虚拟歌姬 · 洛天依</h4>
                                <p class="conclusion-desc">专一于音乐创作，<strong>缺乏实时互动</strong>。技术形态（VOCALOID声库）决定了其内容以歌曲作品为核心，满足受众的<strong>音乐审美需求</strong>。</p>
                                <div class="conclusion-need">满足 → 音乐需求</div>
                            </div>

                            <div class="conclusion-card aza">
                                <div class="card-accent" style="background: linear-gradient(90deg, #DDED4B, #9BC6FF);"></div>
                                <div class="conclusion-icon">🎤</div>
                                <h4>虚拟主播 · 阿萨Aza</h4>
                                <p class="conclusion-desc">兼顾歌曲与日常，<strong>直播驱动内容生产</strong>。中之人的实时表演使内容兼具娱乐性与陪伴感，对应受众的<strong>娱乐陪伴需求</strong>。</p>
                                <div class="conclusion-need">满足 → 娱乐陪伴需求</div>
                            </div>

                            <div class="conclusion-card neuro">
                                <div class="card-accent" style="background: linear-gradient(90deg, #F8E2CB, #D63262);"></div>
                                <div class="conclusion-icon">🤖</div>
                                <h4>AI虚拟主播 · Neuro-sama</h4>
                                <p class="conclusion-desc">以情感游戏与技术话题为支点，实现<strong>24小时自主陪伴</strong>。无中之人的技术特性使受众迷恋于<strong>技术探索、AI人格成长与稳定陪伴</strong>。</p>
                                <div class="conclusion-need">满足 → 技术探索 / AI成长 / 稳定陪伴</div>
                            </div>
                        </div>

                        <div class="conclusion-summary">
                            <div class="summary-icon">💡</div>
                            <p>三类虚拟偶像的内容发放差异，清晰指向<strong>技术形态对内容形态的决定作用</strong>，进而分化出截然不同的青年受众迷恋逻辑。</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupScrollAnimation() {
        gsap.fromTo('.what-header',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.section-what',
                    start: "top 70%"
                }
            }
        );

        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.summary-cards',
                        start: "top 75%"
                    }
                }
            );
        });

        const detailCards = document.querySelectorAll('.detail-card');
        detailCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.3 + index * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.detail-grid',
                        start: "top 75%"
                    }
                }
            );
        });

        const barFills = document.querySelectorAll('.bar-fill');
        barFills.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: targetWidth,
                    duration: 1.2,
                    delay: 0.6 + index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.detail-grid',
                        start: "top 70%"
                    }
                }
            );
        });

        // 总结区域动画
        gsap.fromTo('.conclusion-section',
            { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.conclusion-section',
                    start: "top 80%"
                }
            }
        );

        const conclusionCards = document.querySelectorAll('.conclusion-card');
        conclusionCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: 0.2 + index * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.conclusion-cards',
                        start: "top 75%"
                    }
                }
            );
        });

        gsap.fromTo('.conclusion-summary',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.conclusion-summary',
                    start: "top 85%"
                }
            }
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.whatSection = new WhatSection();
    }, 300);
});
