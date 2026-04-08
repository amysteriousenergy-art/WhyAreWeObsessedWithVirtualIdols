/**
 * Data Section - 数据分析页（粉丝画像）
 * 修复版：添加了缺失的数据定义
 */

class DataSection {
    constructor() {
        this.section = document.querySelector('#data');

        // 定义性别分布数据（修复：添加缺失的数据定义）
        this.genderData = [
            { name: '阿萨Aza', value: 74, color: '#DDED4B' },
            { name: 'Neuro-sama', value: 65, color: '#F8E2CB' },
            { name: '洛天依', value: 43, color: '#9BC6FF' }
        ];

        // 定义年龄分布数据（修复：添加缺失的数据定义）
        this.ageData = [
            { name: '阿萨Aza', value: 26, color: '#DDED4B' },
            { name: 'Neuro-sama', value: 39, color: '#F8E2CB' },
            { name: '洛天依', value: 35, color: '#9BC6FF' }
        ];

        this.init();
    }

    init() {
        this.renderContent();
        this.setupScrollAnimation();
        console.log('Data section initialized');
    }

    renderContent() {
        // 创建 data-box 容器
        const dataBox = document.createElement('div');
        dataBox.className = 'data-box';

        dataBox.innerHTML = `
            <div class="title-section">
                <span class="sub-title">性别|年龄</span>
                <span class="main-title">数据图</span>
            </div>

            <div class="charts-wrapper">
                <!-- 性别分布图表 -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">性别分布（女性占比）</h3>
                    </div>
                    <div class="chart-container">
                        <div class="bar-chart" id="gender-chart">
                            ${this.genderData.map((item, index) => `
                                <div class="chart-row">
                                    <div class="row-label">${item.name}</div>
                                    <div class="bar-wrapper">
                                        <div class="bar-fill" 
                                             style="width: 0%; background: ${item.color};"
                                             data-width="${item.value}%"
                                             data-index="${index}">
                                        </div>
                                    </div>
                                    <div class="row-value">${item.value}%</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="chart-legend">
                        <div class="legend-item">
                            <span class="legend-color" style="background: #DDED4B;"></span>
                            <span>阿萨Aza</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color" style="background: #F8E2CB;"></span>
                            <span>Neuro-sama</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color" style="background: #9BC6FF;"></span>
                            <span>洛天依</span>
                        </div>
                    </div>
                </div>

                <!-- 年龄分布图表 -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h3 class="chart-title">年龄分布（30岁以下占比）</h3>
                    </div>
                    <div class="chart-container">
                        <div class="bar-chart" id="age-chart">
                            ${this.ageData.map((item, index) => `
                                <div class="chart-row">
                                    <div class="row-label">${item.name}</div>
                                    <div class="bar-wrapper">
                                        <div class="bar-fill" 
                                             style="width: 0%; background: ${item.color};"
                                             data-width="${item.value}%"
                                             data-index="${index}">
                                        </div>
                                    </div>
                                    <div class="row-value">${item.value}%</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="chart-legend">
                        <div class="legend-item">
                            <span class="legend-color" style="background: #DDED4B;"></span>
                            <span>阿萨Aza</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color" style="background: #F8E2CB;"></span>
                            <span>Neuro-sama</span>
                        </div>
                        <div class="legend-item">
                            <span class="legend-color" style="background: #9BC6FF;"></span>
                            <span>洛天依</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 数据洞察 -->
            <div class="data-insights">
                <div class="insight-card">
                    <div class="insight-icon">👥</div>
                    <div class="insight-content">
                        <h4>性别差异显著</h4>
                        <p>阿萨Aza粉丝中女性占比高达<strong>74%</strong>，远高于其他两类虚拟偶像，反映出虚拟主播对女性的吸引力更强。</p>
                    </div>
                </div>
                <div class="insight-card">
                    <div class="insight-icon">🎂</div>
                    <div class="insight-content">
                        <h4>年龄分布趋同</h4>
                        <p>三类虚拟偶像的30岁以下粉丝占比均在<strong>26%-39%</strong>之间，Neuro-sama略高，说明AI虚拟主播更受年轻群体关注。</p>
                    </div>
                </div>
            </div>
        `;

        this.section.appendChild(dataBox);

        // 绑定动画
        this.animateCharts();
    }

    animateCharts() {
        // 性别分布图表动画
        const genderBars = document.querySelectorAll('#gender-chart .bar-fill');
        genderBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.to(bar, {
                width: targetWidth,
                duration: 1.2,
                delay: 0.3 + index * 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#gender-chart',
                    start: "top 80%"
                }
            });
        });

        // 年龄分布图表动画
        const ageBars = document.querySelectorAll('#age-chart .bar-fill');
        ageBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.to(bar, {
                width: targetWidth,
                duration: 1.2,
                delay: 0.5 + index * 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#age-chart',
                    start: "top 80%"
                }
            });
        });
    }

    setupScrollAnimation() {
        gsap.fromTo('.data-header',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.section-data',
                    start: "top 70%"
                }
            }
        );

        gsap.fromTo('.data-box',
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.data-box',
                    start: "top 75%"
                }
            }
        );

        gsap.fromTo('.title-section',
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.data-box',
                    start: "top 70%"
                }
            }
        );

        // 洞察卡片动画
        const insightCards = document.querySelectorAll('.insight-card');
        insightCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.6 + index * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.data-insights',
                        start: "top 80%"
                    }
                }
            );
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.querySelector('#data')) {
            window.dataSection = new DataSection();
        }
    }, 200);
});