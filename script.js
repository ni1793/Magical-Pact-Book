const RELIGIONS = [
    {
        id: 'folk',
        name: '臺灣民間信仰',
        title: '萬靈共生之守護者',
        color: 'from-rose-400 via-pink-400 to-orange-400',
        accent: 'text-rose-600',
        icon: 'flame',
        stats: [{ label: '感應', value: 95 }, { label: '守護', value: 100 }, { label: '福報', value: 88 }],
        relic: { name: '新月聖筊', desc: '溝通神意的媒介，能強行修改「機率」走向。' },
        domain: { name: '五營結界', desc: '召喚神將鎮守東南西北中，範圍內免疫一切外邪干擾。' },
        incantation: '「心誠則靈，感應道交；境主護持，萬禍皆消。」',
        passive: '【地脈庇佑】：處於本土環境時，獲得「環境友軍」屬性，社交與運氣獲得 50% 修正。',
        activeSkills: [
            { name: '博杯神示', desc: '若擲出聖筊，下一回合所有判定皆為「大成功」。' },
            { name: '收驚回魂', desc: '移除目標所有的負面狀態，並恢復 20% 精神力。' },
            { name: '香火加持', desc: '消耗信仰值提升全隊護甲，並附加「暖陽」光環。' }
        ],
        groupSkill: { name: '遶境出巡', desc: '多人連攜技。大範圍驅逐負能量，並使範圍內所有友軍獲得「神威」狀態。' },
        philosophy: '心誠則靈，有拜有保庇'
    },
    {
        id: 'buddhism',
        name: '正信佛教',
        title: '大覺悟之般若少女',
        color: 'from-amber-300 via-yellow-400 to-orange-500',
        accent: 'text-amber-800',
        icon: 'sun',
        stats: [{ label: '智慧', value: 100 }, { label: '悲憫', value: 98 }, { label: '解脫', value: 92 }],
        relic: { name: '摩尼珠串', desc: '記錄每一粒念珠的功德，轉動時釋放強大「定力」。' },
        domain: { name: '清淨蘭若', desc: '展開一個絕對寂靜的領域，在此區域無法觸發戰鬥行為。' },
        incantation: '「揭諦揭諦，波羅揭諦，波羅僧揭諦，菩提薩婆訶。」',
        passive: '【三學加持】：常駐「戒定慧」防禦，對精神污染與情緒誘導具有 80% 抗性。',
        activeSkills: [
            { name: '正念暫停', desc: '瞬間抽離情緒糾結，時鐘暫停 3 秒進行冷靜決策。' },
            { name: '慈悲攝受', desc: '將敵意轉化為中性能量，讓敵對目標暫時喪失鬥志。' },
            { name: '般若迴向', desc: '將累積的負能量轉化為功德，回饋給周遭友軍。' }
        ],
        groupSkill: { name: '萬佛共鳴', desc: '集體詠唱真言。產生高頻震盪，粉碎虛妄幻覺與結界。' },
        philosophy: '轉煩惱為菩提'
    },
    {
        id: 'taoism',
        name: '正統道教',
        title: '玄門法教之神諭者',
        color: 'from-slate-700 via-indigo-600 to-purple-800',
        accent: 'text-indigo-400',
        icon: 'moon',
        stats: [{ label: '法力', value: 96 }, { label: '調和', value: 100 }, { label: '長生', value: 90 }],
        relic: { name: '七星法劍', desc: '引星辰之力，斬斷目標與負面因果的連結。' },
        domain: { name: '洞天福地', desc: '創造異空間，此區域內的時間流動比外界緩慢。' },
        incantation: '「玉清有命，告下三元；萬神聽令，速降壇前。」',
        passive: '【天人合一】：自動偵測環境中的「氣」流，預知 2 秒後的物理軌跡。',
        activeSkills: [
            { name: '雷法敕令', desc: '召喚神霄五雷，對邪魅屬性敵人造成 300% 暴擊傷害。' },
            { name: '太極導引', desc: '反彈遠程攻擊，將其動能轉化為自身法力。' },
            { name: '符咒奧義', desc: '消耗符紙施展多變技能：定身、隱蹤或神行。' }
        ],
        groupSkill: { name: '羅天大醮', desc: '大型科儀儀式。重置區域內的「運氣值」分布，轉凶為吉。' },
        philosophy: '我命由我不由天'
    },
    {
        id: 'christianity',
        name: '基督新教',
        title: '聖約恩典之光少女',
        color: 'from-sky-300 via-blue-400 to-indigo-500',
        accent: 'text-blue-700',
        icon: 'cross',
        stats: [{ label: '信靠', value: 100 }, { label: '感召', value: 94 }, { label: '連動', value: 98 }],
        relic: { name: '真理之劍 (聖經)', desc: '神之話語的結晶，能切開任何謊言與幻象。' },
        domain: { name: '至聖所', desc: '展開平安領域，此範圍內所有負面 Debuff 無效。' },
        incantation: '「萬軍之耶和華說：不是倚靠勢力，而是倚靠我的靈。」',
        passive: '【聖靈果子】：情緒穩定度恆定在最高值，自動治癒周遭友軍的憂鬱狀態。',
        activeSkills: [
            { name: '恆切禱告', desc: '連結高維度權限，獲取瞬間的「奇蹟」介入。' },
            { name: '讚美權能', desc: '透過歌聲擊碎敵人的精神防線，強化全隊鬥志。' },
            { name: '按手醫治', desc: '接觸式回復技能，能修復受傷的靈體與肉體。' }
        ],
        groupSkill: { name: '團契祭壇', desc: '兩人以上奉名聚集，產生雙倍靈力回饋並共享生命值。' },
        philosophy: '在愛中得著自由'
    },
    {
        id: 'catholicism',
        name: '天主教',
        title: '聖事聖殿之詠唱者',
        color: 'from-indigo-100 via-purple-200 to-indigo-300',
        accent: 'text-indigo-800',
        icon: 'shield-check',
        stats: [{ label: '恩典', value: 97 }, { label: '傳承', value: 100 }, { label: '聖化', value: 95 }],
        relic: { name: '聖體光座', desc: '散發純淨聖光，對陰影屬性敵人造成持續灼燒。' },
        domain: { name: '大聖堂', desc: '召喚宏偉幻影，區域內所有治療效果提升 200%。' },
        incantation: '「因父、及子、及聖神之名。阿們。」',
        passive: '【諸聖相通】：隨機借用歷代聖徒的專屬天賦加持，每場戰鬥切換一次。',
        activeSkills: [
            { name: '領受聖體', desc: '瞬間獲得飽足感與能量，提升全屬性 30%。' },
            { name: '告解赦罪', desc: '重置技能冷卻時間，並移除靈魂上的汙點標記。' },
            { name: '玫瑰念禱', desc: '展開層疊護盾，可抵擋數次高強度物理衝擊。' }
        ],
        groupSkill: { name: '普世共融彌撒', desc: '召喚聖徒虛影進行聯合打擊，具有神聖裁決屬性。' },
        philosophy: '天主是愛，主內一家'
    },
    {
        id: 'ikuan',
        name: '一貫道',
        title: '三寶心法之導引者',
        color: 'from-emerald-300 via-teal-400 to-cyan-500',
        accent: 'text-teal-800',
        icon: 'flower-2',
        stats: [{ label: '修身', value: 100 }, { label: '凝聚', value: 96 }, { label: '齋修', value: 92 }],
        relic: { name: '母燈神火', desc: '象徵本性的燈火，能照亮目標隱藏的弱點。' },
        domain: { name: '法船啟航', desc: '將地面化為金色光場，區域內隊友獲得「輕盈」屬性。' },
        incantation: '「玄關竅開，真靈歸位；慈悲願力，化解冤親。」',
        passive: '【清口茹素】：身心對毒素與詛咒具有天然免疫力，氣場純淨度最高。',
        activeSkills: [
            { name: '三寶心法', desc: '在危急時刻啟動，可抵消一次致死傷害。' },
            { name: '叩首禮佛', desc: '透過禮拜動作消除業力，減輕目標身上的因果重荷。' },
            { name: '指點迷津', desc: '輔助技。大幅提升隊友下一次技能的命中率。' }
        ],
        groupSkill: { name: '三曹普度', desc: '大型救贖儀式。感化靈體，將敵人轉化為非戰鬥單位。' },
        philosophy: '己立立人，世界大同'
    },
    {
        id: 'newage',
        name: '身心靈流派',
        title: '星際覺醒之靈癒者',
        color: 'from-indigo-400 via-purple-400 to-fuchsia-400',
        accent: 'text-purple-700',
        icon: 'sparkles',
        stats: [{ label: '頻率', value: 100 }, { label: '顯化', value: 95 }, { label: '覺知', value: 98 }],
        relic: { name: '水晶頌缽', desc: '高頻震盪法器，能強行校準區域內的能量頻率。' },
        domain: { name: '阿卡西圖書館', desc: '讀取宇宙集體潛意識，獲取敵人的戰鬥弱點資料。' },
        incantation: '「我是光，我是愛；宇宙能量，與我同在。」',
        passive: '【高頻共振】：不受低頻情緒影響，自動將周遭的惡意轉化為中性的背景雜訊。',
        activeSkills: [
            { name: '意念顯化', desc: '將強烈的想像具現化，創造出短暫的戰鬥助手。' },
            { name: '脈輪修復', desc: '平衡目標的七個能量中心，瞬間回復生命值與專注力。' },
            { name: '星際連結', desc: '獲取高維度星際家人的支援，獲得短暫的無敵飛行狀態。' }
        ],
        groupSkill: { name: '集體冥想營', desc: '多人合體技。將所有人的意念匯聚成巨大的顯化球，重寫現實狀態。' },
        philosophy: '凡你相信的，必會顯現'
    }
];

const gallery = document.getElementById('gallery');

RELIGIONS.forEach(rel => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper flex-shrink-0 w-[300px] h-[540px] snap-center perspective-2000 py-4';
    
    cardWrapper.innerHTML = `
        <div class="card-container w-full h-full cursor-pointer rounded-[2.5rem]">
            <!-- 正面 -->
            <div class="card-face card-front bg-gradient-to-br ${rel.color} p-[2px] shadow-lg">
                <div class="w-full h-full bg-white/95 rounded-[2.4rem] flex flex-col overflow-hidden">
                    <div class="h-[60%] w-full bg-gradient-to-br ${rel.color} flex flex-col items-center justify-center p-6 relative">
                        <div class="absolute inset-0 bg-black/5 opacity-10"></div>
                        <div class="absolute w-44 h-44 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                        <div class="relative z-10 p-5 rounded-full bg-white/90 shadow-xl">
                            <i data-lucide="${rel.icon}" class="${rel.accent} w-12 h-12 stroke-[1.5]"></i>
                        </div>
                        <div class="absolute bottom-6 text-center z-10 w-full px-4">
                            <h2 class="text-2xl font-black text-white drop-shadow-md tracking-tight">${rel.name}</h2>
                            <div class="w-10 h-0.5 bg-white/70 mx-auto mt-2 rounded-full"></div>
                        </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col justify-between items-center text-center">
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Contractor Class</p>
                            <p class="text-xs font-bold ${rel.accent}">${rel.title}</p>
                        </div>
                        <div class="w-full grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                            ${rel.stats.map(s => `
                                <div>
                                    <div class="text-[8px] text-slate-400 font-bold uppercase mb-0.5">${s.label}</div>
                                    <div class="text-sm font-black ${rel.accent}">${s.value}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="mt-2 flex items-center gap-2 text-[8px] font-black text-slate-300 tracking-widest">
                            <i data-lucide="info" class="w-3 h-3"></i> 點擊展開詳情
                        </div>
                    </div>
                </div>
            </div>

            <!-- 背面 -->
            <div class="card-face card-back bg-white p-[2px] shadow-xl border border-slate-100">
                <div class="scroll-content no-scrollbar bg-gradient-to-b from-white to-slate-50 rounded-[2.4rem] p-5">
                    <div class="flex items-center gap-3 mb-4 shrink-0 pb-3 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
                        <i data-lucide="${rel.icon}" class="${rel.accent} w-5 h-5"></i>
                        <h3 class="text-sm font-black text-slate-700">${rel.name} 詳解</h3>
                    </div>

                    <div class="mb-5 p-4 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 shadow-inner relative italic overflow-hidden">
                        <div class="absolute -right-2 -bottom-2 opacity-5 ${rel.accent}">
                            <i data-lucide="sparkle" class="w-12 h-12"></i>
                        </div>
                        <p class="text-[11px] text-slate-700 font-bold leading-relaxed text-center relative z-10 incantation-shadow">
                            ${rel.incantation}
                        </p>
                    </div>

                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                                <div class="text-[8px] font-black text-slate-400 uppercase mb-1 flex items-center gap-1">
                                    <i data-lucide="sword" class="w-2.5 h-2.5"></i> 法器
                                </div>
                                <div class="text-[10px] font-bold ${rel.accent}">${rel.relic.name}</div>
                            </div>
                            <div class="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                                <div class="text-[8px] font-black text-slate-400 uppercase mb-1 flex items-center gap-1">
                                    <i data-lucide="map" class="w-2.5 h-2.5"></i> 場域
                                </div>
                                <div class="text-[10px] font-bold ${rel.accent}">${rel.domain.name}</div>
                            </div>
                        </div>

                        <div>
                            <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                <i data-lucide="shield" class="w-2.5 h-2.5"></i> 被動加護
                            </h4>
                            <p class="text-[10px] text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100 shadow-sm italic">
                                ${rel.passive}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                <i data-lucide="zap" class="w-2.5 h-2.5"></i> 核心技能
                            </h4>
                            ${rel.activeSkills.map(s => `
                                <div class="bg-white/80 p-3 rounded-xl border border-slate-100 shadow-sm">
                                    <div class="text-[10px] font-black ${rel.accent} mb-0.5">${s.name}</div>
                                    <p class="text-[9px] text-slate-500 leading-tight">${s.desc}</p>
                                </div>
                            `).join('')}
                        </div>

                        <div class="pt-2 border-t border-slate-100 pb-4">
                            <div class="bg-indigo-50 p-3 rounded-xl border border-indigo-100/50 shadow-sm">
                                <div class="text-[9px] font-black text-indigo-700 mb-1 flex items-center gap-1.5 uppercase">
                                    <i data-lucide="users" class="w-3 h-3"></i> ${rel.groupSkill.name} (連攜技)
                                </div>
                                <p class="text-[9px] text-indigo-600/80 leading-snug font-medium">${rel.groupSkill.desc}</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 flex justify-center pb-6">
                        <div class="px-4 py-1.5 bg-slate-800 rounded-full text-white text-[9px] font-black tracking-widest shadow-md">
                            ${rel.philosophy}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const container = cardWrapper.querySelector('.card-container');

    let startY = 0;
    let startX = 0;
    let isMoving = false;

    container.addEventListener('touchstart', (e) => {
        startY = e.touches[0].pageY;
        startX = e.touches[0].pageX;
        isMoving = false;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        const moveY = Math.abs(e.touches[0].pageY - startY);
        const moveX = Math.abs(e.touches[0].pageX - startX);
        if (moveY > 10 || moveX > 10) isMoving = true;
    }, { passive: true });

    container.addEventListener('click', (e) => {
        if (isMoving) return;
        
        const isFlipped = container.classList.toggle('rotate-y-180');
        // 同步 wrapper 的狀態，讓 CSS 能調整外部高度
        cardWrapper.classList.toggle('is-flipped', isFlipped);
    });

    gallery.appendChild(cardWrapper);
});

window.onload = () => lucide.createIcons();