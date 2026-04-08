/**
 * How Section - 怎么迷恋
 * 粉丝消费行为分析 - 数据可视化
 */

class HowSection {
    constructor() {
        this.section = document.querySelector('#how');
        if (!this.section) {
            this.section = document.createElement('section');
            this.section.id = 'how';
            this.section.className = 'section section-how';
            document.body.appendChild(this.section);
        }

        // 粉丝消费行为数据
        this.consumptionData = [
            {
                id: 'luo',
                name: '洛天依',
                icon: '🎵',
                fans: 540.7,
                fansUnit: '万',
                bigVoyage: 275,
                charge: 25000,
                merchandise: 20000,
                albums: 2,
                characteristics: '付费集中于专辑与周边，社群互动消费偏低',
                color: '#9BC6FF'
            },
            {
                id: 'aza',
                name: '阿萨Aza',
                icon: '🎤',
                fans: 168.8,
                fansUnit: '万',
                bigVoyage: 2616,
                charge: 3234,
                merchandise: 20000,
                fanClub: 14000,
                characteristics: '直播互动带动高密度付费',
                color: '#DDED4B'
            },
            {
                id: 'neuro',
                name: 'Neuro-sama',
                icon: '🤖',
                fans: 108.3,
                fansUnit: '万',
                bigVoyage: 417,
                charge: 3236,
                merchandise: 0,
                characteristics: '无周边销售，纯内容付费',
                color: '#F8E2CB'
            }
        ];

        this.init();
    }

    init() {
        this.renderContent();
        this.setupScrollAnimation();
        console.log('How section initialized');
    }

    renderContent() {
        this.section.innerHTML = `
            <div class="how-header">
                <div class="how-tag">Consumption Analysis</div>
                <h2 class="how-title">怎么迷恋？</h2>
                <p class="how-subtitle">从粉丝消费行为看三类虚拟偶像的商业模式差异</p>
            </div>

            <div class="how-content">
                <!-- 消费数据对比卡片 -->
                <div class="consumption-comparison">
                    <h3 class="section-subtitle">粉丝消费行为对比</h3>
                    <div class="consumption-cards">
                        ${this.consumptionData.map(item => `
                            <div class="consumption-card ${item.id}">
                                <div class="card-accent" style="background: linear-gradient(90deg, ${item.color}, ${this.getSecondaryColor(item.id)});"></div>
                                <div class="card-header">
                                    <div class="card-icon-large">${item.icon}</div>
                                    <div class="card-title-group">
                                        <h4>${item.name}</h4>
                                        <span class="fans-count">粉丝 ${item.fans}${item.fansUnit}</span>
                                    </div>
                                </div>

                                <div class="consumption-metrics">
                                    <div class="metric-item">
                                        <div class="metric-icon">⚓</div>
                                        <div class="metric-info">
                                            <span class="metric-value">${item.bigVoyage}</span>
                                            <span class="metric-label">大航海</span>
                                        </div>
                                    </div>

                                    <div class="metric-item">
                                        <div class="metric-icon">⚡</div>
                                        <div class="metric-info">
                                            <span class="metric-value">${this.formatNumber(item.charge)}</span>
                                            <span class="metric-label">充电人数</span>
                                        </div>
                                    </div>

                                    <div class="metric-item">
                                        <div class="metric-icon">🛍️</div>
                                        <div class="metric-info">
                                            <span class="metric-value">${item.merchandise > 0 ? item.merchandise + '+' : '无'}</span>
                                            <span class="metric-label">周边销量</span>
                                        </div>
                                    </div>

                                    ${item.albums ? `
                                    <div class="metric-item">
                                        <div class="metric-icon">💿</div>
                                        <div class="metric-info">
                                            <span class="metric-value">${item.albums}</span>
                                            <span class="metric-label">发行专辑</span>
                                        </div>
                                    </div>
                                    ` : ''}

                                    ${item.fanClub ? `
                                    <div class="metric-item">
                                        <div class="metric-icon">👥</div>
                                        <div class="metric-info">
                                            <span class="metric-value">${this.formatNumber(item.fanClub)}</span>
                                            <span class="metric-label">粉丝团</span>
                                        </div>
                                    </div>
                                    ` : ''}
                                </div>

                                <div class="characteristics">
                                    <span class="tag">${item.characteristics}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 可视化图表区域 -->
                <div class="visualization-section">
                    <h3 class="section-subtitle">消费结构可视化</h3>

                    <!-- 大航海对比图 -->
                    <div class="chart-container">
                        <h4 class="chart-title">大航海人数对比（付费订阅）</h4>
                        <div class="bar-chart" id="bigVoyageChart">
                            ${this.consumptionData.map(item => {
                                const maxValue = Math.max(...this.consumptionData.map(d => d.bigVoyage));
                                const percentage = (item.bigVoyage / maxValue) * 100;
                                return `
                                    <div class="chart-bar-item">
                                        <div class="bar-label">
                                            <span class="bar-name">${item.name}</span>
                                            <span class="bar-value">${item.bigVoyage}人</span>
                                        </div>
                                        <div class="bar-track">
                                            <div class="bar-fill ${item.id}" style="width: 0%" data-width="${percentage}%"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <!-- 充电人数对比图 -->
                    <div class="chart-container">
                        <h4 class="chart-title">充电人数对比（打赏支持）</h4>
                        <div class="bar-chart" id="chargeChart">
                            ${this.consumptionData.map(item => {
                                const maxValue = Math.max(...this.consumptionData.map(d => d.charge));
                                const percentage = (item.charge / maxValue) * 100;
                                return `
                                    <div class="chart-bar-item">
                                        <div class="bar-label">
                                            <span class="bar-name">${item.name}</span>
                                            <span class="bar-value">${this.formatNumber(item.charge)}人</span>
                                        </div>
                                        <div class="bar-track">
                                            <div class="bar-fill ${item.id}" style="width: 0%" data-width="${percentage}%"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>

                <!-- 关键词分析区域（新增） -->
                <div class="keywords-section">
                    <h3 class="section-subtitle">热门视频关键词分析</h3>
                    <p class="section-desc">从5个最高播放视频的标题、标签、热评看粉丝关注点差异</p>

                    <div class="keywords-cards">
                        <!-- 洛天依关键词 -->
                        <div class="keywords-card luo">
                            <div class="keywords-header">
                                <div class="keywords-icon">🎵</div>
                                <h4>洛天依</h4>
                                <span class="keywords-type">作品导向型</span>
                            </div>

                            <div class="keywords-content">
                                <div class="keyword-block">
                                    <h5>📹 视频标题关键词</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag highlight">官方MV</span>
                                        <span class="keyword-tag highlight">VOCALOID</span>
                                        <span class="keyword-tag">日语原创曲</span>
                                        <span class="keyword-tag">中华戏曲</span>
                                        <span class="keyword-tag">传统文化</span>
                                        <span class="keyword-tag">跨年演唱会</span>
                                        <span class="keyword-tag">AR技术</span>
                                        <span class="keyword-tag">北京冬奥会</span>
                                        <span class="keyword-tag">应援曲</span>
                                    </div>
                                </div>

                                <div class="keyword-block">
                                    <h5>🏷️ 标签类型</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag category">音乐</span>
                                        <span class="keyword-tag category">原创歌曲</span>
                                        <span class="keyword-tag category">国风</span>
                                        <span class="keyword-tag category">戏曲</span>
                                        <span class="keyword-tag">演唱会</span>
                                        <span class="keyword-tag">舞台</span>
                                        <span class="keyword-tag">叙事</span>
                                        <span class="keyword-tag">同人</span>
                                    </div>
                                </div>

                                <div class="keyword-block">
                                    <h5>💬 热评关键词</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag emotion">创作团队</span>
                                        <span class="keyword-tag emotion">传统文化</span>
                                        <span class="keyword-tag emotion">戏曲传承</span>
                                        <span class="keyword-tag emotion">制作用心</span>
                                        <span class="keyword-tag emotion">主流认可</span>
                                        <span class="keyword-tag">AR技术</span>
                                        <span class="keyword-tag">专业</span>
                                        <span class="keyword-tag">共鸣</span>
                                        <span class="keyword-tag">陪伴</span>
                                        <span class="keyword-tag">科技与艺术</span>
                                    </div>
                                </div>

                                <div class="keyword-insight">
                                    <strong>💡 洞察：</strong>粉丝关注点集中在<strong>音乐品质</strong>、<strong>文化符号</strong>和<strong>国家认同</strong>上，形成"创作审美认同-温柔情感依恋-文化认同"的三层关注结构。
                                </div>
                            </div>
                        </div>

                        <!-- 阿萨Aza关键词 -->
                        <div class="keywords-card aza">
                            <div class="keywords-header">
                                <div class="keywords-icon">🎤</div>
                                <h4>阿萨Aza</h4>
                                <span class="keywords-type">互动导向型</span>
                            </div>

                            <div class="keywords-content">
                                <div class="keyword-block">
                                    <h5>📹 视频标题关键词</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag highlight">原创歌曲</span>
                                        <span class="keyword-tag highlight">人声本家</span>
                                        <span class="keyword-tag">明日方舟</span>
                                        <span class="keyword-tag">填词翻唱</span>
                                        <span class="keyword-tag">二专</span>
                                        <span class="keyword-tag">手书</span>
                                        <span class="keyword-tag">整活</span>
                                        <span class="keyword-tag">直播事故</span>
                                        <span class="keyword-tag highlight">ROZA</span>
                                        <span class="keyword-tag">合唱</span>
                                        <span class="keyword-tag">CP</span>
                                    </div>
                                </div>

                                <div class="keyword-block">
                                    <h5>🏷️ 标签类型</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag category">虚拟主播</span>
                                        <span class="keyword-tag category">Vtuber</span>
                                        <span class="keyword-tag category">NIJISANJI</span>
                                        <span class="keyword-tag category">VirtuaReal</span>
                                        <span class="keyword-tag">音乐</span>
                                        <span class="keyword-tag">手书</span>
                                        <span class="keyword-tag">原创动画</span>
                                        <span class="keyword-tag">国人男声</span>
                                    </div>
                                </div>

                                <div class="keyword-block">
                                    <h5>💬 热评关键词</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag emotion">故事解读</span>
                                        <span class="keyword-tag emotion">PV剧情</span>
                                        <span class="keyword-tag emotion">作品认可</span>
                                        <span class="keyword-tag emotion">主播应援</span>
                                        <span class="keyword-tag emotion">剧情共鸣</span>
                                        <span class="keyword-tag">二创绘画</span>
                                        <span class="keyword-tag">同人热情</span>
                                        <span class="keyword-tag">趣味玩梗</span>
                                        <span class="keyword-tag">整活</span>
                                        <span class="keyword-tag">治愈陪伴</span>
                                    </div>
                                </div>

                                <div class="keyword-insight">
                                    <strong>💡 洞察：</strong>粉丝通过<strong>故事解读</strong>、<strong>二创参与</strong>和<strong>玩梗互动</strong>建立情感连接，形成强社群归属感和陪伴关系。
                                </div>
                            </div>
                        </div>

                        <!-- Neuro-sama关键词 -->
                        <div class="keywords-card neuro">
                            <div class="keywords-header">
                                <div class="keywords-icon">🤖</div>
                                <h4>Neuro-sama</h4>
                                <span class="keywords-type">技术导向型</span>
                            </div>

                            <div class="keywords-content">
                                <div class="keyword-block">
                                    <h5>📹 视频标题关键词</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag highlight">AI主播</span>
                                        <span class="keyword-tag highlight">地表最强</span>
                                        <span class="keyword-tag">蜂群女王</span>
                                        <span class="keyword-tag">爱死亡机器人</span>
                                        <span class="keyword-tag">AI眼中的世界</span>
                                        <span class="keyword-tag highlight">双子姐妹</span>
                                        <span class="keyword-tag">Evil</span>
                                        <span class="keyword-tag">直播切片</span>
                                        <span class="keyword-tag">人机验证</span>
                                        <span class="keyword-tag">智斗</span>
                                    </div>
                                </div>

                                <div class="keyword-block">
                                    <h5>🏷️ 标签类型</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag category">人工智能</span>
                                        <span class="keyword-tag category">AI主播</span>
                                        <span class="keyword-tag category">机器人</span>
                                        <span class="keyword-tag">Neuro-sama</span>
                                        <span class="keyword-tag">Vedal</span>
                                        <span class="keyword-tag">Evil</span>
                                        <span class="keyword-tag">直播切片</span>
                                        <span class="keyword-tag">高光集锦</span>
                                    </div>
                                </div>

                                <div class="keyword-block">
                                    <h5>💬 热评关键词</h5>
                                    <div class="keyword-tags">
                                        <span class="keyword-tag emotion">跨圈玩梗</span>
                                        <span class="keyword-tag emotion">AI整活</span>
                                        <span class="keyword-tag emotion">技术梗</span>
                                        <span class="keyword-tag emotion">智能惊叹</span>
                                        <span class="keyword-tag emotion">社群脑洞</span>
                                        <span class="keyword-tag">同人绘画</span>
                                        <span class="keyword-tag">技术起源</span>
                                        <span class="keyword-tag">AI身份梗</span>
                                        <span class="keyword-tag">人机验证</span>
                                        <span class="keyword-tag">技术科普</span>
                                    </div>
                                </div>

                                <div class="keyword-insight">
                                    <strong>💡 洞察：</strong>粉丝被<strong>AI技术新奇性</strong>和<strong>跨圈玩梗</strong>吸引，关注点落在技术探索、AI人格成长和社群共创上。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 消费模式分析 -->
                <div class="consumption-pattern">
                    <h3 class="section-subtitle">消费模式总结</h3>
                    <div class="pattern-cards">
                        <div class="pattern-card luo">
                            <div class="pattern-icon">🎵</div>
                            <h4>作品付费型</h4>
                            <p>洛天依粉丝消费集中于<strong>实体专辑</strong>和<strong>周边商品</strong>，大航海和充电等互动消费较低。粉丝通过购买作品表达支持，形成"作品-购买"的单向消费链。</p>
                            <div class="pattern-tags">
                                <span class="pattern-tag">专辑收藏</span>
                                <span class="pattern-tag">周边购买</span>
                                <span class="pattern-tag">低互动</span>
                            </div>
                        </div>

                        <div class="pattern-card aza">
                            <div class="pattern-icon">🎤</div>
                            <h4>直播驱动型</h4>
                            <p>阿萨Aza粉丝消费被<strong>直播互动</strong>高度激活，大航海人数是洛天依的9.5倍。直播打赏、粉丝团、周边形成多元消费矩阵，"陪伴-打赏"成为核心模式。</p>
                            <div class="pattern-tags">
                                <span class="pattern-tag">直播打赏</span>
                                <span class="pattern-tag">粉丝团</span>
                                <span class="pattern-tag">高互动</span>
                            </div>
                        </div>

                        <div class="pattern-card neuro">
                            <div class="pattern-icon">🤖</div>
                            <h4>内容探索型</h4>
                            <p>Neuro-sama粉丝无周边可购，消费集中于<strong>充电打赏</strong>。粉丝为AI技术内容和独特直播体验付费，形成"技术好奇-内容打赏"的新型消费逻辑。</p>
                            <div class="pattern-tags">
                                <span class="pattern-tag">技术打赏</span>
                                <span class="pattern-tag">无周边</span>
                                <span class="pattern-tag">实验性</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 核心洞察 -->
                <div class="how-conclusion">
                    <div class="conclusion-header">
                        <div class="conclusion-line"></div>
                        <span class="conclusion-tag">核心洞察</span>
                        <div class="conclusion-line"></div>
                    </div>
                    <div class="conclusion-content">
                        <p class="conclusion-text">三类虚拟偶像的<strong>消费结构差异</strong>，映射出粉丝与偶像关系的本质区别：洛天依粉丝是<strong>作品消费者</strong>，阿萨Aza粉丝是<strong>陪伴参与者</strong>，Neuro-sama粉丝是<strong>技术体验者</strong>。消费行为从"购买作品"到"打赏陪伴"再到"为实验付费"，完成了从传统粉丝经济到新型互动经济的演进。</p>
                    </div>
                </div>
            </div>
        `;
    }

    getSecondaryColor(id) {
        const colors = {
            luo: '#697EFD',
            aza: '#9BC6FF',
            neuro: '#D63262'
        };
        return colors[id] || '#ffffff';
    }

    formatNumber(num) {
        if (num >= 10000) {
            return (num / 10000).toFixed(1) + '万';
        }
        return num.toString();
    }

    setupScrollAnimation() {
        // 头部动画
        gsap.fromTo('.how-header',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.section-how',
                    start: "top 70%"
                }
            }
        );

        // 消费卡片动画
        const consumptionCards = document.querySelectorAll('.consumption-card');
        consumptionCards.forEach((card, index) => {
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
                        trigger: '.consumption-cards',
                        start: "top 75%"
                    }
                }
            );
        });

        // 图表动画
        const chartBars = document.querySelectorAll('.bar-fill');
        chartBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.fromTo(bar,
                { width: '0%' },
                {
                    width: targetWidth,
                    duration: 1.2,
                    delay: 0.3 + index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.visualization-section',
                        start: "top 70%"
                    }
                }
            );
        });

        // 关键词卡片动画
        const keywordsCards = document.querySelectorAll('.keywords-card');
        keywordsCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.keywords-cards',
                        start: "top 75%"
                    }
                }
            );
        });

        // 消费模式卡片动画
        const patternCards = document.querySelectorAll('.pattern-card');
        patternCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.pattern-cards',
                        start: "top 75%"
                    }
                }
            );
        });

        // 结论动画
        gsap.fromTo('.how-conclusion',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.how-conclusion',
                    start: "top 85%"
                }
            }
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.querySelector('#how')) {
            window.howSection = new HowSection();
        }
    }, 400);
});
