/**
 * Category Section - Idol Cards with Images
 */

class CategorySection {
    constructor() {
        this.section = document.querySelector('#category');
        this.container = document.querySelector('.idols-container') || this.createContainer();

        this.idolsData = [
            {
                id: 'luo',
                name: '洛天依',
                type: '虚拟歌姬',
                icon: '🎵',
                image: './assets/洛天依唱歌-removebg-preview 1.png',
                bio: '洛天依于2012年发布，是中文VOCALOID虚拟歌姬代表。凭借歌声合成技术与国风形象积累早期粉丝。2016年登上湖南卫视，2017年开启全国巡演，完成从亚文化圈层到大众视野的突破。',
                stats: [
                    { value: '2012', label: '出道' },
                    { value: '540万', label: '粉丝' },
                    { value: '21亿', label: '播放' }
                ]
            },
            {
                id: 'aza',
                name: '阿萨Aza',
                type: '虚拟主播',
                icon: '🎤',
                image: './assets/阿萨-removebg-preview 1.png',
                bio: '阿萨Aza2019年11月出道，隶属VirtuaReal企划。凭借唱功、创作能力与共情力强的直播风格，迅速成为虚拟区标杆人物。蝉联流水前列，2023年获B站年度虚拟UP主，2025年斩获百大UP主"直播年度最强舰队"奖项，并成为首位获得东方风云榜"传媒推荐虚拟艺人"的虚拟音乐人。',
                stats: [
                    { value: '2019', label: '出道' },
                    { value: '200万', label: '粉丝' },
                    { value: '百大UP', label: '荣誉' }
                ]
            },
            {
                id: 'neuro',
                name: 'Neuro-sama',
                type: 'AI虚拟主播',
                icon: '🤖',
                image: './assets/neuro-removebg-preview 1.png',
                bio: 'Neuro-sama由英国开发者Vedal打造，是完全由AI驱动的虚拟主播，没有中之人。2022年底完成技术迭代后正式出道，整合语言模型、语音合成与Live2D形象，实现24小时自主直播、秒回弹幕和无情绪波动。分层记忆机制实现人设留存与个性化回应。',
                stats: [
                    { value: '2022', label: '出道' },
                    { value: '50万', label: '粉丝' },
                    { value: 'AI驱动', label: '技术' }
                ]
            }
        ];

        this.init();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'idols-container';
        this.section.appendChild(container);
        return container;
    }

    init() {
        this.renderCards();
        this.setupScrollAnimation();
        console.log('Category section initialized with images');
    }

    renderCards() {
        this.idolsData.forEach((data, index) => {
            const cardEl = this.createCard(data, index);
            this.container.appendChild(cardEl);
        });
    }

    createCard(data, index) {
        const card = document.createElement('div');
        card.className = `idol-card card-${data.id}`;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${data.image}" alt="${data.name}" class="card-image" loading="lazy">
                <div class="card-image-overlay"></div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <div class="card-icon">${data.icon}</div>
                    <div class="card-title-group">
                        <h3 class="card-name">${data.name}</h3>
                        <p class="card-type">${data.type}</p>
                    </div>
                </div>
                <p class="card-bio">${data.bio}</p>
                <div class="card-stats">
                    ${data.stats.map(stat => `
                        <div class="stat-item">
                            <span class="stat-value">${stat.value}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            console.log(`Clicked on ${data.name}`);
        });

        return card;
    }

    setupScrollAnimation() {
        const cards = document.querySelectorAll('.idol-card');

        cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                onEnter: () => {
                    gsap.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.6)",
                        delay: index * 0.1
                    });
                },
                onLeaveBack: () => {
                    gsap.to(card, {
                        opacity: 0,
                        y: 80,
                        duration: 0.4,
                        ease: "power2.in"
                    });
                }
            });
        });

        gsap.fromTo('.category-header',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.section-category',
                    start: "top 70%"
                }
            }
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (document.querySelector('#category')) {
            window.categorySection = new CategorySection();
        }
    }, 100);
});
