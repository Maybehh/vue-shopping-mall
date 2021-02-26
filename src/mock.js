import Mock from 'mockjs'

const SlideshowData = {
    status: 0,
    message: [
        { 
            img: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/161601/40/7482/67700/60339655Ee4d79d82/d3e55f44bf4af548.jpg!q70.jpg.dpg',
            url: '#top1'
        },
        { 
            img: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/140133/2/18669/202660/5fd84dd5Ebff57d62/667ca9be057f056f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
            url: '#top2'
        },
        { 
            img: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/149793/40/19923/270432/5fe3324cE5a823b5a/54a5e7c23e2d9eb9.jpg!cr_1125x445_0_171!q70.jpg.dpg',
            url: '#top3'
        }
    ]
}

const NewsListData = {
    status: 0,
    message: [
        {
            add_time: '2021-02-25T21:19:43.000Z',
            click: 46577,
            id: 13,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211999137_294195/0',
            title: 'NBA标志换成科比？你眼里有乔丹嘛？！',
            abstract: '回想起2020年最悲伤的一件事，可能就是NBA超级巨星科比 布莱恩特直升机遇难。'
        },
        {
            add_time: '2021-02-25T20:19:43.000Z',
            click: 53353,
            id: 14,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211974811_294195/0',
            title: '4.2亿！爵士土豪老板不讲武德！砸出了联盟第一！',
            abstract: '谈梦想前，能不能先把合同签了？（欢迎关注空口有评NBA）'
        },
        {
            add_time: '2021-02-25T21:09:33.000Z',
            click: 435,
            id: 15,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211748556_294195/0',
            title: '乔丹：如果我拿40分还赢不了那就拿50分 詹姆斯：换个队再来',
            abstract: '乔丹：如果我拿40分还赢不了那就拿50分，詹姆斯：如果我在这个队赢不了那就换一个队。'
        },
        {
            add_time: '2021-02-25T18:19:43.000Z',
            click: 1852,
            id: 16,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13212103130_294195/0',
            title: 'NBA历史上有没有全明星MVP数量多于FMVP和MVP数量之和的球星？',
            abstract: '关于全明星赛他就是一种实质性的表演赛，目的就是取悦球迷，同时大家放松开心一下'
        },
        {
            add_time: '2021-02-25T21:19:13.000Z',
            click: 464751,
            id: 17,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211967329_294195/0',
            title: '大结局？恭喜快船！恭喜小卡！对不起湖人篮网，这可是总冠军后卫',
            abstract: '一时间，篮网已经成为联盟最为炙手可热的球队。'
        },
        {
            add_time: '2021-02-25T11:19:43.000Z',
            click: 13424,
            id: 18,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211891643_294195/0',
            title: '巅峰勇士都输了！3人场均轰25＋篮网3巨头或创75年纪录？',
            abstract: '29分、27.4分、25.2分，本赛季至今，篮网三巨头无疑是NBA最亮眼的3人组。'
        },
        {
            add_time: '2021-02-25T21:19:43.000Z',
            click: 11561,
            id: 19,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211878296_294195/0',
            title: '小球时代各大异军突起的内线球员',
            abstract: 'NBA已经进入到一个小球时代，随着小球时代的发展，内线球员的作用也发生了一定的改变'
        },
        {
            add_time: '2021-02-25T21:09:23.000Z',
            click: 231,
            id: 20,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211527767_294195/0',
            title: 'NBA各个位置的第一人，得分后卫无异议，中锋争议最大？',
            abstract: 'NBA已经有74年的历史，各个位置人才层出不穷，但总体来说，找出1-5号位5个位置公认的历史第一人还是可以找出来的'
        },
        {
            add_time: '2021-02-25T11:59:43.000Z',
            click: 187342,
            id: 21,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211482732_294195/0',
            title: '第2座MVP奖杯在招手？众人力挺哈登，A-史密斯：他是本赛季最强球员！',
            abstract: '在最近一段时间内，由一名球星的发挥十分出色，他就是篮网队的哈登。'
        },
        {
            add_time: '2021-02-25T11:59:43.000Z',
            click: 1842,
            id: 22,
            img_url: 'https://inews.gtimg.com/newsapp_ls/0/13211859337_294195/0',
            title: '勇士成为NBA第五支取得客场一千场胜利的球队',
            abstract: '直播吧2月25日讯 勇士今日在客场战胜步行者，取得两连胜。'
        }
    ]
}

const NewsData = [
    {
        add_time: '2021-02-25T21:19:43.000Z',
        click: 46577,
        id: 13,
        title: 'NBA标志换成科比？你眼里有乔丹嘛？！',
        content: `
            <p>回想起2020年最悲伤的一件事，可能就是NBA超级巨星科比 布莱恩特直升机遇难。时至今日，这件悲痛的事件已经过去了一年有余，可最近又有关于科比的消息频频出现在大家的视野中，引起众人争议。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211987004/1000">
            <p>NBA篮网队球星凯里 欧文今日在ins发文晒出了科比作为NBA联盟logo的P图并表示：“我不在乎别人怎么说，但这早晚会发生，黑人之王（科比）打造了这个联盟。”</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211987747/1000">
        `
    },
    {
        add_time: '2021-02-25T20:19:43.000Z',
        click: 53353,
        id: 14,
        title: '4.2亿！爵士土豪老板不讲武德！砸出了联盟第一！',
        content: `
            <p>有人总结说，湖人惨败给爵士，全因为做错了一道算术题：他们忘了，三分比两分好，22比8多的不是一星半点。

            14X3=42，别的先不说，单单三分这一项，爵士就赢了湖人42分，42分呐，你说这比赛还怎么打？
            
            其实从第一节开始，两队在三分球上高下已分，这一节，虽然湖人只输了一分，但在三分球上，整整输了15分！</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211958783/1000">
            <p>罗伊斯-奥尼尔从勒布朗-詹姆斯手里掏掉皮球，并快下命中三分，成为比赛的分水岭，三个进攻回合后，爵士将分差拉大到两位数，比赛已经结束了。

            上半场，爵士不声不响，命中了14记三分，追平了队史，这是什么概念？本赛季湖人打了32场，其中有24场，他们全场都进不了14个三分。
            
            下半场，吃了大亏的湖人，开始防守外扩，试图刹住爵士的三分雨，但爵士见招拆招，转而玩起了挡拆。
            
            米切尔和康利，一次次在挡拆后，将球精准地送到下顺的戈贝尔、费沃斯手中，他俩快把湖人篮筐扣烂了。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211958801/1000">
        `
    },
    {
        add_time: '2021-02-25T21:09:33.000Z',
        click: 435,
        id: 15,
        title: '乔丹：如果我拿40分还赢不了那就拿50分 詹姆斯：换个队再来',
        content: `
            <p>篮球之神乔丹，可能很多年轻的篮球迷并没有看过迈克尔乔丹的比赛，毫无疑问，乔丹就是20世纪最伟大的篮球运动员！</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211735001/1000">
            <p>乔丹打服了同时期所有对手，而詹姆斯则抱团报服了同时期所有对手，东边报了西边报，回家也报。

            巴克利可惜，包括尤因，马龙，斯托克顿，米勒，佩顿。当年乔丹力压众神，真心理解马龙去找OK抱大腿，我要是马龙也这样做，拿个冠军退役，又不是巅峰抱团。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211735026/1000">
        `
    },
    {
        add_time: '2021-02-25T18:19:43.000Z',
        click: 1852,
        id: 16,
        title: 'NBA历史上有没有全明星MVP数量多于FMVP和MVP数量之和的球星？',
        content: `
            <p>关于全明星赛他就是一种实质性的表演赛，目的就是取悦球迷，同时大家放松开心一下，关于谁获得MVP其实意义不大，因为这个MVP的含金量太低，可以说几乎没有含金量。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13212059957/1000">
            <p>比如在谁的主队举办全明星，那么队友一般也会帮助他去做球，让他尽可能砍下高分然后去争夺MVP，也有可能哪位明星球员在这场比赛中手感很好，队友也会成全他，让他得到MVP，所以我们在谈论全明星MVP的时候也就像谈论全明星一样，就是娱乐。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13212060829/1000">
        `
    },
    {
        add_time: '2021-02-25T21:19:13.000Z',
        click: 464751,
        id: 17,
        title: '大结局？恭喜快船！恭喜小卡！对不起湖人篮网，这可是总冠军后卫',
        content: `
            <p>在进入2月份以来，篮网在11场比赛中取得了8胜3负的战绩，在最近的7场比赛中，篮网都击败了对手，而篮网这7连胜也是目前NBA中最长的连胜纪录。

            更值得注意的是，这支缺少杜兰特的篮网在最近多场强强对话中击败对手，比如击败完整体的快船，更是让球迷对这支篮网的上限更加期待；
            
            而同样作为有希望争夺总冠军的快船，怎么能轻易的让篮网就此拿到20-21赛季的总冠军呢？为此，快船还在为补强而努力。而就在刚刚，美媒报道了这样一件事：</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211958009/1000">
            <p>“如果洛瑞本赛季选择离开猛龙的话，快船会是洛瑞的潜在下家之一”

            难道，联盟真的要大结局？
            
            众所周知，如今的这支拥有小卡+乔治的快船已经很强了，赛季至今也取得了23胜10负、力压湖人的高居西部第2的战绩，117.7分的进攻效率高居联盟第3，42.2%的3分球命中率同样也是联盟第1，但即使如此，这支快船依旧有提升的空间，比如控卫。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211958013/1000">
        `
    },
    {
        add_time: '2021-02-25T11:19:43.000Z',
        click: 13424,
        id: 18,
        title: '巅峰勇士都输了！3人场均轰25＋篮网3巨头或创75年纪录？',
        content: `
            <p>29分、27.4分、25.2分，本赛季至今，篮网三巨头无疑是NBA最亮眼的3人组。三人本赛季的场均得分超过85+，个人攻击力可谓是超群绝伦。而且，值得一提的是，如果他们三人能够将场均数据延续到赛季结束，那么，他们将会成为NBA历史上第一支同时拥有三位场均25+的超级巨星球队，这一点连巅峰热火和勇士都做不到。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211860145/1000">
            <p>本赛季，在阿杜复出以及哈登加盟以后，篮网的攻击力达到了巅峰。作为球队的大哥，阿杜出战19场，场均能够轰下29分7.3板以及5.3助。欧文场均能够交出27.4分4.7板以及5.8助。哈登的得分最少，但场均也有25.2分，可却贡献了8.5板11.6助，篮板数和助攻数都是三人中最强的一个。

            在NBA历史上，超级三巨头组合并不在少数，当90年代的公牛铁三角，21世纪的马刺三剑客，以及后来的波士顿三巨头，热火三巨头，以及勇士三巨头。这些超级组合都曾统治各个年代或时段，并且问鼎过总冠军。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211860596/1000">
        `
    },
    {
        add_time: '2021-02-25T21:19:43.000Z',
        click: 11561,
        id: 19,
        title: '小球时代各大异军突起的内线球员',
        content: `
            <p>NBA已经进入到一个小球时代，随着小球时代的发展，内线球员的作用也发生了一定的改变，并且传统的内线球员也逐渐的被时代所淘汰，当前需要的内线球员不仅要有灵活的脚步，同时也要有着好的横移速度，进攻端要是没有着一手好的投篮能力人家都不愿使用，虽然传统的内线球员被逐渐的淘汰，还是有着较多的球员已经能够适应当前的要求。今天就盘点NBA本赛季能够适应当前小球时代的几大内线球员。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211853873/1000">
            <p>1格林

            格林是新型内线球员的代表人物，他没有着强大的进攻技术，没有身高，并且也没有较为强大的身体素质，但是却能够成为勇士队的内线核心。而主要的原因就有两点，第一格林遇上了正在研发小球的科尔和勇士体系，让其有了可以施展的空间。第二就是格林虽然进攻技术不行，但是助攻和防守都是较为顶级的存在，201的身高顶在内线虽然有着弱势，但是格林与当前大部分的内线球员交手却并未处于下风，格林当时是勇士的组织核心，凭借助攻、阻攻等能力成为新时代内线球员的代表人物之一。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211854994/1000">
        `
    },
    {
        add_time: '2021-02-25T21:09:23.000Z',
        click: 231,
        id: 20,
        title: 'NBA各个位置的第一人，得分后卫无异议，中锋争议最大？',
        content: `
            <p>NBA已经有74年的历史，各个位置人才层出不穷，但总体来说，找出1-5号位5个位置公认的历史第一人还是可以找出来的，除了中锋位置比较难选，毕竟超级中锋太多，小球时代以前，除了乔丹统治的那些年，其余时代基本是属于中锋时代，可以说中锋基本是统治了小球时代以前的时代。那这5个位置公认的最强球员是呢？

            大前锋：邓肯</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211506332/1000">
            <p>大前锋位置只有石佛存在，其他人就只能竞争第二了。马龙、巴克利、加内特、诺维斯基、佩蒂特，这些鼎鼎有名的大前锋，总冠军数量加起来，都没有邓肯得多，就凭这一点，邓肯就能在头把交椅的竞争中脱颖而出。

            </p>
            <img src="https://inews.gtimg.com/newsapp_ls/0/13211527767_294195/0">
        `
    },
    {
        add_time: '2021-02-25T11:59:43.000Z',
        click: 187342,
        id: 21,
        title: '第2座MVP奖杯在招手？众人力挺哈登，A-史密斯：他是本赛季最强球员！',
        content: `
            <p>北京时间2月25日，2020-21赛季NBA常规赛激战正酣。截止到今天为止，本赛季NBA常规赛已经进行了两个月左右的时间。在最近一段时间内，由一名球星的发挥十分出色，他就是篮网队的哈登。在昨天带领球队击败国王队之后，篮网队已经取得了7连胜，球队战绩变成了21胜12负，距离东部第一的76人队仅剩下0.5个胜场，他们非常有希望拿到本赛季东部常规赛冠军。</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211471366/1000">
            <p>而在这个过程中，哈登的表现可谓是异常出色。赛季迄今为止，哈登场均出场37.9分钟，能够得到25分7.5篮板11.2助攻1.1抢断，投篮命中率为48%，3分球命中率为39.4%，其中场均助攻数高居联盟第一。作为3届NBA得分王，哈登加盟篮网队之后没有选择在进攻端大包大揽，而是专心做起了组织者的角色。令人意外的是，哈登在改打组织后卫之后如鱼得水。篮网队连战连捷，击败的对手中包括快船队，湖人队，勇士队等多支豪强。

            </p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13211471356/1000">
        `
    },
    {
        add_time: '2021-02-25T11:59:43.000Z',
        click: 1842,
        id: 22,
        title: '勇士成为NBA第五支取得客场一千场胜利的球队',
        content: `
            <p>直播吧2月25日讯 勇士今日在客场战胜步行者，取得两连胜。

            这是勇士队史在客场的第一千场胜利，他们成为了NBA历史上第五支取得这一成就的球队。
            
            之前四支客场千胜的球队是凯尔特人、湖人、76人、尼克斯。
            
            （史蒂夫盖伦）</p>
            <img src="https://inews.gtimg.com/newsapp_bt/0/13204796942/1000">
        `
    }
]

const CommentsData = [
    {    
        id: 13,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '乔丹不可撼动'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '还是不要改吧'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '可以，但没必要'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '那以后不是也得换'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '科比值得'
                },
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '欧文真的是科比最大球迷了'
                }
            ],
            [
                {
                    user_name: '龟龟MVP',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: '乔丹还是goat'
                }
            ]
        ]
    },
    {    
        id: 14,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '豪气'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '爵士老板有眼界'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '爵士总冠军'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '湖人继续加油啊'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '浓眉好好休息'
                },
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '眉，队危，速归'
                }
            ],
            [
                {
                    user_name: '龟龟MVP',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: '米切尔MVP'
                }
            ]
        ]
    },
    {    
        id: 15,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '乔丹霸气'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '老詹不行啊'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '乔丹yyds'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '老詹会成为goat的'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '老詹再拿一次MVP'
                },
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '乔神'
                }
            ]
        ]
    },
    {    
        id: 16,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '肯定有啊'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '一次全明星MVP就可'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '欧文含泪点灭'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '全明星没啥含金量吧'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '有什么意义吗'
                },
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '啥数据都有'
                }
            ],
            [
                {
                    user_name: '龟龟MVP',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: '的确，全明星看个乐'
                }
            ]
        ]
    },
    {    
        id: 17,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '快船总冠军'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '湖人总冠军'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '篮网总冠军'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '湖人继续加油啊'
                }
            ]
        ]
    },
    {    
        id: 18,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '三巨头真的强'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '小帅太牛了'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '这个组合历史最佳了吧'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '哈登MVP'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '看我id'
                }
            ]
        ]
    },
    {    
        id: 19,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '字母歌练练篮会很可怕'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '大帝真的强'
                },
                {
                    user_name: '科比MVP',
                    add_time: '2021-02-26T22:23:24.000Z',
                    content: '唐斯真的技术全面'
                }
            ],
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: 'Lisa离开木狼吧'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '浓眉好好休息'
                }
            ]
        ]
    },
    {    
        id: 20,
        message: [
            [
                {
                    user_name: '乔丹MVP',
                    add_time: '2021-02-26T22:23:34.000Z',
                    content: '石佛'
                },
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '奥尼尔'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '肯定张伯伦啊'
                }
            ],
            [
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '远古巨兽'
                },
                {
                    user_name: '龟龟MVP',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: '阿呆'
                }
            ],
        ]
    },
    {    
        id: 21,
        message: [
            [
                {
                    user_name: '哈登MVP',
                    add_time: '2021-02-26T22:23:14.000Z',
                    content: '哈登MVP'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '登哥历史级别的进攻手'
                },
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '哈登最强'
                }
            ],
            [
                {
                    user_name: '龟龟MVP',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: '拿下那该死的冠军'
                }
            ]
            ]
    },
    {    
        id: 22,
        message: [
            [
                {
                    user_name: '库里MVP',
                    add_time: '2021-02-26T22:33:34.000Z',
                    content: '库里MVP'
                },
                {
                    user_name: '小帅MVP',
                    add_time: '2021-02-26T22:13:34.000Z',
                    content: '想当年的五星勇士'
                },
                {
                    user_name: '民工杜MVP',
                    add_time: '2021-02-26T23:23:34.000Z',
                    content: '拥有阿杜的美好'
                }
            ],
            [
                {
                    user_name: '龟龟MVP',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: '继续创纪录'
                },
                {
                    user_name: '萌神库',
                    add_time: '2021-02-26T22:53:34.000Z',
                    content: ''
                }
            ]
        ]
    }
]

Mock.mock('http://vue-shopping-mall/data/getSlideshow', 'get', SlideshowData)
Mock.mock('http://vue-shopping-mall/data/getNewslist', 'get', NewsListData)
Mock.mock(/http:\/\/vue-shopping-mall\/data\/getnew\/\d+/, 'get', function (options) {
    const arr = options.url.split('/');
    const id = arr[arr.length - 1];
    const len = NewsData.length;
    for(var i = 0; i < len; i++) {
        if(NewsData[i].id == id) 
        return {
            status: 0, 
            message: [NewsData[i]]
        }
    }
    return {}
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/getcomments\/\d+\?pageindex=\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    var matchArr = [];
    var match;
    const len = CommentsData.length;
    while((match = regex.exec(options.url)) != null) {
        matchArr = matchArr.concat(match)
    }
    for(let i = 0; i < len; i++) {
        if(matchArr[0] == CommentsData[i].id && matchArr[1] <= CommentsData[i].message.length) {
            return {
                status: 0,
                message: CommentsData[i].message[matchArr[1] - 1]
            }
        }
    }
    return {
        status: 0,
        message: []
    }
})