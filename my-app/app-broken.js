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
        content: "🎆 元旦快乐！新的一年，新的开始，愿您梦想成真，前程似锦！",
        emoji: "🎆",
        usage: 89
    },
    {
        id: 5,
        name: "中秋祝福1",
        category: "midautumn",
        content: "🥮 中秋佳节，月圆人团圆！祝您中秋快乐，阖家幸福，事事圆满！",
        emoji: "🥮",
        usage: 76
    },
    {
        id: 6,
        name: "中秋祝福2",
        category: "midautumn",
        content: "🌕 月圆人圆事事圆！祝您中秋愉快，身体健康，工作顺利！",
        emoji: "🌕",
        usage: 65
    },
    {
        id: 7,
        name: "国庆祝福",
        category: "national",
        content: "🇨🇳 国庆快乐！祝愿祖国繁荣昌盛，祝您节日愉快，万事如意！",
        emoji: "🇨🇳",
        usage: 94
    },
    {
        id: 8,
        name: "圣诞祝福",
        category: "christmas",
        content: "🎄 圣诞快乐！愿您拥有一个温馨美好的圣诞节，幸福满满！",
        emoji: "🎄",
        usage: 58
    },
    {
        id: 9,
        name: "生日祝福1",
        category: "birthday",
        content: "🎂 生日快乐！祝您生日快乐，年年有今日，岁岁有今朝！",
        emoji: "🎂",
        usage: 112
    },
    {
        id: 10,
        name: "生日祝福2",
        category: "birthday",
        content: "🎉 生日快乐！愿您每一天都充满阳光和欢笑，梦想成真！",
        emoji: "🎉",
        usage: 98
    },
    {
        id: 11,
        name: "通用祝福",
        category: "custom",
        content: "✨ 祝您天天开心，事事顺利，身体健康，心想事成！",
        emoji: "✨",
        usage: 45
    },
    {
        id: 12,
        name: "感谢祝福",
        category: "custom",
        content: "🙏 感谢您的祝福！也祝您一切顺利，幸福安康！",
        emoji: "🙏",
        usage: 67
    },
    {
        id: 13,
        name: "宋词·春节",
        category: "poetry",
        content: "🏮《蝶恋花·新春》\n爆竹声中辞旧岁，\n梅花香里迎新春。\n千门万户曈曈日，\n总把新桃换旧符。\n\n愿君岁岁有今朝，\n福满门庭春满堂。\n财源滚滚随春到，\n万事如意步步高。",
        emoji: "🏮",
        usage: 45
    },
    {
        id: 14,
        name: "宋词·元宵",
        category: "poetry",
        content: "🎑《青玉案·元夕》\n东风夜放花千树，\n更吹落、星如雨。\n宝马雕车香满路。\n凤箫声动，玉壶光转，\n一夜鱼龙舞。\n\n愿君元宵佳节乐，\n月圆人圆事事圆。\n灯火辉煌照前程，\n幸福安康伴年年。",
        emoji: "🎑",
        usage: 38
    },
    {
        id: 15,
        name: "宋词·中秋",
        category: "poetry",
        content: "🌕《水调歌头·中秋》\n明月几时有？\n把酒问青天。\n不知天上宫阙，\n今夕是何年。\n\n愿君中秋人团圆，\n月满情满意满圆。\n千里共婵娟此夜，\n福寿安康乐无边。",
        emoji: "🌕",
        usage: 52
    },
    {
        id: 16,
        name: "宋词·重阳",
        category: "poetry",
        content: "🍂《醉花阴·重阳》\n薄雾浓云愁永昼，\n瑞脑消金兽。\n佳节又重阳，\n玉枕纱厨，\n半夜凉初透。\n\n愿君重阳登高乐，\n菊酒飘香福满堂。\n岁岁平安身康健，\n事事如意心舒畅。",
        emoji: "🍂",
        usage: 29
    },
    {
        id: 17,
        name: "宋词·国庆",
        category: "poetry",
        content: "🇨🇳《满江红·国庆》\n华夏巍巍，\n五千年文明古国。\n看今朝，\n江山如画，\n万象更新。\n\n愿祖国繁荣昌盛，\n愿人民幸福安康。\n共庆华诞佳节至，\n同心共筑中国梦。",
        emoji: "🇨🇳",
        usage: 41
    },
    {
        id: 18,
        name: "宋词·元旦",
        category: "poetry",
        content: "🎆《念奴娇·元旦》\n一元复始，\n万象更新时。\n旧岁已辞千里雪，\n新年迎来万木春。\n\n愿君元旦开新局，\n前程似锦步步高。\n梦想成真春风里，\n幸福常伴岁月长。",
        emoji: "🎆",
        usage: 35
    },
    {
        id: 19,
        name: "宋词·圣诞",
        category: "poetry",
        content: "🎄《临江仙·圣诞》\n银装素裹圣诞夜，\n铃儿响叮当。\n雪花飘飘舞翩跹，\n温馨祝福满人间。\n\n愿君圣诞快乐至，\n平安喜乐福满堂。\n友谊如雪花纯洁，\n幸福如歌声悠扬。",
        emoji: "🎄",
        usage: 22
    },
    {
        id: 20,
        name: "宋词·生日",
        category: "poetry",
        content: "🎂《鹧鸪天·生辰》\n生辰今日喜相逢，\n岁月如歌意正浓。\n春风得意马蹄疾，\n一日看尽长安花。\n\n愿君生日快乐至，\n福如东海寿南山。\n年年有此好时节，\n岁岁平安乐无边。",
        emoji: "🎂",
        usage: 48
    },
    {
        id: 21,
        name: "宋词·端午",
        category: "poetry",
        content: "🐉《江城子·端午》\n粽叶飘香端午时，\n龙舟竞渡水云间。\n艾草青青门前挂，\n雄黄酒香满庭芳。\n\n愿君端午安康乐，\n百邪不侵福满堂。\n年年岁岁有今朝，\n岁岁年年皆安康。",
        emoji: "🐉",
        usage: 31
    },
    {
        id: 22,
        name: "宋词·七夕",
        category: "poetry",
        content: "🌟《鹊桥仙·七夕》\n纤云弄巧，\n飞星传恨，\n银汉迢迢暗度。\n金风玉露一相逢，\n便胜却人间无数。\n\n愿君七夕佳节乐，\n情深意浓爱长久。\n牛郎织女今相会，\n有情人儿共白头。",
        emoji: "🌟",
        usage: 26
    },
    {
        id: 23,
        name: "唐诗·春节",
        category: "tang",
        content: "🏮《元日》\n爆竹声中一岁除，\n春风送暖入屠苏。\n千门万户曈曈日，\n总把新桃换旧符。\n\n愿君新年万事兴，\n春风得意马蹄疾。\n岁岁平安福满门，\n年年有余乐无疆。",
        emoji: "🏮",
        usage: 38
    },
    {
        id: 24,
        name: "唐诗·中秋",
        category: "tang",
        content: "🌕《望月怀远》\n海上生明月，\n天涯共此时。\n情人怨遥夜，\n竟夕起相思。\n\n愿君中秋人团圆，\n月圆人圆事事圆。\n千里共婵娟此夜，\n福寿安康乐无边。",
        emoji: "🌕",
        usage: 42
    },
    {
        id: 25,
        name: "唐诗·重阳",
        category: "tang",
        content: "🍂《九月九日忆山东兄弟》\n独在异乡为异客，\n每逢佳节倍思亲。\n遥知兄弟登高处，\n遍插茱萸少一人。\n\n愿君重阳登高乐，\n菊酒飘香福满堂。\n岁岁平安身康健，\n事事如意心舒畅。",
        emoji: "🍂",
        usage: 35
    },
    {
        id: 26,
        name: "唐诗·清明",
        category: "tang",
        content: "🌸《清明》\n清明时节雨纷纷，\n路上行人欲断魂。\n借问酒家何处有，\n牧童遥指杏花村。\n\n愿君清明时节安，\n春暖花开福满门。\n岁岁平安人康健，\n年年如意事顺心。",
        emoji: "🌸",
        usage: 28
    },
    {
        id: 27,
        name: "唐诗·端午",
        category: "tang",
        content: "🐉《端午》\n节分端午自谁言，\n万古传闻为屈原。\n堪笑楚江空渺渺，\n不能洗得直臣冤。\n\n愿君端午安康乐，\n龙舟竞渡福满堂。\n粽叶飘香庆佳节，\n岁岁年年皆安康。",
        emoji: "🐉",
        usage: 31
    },
    {
        id: 28,
        name: "唐诗·七夕",
        category: "tang",
        content: "🌟《秋夕》\n银烛秋光冷画屏，\n轻罗小扇扑流萤。\n天阶夜色凉如水，\n卧看牵牛织女星。\n\n愿君七夕佳节乐，\n情深意浓爱长久。\n牛郎织女今相会，\n有情人儿共白头。",
        emoji: "🌟",
        usage: 24
    },
    {
        id: 29,
        name: "唐诗·生日",
        category: "tang",
        content: "🎂《生日》\n生逢盛世乐无边，\n日暖风和景万千。\n快意人生当此际，\n乐享天伦福满园。\n\n愿君生日快乐至，\n福如东海寿南山。\n年年有此好时节，\n岁岁平安乐无边。",
        emoji: "🎂",
        usage: 45
    },
    {
        id: 30,
        name: "元曲·春节",
        category: "yuan",
        content: "🏮《折桂令·春节》\n爆竹声中旧岁除，\n春风送暖入屠苏。\n千门万户曈曈日，\n总把新桃换旧符。\n\n愿君新年万事兴，\n春风得意马蹄疾。\n岁岁平安福满门，\n年年有余乐无疆。",
        emoji: "🏮",
        usage: 33
    },
    {
        id: 31,
        name: "元曲·中秋",
        category: "yuan",
        content: "🌕《蟾宫曲·中秋》\n一轮明月照天涯，\n万里清辉洒万家。\n嫦娥应悔偷灵药，\n碧海青天夜夜心。\n\n愿君中秋人团圆，\n月圆人圆事事圆。\n千里共婵娟此夜，\n福寿安康乐无边。",
        emoji: "🌕",
        usage: 37
    },
    {
        id: 32,
        name: "元曲·重阳",
        category: "yuan",
        content: "🍂《山坡羊·重阳》\n重阳佳节，\n登高望远，\n菊花满地黄金甲。\n雁南飞，\n人思归。\n\n愿君重阳登高乐，\n菊酒飘香福满堂。\n岁岁平安身康健，\n事事如意心舒畅。",
        emoji: "🍂",
        usage: 29
    },
    {
        id: 33,
        name: "元曲·清明",
        category: "yuan",
        content: "🌸《天净沙·清明》\n清明时节雨纷纷，\n路上行人欲断魂。\n借问酒家何处有，\n牧童遥指杏花村。\n\n愿君清明时节安，\n春暖花开福满门。\n岁岁平安人康健，\n年年如意事顺心。",
        emoji: "🌸",
        usage: 25
    },
    {
        id: 34,
        name: "元曲·端午",
        category: "yuan",
        content: "🐉《水仙子·端午》\n龙舟竞渡水云间，\n粽叶飘香五月天。\n艾草青青门前挂，\n雄黄酒香满庭芳。\n\n愿君端午安康乐，\n百邪不侵福满堂。\n年年岁岁有今朝，\n岁岁年年皆安康。",
        emoji: "🐉",
        usage: 27
    },
    {
        id: 35,
        name: "元曲·七夕",
        category: "yuan",
        content: "🌟《沉醉东风·七夕》\n银烛秋光冷画屏，\n轻罗小扇扑流萤。\n天阶夜色凉如水，\n卧看牵牛织女星。\n\n愿君七夕佳节乐，\n情深意浓爱长久。\n牛郎织女今相会，\n有情人儿共白头。",
        emoji: "🌟",
        usage: 22
    },
    {
        id: 36,
        name: "元曲·生日",
        category: "yuan",
        content: "🎂《庆东原·生辰》\n生逢盛世乐无边，\n日暖风和景万千。\n快意人生当此际，\n乐享天伦福满园。\n\n愿君生日快乐至，\n福如东海寿南山。\n年年有此好时节，\n岁岁平安乐无边。",
        emoji: "🎂",
        usage: 40
    },
    {
        id: 37,
        name: "近代诗·春节",
        category: "modern",
        content: "🏮《春节的早晨》\n爆竹声声辞旧岁，\n梅花点点报新春。\n千家万户团圆日，\n四海同庆中国年。\n\n愿你在新的一年里，\n如春风般温暖，\n如梅花般坚强，\n如爆竹般响亮。\n新年快乐，万事如意！",
        emoji: "🏮",
        usage: 35
    },
    {
        id: 38,
        name: "近代诗·中秋",
        category: "modern",
        content: "🌕《中秋月夜》\n月光如水洒人间，\n桂花香里说丰年。\n举杯邀月同团圆，\n天涯此时共婵娟。\n\n愿这轮明月，\n照亮你前行的路，\n愿这缕桂香，\n芬芳你美好的梦。\n中秋快乐，阖家幸福！",
        emoji: "🌕",
        usage: 38
    },
    {
        id: 39,
        name: "近代诗·国庆",
        category: "modern",
        content: "🇨🇳《国庆颂》\n五星红旗迎风展，\n华夏儿女心相连。\n七十载风雨兼程，\n新时代再谱新篇。\n\n愿祖国繁荣昌盛，\n愿人民幸福安康，\n愿这盛世如你所愿，\n愿这明天更加辉煌。\n国庆快乐！",
        emoji: "🇨🇳",
        usage: 32
    },
    {
        id: 40,
        name: "近代诗·端午",
        category: "modern",
        content: "🐉《端午情怀》\n龙舟竞渡汨罗江，\n粽叶飘香思屈原。\n千年传承爱国志，\n今朝更展新篇章。\n\n愿你在端午佳节，\n如龙舟般勇往直前，\n如粽子般内涵丰富，\n如屈原般品格高洁。\n端午安康！",
        emoji: "🐉",
        usage: 29
    },
    {
        id: 41,
        name: "近代诗·清明",
        category: "modern",
        content: "🌸《清明时节》\n细雨纷纷润大地，\n春风阵阵拂柳丝。\n踏青祭祖思先人，\n珍惜当下正当时。\n\n愿清明的小雨，\n洗净你心中的尘埃，\n愿春天的花朵，\n绽放你生命的精彩。\n清明安康！",
        emoji: "🌸",
        usage: 26
    },
    {
        id: 42,
        name: "近代诗·七夕",
        category: "modern",
        content: "🌟《七夕夜话》\n银汉迢迢隔两岸，\n牛郎织女盼团圆。\n一年一度鹊桥会，\n千古爱情美名传。\n\n愿你的爱情，\n如牛郎织女般坚贞，\n愿你的生活，\n如鹊桥相会般甜蜜。\n七夕快乐！",
        emoji: "🌟",
        usage: 24
    },
    {
        id: 43,
        name: "近代诗·生日",
        category: "modern",
        content: "🎂《生日祝福》\n蜡烛点亮新岁月，\n歌声唱响美好愿。\n朋友相聚庆生辰，\n幸福快乐到永远。\n\n愿你在生日这天，\n收获满满的祝福，\n愿你在新的一年，\n实现所有的梦想。\n生日快乐！",
        emoji: "🎂",
        usage: 41
    },
    {
        id: 44,
        name: "现代诗·春节",
        category: "contemporary",
        content: "🏮《新年的味道》\n爆竹在夜空中绽放，\n像一朵朵盛开的花。\n春联贴上门楣，\n红得像火，暖得像家。\n\n新年的味道，\n是妈妈包的饺子香，\n是爸爸放的鞭炮响，\n是孩子们脸上的笑。\n\n愿你的新年，\n有家的温暖，\n有爱的味道，\n有梦的翅膀。\n新年快乐！",
        emoji: "🏮",
        usage: 33
    },
    {
        id: 45,
        name: "现代诗·中秋",
        category: "contemporary",
        content: "🌕《月亮的告白》\n今夜的月亮，\n比任何时候都圆，\n像妈妈的脸，\n温柔地看着远方。\n\n月光洒在窗台，\n像一封封信，\n写着思念，\n写着团圆。\n\n中秋的月亮，\n是天上的眼睛，\n看着我们，\n看着家的方向。\n\n愿月光带去我的祝福，\n愿月饼带去我的思念，\n愿这美好的夜晚，\n带给你无尽的温暖。\n中秋快乐！",
        emoji: "🌕",
        usage: 36
    },
    {
        id: 46,
        name: "现代诗·国庆",
        category: "contemporary",
        content: "🇨🇳《我的中国心》\n红旗飘扬在风中，\n像一团燃烧的火。\n国歌响彻云霄，\n像一声声呐喊。\n\n这是我的祖国，\n这是我生长的地方，\n这是我的根，\n这是我的魂。\n\n国庆的日子里，\n我想对你说：\n我爱你，中国！\n愿你永远年轻，\n愿你永远强大！\n国庆快乐！",
        emoji: "🇨🇳",
        usage: 30
    },
    {
        id: 47,
        name: "现代诗·端午",
        category: "contemporary",
        content: "🐉《龙舟竞渡》\n龙舟在水面上飞驰，\n像一条条巨龙。\n鼓声震天响，\n像心跳的声音。\n\n端午的早晨，\n空气中弥漫着粽香，\n那是妈妈的味道，\n那是家的味道。\n\n我们在河边看龙舟，\n我们在家里吃粽子，\n我们在心中想屈原，\n我们在梦里追理想。\n\n愿端午的鼓声，\n激励你前进，\n愿端午的粽香，\n温暖你心房。\n端午安康！",
        emoji: "🐉",
        usage: 28
    },
    {
        id: 48,
        name: "现代诗·清明",
        category: "contemporary",
        content: "🌸《春天的思念》\n清明的雨，\n细细地下着，\n像天空的眼泪，\n像大地的思念。\n\n我们在墓前献花，\n我们在心中祈祷，\n我们怀念过去，\n我们珍惜现在。\n\n清明是一个节日，\n也是一种情怀，\n它让我们记住根，\n它让我们懂得爱。\n\n愿清明的雨，\n洗净你的烦恼，\n愿清明的风，\n吹走你的忧愁。\n愿你在春天里，\n如花朵般绽放！\n清明安康！",
        emoji: "🌸",
        usage: 25
    },
    {
        id: 49,
        name: "现代诗·七夕",
        category: "contemporary",
        content: "🌟《星空下的约定》\n今夜的星空，\n比任何时候都美，\n因为牛郎织女，\n要在鹊桥相会。\n\n我们仰望着星空，\n寻找着那两颗星，\n它们在银河两岸，\n诉说着千年的爱情。\n\n七夕的夜晚，\n是属于爱情的夜晚，\n是属于浪漫的夜晚，\n是属于梦想的夜晚。\n\n愿你的爱情，\n如星空般璀璨，\n愿你的生活，\n如银河般宽广。\n愿你在七夕夜，\n找到属于自己的那颗星！\n七夕快乐！",
        emoji: "🌟",
        usage: 23
    },
    {
        id: 50,
        name: "现代诗·生日",
        category: "contemporary",
        content: "🎂《生命的礼赞》\n生日是一首歌，\n唱着生命的美好，\n生日是一首诗，\n写着生活的精彩。\n\n蜡烛一根根点燃，\n像一个个愿望，\n祝福一句句说出，\n像一朵朵花开。\n\n今天你是主角，\n今天你是明星，\n今天所有的美好，\n都为你而来。\n\n愿你的生日，\n如诗般美丽，\n如歌般动听，\n如画般精彩。\n愿你的每一天，\n都充满阳光和欢笑！\n生日快乐！",
        emoji: "🎂",
        usage: 39
    },
    {
        id: 51,
        name: "宋词·五一",
        category: "poetry",
        content: "🔨《满江红·劳动节》\n劳动创造世界，\n汗水浇灌希望。\n工人阶级力量大，\n建设祖国新篇章。\n\n愿君劳动节快乐，\n工作顺利事业兴。\n身体健康精神好，\n家庭幸福乐融融。",
        emoji: "🔨",
        usage: 28
    },
    {
        id: 52,
        name: "唐诗·五一",
        category: "tang",
        content: "🔨《劳动节》\n锄禾日当午，\n汗滴禾下土。\n谁知盘中餐，\n粒粒皆辛苦。\n\n愿君劳动节快乐，\n辛勤耕耘有收获。\n岁岁平安身康健，\n年年有余福满门。",
        emoji: "🔨",
        usage: 32
    },
    {
        id: 53,
        name: "元曲·五一",
        category: "yuan",
        content: "🔨《山坡羊·劳动节》\n劳动最光荣，\n创造价值大。\n工人农民齐努力，\n建设国家美如画。\n\n愿君劳动节快乐，\n工作顺心事业兴。\n身体健康精神好，\n家庭幸福乐融融。",
        emoji: "🔨",
        usage: 26
    },
    {
        id: 54,
        name: "近代诗·五一",
        category: "modern",
        content: "🔨《劳动赞歌》\n劳动创造财富，\n汗水浇灌希望。\n工人阶级力量大，\n建设祖国新篇章。\n\n愿你在劳动节，\n感受劳动的光荣，\n享受创造的快乐，\n收获成功的喜悦。\n五一劳动节快乐！",
        emoji: "🔨",
        usage: 30
    },
    {
        id: 55,
        name: "现代诗·五一",
        category: "contemporary",
        content: "🔨《致敬劳动者》\n每一滴汗水，\n都是希望的种子，\n每一次努力，\n都是梦想的翅膀。\n\n劳动节的日子里，\n我们要感谢，\n感谢那些默默付出的人，\n感谢那些辛勤劳动的手。\n\n愿你的劳动，\n都有收获，\n愿你的付出，\n都有回报。\n愿你在劳动中，\n找到快乐，\n在创造中，\n实现价值。\n五一劳动节快乐！",
        emoji: "🔨",
        usage: 34
    },
    {
        id: 56,
        name: "现代祝福·五一",
        category: "custom",
        content: "🔨 五一劳动节快乐！感谢你的辛勤付出和无私奉献！愿你在这个特别的日子里好好休息，享受属于自己的时光。工作顺利，身体健康，生活美满！",
        emoji: "🔨",
        usage: 45
    },
    {
        id: 57,
        name: "除夕祝福",
        category: "custom",
        content: "🧨 除夕快乐！阖家团圆，共度良宵！愿你在新的一年里身体健康，工作顺利，家庭幸福，万事如意！",
        emoji: "🧨",
        usage: 38
    },
    {
        id: 58,
        name: "腊八祝福",
        category: "custom",
        content: "🍲 腊八节快乐！一碗腊八粥，温暖你我心！愿这碗香甜的腊八粥带给你健康、平安和幸福！",
        emoji: "🍲",
        usage: 25
    },
    {
        id: 59,
        name: "小年祝福",
        category: "custom",
        content: "🧹 小年快乐！扫尘除旧，迎新接福！愿小年的钟声带走你一年的疲惫，带来新春的希望和喜悦！",
        emoji: "🧹",
        usage: 22
    },
    {
        id: 60,
        name: "腊八·唐诗",
        category: "tang",
        content: "🍲《腊八》\n腊八粥香飘满屋，\n寒冬暖意入心田。\n传统佳节今又至，\n祈福纳祥庆丰年。\n\n愿君腊八安康乐，\n粥暖情深福满堂。\n岁岁平安人康健，\n年年如意事顺心。",
        emoji: "🍲",
        usage: 18
    },
    {
        id: 61,
        name: "除夕·宋词",
        category: "poetry",
        content: "🧨《蝶恋花·除夕》\n爆竹声中辞旧岁，\n梅花香里迎新春。\n千家万户团圆夜，\n共话当年忆往昔。\n\n愿君除夕合家欢，\n守岁迎新福满门。\n旧岁已展千重锦，\n新年再进百尺竿。",
        emoji: "🧨",
        usage: 32
    },
    {
        id: 62,
        name: "小年·现代诗",
        category: "contemporary",
        content: "🧹《小年的味道》\n小年的早晨，\n空气中弥漫着\n扫尘的味道，\n那是迎接新年的味道。\n\n我们在打扫房间，\n也在打扫心灵，\n把旧的烦恼扫走，\n把新的希望请进来。\n\n小年的钟声，\n是新年的前奏，\n是团圆的序曲，\n是幸福的开始。\n\n愿小年的烟火，\n照亮你的前程，\n愿小年的祝福，\n温暖你的心房。\n小年快乐！",
        emoji: "🧹",
        usage: 20
    },
    {
        id: 63,
        name: "六一儿童节祝福",
        category: "custom",
        content: "🎈 六一儿童节快乐！愿所有的小朋友都能健康快乐地成长，保持童心，追逐梦想！也愿大朋友们永远保持一颗年轻的心！",
        emoji: "🎈",
        usage: 35
    },
    {
        id: 64,
        name: "母亲节祝福",
        category: "custom",
        content: "🌹 母亲节快乐！感谢妈妈无私的爱和辛勤的付出！愿妈妈身体健康，青春永驻，幸福快乐！您是世界上最美的妈妈！",
        emoji: "🌹",
        usage: 48
    },
    {
        id: 65,
        name: "父亲节祝福",
        category: "custom",
        content: "👔 父亲节快乐！感谢爸爸如山一般的爱和默默的守护！愿爸爸身体健康，工作顺利，万事如意！您是我心中最伟大的父亲！",
        emoji: "👔",
        usage: 42
    },
    {
        id: 66,
        name: "六一·现代诗",
        category: "contemporary",
        content: "🎈《童年的梦》\n六一的早晨，\n阳光特别温暖，\n孩子们的笑声，\n像银铃般清脆。\n\n气球飞向天空，\n带着童年的梦想，\n彩旗迎风飘扬，\n装点着节日的欢乐。\n\n童年是一首诗，\n写满了纯真和美好，\n童年是一首歌，\n唱响了快乐和希望。\n\n愿所有的孩子，\n都能拥有美好的童年，\n愿所有的大人，\n都能保持童真的心。\n六一儿童节快乐！",
        emoji: "🎈",
        usage: 28
    },
    {
        id: 67,
        name: "母亲节·现代诗",
        category: "contemporary",
        content: "🌹《母亲的双手》\n母亲的双手，\n虽然不再年轻，\n却依然温暖，\n依然充满力量。\n\n这双手，\n曾经抱过我，\n曾经喂过我，\n曾经为我擦去眼泪。\n\n这双手，\n曾经为我缝补衣服，\n曾经为我准备饭菜，\n曾经为我撑起一片天。\n\n母亲节到了，\n我想对妈妈说：\n谢谢您，妈妈！\n您的爱，\n是我生命中最珍贵的礼物。\n愿岁月温柔待您，\n愿健康快乐伴随您。\n母亲节快乐！",
        emoji: "🌹",
        usage: 38
    },
    {
        id: 68,
        name: "父亲节·现代诗",
        category: "contemporary",
        content: "👔《父亲的肩膀》\n父亲的肩膀，\n虽然不再宽阔，\n却依然坚实，\n依然能扛起责任。\n\n这肩膀，\n曾经让我骑过，\n曾经为我遮风挡雨，\n曾经是我最安全的港湾。\n\n父亲的背影，\n虽然不再挺拔，\n却依然高大，\n依然是我心中的山。\n\n父亲节到了，\n我想对爸爸说：\n谢谢您，爸爸！\n您的爱，\n虽然深沉，\n却是我生命中最坚实的依靠。\n愿时光慢些走，\n愿健康快乐伴随您。\n父亲节快乐！",
        emoji: "👔",
        usage: 35
    },
    {
        id: 69,
        name: "六一·唐诗",
        category: "tang",
        content: "🎈《儿童节》\n儿童六一乐开怀，\n笑语欢声满院来。\n天真烂漫童年趣，\n茁壮成长栋梁材。\n\n愿君儿童节快乐，\n保持童心福满门。\n岁岁平安身康健，\n年年如意事顺心。",
        emoji: "🎈",
        usage: 22
    },
    {
        id: 70,
        name: "母亲节·宋词",
        category: "poetry",
        content: "🌹《蝶恋花·母亲节》\n慈母手中线，\n游子身上衣。\n临行密密缝，\n意恐迟迟归。\n\n愿君母亲节快乐，\n健康长寿福满堂。\n岁岁平安身康健，\n年年如意心舒畅。",
        emoji: "🌹",
        usage: 30
    },
    {
        id: 71,
        name: "父亲节·宋词",
        category: "poetry",
        content: "👔《满江红·父亲节》\n父爱如山，\n深沉厚重。\n默默付出，\n不求回报。\n\n愿君父亲节快乐，\n工作顺利事业兴。\n身体健康精神好，\n家庭幸福乐融融。",
        emoji: "👔",
        usage: 26
    },
    {
        id: 72,
        name: "冬至祝福",
        category: "custom",
        content: "🥟 冬至快乐！冬至大如年，饺子汤圆暖心田！愿你在最长的夜晚里，收获最温暖的祝福，身体健康，阖家幸福！",
        emoji: "🥟",
        usage: 32
    },
    {
        id: 73,
        name: "冬至·唐诗",
        category: "tang",
        content: "🥟《冬至》\n冬至阳生春又来，\n夜长昼短转轮回。\n饺子汤圆庆佳节，\n合家团圆福满门。\n\n愿君冬至安康乐，\n寒尽春归万象新。\n岁岁平安身康健，\n年年如意事顺心。",
        emoji: "🥟",
        usage: 25
    },
    {
        id: 74,
        name: "冬至·宋词",
        category: "poetry",
        content: "🥟《蝶恋花·冬至》\n冬至夜长阳气生，\n寒尽春归万象新。\n家家户户包饺子，\n团团圆圆庆佳节。\n\n愿君冬至合家欢，\n温暖如春福满门。\n岁岁平安身康健，\n年年有余乐融融。",
        emoji: "🥟",
        usage: 28
    },
    {
        id: 75,
        name: "冬至·现代诗",
        category: "contemporary",
        content: "🥟《冬至的温暖》\n冬至的夜晚，\n是一年中最长的夜晚，\n但也是最温暖的夜晚。\n\n因为这一夜，\n有家人的陪伴，\n有饺子的香气，\n有汤圆的甜蜜。\n\n冬至是一个转折点，\n从这一夜开始，\n白天会越来越长，\n阳光会越来越暖。\n\n就像我们的生活，\n经历了最长的黑夜，\n就会迎来最灿烂的黎明。\n\n愿冬至的饺子，\n带给你家的温暖，\n愿冬至的汤圆，\n带给你生活的甜蜜。\n愿这个最长的夜晚，\n给你最甜美的梦。\n冬至快乐！",
        emoji: "🥟",
        usage: 30
    },
    {
        id: 76,
        name: "万圣节祝福",
        category: "custom",
        content: "🎃 万圣节快乐！不给糖就捣蛋！愿你在这个充满魔法和惊喜的夜晚，收获满满的糖果和快乐！Happy Halloween!",
        emoji: "🎃",
        usage: 28
    },
    {
        id: 77,
        name: "复活节祝福",
        category: "custom",
        content: "🐰 复活节快乐！愿彩蛋带给你惊喜，愿小兔子带给你快乐！愿这个充满希望的季节，给你带来新的开始！Happy Easter!",
        emoji: "🐰",
        usage: 24
    },
    {
        id: 78,
        name: "情人节祝福",
        category: "custom",
        content: "💝 情人节快乐！愿爱情像玫瑰花一样美丽，像巧克力一样甜蜜！愿有情人终成眷属，愿爱情甜蜜永恒！Happy Valentine's Day!",
        emoji: "💝",
        usage: 35
    },
    {
        id: 79,
        name: "感恩节祝福",
        category: "custom",
        content: "🦃 感恩节快乐！感谢生命中所有的美好和遇见！愿你心怀感恩，幸福常伴！Happy Thanksgiving!",
        emoji: "🦃",
        usage: 22
    },
    {
        id: 80,
        name: "万圣节·现代诗",
        category: "contemporary",
        content: "🎃《万圣节的魔法》\n万圣节的夜晚，\n是一个充满魔法的夜晚，\n南瓜灯在微笑，\n小幽灵在舞蹈。\n\n孩子们穿着奇装异服，\n挨家挨户要糖果，\n\"不给糖就捣蛋！\"\n是今晚最动听的歌谣。\n\n万圣节是一个游戏，\n一个关于勇气和想象的游戏，\n在这一夜，\n我们可以成为任何人。\n\n愿万圣节的魔法，\n带给你无限的想象，\n愿万圣节的糖果，\n带给你甜蜜的快乐。\n愿这个神奇的夜晚，\n给你最美的童年回忆。\n万圣节快乐！",
        emoji: "🎃",
        usage: 26
    },
    {
        id: 81,
        name: "复活节·现代诗",
        category: "contemporary",
        content: "🐰《春天的约定》\n复活节的早晨，\n阳光特别温柔，\n小兔子在草地上跳跃，\n彩蛋在花丛中躲藏。\n\n这是一个关于重生的故事，\n这是一个关于希望的传说，\n在春天最美的季节里，\n生命重新开始。\n\n复活节是一个约定，\n春天与生命的约定，\n就像彩虹与雨后，\n就像黎明与黑夜。\n\n愿复活节的彩蛋，\n带给你惊喜的发现，\n愿复活节的小兔子，\n带给你跳跃的快乐。\n愿这个充满希望的季节，\n给你带来新的开始。\n复活节快乐！",
        emoji: "🐰",
        usage: 23
    },
    {
        id: 82,
        name: "情人节·现代诗",
        category: "contemporary",
        content: "💝《爱情的颜色》\n情人节的天空，\n是粉红色的，\n就像爱情的颜色，\n温柔而甜蜜。\n\n玫瑰花在绽放，\n每一片花瓣都是一句情话，\n巧克力在融化，\n每一丝香甜都是一份爱意。\n\n情人节是一个提醒，\n提醒我们要勇敢地说爱，\n提醒我们要珍惜身边的人，\n提醒我们要用心去感受。\n\n愿你的爱情，\n如玫瑰花般美丽，\n愿你的生活，\n如巧克力般甜蜜。\n愿在这个特别的日子里，\n你收到最美的爱情祝福。\n情人节快乐！",
        emoji: "💝",
        usage: 32
    },
    {
        id: 83,
        name: "万圣节·唐诗",
        category: "tang",
        content: "🎃《万圣节》\n南瓜灯亮夜如昼，\n奇装异服乐悠悠。\n孩童嬉戏要糖果，\n欢声笑语满街游。\n\n愿君万圣节快乐，\n魔法神奇福满门。\n岁岁平安身康健，\n年年如意事顺心。",
        emoji: "🎃",
        usage: 20
    },
    {
        id: 84,
        name: "情人节·宋词",
        category: "poetry",
        content: "💝《蝶恋花·情人节》\n玫瑰花开香满园，\n情深意切两心连。\n甜言蜜语诉衷肠，\n海誓山盟共百年。\n\n愿君情人节快乐，\n爱情甜蜜福满堂。\n岁岁平安身康健，\n年年如意心舒畅。",
        emoji: "💝",
        usage: 28
    }
];

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
        type: "template",
        message: "添加新模板：生日祝福3",
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
    { name: '元旦', date: '2025-01-01', category: 'newyear', emoji: '🎊' },
    { name: '情人节', date: '2024-02-14', category: 'valentine', emoji: '💝' },
    { name: '妇女节', date: '2024-03-08', category: 'custom', emoji: '👩' },
    { name: '劳动节', date: '2024-05-01', category: 'labor', emoji: '🔨' },
    { name: '母亲节', date: '2024-05-12', category: 'mother', emoji: '🌹' },
    { name: '儿童节', date: '2024-06-01', category: 'children', emoji: '🎈' },
    { name: '父亲节', date: '2024-06-16', category: 'father', emoji: '👔' },
    { name: '教师节', date: '2024-09-10', category: 'custom', emoji: '👨‍🏫' }
];

// PWA相关变量
let deferredPrompt = null;
let isPWAInstalled = false;

// 注册Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker 注册成功:', registration);
                
                // 检查更新
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // 有新版本可用
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(error => {
                console.error('Service Worker 注册失败:', error);
            });
    }
}

// 显示更新通知
function showUpdateNotification() {
    if (confirm('发现新版本，是否立即更新？')) {
        window.location.reload();
    }
}

// PWA安装提示
function setupPWAInstall() {
    // 监听beforeinstallprompt事件
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });

    // 监听appinstalled事件
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

// 检查是否在PWA模式下运行
function checkPWAMode() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator.standalone === true);
    const isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);
    
    if (isStandalone || isInWebAppiOS || isInWebAppChrome) {
        console.log('应用在PWA模式下运行');
        document.body.classList.add('pwa-mode');
        return true;
    }
    return false;
}

// 添加PWA模式的CSS样式
function addPWAModeStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .pwa-mode {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
        }
        
        .pwa-mode header {
            padding-top: calc(1.5rem + env(safe-area-inset-top));
        }
        
        @supports (-webkit-touch-callout: none) {
            .pwa-mode {
                -webkit-user-select: none;
                -webkit-tap-highlight-color: transparent;
            }
        }
    `;
    document.head.appendChild(style);
}

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 注册Service Worker
    registerServiceWorker();
    
    // 设置PWA安装
    setupPWAInstall();
    
    // 检查PWA模式
    checkPWAMode();
    
    // 添加PWA样式
    addPWAModeStyles();
    
    // 初始化应用功能
    renderTemplates();
    renderActivities();
    updateStats();
    renderFestivalCalendar();
    renderContacts();
    
    // 模拟自动回复
    setInterval(simulateAutoReply, 15000);
    
    // 检查节日和自动发送
    setInterval(checkFestivalAndSend, 60000); // 每分钟检查一次
    
    // 设置当前分类为全部
    currentCategory = 'all';
});

// 渲染节日日历
function renderFestivalCalendar() {
    const calendar = document.getElementById('festivalCalendar');
    const today = new Date();
    const upcomingFestivals = festivals.filter(f => {
        const festivalDate = new Date(f.date);
        return festivalDate >= today;
    }).slice(0, 9); // 显示接下来的9个节日
    
    calendar.innerHTML = upcomingFestivals.map(festival => `
        <div class="p-2 bg-gray-50 rounded-lg text-center hover:bg-purple-50 transition cursor-pointer" onclick="selectFestival('${festival.category}')">
            <div class="text-lg">${festival.emoji}</div>
            <div class="text-xs font-medium text-gray-800">${festival.name}</div>
            <div class="text-xs text-gray-500">${new Date(festival.date).getMonth() + 1}/${new Date(festival.date).getDate()}</div>
    grid.innerHTML = filteredTemplates.map(template => `
        <div class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer card-hover" onclick="selectTemplate(${template.id})">
            <div class="flex items-start justify-between mb-2">
                <span class="text-2xl">${template.emoji}</span>
                <span class="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">${getCategoryName(template.category)}</span>
            </div>
            <h4 class="font-medium text-gray-800 mb-2">${template.name}</h4>
            <p class="text-sm text-gray-600 mb-3 line-clamp-2">${template.content}</p>
            <div class="flex items-center justify-between text-xs text-gray-500">
                <span><i class="fas fa-chart-line mr-1"></i>使用 ${template.usage} 次</span>
                <button onclick="event.stopPropagation(); editTemplate(${template.id})" class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// 渲染活动记录
function renderActivities() {
    const list = document.getElementById('activityList');
    list.innerHTML = activities.map(activity => `
        <div class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-${getActivityColor(activity.type)}-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i class="fas fa-${getActivityIcon(activity.type)} text-${getActivityColor(activity.type)}-600 text-xs"></i>
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

// 初始化事件监听器
function initializeEventListeners() {
    // 分类标签点击事件
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(t => {
                t.classList.remove('active', 'bg-purple-600', 'text-white');
                t.classList.add('bg-gray-100', 'text-gray-600');
            });
            this.classList.remove('bg-gray-100', 'text-gray-600');
            this.classList.add('active', 'bg-purple-600', 'text-white');
        });
    });
}

// 筛选模板
function filterTemplates(category) {
    currentCategory = category;
    renderTemplates();
}

// 选择模板
function selectTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (template) {
        document.getElementById('previewMessage').textContent = template.content;
        showTypingIndicator();
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

// 获取分类名称
function getCategoryName(category) {
    const names = {
        spring: '春节',
        newyear: '元旦',
        midautumn: '中秋',
        national: '国庆',
        christmas: '圣诞',
        birthday: '生日',
        labor: '五一',
        children: '六一儿童节',
        mother: '母亲节',
        father: '父亲节',
        winter: '冬至',
        halloween: '万圣节',
        easter: '复活节',
        valentine: '情人节',
        thanksgiving: '感恩节',
        custom: '自定义',
        poetry: '宋词',
        tang: '唐诗',
        yuan: '元曲',
        modern: '近代诗',
        contemporary: '现代诗'
    };
    return names[category] || '其他';
}

// 获取活动颜色
function getActivityColor(type) {
    const colors = {
        reply: 'blue',
        template: 'green',
        settings: 'purple'
    };
    return colors[type] || 'gray';
}

// 获取活动图标
function getActivityIcon(type) {
    const icons = {
        reply: 'reply',
        template: 'file-alt',
        settings: 'cog'
    };
    return icons[type] || 'circle';
}

// 切换设置模态框
function toggleSettings() {
    const modal = document.getElementById('settingsModal');
    modal.classList.toggle('hidden');
}

// 添加新模板
function addNewTemplate() {
    document.getElementById('templateModal').classList.remove('hidden');
}

// 关闭模板模态框
function closeTemplateModal() {
    document.getElementById('templateModal').classList.add('hidden');
    // 清空表单
    document.getElementById('templateName').value = '';
    document.getElementById('templateCategory').value = 'spring';
    document.getElementById('templateContent').value = '';
}

// 保存模板
function saveTemplate() {
    const name = document.getElementById('templateName').value;
    const category = document.getElementById('templateCategory').value;
    const content = document.getElementById('templateContent').value;
    
    if (!name || !content) {
        alert('请填写模板名称和内容');
        return;
    }
    
    const newTemplate = {
        id: templates.length + 1,
        name: name,
        category: category,
        content: content,
        emoji: "📝",
        usage: 0
    };
    
    templates.push(newTemplate);
    stats.templateCount = templates.length;
    
    // 添加活动记录
    activities.unshift({
        id: activities.length + 1,
        type: "template",
        message: `添加新模板：${name}`,
        time: "刚刚",
        user: "系统"
    });
    
    renderTemplates();
    renderActivities();
    updateStats();
    closeTemplateModal();
}

// 测试回复
function testReply() {
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    document.getElementById('previewMessage').textContent = randomTemplate.content;
    showTypingIndicator();
    
    // 添加测试活动
    activities.unshift({
        id: activities.length + 1,
        type: "reply",
        message: "测试自动回复功能",
        time: "刚刚",
        user: "测试用户"
    });
    
    stats.todayReplies++;
    renderActivities();
    updateStats();
}

// 导出模板
function exportTemplates() {
    const dataStr = JSON.stringify(templates, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'festival-templates.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// 导入模板
function importTemplates() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = e => { 
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.readAsText(file, 'UTF-8');
        
        reader.onload = readerEvent => {
            try {
                const importedTemplates = JSON.parse(readerEvent.target.result);
                templates.push(...importedTemplates);
                stats.templateCount = templates.length;
                renderTemplates();
                updateStats();
                alert('模板导入成功！');
            } catch (error) {
                alert('导入失败，请检查文件格式');
            }
        }
    }
    
    input.click();
}

// 清空历史
function clearHistory() {
    if (confirm('确定要清空所有活动历史吗？')) {
        activities = [];
        renderActivities();
    }
}

// 保存设置
function saveSettings() {
    const delay = document.getElementById('replyDelay').value;
    const limit = document.getElementById('dailyLimit').value;
    const emoji = document.getElementById('defaultEmoji').value;
    
    // 这里可以保存到 localStorage
    localStorage.setItem('replyDelay', delay);
    localStorage.setItem('dailyLimit', limit);
    localStorage.setItem('defaultEmoji', emoji);
    
    toggleSettings();
    alert('设置已保存');
}

// 编辑模板
function editTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (template) {
        document.getElementById('templateName').value = template.name;
        document.getElementById('templateCategory').value = template.category;
        document.getElementById('templateContent').value = template.content;
        document.getElementById('templateModal').classList.remove('hidden');
    }
}

// 模拟自动回复功能
function simulateAutoReply() {
    const keywords = ['新年', '春节', '中秋', '国庆', '圣诞', '生日', '快乐', '祝福', '宋词', '诗词', '古风', '文学', '诗意', '唐诗', '李白', '杜甫', '白居易', '元曲', '马致远', '关汉卿', '古典', '近代诗', '徐志摩', '闻一多', '戴望舒', '现代诗', '北岛', '舒婷', '海子', '诗歌', '新诗', '五一', '劳动', '劳动节', '工作', '奋斗', '除夕', '腊八', '小年', '团圆', '守岁', '六一', '儿童节', '孩子', '童年', '母亲节', '妈妈', '母爱', '父亲节', '爸爸', '父爱', '冬至', '饺子', '汤圆', '节气', '万圣节', '南瓜', '糖果', '捣蛋', '复活节', '彩蛋', '兔子', '情人节', '爱情', '玫瑰', '感恩节', '感恩', '火鸡'];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    
    // 根据关键词选择相应分类的模板
    let category = 'custom';
    if (['新年', '春节', '除夕', '小年'].includes(randomKeyword)) category = 'spring';
    else if (randomKeyword === '中秋') category = 'midautumn';
    else if (randomKeyword === '国庆') category = 'national';
    else if (randomKeyword === '圣诞') category = 'christmas';
    else if (randomKeyword === '生日') category = 'birthday';
    else if (randomKeyword === '元旦') category = 'newyear';
    else if (['五一', '劳动', '劳动节', '工作', '奋斗'].includes(randomKeyword)) category = 'labor';
    else if (['六一', '儿童节', '孩子', '童年'].includes(randomKeyword)) category = 'children';
    else if (['母亲节', '妈妈', '母爱'].includes(randomKeyword)) category = 'mother';
    else if (['父亲节', '爸爸', '父爱'].includes(randomKeyword)) category = 'father';
    else if (['冬至', '饺子', '汤圆', '节气'].includes(randomKeyword)) category = 'winter';
    else if (['万圣节', '南瓜', '糖果', '捣蛋'].includes(randomKeyword)) category = 'halloween';
    else if (['复活节', '彩蛋', '兔子'].includes(randomKeyword)) category = 'easter';
    else if (['情人节', '爱情', '玫瑰'].includes(randomKeyword)) category = 'valentine';
    else if (['感恩节', '感恩', '火鸡'].includes(randomKeyword)) category = 'thanksgiving';
    else if (randomKeyword === '腊八') category = 'custom';
    else if (['宋词', '诗词', '古风', '文学', '诗意'].includes(randomKeyword)) category = 'poetry';
    else if (['唐诗', '李白', '杜甫', '白居易'].includes(randomKeyword)) category = 'tang';
    else if (['元曲', '马致远', '关汉卿', '古典'].includes(randomKeyword)) category = 'yuan';
    else if (['近代诗', '徐志摩', '闻一多', '戴望舒'].includes(randomKeyword)) category = 'modern';
    else if (['现代诗', '北岛', '舒婷', '海子', '诗歌', '新诗'].includes(randomKeyword)) category = 'contemporary';
    
    const categoryTemplates = templates.filter(t => t.category === category);
    if (categoryTemplates.length > 0) {
        const randomTemplate = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
        
        // 模拟用户发送消息
        setTimeout(() => {
            document.getElementById('previewMessage').textContent = randomTemplate.content;
            showTypingIndicator();
            
            // 更新统计
            stats.todayReplies++;
            stats.weekReplies++;
            
            // 添加活动记录
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

// 渲染节日日历
function renderFestivalCalendar() {
    const calendar = document.getElementById('festivalCalendar');
    const today = new Date();
    const upcomingFestivals = festivals.filter(f => {
        const festivalDate = new Date(f.date);
        return festivalDate >= today;
    }).slice(0, 9); // 显示接下来的9个节日
    
    calendar.innerHTML = upcomingFestivals.map(festival => `
        <div class="p-2 bg-gray-50 rounded-lg text-center hover:bg-purple-50 transition cursor-pointer" onclick="selectFestival('${festival.category}')">
            <div class="text-lg">${festival.emoji}</div>
            <div class="text-xs font-medium text-gray-800">${festival.name}</div>
            <div class="text-xs text-gray-500">${new Date(festival.date).getMonth() + 1}/${new Date(festival.date).getDate()}</div>
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
    
    // 清空输入框
    nameInput.value = '';
    phoneInput.value = '';
    
    // 保存到本地存储
    saveContacts();
    
    updateSendStatus(`已添加联系人：${name}`);
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

// 从本地存储加载联系人
function loadContacts() {
    const saved = localStorage.getItem('festivalContacts');
    if (saved) {
        contacts = JSON.parse(saved);
    }
}

// 检查节日并发送祝福
function checkFestivalAndSend() {
    const autoSendToggle = document.getElementById('autoSendToggle');
    if (!autoSendToggle || !autoSendToggle.checked) return;
    
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // 检查今天是否是节日
    const todayFestival = festivals.find(f => f.date === todayStr);
    if (!todayFestival) return;
    
    // 检查今天是否已经发送过
    const lastSentKey = `lastSent_${todayStr}`;
    const lastSent = localStorage.getItem(lastSentKey);
    if (lastSent) return;
    
    // 获取启用的联系人
    const enabledContacts = contacts.filter(c => c.enabled);
    if (enabledContacts.length === 0) {
        updateSendStatus('没有启用的联系人');
        return;
    }
    
    // 获取发送时间设置
    const sendTime = document.getElementById('sendTime').value;
    const currentTime = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;
    
    if (currentTime !== sendTime) return;
    
    // 获取模板类型设置
    const templateType = document.getElementById('sendTemplateType').value;
    const festivalTemplates = templates.filter(t => t.category === todayFestival.category);
    
    if (festivalTemplates.length === 0) {
        updateSendStatus(`没有找到 ${todayFestival.name} 的模板`);
        return;
    }
    
    // 选择模板
    let selectedTemplate;
    switch (templateType) {
        case 'modern':
            selectedTemplate = festivalTemplates.find(t => t.category === 'custom') || festivalTemplates[0];
            break;
        case 'classical':
            selectedTemplate = festivalTemplates.find(t => ['poetry', 'tang', 'yuan'].includes(t.category)) || festivalTemplates[0];
            break;
        default:
            selectedTemplate = festivalTemplates[Math.floor(Math.random() * festivalTemplates.length)];
    }
    
    // 发送祝福（模拟）
    sendFestivalGreetings(todayFestival, selectedTemplate, enabledContacts);
    
    // 标记已发送
    localStorage.setItem(lastSentKey, 'sent');
}

// 发送节日祝福（模拟）
function sendFestivalGreetings(festival, template, contacts) {
    const sendResults = [];
    
    contacts.forEach(contact => {
        // 在实际应用中，这里会调用短信API或微信API
        // 现在只是模拟发送
        sendResults.push({
            contact: contact.name,
            phone: contact.phone,
            status: 'success',
            template: template.name
        });
    });
    
    // 更新发送状态
    const successCount = sendResults.filter(r => r.status === 'success').length;
    updateSendStatus(`✅ ${festival.name}祝福已发送给${successCount}位联系人，使用模板：${template.name}`);
    
    // 添加到活动记录
    activities.unshift({
        id: activities.length + 1,
        type: "send",
        message: `自动发送${festival.name}祝福给${successCount}位联系人`,
        time: "刚刚",
        user: "系统"
    });
    
    renderActivities();
    
    // 显示通知
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('节日祝福已发送', {
            body: `${festival.name}祝福已成功发送给${successCount}位联系人`,
            icon: '🎉'
        });
    }
}

// 更新发送状态
function updateSendStatus(message) {
    const statusDiv = document.getElementById('sendStatus');
    if (statusDiv) {
        statusDiv.innerHTML = `<p class="text-sm text-gray-600">${message}</p>`;
    }
}

// 请求通知权限
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// 选择节日模板
function selectFestival(category) {
    filterTemplates(category);
}

// 监听自动发送开关
document.addEventListener('DOMContentLoaded', function() {
    loadContacts();
    requestNotificationPermission();
    
    const autoSendToggle = document.getElementById('autoSendToggle');
    if (autoSendToggle) {
        autoSendToggle.addEventListener('change', function() {
            if (this.checked) {
                updateSendStatus('✅ 自动发送已开启，将在节日当天自动发送祝福');
            } else {
                updateSendStatus('❌ 自动发送已关闭');
            }
        });
    }
});

// 定期模拟自动回复（用于演示）
setInterval(simulateAutoReply, 10000);
