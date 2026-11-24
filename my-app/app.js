// 节日祝福模板数据
const templates = [
    {
        id: 1,
        name: "春节祝福1",
        category: "spring",
        content: "🎊 新春快乐！祝您在新的一年里身体健康，万事如意，财源广进，阖家幸福！",
        emoji: "🎊",
        usage: 156
    },
    {
        id: 2,
        name: "春节祝福2", 
        category: "spring",
        content: "🧧 恭贺新禧！愿您春节愉快，工作顺利，家庭美满，心想事成！",
        emoji: "🧧",
        usage: 142
    },
    {
        id: 3,
        name: "春节祝福3",
        category: "spring", 
        content: "🏮 新年好！祝您龙年大吉，步步高升，笑口常开，福星高照！",
        emoji: "🏮",
        usage: 128
    },
    {
        id: 4,
        name: "元旦祝福",
        category: "newyear",
        content: "🎆 新年快乐！愿您在新的一年里事业有成，身体健康，家庭幸福！",
        emoji: "🎆",
        usage: 98
    },
    {
        id: 5,
        name: "中秋祝福",
        category: "midautumn",
        content: "🥮 中秋快乐！月圆人团圆，愿您和家人幸福美满，身体健康！",
        emoji: "🥮",
        usage: 124
    },
    {
        id: 6,
        name: "国庆祝福",
        category: "national",
        content: "🇨🇳 国庆快乐！祝愿祖国繁荣昌盛，人民幸福安康！",
        emoji: "🇨🇳",
        usage: 87
    },
    {
        id: 7,
        name: "圣诞祝福",
        category: "christmas",
        content: "🎄 圣诞快乐！愿您拥有一个温馨美好的圣诞节，幸福满满！",
        emoji: "🎄",
        usage: 76
    },
    {
        id: 8,
        name: "生日祝福",
        category: "birthday",
        content: "🎂 生日快乐！祝您生日快乐，年年有今日，岁岁有今朝！",
        emoji: "🎂",
        usage: 145
    }
];

// 全局变量
let currentCategory = 'all';
let currentTemplate = null;

// 活动记录
let activities = [
    {
        id: 1,
        type: "reply",
        message: "自动回复春节祝福",
        time: "2分钟前",
        user: "张三"
    },
    {
        id: 2,
        type: "send",
        message: "自动发送中秋祝福给5位联系人",
        time: "15分钟前",
        user: "系统"
    },
    {
        id: 3,
        type: "reply",
        message: "自动回复中秋祝福",
        time: "1小时前",
        user: "李四"
    }
];

// 统计数据
let stats = {
    todayReplies: 23,
    weekReplies: 156,
    templateCount: templates.length
};

// 联系人数据
let contacts = [
    { id: 1, name: '张三', phone: '13800138000', enabled: true },
    { id: 2, name: '李四', phone: '13900139000', enabled: true }
];

// 节日数据
const festivals = [
    { name: '春节', date: '2024-02-10', category: 'spring', emoji: '🏮' },
    { name: '元宵', date: '2024-02-24', category: 'spring', emoji: '🎑' },
    { name: '清明', date: '2024-04-04', category: 'midautumn', emoji: '🌸' },
    { name: '端午', date: '2024-06-10', category: 'midautumn', emoji: '🐉' },
    { name: '七夕', date: '2024-08-10', category: 'midautumn', emoji: '🌟' },
    { name: '中秋', date: '2024-09-17', category: 'midautumn', emoji: '🌕' },
    { name: '重阳', date: '2024-10-11', category: 'midautumn', emoji: '🍂' },
    { name: '国庆', date: '2024-10-01', category: 'national', emoji: '🇨🇳' },
    { name: '圣诞', date: '2024-12-25', category: 'christmas', emoji: '🎄' },
    { name: '元旦', date: '2025-01-01', category: 'newyear', emoji: '🎊' }
];

// PWA相关变量
let deferredPrompt = null;
let isPWAInstalled = false;

// 获取分类名称
function getCategoryName(category) {
    const names = {
        spring: '春节',
        newyear: '元旦',
        midautumn: '中秋',
        national: '国庆',
        christmas: '圣诞',
        birthday: '生日',
        custom: '自定义'
    };
    return names[category] || '其他';
}

// 渲染模板
function renderTemplates() {
    const grid = document.getElementById('templatesGrid');
    const filteredTemplates = currentCategory === 'all' 
        ? templates 
        : templates.filter(t => t.category === currentCategory);
    
    grid.innerHTML = filteredTemplates.map(template => `
        <div class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer card-hover" 
             onclick="selectTemplate(${template.id})" 
             onmouseenter="trackTemplateView(${template.id}, '${template.category}')">
            <div class="flex items-start justify-between mb-2">
                <span class="text-2xl">${template.emoji}</span>
                <span class="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">${getCategoryName(template.category)}</span>
            </div>
            <h4 class="font-medium text-gray-800 mb-2">${template.name}</h4>
            <p class="text-sm text-gray-600 mb-3 line-clamp-2">${template.content}</p>
            <div class="flex items-center justify-between text-xs text-gray-500">
                <span><i class="fas fa-chart-line mr-1"></i>使用 ${template.usage} 次</span>
                <div class="flex space-x-2">
                    <button onclick="event.stopPropagation(); shareManager.showShareMenu(templates.find(t => t.id === ${template.id}))" 
                            class="text-green-600 hover:text-green-800" title="分享">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button onclick="event.stopPropagation(); editTemplate(${template.id})" 
                            class="text-blue-600 hover:text-blue-800" title="编辑">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// 追踪模板查看
function trackTemplateView(templateId, templateCategory) {
    if (behaviorTracker) {
        behaviorTracker.trackTemplateView(templateId, templateCategory);
    }
}

// 筛选模板
function filterTemplates(category) {
    currentCategory = category;
    
    // 记录分类切换行为
    if (behaviorTracker) {
        behaviorTracker.trackCategoryChange(category);
    }
    
    // 更新分类标签样式
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('bg-purple-600', 'text-white');
        tab.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    const activeTab = document.querySelector(`[data-category="${category}"]`);
    if (activeTab) {
        activeTab.classList.remove('bg-gray-200', 'text-gray-700');
        activeTab.classList.add('bg-purple-600', 'text-white');
    }
    
    renderTemplates();
}

// 选择模板
function selectTemplate(id) {
    currentTemplate = templates.find(t => t.id === id);
    if (currentTemplate) {
        // 记录模板选择行为
        if (behaviorTracker) {
            behaviorTracker.trackTemplateSelection(id, currentTemplate.category);
        }
        
        document.getElementById('previewMessage').textContent = currentTemplate.content;
        document.getElementById('previewCategory').textContent = getCategoryName(currentTemplate.category);
        document.getElementById('previewUsage').textContent = `使用 ${currentTemplate.usage} 次`;
        
        // 更新选择状态
        document.querySelectorAll('#templatesGrid > div').forEach((card, index) => {
            const templateId = parseInt(card.getAttribute('onclick').match(/\d+/)[0]);
            if (templateId === id) {
                card.classList.add('ring-2', 'ring-purple-500');
            } else {
                card.classList.remove('ring-2', 'ring-purple-500');
            }
        });
    }
}

// 渲染推荐模板
function renderRecommendations() {
    const recommendationsContainer = document.getElementById('recommendationsContainer');
    if (!recommendationsContainer || !recommendationEngine) return;
    
    const recommendations = recommendationEngine.getRecommendedTemplates(6);
    
    if (recommendations.length === 0) {
        recommendationsContainer.innerHTML = `
            <div class="text-center py-8">
                <i class="fas fa-magic text-4xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">使用更多模板后，这里会显示个性化推荐</p>
            </div>
        `;
        return;
    }
    
    recommendationsContainer.innerHTML = `
        <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-800 flex items-center">
                <i class="fas fa-magic text-purple-600 mr-2"></i>
                为您推荐
            </h3>
            <p class="text-sm text-gray-600">基于您的使用习惯智能推荐</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${recommendations.map(template => `
                <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 hover:shadow-lg transition cursor-pointer border border-purple-200" 
                     onclick="selectRecommendedTemplate(${template.id})">
                    <div class="flex items-start justify-between mb-2">
                        <span class="text-2xl">${template.emoji}</span>
                        <div class="flex flex-col items-end">
                            <span class="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                                ${getCategoryName(template.category)}
                            </span>
                            <span class="text-xs text-purple-500 mt-1">
                                ${template.reason}
                            </span>
                        </div>
                    </div>
                    <h4 class="font-medium text-gray-800 mb-2">${template.name}</h4>
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2">${template.content}</p>
                    <div class="flex items-center justify-between text-xs text-gray-500">
                        <span><i class="fas fa-chart-line mr-1"></i>使用 ${template.usage} 次</span>
                        <div class="flex items-center space-x-2">
                            <span class="text-purple-600">
                                <i class="fas fa-star mr-1"></i>推荐 ${template.score.toFixed(1)}
                            </span>
                            <button onclick="event.stopPropagation(); shareManager.showShareMenu(templates.find(t => t.id === ${template.id}))" 
                                    class="text-green-600 hover:text-green-800" title="分享">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 选择推荐模板
function selectRecommendedTemplate(id) {
    // 记录推荐模板的选择行为
    if (behaviorTracker) {
        const template = templates.find(t => t.id === id);
        if (template) {
            behaviorTracker.trackTemplateSelection(id, template.category);
        }
    }
    
    // 调用原有的选择函数
    selectTemplate(id);
    
    // 滚动到预览区域
    const previewSection = document.getElementById('previewSection');
    if (previewSection) {
        previewSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 渲染活动记录
function renderActivities() {
    const list = document.getElementById('activityList');
    list.innerHTML = activities.map(activity => `
        <div class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-${activity.type === 'reply' ? 'reply' : 'paper-plane'} text-blue-600 text-xs"></i>
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-800">${activity.message}</p>
                <p class="text-xs text-gray-500">${activity.time} · ${activity.user}</p>
            </div>
        </div>
    `).join('');
}

// 更新统计数据
function updateStats() {
    document.getElementById('todayReplies').textContent = stats.todayReplies;
    document.getElementById('weekReplies').textContent = stats.weekReplies;
    document.getElementById('templateCount').textContent = stats.templateCount;
}

// 模拟自动回复
function simulateAutoReply() {
    const keywords = ['新年', '春节', '中秋', '国庆', '圣诞', '生日', '快乐', '祝福'];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    
    let category = 'custom';
    if (['新年', '春节'].includes(randomKeyword)) category = 'spring';
    else if (randomKeyword === '中秋') category = 'midautumn';
    else if (randomKeyword === '国庆') category = 'national';
    else if (randomKeyword === '圣诞') category = 'christmas';
    else if (randomKeyword === '生日') category = 'birthday';
    else if (randomKeyword === '元旦') category = 'newyear';
    
    const categoryTemplates = templates.filter(t => t.category === category);
    if (categoryTemplates.length > 0) {
        const randomTemplate = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
        
        setTimeout(() => {
            document.getElementById('previewMessage').textContent = randomTemplate.content;
            showTypingIndicator();
            
            stats.todayReplies++;
            stats.weekReplies++;
            
            activities.unshift({
                id: activities.length + 1,
                type: "reply",
                message: `自动回复${getCategoryName(category)}祝福`,
                time: "刚刚",
                user: "用户" + Math.floor(Math.random() * 100)
            });
            
            renderActivities();
            updateStats();
        }, 1000);
    }
}

// 显示打字指示器
function showTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.style.display = 'flex';
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 2000);
}

// 注册Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker 注册成功:', registration);
            })
            .catch(error => {
                console.error('Service Worker 注册失败:', error);
            });
    }
}

// PWA安装提示
function setupPWAInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });

    window.addEventListener('appinstalled', () => {
        console.log('PWA已安装');
        isPWAInstalled = true;
        hideInstallButton();
        showInstallSuccess();
    });
}

// 显示安装按钮
function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.id = 'pwa-install-btn';
    installBtn.className = 'fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition z-50 flex items-center space-x-2';
    installBtn.innerHTML = '<i class="fas fa-download"></i><span>安装应用</span>';
    installBtn.onclick = installPWA;
    document.body.appendChild(installBtn);
}

// 隐藏安装按钮
function hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
        installBtn.remove();
    }
}

// 安装PWA
function installPWA() {
    if (!deferredPrompt) {
        alert('无法安装应用，请使用支持的浏览器');
        return;
    }

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('用户接受了安装');
        } else {
            console.log('用户拒绝了安装');
        }
        deferredPrompt = null;
        hideInstallButton();
    });
}

// 显示安装成功提示
function showInstallSuccess() {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    successDiv.innerHTML = '<i class="fas fa-check-circle mr-2"></i>应用安装成功！';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// 渲染节日日历
function renderFestivalCalendar() {
    const calendar = document.getElementById('festivalCalendar');
    const today = new Date();
    const upcomingFestivals = festivals.filter(f => {
        const festivalDate = new Date(f.date);
        return festivalDate >= today;
    }).slice(0, 9);
    
    calendar.innerHTML = upcomingFestivals.map(festival => `
        <div class="p-2 bg-gray-50 rounded-lg text-center hover:bg-purple-50 transition cursor-pointer" onclick="filterTemplates('${festival.category}')">
            <div class="text-lg">${festival.emoji}</div>
            <div class="text-xs font-medium text-gray-800">${festival.name}</div>
            <div class="text-xs text-gray-500">${new Date(festival.date).getMonth() + 1}/${new Date(festival.date).getDate()}</div>
        </div>
    `).join('');
}

// 渲染联系人列表
function renderContacts() {
    const contactsList = document.getElementById('contactsList');
    
    if (contacts.length === 0) {
        contactsList.innerHTML = '<p class="text-sm text-gray-500 text-center">暂无联系人</p>';
        return;
    }
    
    contactsList.innerHTML = contacts.map(contact => `
        <div class="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div class="flex items-center space-x-3">
                <input type="checkbox" ${contact.enabled ? 'checked' : ''} onchange="toggleContact(${contact.id})" class="rounded text-purple-600 focus:ring-purple-500">
                <div>
                    <p class="font-medium text-gray-800">${contact.name}</p>
                    <p class="text-sm text-gray-500">${contact.phone}</p>
                </div>
            </div>
            <button onclick="removeContact(${contact.id})" class="text-red-500 hover:text-red-700 transition">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// 添加联系人
function addContact() {
    const nameInput = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    if (!name || !phone) {
        alert('请输入联系人姓名和手机号码');
        return;
    }
    
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        alert('请输入正确的手机号码');
        return;
    }
    
    const newContact = {
        id: contacts.length + 1,
        name: name,
        phone: phone,
        enabled: true
    };
    
    contacts.push(newContact);
    renderContacts();
    
    nameInput.value = '';
    phoneInput.value = '';
    
    saveContacts();
    updateSendStatus(`已添加联系人：${name}`);
}

// 切换联系人状态
function toggleContact(id) {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
        contact.enabled = !contact.enabled;
        saveContacts();
        updateSendStatus(`已${contact.enabled ? '启用' : '禁用'}联系人：${contact.name}`);
    }
}

// 删除联系人
function removeContact(id) {
    const contact = contacts.find(c => c.id === id);
    if (contact && confirm(`确定要删除联系人 ${contact.name} 吗？`)) {
        contacts = contacts.filter(c => c.id !== id);
        renderContacts();
        saveContacts();
        updateSendStatus(`已删除联系人：${contact.name}`);
    }
}

// 保存联系人到本地存储
function saveContacts() {
    localStorage.setItem('festivalContacts', JSON.stringify(contacts));
}

// 更新发送状态
function updateSendStatus(message) {
    const statusDiv = document.getElementById('sendStatus');
    if (statusDiv) {
        statusDiv.innerHTML = `<p class="text-sm text-gray-600">${message}</p>`;
    }
}

// 用户行为追踪系统
class UserBehaviorTracker {
    constructor() {
        this.behaviorData = this.loadBehaviorData();
        this.sessionStartTime = Date.now();
        this.currentSession = {
            startTime: this.sessionStartTime,
            actions: [],
            templatesViewed: [],
            categoriesViewed: [],
            searchQueries: []
        };
    }

    // 加载行为数据
    loadBehaviorData() {
        const saved = localStorage.getItem('userBehaviorData');
        return saved ? JSON.parse(saved) : {
            totalSessions: 0,
            totalUsageTime: 0,
            templateUsage: {},
            categoryPreferences: {},
            timePatterns: {},
            searchHistory: [],
            favoriteTemplates: [],
            lastVisit: null
        };
    }

    // 保存行为数据
    saveBehaviorData() {
        localStorage.setItem('userBehaviorData', JSON.stringify(this.behaviorData));
    }

    // 记录模板查看
    trackTemplateView(templateId, templateCategory) {
        const timestamp = Date.now();
        
        // 更新模板使用统计
        if (!this.behaviorData.templateUsage[templateId]) {
            this.behaviorData.templateUsage[templateId] = {
                viewCount: 0,
                lastViewed: null,
                category: templateCategory,
                totalTime: 0
            };
        }
        
        this.behaviorData.templateUsage[templateId].viewCount++;
        this.behaviorData.templateUsage[templateId].lastViewed = timestamp;
        
        // 更新分类偏好
        if (!this.behaviorData.categoryPreferences[templateCategory]) {
            this.behaviorData.categoryPreferences[templateCategory] = 0;
        }
        this.behaviorData.categoryPreferences[templateCategory]++;
        
        // 记录当前会话
        this.currentSession.templatesViewed.push({
            templateId,
            timestamp,
            category: templateCategory
        });
        
        if (!this.currentSession.categoriesViewed.includes(templateCategory)) {
            this.currentSession.categoriesViewed.push(templateCategory);
        }
        
        // 更新时间模式
        const hour = new Date(timestamp).getHours();
        if (!this.behaviorData.timePatterns[hour]) {
            this.behaviorData.timePatterns[hour] = 0;
        }
        this.behaviorData.timePatterns[hour]++;
        
        this.saveBehaviorData();
    }

    // 记录模板选择/使用
    trackTemplateSelection(templateId, templateCategory) {
        const timestamp = Date.now();
        
        if (!this.behaviorData.templateUsage[templateId]) {
            this.behaviorData.templateUsage[templateId] = {
                viewCount: 0,
                selectionCount: 0,
                lastViewed: null,
                category: templateCategory,
                totalTime: 0
            };
        }
        
        this.behaviorData.templateUsage[templateId].selectionCount++;
        this.behaviorData.templateUsage[templateId].lastSelected = timestamp;
        
        // 添加到收藏
        if (!this.behaviorData.favoriteTemplates.includes(templateId)) {
            this.behaviorData.favoriteTemplates.push(templateId);
        }
        
        this.currentSession.actions.push({
            type: 'template_selection',
            templateId,
            timestamp
        });
        
        this.saveBehaviorData();
    }

    // 记录搜索行为
    trackSearch(query, results) {
        const timestamp = Date.now();
        
        this.behaviorData.searchHistory.push({
            query,
            timestamp,
            resultCount: results.length
        });
        
        // 保持搜索历史在合理范围内
        if (this.behaviorData.searchHistory.length > 100) {
            this.behaviorData.searchHistory = this.behaviorData.searchHistory.slice(-50);
        }
        
        this.currentSession.searchQueries.push({
            query,
            timestamp,
            resultCount: results.length
        });
        
        this.saveBehaviorData();
    }

    // 记录分类切换
    trackCategoryChange(category) {
        const timestamp = Date.now();
        
        this.currentSession.actions.push({
            type: 'category_change',
            category,
            timestamp
        });
        
        this.saveBehaviorData();
    }

    // 记录社交分享行为
    trackSocialShare(templateId, platform) {
        const timestamp = Date.now();
        
        // 更新模板的分享统计
        if (!this.behaviorData.templateUsage[templateId]) {
            this.behaviorData.templateUsage[templateId] = {
                viewCount: 0,
                selectionCount: 0,
                shareCount: 0,
                category: '',
                lastViewed: null,
                lastSelected: null,
                lastShared: null
            };
        }
        
        this.behaviorData.templateUsage[templateId].shareCount++;
        this.behaviorData.templateUsage[templateId].lastShared = timestamp;
        
        // 记录到当前会话
        this.currentSession.actions.push({
            type: 'social_share',
            templateId,
            platform,
            timestamp
        });
        
        this.saveBehaviorData();
    }

    // 记录深度链接访问
    trackDeepLinkVisit(platform, templateId, category) {
        const timestamp = Date.now();
        
        // 初始化深度链接统计
        if (!this.behaviorData.deepLinkVisits) {
            this.behaviorData.deepLinkVisits = {
                totalVisits: 0,
                platformVisits: {},
                templateVisits: {},
                categoryVisits: {},
                visitHistory: []
            };
        }
        
        // 更新总访问数
        this.behaviorData.deepLinkVisits.totalVisits++;
        
        // 更新平台访问数
        if (!this.behaviorData.deepLinkVisits.platformVisits[platform]) {
            this.behaviorData.deepLinkVisits.platformVisits[platform] = 0;
        }
        this.behaviorData.deepLinkVisits.platformVisits[platform]++;
        
        // 更新模板访问数
        if (templateId) {
            if (!this.behaviorData.deepLinkVisits.templateVisits[templateId]) {
                this.behaviorData.deepLinkVisits.templateVisits[templateId] = 0;
            }
            this.behaviorData.deepLinkVisits.templateVisits[templateId]++;
        }
        
        // 更新分类访问数
        if (category) {
            if (!this.behaviorData.deepLinkVisits.categoryVisits[category]) {
                this.behaviorData.deepLinkVisits.categoryVisits[category] = 0;
            }
            this.behaviorData.deepLinkVisits.categoryVisits[category]++;
        }
        
        // 添加到访问历史
        this.behaviorData.deepLinkVisits.visitHistory.push({
            platform,
            templateId,
            category,
            timestamp
        });
        
        // 保持历史记录在合理范围内
        if (this.behaviorData.deepLinkVisits.visitHistory.length > 500) {
            this.behaviorData.deepLinkVisits.visitHistory = this.behaviorData.deepLinkVisits.visitHistory.slice(-250);
        }
        
        // 记录到当前会话
        this.currentSession.actions.push({
            type: 'deep_link_visit',
            platform,
            templateId,
            category,
            timestamp
        });
        
        this.saveBehaviorData();
    }

    // 结束会话
    endSession() {
        const sessionDuration = Date.now() - this.sessionStartTime;
        
        this.behaviorData.totalSessions++;
        this.behaviorData.totalUsageTime += sessionDuration;
        this.behaviorData.lastVisit = new Date().toISOString();
        
        // 保存会话数据
        this.saveBehaviorData();
    }

    // 获取推荐数据
    getRecommendationData() {
        return {
            favoriteTemplates: this.behaviorData.favoriteTemplates,
            categoryPreferences: this.behaviorData.categoryPreferences,
            timePatterns: this.behaviorData.timePatterns,
            recentSearches: this.behaviorData.searchHistory.slice(-10),
            templateUsage: this.behaviorData.templateUsage
        };
    }
}

// 智能推荐系统
class RecommendationEngine {
    constructor(behaviorTracker) {
        this.tracker = behaviorTracker;
        this.templates = window.templates || [];
    }

    // 获取推荐模板
    getRecommendedTemplates(limit = 6) {
        const data = this.tracker.getRecommendationData();
        const recommendations = [];
        
        // 1. 基于用户偏好的分类推荐
        const preferredCategories = Object.entries(data.categoryPreferences)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([category]) => category);
        
        preferredCategories.forEach(category => {
            const categoryTemplates = this.templates
                .filter(t => t.category === category)
                .sort((a, b) => b.usage - a.usage) // 按使用频率排序
                .slice(0, 2);
            
            categoryTemplates.forEach(template => {
                if (!recommendations.find(r => r.id === template.id)) {
                    recommendations.push({
                        ...template,
                        reason: '基于您的偏好',
                        score: this.calculateRecommendationScore(template, data)
                    });
                }
            });
        });
        
        // 2. 热门模板推荐
        const hotTemplates = this.templates
            .sort((a, b) => b.usage - a.usage)
            .slice(0, 3)
            .filter(t => !recommendations.find(r => r.id === t.id));
        
        hotTemplates.forEach(template => {
            recommendations.push({
                ...template,
                reason: '热门推荐',
                score: this.calculateRecommendationScore(template, data)
            });
        });
        
        // 3. 基于时间的推荐
        const timeBasedRecommendations = this.getTimeBasedRecommendations(data);
        timeBasedRecommendations.forEach(template => {
            if (!recommendations.find(r => r.id === template.id)) {
                recommendations.push({
                    ...template,
                    reason: '适当时机推荐',
                    score: this.calculateRecommendationScore(template, data)
                });
            }
        });
        
        // 按推荐分数排序并限制数量
        return recommendations
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }

    // 计算推荐分数
    calculateRecommendationScore(template, data) {
        let score = 0;
        
        // 分类偏好分数
        if (data.categoryPreferences[template.category]) {
            score += data.categoryPreferences[template.category] * 2;
        }
        
        // 使用历史分数
        if (data.templateUsage[template.id]) {
            const usage = data.templateUsage[template.id];
            score += usage.viewCount * 1;
            score += usage.selectionCount * 3;
        }
        
        // 热门程度分数
        score += template.usage * 0.1;
        
        // 收藏分数
        if (data.favoriteTemplates.includes(template.id)) {
            score += 10;
        }
        
        return score;
    }

    // 基于时间的推荐
    getTimeBasedRecommendations(data) {
        const currentHour = new Date().getHours();
        const recommendations = [];
        
        // 根据用户使用时间模式推荐
        if (data.timePatterns[currentHour] > 0) {
            // 用户在这个时间段活跃，推荐其偏好的分类
            const preferredCategories = Object.entries(data.categoryPreferences)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 2)
                .map(([category]) => category);
            
            preferredCategories.forEach(category => {
                const templates = this.templates
                    .filter(t => t.category === category)
                    .sort((a, b) => b.usage - a.usage)
                    .slice(0, 1);
                
                recommendations.push(...templates);
            });
        }
        
        // 节日时间推荐
        const upcomingFestivals = this.getUpcomingFestivals();
        upcomingFestivals.forEach(festival => {
            const festivalTemplates = this.templates
                .filter(t => t.category === festival.category)
                .slice(0, 1);
            
            recommendations.push(...festivalTemplates);
        });
        
        return recommendations;
    }

    // 获取即将到来的节日
    getUpcomingFestivals() {
        const today = new Date();
        const festivals = window.festivals || [];
        
        return festivals
            .filter(f => {
                const festivalDate = new Date(f.date);
                const daysUntil = Math.ceil((festivalDate - today) / (1000 * 60 * 60 * 24));
                return daysUntil >= 0 && daysUntil <= 7; // 7天内的节日
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    }
}

// 社交分享系统
class SocialShareManager {
    constructor() {
        this.shareData = this.loadShareData();
        this.shareUrls = {
            wechat: 'https://api.weixin.qq.com/cgi-bin/showqrcode',
            qq: 'https://connect.qq.com/widget/shareqq/index.html',
            weibo: 'https://service.weibo.com/share/share.php',
            douyin: 'https://www.douyin.com/share/',
            xiaohongshu: 'https://www.xiaohongshu.com/discovery/item/'
        };
    }

    // 加载分享数据
    loadShareData() {
        const saved = localStorage.getItem('socialShareData');
        return saved ? JSON.parse(saved) : {
            totalShares: 0,
            platformShares: {},
            templateShares: {},
            shareHistory: [],
            lastShare: null
        };
    }

    // 保存分享数据
    saveShareData() {
        localStorage.setItem('socialShareData', JSON.stringify(this.shareData));
    }

    // 分享模板到社交平台
    shareTemplate(template, platform) {
        const shareUrl = this.generateShareUrl(template, platform);
        const shareText = this.generateShareText(template);
        
        // 记录分享行为
        this.recordShare(template.id, platform);
        
        // 根据平台执行分享
        switch (platform) {
            case 'wechat':
                this.shareToWechat(template, shareUrl, shareText);
                break;
            case 'qq':
                this.shareToQQ(template, shareUrl, shareText);
                break;
            case 'weibo':
                this.shareToWeibo(template, shareUrl, shareText);
                break;
            case 'douyin':
                this.shareToDouyin(template, shareUrl, shareText);
                break;
            case 'xiaohongshu':
                this.shareToXiaohongshu(template, shareUrl, shareText);
                break;
            case 'copy':
                this.copyToClipboard(template, shareUrl, shareText);
                break;
            default:
                this.shareGeneric(template, shareUrl, shareText);
        }
    }

    // 生成分享URL
    generateShareUrl(template, platform) {
        const baseUrl = window.location.origin + window.location.pathname;
        const params = new URLSearchParams({
            template: template.id,
            category: template.category,
            platform: platform,
            utm_source: platform,
            utm_medium: 'social_share',
            utm_campaign: 'festival_greetings'
        });
        return `${baseUrl}?${params.toString()}`;
    }

    // 生成分享文本
    generateShareText(template) {
        return `${template.emoji} ${template.name}\n${template.content}\n\n🎊 来自节日祝福自动回复助手`;
    }

    // 分享到微信
    shareToWechat(template, url, text) {
        // 生成二维码供扫描
        this.generateQRCode(url, (qrCodeDataUrl) => {
            this.showShareModal('微信分享', `
                <div class="text-center">
                    <img src="${qrCodeDataUrl}" alt="微信分享二维码" class="w-48 h-48 mx-auto mb-4">
                    <p class="text-gray-600 mb-4">扫描二维码在微信中分享</p>
                    <p class="text-sm text-gray-500">${text.substring(0, 50)}...</p>
                </div>
            `);
        });
    }

    // 分享到QQ
    shareToQQ(template, url, text) {
        const shareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(template.name)}&summary=${encodeURIComponent(text)}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    // 分享到微博
    shareToWeibo(template, url, text) {
        const shareUrl = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }

    // 分享到抖音
    shareToDouyin(template, url, text) {
        // 抖音分享需要复制链接
        this.copyToClipboard(template, url, text);
        this.showShareModal('抖音分享', `
            <div class="text-center">
                <i class="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
                <p class="text-gray-800 mb-4">链接已复制到剪贴板</p>
                <p class="text-sm text-gray-600">请打开抖音App，粘贴链接分享</p>
            </div>
        `);
    }

    // 分享到小红书
    shareToXiaohongshu(template, url, text) {
        this.copyToClipboard(template, url, text);
        this.showShareModal('小红书分享', `
            <div class="text-center">
                <i class="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
                <p class="text-gray-800 mb-4">链接已复制到剪贴板</p>
                <p class="text-sm text-gray-600">请打开小红书App，粘贴链接分享</p>
            </div>
        `);
    }

    // 复制到剪贴板
    copyToClipboard(template, url, text) {
        const shareContent = `${text}\n\n链接：${url}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareContent).then(() => {
                this.showToast('链接已复制到剪贴板');
            });
        } else {
            // 兼容旧浏览器
            const textArea = document.createElement('textarea');
            textArea.value = shareContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showToast('链接已复制到剪贴板');
        }
    }

    // 通用分享
    shareGeneric(template, url, text) {
        if (navigator.share) {
            navigator.share({
                title: template.name,
                text: text,
                url: url
            }).then(() => {
                this.recordShare(template.id, 'native');
            }).catch((error) => {
                console.log('分享取消:', error);
            });
        } else {
            this.copyToClipboard(template, url, text);
        }
    }

    // 生成二维码
    generateQRCode(text, callback) {
        // 使用在线二维码生成服务
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
        
        // 创建图片元素
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            // 创建canvas来处理图片
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 200;
            canvas.height = 200;
            ctx.drawImage(img, 0, 0);
            
            // 转换为data URL
            const dataUrl = canvas.toDataURL('image/png');
            callback(dataUrl);
        };
        img.onerror = () => {
            // 如果在线服务失败，使用简单的占位图
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 200;
            canvas.height = 200;
            
            // 绘制简单的占位图
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, 200, 200);
            ctx.fillStyle = '#666';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('二维码生成中...', 100, 100);
            
            callback(canvas.toDataURL('image/png'));
        };
        img.src = qrUrl;
    }

    // 显示分享模态框
    showShareModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">${title}</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                ${content}
                <div class="mt-4 flex justify-end">
                    <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        关闭
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 显示分享按钮菜单
    showShareMenu(template) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">分享到</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <button onclick="shareManager.shareTemplate(templates.find(t => t.id === ${template.id}), 'wechat'); this.closest('.fixed').remove();" 
                            class="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg">
                        <i class="fab fa-weixin text-green-500 text-2xl mb-1"></i>
                        <span class="text-xs">微信</span>
                    </button>
                    <button onclick="shareManager.shareTemplate(templates.find(t => t.id === ${template.id}), 'qq'); this.closest('.fixed').remove();" 
                            class="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg">
                        <i class="fab fa-qq text-blue-500 text-2xl mb-1"></i>
                        <span class="text-xs">QQ</span>
                    </button>
                    <button onclick="shareManager.shareTemplate(templates.find(t => t.id === ${template.id}), 'weibo'); this.closest('.fixed').remove();" 
                            class="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg">
                        <i class="fab fa-weibo text-red-500 text-2xl mb-1"></i>
                        <span class="text-xs">微博</span>
                    </button>
                    <button onclick="shareManager.shareTemplate(templates.find(t => t.id === ${template.id}), 'douyin'); this.closest('.fixed').remove();" 
                            class="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg">
                        <i class="fab fa-tiktok text-black text-2xl mb-1"></i>
                        <span class="text-xs">抖音</span>
                    </button>
                    <button onclick="shareManager.shareTemplate(templates.find(t => t.id === ${template.id}), 'xiaohongshu'); this.closest('.fixed').remove();" 
                            class="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg">
                        <i class="fas fa-book text-red-600 text-2xl mb-1"></i>
                        <span class="text-xs">小红书</span>
                    </button>
                    <button onclick="shareManager.shareTemplate(templates.find(t => t.id === ${template.id}), 'copy'); this.closest('.fixed').remove();" 
                            class="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg">
                        <i class="fas fa-link text-gray-600 text-2xl mb-1"></i>
                        <span class="text-xs">复制链接</span>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 记录分享行为
    recordShare(templateId, platform) {
        const timestamp = Date.now();
        
        // 更新总分享数
        this.shareData.totalShares++;
        
        // 更新平台分享数
        if (!this.shareData.platformShares[platform]) {
            this.shareData.platformShares[platform] = 0;
        }
        this.shareData.platformShares[platform]++;
        
        // 更新模板分享数
        if (!this.shareData.templateShares[templateId]) {
            this.shareData.templateShares[templateId] = 0;
        }
        this.shareData.templateShares[templateId]++;
        
        // 添加到历史记录
        this.shareData.shareHistory.push({
            templateId,
            platform,
            timestamp
        });
        
        // 保持历史记录在合理范围内
        if (this.shareData.shareHistory.length > 1000) {
            this.shareData.shareHistory = this.shareData.shareHistory.slice(-500);
        }
        
        this.shareData.lastShare = {
            templateId,
            platform,
            timestamp
        };
        
        this.saveShareData();
        
        // 记录到行为追踪
        if (behaviorTracker) {
            behaviorTracker.trackSocialShare(templateId, platform);
        }
    }

    // 显示提示消息
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg z-50';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // 获取分享统计
    getShareStats() {
        return {
            totalShares: this.shareData.totalShares,
            platformShares: this.shareData.platformShares,
            templateShares: this.shareData.templateShares,
            recentShares: this.shareData.shareHistory.slice(-10)
        };
    }
}

// 全局实例
let behaviorTracker;
let recommendationEngine;
let shareManager;

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 注册Service Worker
    registerServiceWorker();
    
    // 设置PWA安装
    setupPWAInstall();
    
    // 初始化行为追踪和推荐系统
    behaviorTracker = new UserBehaviorTracker();
    recommendationEngine = new RecommendationEngine(behaviorTracker);
    shareManager = new SocialShareManager();
    
    // 初始化应用功能
    renderTemplates();
    renderActivities();
    updateStats();
    renderFestivalCalendar();
    renderContacts();
    renderRecommendations();
    
    // 模拟自动回复
    setInterval(simulateAutoReply, 15000);
    
    // 设置当前分类为全部
    currentCategory = 'all';
    
    // 初始化分类标签
    filterTemplates('all');
    
    // 处理深度链接
    handleDeepLink();
    
    // 页面卸载时结束会话
    window.addEventListener('beforeunload', () => {
        behaviorTracker.endSession();
    });
});

// 处理深度链接
function handleDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const templateId = urlParams.get('template');
    const category = urlParams.get('category');
    const platform = urlParams.get('platform');
    
    // 记录深度链接访问
    if (platform && behaviorTracker) {
        behaviorTracker.trackDeepLinkVisit(platform, templateId, category);
    }
    
    // 如果有模板ID，自动选择该模板
    if (templateId) {
        const template = templates.find(t => t.id === parseInt(templateId));
        if (template) {
            setTimeout(() => {
                selectTemplate(parseInt(templateId));
                
                // 如果有分类，先筛选到该分类
                if (category && category !== currentCategory) {
                    filterTemplates(category);
                    setTimeout(() => {
                        selectTemplate(parseInt(templateId));
                        // 滚动到预览区域
                        const previewSection = document.getElementById('previewSection');
                        if (previewSection) {
                            previewSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 500);
                } else {
                    // 滚动到预览区域
                    const previewSection = document.getElementById('previewSection');
                    if (previewSection) {
                        previewSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                
                // 显示访问提示
                if (platform) {
                    showDeepLinkWelcome(platform, template);
                }
            }, 1000);
        }
    } else if (category) {
        // 如果只有分类，筛选到该分类
        filterTemplates(category);
    }
}

// 显示深度链接欢迎提示
function showDeepLinkWelcome(platform, template) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm';
    welcomeDiv.innerHTML = `
        <div class="flex items-start space-x-3">
            <i class="fas fa-external-link-alt text-xl mt-1"></i>
            <div>
                <p class="font-medium">来自${getPlatformName(platform)}的分享</p>
                <p class="text-sm opacity-90">${template.emoji} ${template.name}</p>
            </div>
        </div>
    `;
    document.body.appendChild(welcomeDiv);
    
    setTimeout(() => {
        welcomeDiv.remove();
    }, 5000);
}

// 获取平台名称
function getPlatformName(platform) {
    const platformNames = {
        wechat: '微信',
        qq: 'QQ',
        weibo: '微博',
        douyin: '抖音',
        xiaohongshu: '小红书',
        copy: '链接复制',
        native: '系统分享'
    };
    return platformNames[platform] || platform;
}
