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
            },
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
            },
            {
                user_name: '龟龟MVP',
                add_time: '2021-02-26T22:53:34.000Z',
                content: '乔丹还是goat'
            }
        ]
    },
    {    
        id: 14,
        message: [
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
            },
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
            },
            {
                user_name: '龟龟MVP',
                add_time: '2021-02-26T22:53:34.000Z',
                content: '米切尔MVP'
            }
        ]
    },
    {    
        id: 15,
        message: [
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
            },
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
    },
    {    
        id: 16,
        message: [
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
            },
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
            },
            {
                user_name: '龟龟MVP',
                add_time: '2021-02-26T22:53:34.000Z',
                content: '的确，全明星看个乐'
            }
        ]
    },
    {    
        id: 17,
        message: [
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
            },
            {
                user_name: '哈登MVP',
                add_time: '2021-02-26T22:23:14.000Z',
                content: '湖人继续加油啊'
            }
        ]
    },
    {    
        id: 18,
        message: [
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
            },
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
    },
    {    
        id: 19,
        message: [
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
            },
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
    },
    {    
        id: 20,
        message: [
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
            },
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
        ]
    },
    {    
        id: 21,
        message: [
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
            },
            {
                user_name: '龟龟MVP',
                add_time: '2021-02-26T22:53:34.000Z',
                content: '拿下那该死的冠军'
            }
        ]
    },
    {    
        id: 22,
        message: [
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
            },
            {
                user_name: '龟龟MVP',
                add_time: '2021-02-26T22:53:34.000Z',
                content: '继续创纪录'
            },
            {
                user_name: '萌神库',
                add_time: '2021-02-26T12:54:34.000Z',
            }
        ]
    },
    {    
        id: 91,
        message: [
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
            },
            {
                user_name: '龟龟MVP',
                add_time: '2021-02-26T22:53:34.000Z',
                content: '继续创纪录'
            },
            {
                user_name: '萌神库',
                add_time: '2021-02-26T22:23:34.000Z',
            }
        ]
    }
]

const ImgCategoryData = {
    status: 0,
    message: [
        {
            title: '家居生活',
            id: 14
        },
        {
            title: '摄影设计',
            id: 15
        },
        {
            title: '明星美女',
            id: 16
        },
        {
            title: '摄影器材',
            id: 17
        },
        {
            title: '明星写真',
            id: 18
        },
        {
            title: '清纯甜美',
            id: 19
        },
        {
            title: '古典美女',
            id: 20
        }
    ]

}

const HouseholdImageData = [
    {
        id: 81,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/104791/28/14947/111445/5e69f7c6E7cf9349c/0f2ace2b52be69fd.jpg!q80.dpg.webp',
        title: '小米 MI 自动洗手机套装',
        abstract: ' 智能感应 泡沫洗手机 免接触更卫生 植物精华 滋润舒适'
    },
    {
        id: 82,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/167506/37/6813/259571/603454e6E3661697a/62de127ee20a889b.jpg!q80.dpg.webp',
        title: '木居华府 床 ',
        abstract: '真皮双人床现代简约轻奢软包床高箱储物实木框架卧室家具1.5 1.8米 升级气动储物款加收费用 1800*2000mm框架结构'
    },
    {
        id: 83,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/147778/12/7688/95372/5f5347b4E2d333641/20beb7faf1c08078.jpg!q80.dpg.webp',
        title: '优勤硅藻泥地垫',
        abstract: '优勤硅藻泥地垫速干吸水垫海藻脚垫卫生间门口防滑家用浴室硅藻土脚垫 魔力灰'
    },
    {
        id: 84,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/157530/36/2087/133381/5ff68191E6a6595cb/126498efab7b39d6.jpg!q80.dpg.webp',
        title: '顾家家居 布艺沙发',
        abstract: '顾家家居 布艺沙发 现代简约北欧大户型可拆洗客厅家居组合KF.2179B【30天发货】【高级灰】5双B扶手+角组+凳'
    },
    {
        id: 85,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/129192/22/12722/99261/5f620c73Eb87952b1/36a146956aa32853.jpg!q80.dpg.webp',
        title: '家杰优品 一次性马桶刷套装',
        abstract: '家杰优品 一次性马桶刷套装 可抛式洗厕所刷子 长柄无死角家用卫生间清洁神器（一套装带底座 送14片刷头）'
    },
]       

const AllImageData = [
    {
        id: 91,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/116423/15/15690/213564/5f431507E78e376cf/bcf9864e68be4e18.jpg!q80.dpg.webp',
        title: 'LED摄影补光灯',
        abstract: '春影（CY）LED摄影补光灯 无极冷暖摄影棚调光常亮灯架 静物补光室内摄影器材套装 1只'
    },
    {
        id: 92,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/105551/16/3132/117943/5dddeed9E20099b4b/b8c0bca9ef4de5e0.jpg!q80.dpg.webp',
        title: '黑色吸光布',
        abstract: '贝阳黑色吸光布 拍摄照相摄影纯色背景布白色灰色不反光加厚黑绒布拍照摄影影棚道具 1.5m*3.0m黑色（不含架子）'
    },
    {
        id: 93,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/153452/9/10176/297065/5fd9d153Ec16c6477/6356bb2ac37a5464.jpg!q80.dpg.webp',
        title: '摄影灯LED',
        abstract: '摄影灯LED暖光美食微电影直播补光灯支架打光室内直播间影视影楼聚光拍照灯背后神明少女 铁罩-2米支架款（110W三色遥控调光）'
    },
    {
        id: 94,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/166302/1/6919/381969/60306c41Effe46943/efcb636c44fbc514.jpg!q80.dpg.webp',
        title: '摄影灯LED补光灯',
        abstract: '南冠FS150W摄影灯LED补光灯直播儿童服饰美食视频录制人物摄像灯太阳灯网红主播常亮柔光灯套装 FS150W单灯+球形柔光箱+2.8米灯架'
    },
    {
        id: 95,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/154217/40/15937/83705/600a212aEb7f5a1aa/cb7fe115d623f1e4.jpg!q80.dpg.webp',
        title: '摄影灯拍照聚光',
        abstract: 'nanlite南光Forza60摄影灯拍照聚光电影影视摄像灯柔光便携外拍南冠补光灯套装 套餐D【摄影视频常亮灯补光灯必备套装】'
    },
] 

const ImagesInfoData = [
    {
        id: 91,
        message: [
            {
                title: 'LED摄影补光灯灯架',
                add_time: '2021-02-26T22:23:34.000Z',
                click: 344557,
                content: '春影（CY）LED摄影补光灯 无极冷暖摄影棚调光常亮灯架 静物补光室内摄影器材套装 1只'
            }
        ]
    }
]

const ThumbsImagesData = [
    {
        id: 91,
        message: [
            {
                src: 'https://img30.360buyimg.com/popWaterMark/jfs/t1/166067/15/7384/111367/603369eeEb88e0ff8/c71cc1965d9f04c1.jpg!q70.dpg.webp'
            },
            {
                src: 'https://img12.360buyimg.com/imgzone/jfs/t1/58782/25/9492/151905/5d6f5085Efc42d4d3/0b2bb695a89a71d0.jpg!q70.dpg.webp'
            },
            {
                src: 'https://img14.360buyimg.com/imgzone/jfs/t1/127439/10/6473/574319/5f02d70bEcbe40424/04982b60062267a1.jpg!q70.dpg.webp'
            },
            {
                src: 'https://img13.360buyimg.com/imgzone/jfs/t1/147359/32/2223/454060/5f02d70aE2451be5e/4cac5b0ea0c5a0da.jpg!q70.dpg.webp'
            },
            {
                src: 'https://img13.360buyimg.com/imgzone/jfs/t1/114794/2/11683/297414/5f02d70bE9ee8b750/18a93dd327e58382.jpg!q70.dpg.webp'
            }
        ]
    },
    {
        id: 100,
        message: [
            {
                src: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/138012/14/16204/132634/5fc0c3bbE7786c873/5bef1e8a278ed482.jpg!q80.dpg.webp'
            },
            {
                src: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/138910/31/15796/96438/5fc0c0deE29d00fa4/34164568fe6291f0.jpg!q70.dpg.webp'
            },
            {
                src: 'https://img14.360buyimg.com/n4/jfs/t1/160844/7/6104/139991/6020e2a8E6d66b123/39a3dc415151de71.jpg'
            },
            {
                src: 'https://img14.360buyimg.com/n4/jfs/t1/163677/10/5790/133569/6020e27fEd5651595/2fdf105d3eddab4b.jpg'
            },
            {
                src: 'https://img14.360buyimg.com/n4/jfs/t1/149606/11/15901/116008/5fc0c5c9E9daa3a39/951f5d4a4c729ec3.jpg'
            },
            {
                src: 'https://img14.360buyimg.com/n4/jfs/t1/163677/10/5790/133569/6020e27fEd5651595/2fdf105d3eddab4b.jpg'
            }
        ]
    }
]

const GoodsData = [
    {
        id: 100,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/138012/14/16204/132634/5fc0c3bbE7786c873/5bef1e8a278ed482.jpg!q80.dpg.webp',
        title: '小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视',
        sell_price: 3399,
        market_price: 3599,
        stock_quantity: 73
    },
    {
        id: 101,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/134544/34/500/40300/5ece333cE8de48790/afe0436b3bf44c2a.jpg!q80.dpg.webp',
        title: '小米摄像头 监控 云台2K版 家用监控 红外夜视 2K超高清 智能摄像头 300W像素升级版',
        sell_price: 199,
        market_price: 229,
        stock_quantity: 45
    },
    {
        id: 102,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/142719/12/444/104550/5ee1988cEd952bf51/74860b136a001168.jpg!q80.dpg.webp',
        title: '小米手环5 NFC版 石墨黑 动态彩屏  智能运动监测 内置小爱同学语音遥控手机 伸手即可刷卡磁吸式充电',
        sell_price: 209,
        market_price: 219,
        stock_quantity: 1444
    },
    {
        id: 103,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/125093/13/1436/48965/5ebcb010E8a73cb9c/319ecf3238252594.jpg!q80.dpg.webp',
        title: '小米 Air2 SE真无线蓝牙耳机 通话降噪 蓝牙耳机 迷你入耳式手机耳机',
        sell_price: 169,
        market_price: 189,
        stock_quantity: 4521
    },
    {
        id: 104,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/154397/33/6366/27904/5fb61affEc8579e9a/e0c664cc61438500.jpg!q80.dpg.webp',
        title: '米家 小米加湿器卧室家用办公室桌面 迷你低噪空气加湿 银离子材料 上加水 4L大容量',
        sell_price: 169,
        market_price: 189,
        stock_quantity: 9932
    },
    {
        id: 105,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/139560/35/15779/97911/5fbdfbdfE244aee62/b0fe4cfb07693742.jpg!q80.dpg.webp',
        title: 'Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能手机 小米 红米',
        sell_price: 1299,
        market_price: 1599,
        stock_quantity: 3765 
    },
    {
        id: 106,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/138389/3/14020/50219/5fabbe26E41de7e5d/d7cb5e609e53c864.jpg!q80.dpg.webp',
        title: '小米小爱音箱Play 小爱同学 智能人工对话 语音遥控家电 蓝牙WIFI 儿童故事 闹钟 音响',
        sell_price: 99,
        market_price: 119,
        stock_quantity: 6632
    },
    {
        id: 107,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/152388/34/16680/40560/601a7903E83ec76f1/dd7614da3ad57911.jpg!q80.dpg.webp',
        title: '米家 小米电热水壶烧水壶1A 304不锈钢 1.5L大容量 MJDSH02YM',
        sell_price: 79,
        market_price: 99,
        stock_quantity: 321
    },
    {
        id: 108,
        img_url: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/159997/27/8213/44329/6034afcaE36d4be6c/9ef3415c34f68052.jpg!q80.dpg.webp',
        title: '九号平衡车 白色 体感智能骑行 遥控漂移电动九号平衡车 超长续航',
        sell_price: 1999,
        market_price: 2199,
        stock_quantity: 5555
    }
]

const GoodsInfoData = [
    {
        id: 100,
        goods_no: 100,
        stock_quantity: 73,
        add_time: 1614409297173,
        title: '小米电视4A 70英寸 4K超高清 HDR 二级能效 2GB+16GB L70M5-4A 内置小爱 智能网络液晶平板教育电视',
        market_price: 3599,
        sell_price: 3399,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/139505/4/7254/271705/5f4ca0a2E59a4acf6/657f6681bd2eb036.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/92759/27/10151/108459/5e158916Ef99d612e/f4cb20b3caa27f2d.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/85127/27/9976/463417/5e158916Eca735367/3a44f5e04acd7a2c.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/88555/21/10006/151571/5e158916E52fe365a/3edeeaaae750de98.jpg">
        `
    },
    {
        id: 101,
        goods_no: 101,
        stock_quantity: 45,
        add_time: 1614409297273,
        title: '小米摄像头 监控 云台2K版 家用监控 红外夜视 2K超高清 智能摄像头 300W像素升级版',
        market_price: 229,
        sell_price: 199,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/98408/17/17792/96883/5e8c4747E3324db0e/a7fb176273f5c163.png">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/117106/38/482/45699/5e8c4747E4be95c45/f051b68f189fb048.png">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/104272/13/17931/146580/5e8c4747E81848539/61fdde35493f7844.png">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/110982/18/454/118351/5e8c4747E6123f162/acbff737228b548f.png">
        `
    },
    {
        id: 102,
        goods_no: 102,
        stock_quantity: 1444,
        add_time: 1614409297373,
        title: '小米手环5 NFC版 石墨黑 动态彩屏  智能运动监测 内置小爱同学语音遥控手机 伸手即可刷卡磁吸式充电',
        market_price: 219,
        sell_price: 209,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/138838/29/17472/106514/5fcef7c0E0f85af17/a149912f5fba60bf.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/132286/27/18757/116702/5fcef7c0E49237f17/abff83b70798a90e.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/141462/25/17523/105384/5fcef7c0E9748b435/3988a48c71368129.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/139169/34/17223/103927/5fcef7c0E7920dcdd/7280d0fb01e3c167.jpg">
        `
    },
    {
        id: 103,
        add_time: 1614409297473,
        goods_no: 103,
        stock_quantity: 4521,
        title: '小米 Air2 SE真无线蓝牙耳机 通话降噪 蓝牙耳机 迷你入耳式手机耳机',
        market_price: 189,
        sell_price: 169,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/119870/15/1279/128638/5eba8a11Ec977bd95/60ff5293d0e19db9.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/126432/2/1190/262196/5eba8a12Eaa7c5e2e/fd316c500c61d3fe.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/114026/26/6376/361635/5eba8a12Ec078f431/8bd4e93c03a26635.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/124845/8/1448/242699/5ebcdf4aEa449b004/3758026371f5c1b6.jpg">
        `
    },
    {
        id: 104,
        add_time: 1614409297573,
        goods_no: 104,
        stock_quantity: 9932,
        title: '米家 小米加湿器卧室家用办公室桌面 迷你低噪空气加湿 银离子材料 上加水 4L大容量',
        market_price: 189,
        sell_price: 169,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/139606/22/16225/541643/5fc4b541Ec55821a1/f7a8f79ab0c1c704.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/146520/31/16356/121840/5fc4b541E20b72b4c/063a110704853e50.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/148158/36/16420/497686/5fc4b541Edfb7ab5a/b32b47f95a2661c4.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/134958/30/18092/744067/5fc4b542E4a106efc/8ed019defc95b5d2.jpg">
        `
    },
    {
        id: 105,
        add_time: 1614409297673,
        goods_no: 106,
        stock_quantity: 3765,
        title: 'Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能手机 小米 红米',
        market_price: 1599,
        sell_price: 1299,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/146233/30/15902/397535/5fbf7233Ecd9d40b9/82155136faf4a7c5.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/136445/1/17126/457960/5fbf7233Edf21cce9/b103088b4da53387.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/170660/21/5702/671646/601d0d8bE56e800d0/a37e073c05f1658e.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/151841/24/7406/385078/5fbf7233E4a1f36a5/e06b432f63d70d36.jpg">
        `
    },
    {
        id: 106,
        add_time: 1614409297773,
        goods_no: 107,
        stock_quantity: 6632,
        title: '小米小爱音箱Play 小爱同学 智能人工对话 语音遥控家电 蓝牙WIFI 儿童故事 闹钟 音响',
        market_price: 119,
        sell_price: 99,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/54163/18/2064/275948/5cfdceb2E9864fa42/498ccb6980c8e854.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/83050/36/1496/374058/5cfdceb2Ef6c1fda2/b33363bf19046941.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/70284/21/1765/328927/5d00b337Ebee72721/dd34f894c6251007.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/71013/11/1701/116805/5d00b337Ef08b7c6f/0705eaefe48e07d5.jpg">
        `
    },
    {
        id: 107,
        add_time: 1614409297873,
        goods_no: 108,
        stock_quantity: 321,
        title: '米家 小米电热水壶烧水壶1A 304不锈钢 1.5L大容量 MJDSH02YM',
        market_price: 99,
        sell_price: 79,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/159266/5/4939/342276/60114a4fE45025422/6b1ba155c50c9cbc.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/95758/28/15605/336219/5e749727E2f870811/6f94cf23ecc93539.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/107138/22/9482/193392/5e749727E36637fac/5f2ffa02d28ca0ba.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/109704/7/9453/153900/5e749727Ee84ff6a1/a4b5b0bec3b546b6.jpg">
        `
    },
    {
        id: 108,
        add_time: 1614409297973,
        goods_no: 109,
        stock_quantity: 5555,
        title: '九号平衡车 白色 体感智能骑行 遥控漂移电动九号平衡车 超长续航',
        market_price: 2199,
        sell_price: 1999,
        content: `
            <img src="https://img30.360buyimg.com/sku/jfs/t1/123128/2/7907/189603/5f1ab673Ee277072f/a75f244d68076755.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/135690/40/5251/172033/5f1ab673Ea39a7135/80c685f05246b4e9.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/134053/13/5335/122458/5f1ab673E7219238d/11fb7db06083eb4d.jpg">
            <img src="https://img30.360buyimg.com/sku/jfs/t1/142547/20/3692/186357/5f1ab673E76bdfaa4/5bd94249d67a2f8c.jpg">
        `
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
        if(matchArr[0] == CommentsData[i].id) {
            const pageNum = (CommentsData[i].message.length) % 3 == 0 ? (CommentsData[i].message.length) / 3 : parseInt((CommentsData[i].message.length) / 3) + 1;
            if(matchArr[1] <= pageNum) {
                const num = 3 * matchArr[1];
                let resultArr = [CommentsData[i].message[num - 3]];
                for(let j = 2; CommentsData[i].message[num - j] && j >= 1; j--) {
                    resultArr = resultArr.concat(CommentsData[i].message[num - j])
                }
                return {
                    status: 0,
                    message: resultArr
                }
            }
        }
    }
    return {
        status: 0,
        message: []
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/postcomment\/\d+/, 'post', function (options) {
    const arg = options.body.split('&');
    const len = arg.length;
    const comsLen = CommentsData.length;
    const arr = options.url.split('/');
    const id = arr[arr.length - 1];
    let argArr = [];
    for(let i = 0; i < len; i++) {
        argArr.push(arg[i].split('=')[1])
    }
    for(let i = 0; i < comsLen; i++) {
        if(CommentsData[i].id == id) {
            CommentsData[i].message.unshift({
                user_name: decodeURIComponent(argArr[0]),
                add_time: Number(argArr[1]),
                content: argArr[2]
            }) 
            break;
        }
    }
    return {
        status: 0
    }
})
Mock.mock('http://vue-shopping-mall/data/getimgcategory', 'get', ImgCategoryData)
Mock.mock(/http:\/\/vue-shopping-mall\/data\/getimages\/\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    const match = regex.exec(options.url);
    let arr = [];
    if(match[0] == 0) {
        arr = AllImageData
    } else if (match[0] == 14) {
        arr = HouseholdImageData
    }
    return {
        status: 0,
        message: arr
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/getimageInfo\/\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    const match = regex.exec(options.url);
    const len = ImagesInfoData.length;
    for(let i = 0; i < len; i++) {
        if(ImagesInfoData[i].id == match[0]) {
            return {
                status: 0,
                message: ImagesInfoData[i].message
            }
        }
    }
    return {
        status: 0,
        message: []
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/getthumbsimages\/\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    const match = regex.exec(options.url);
    const len = ThumbsImagesData.length;
    for(let i = 0; i < len; i++) {
        if(ThumbsImagesData[i].id == match[0]) {
            return {
                status: 0,
                message: ThumbsImagesData[i].message
            }
        }
    }
    return {
        status: 0,
        message: []
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/getgoods\?pageindex=\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    const match = regex.exec(options.url);
    const len = GoodsData.length;
    const pageNum = len % 6 == 0 ? len / 6 : parseInt(len / 6) + 1;
    if(match[0] <= pageNum) {
        const num = 6 * match[0];
        let resultArr = [GoodsData[num - 6]];
        for(let j = 5; GoodsData[num - j] && j >= 1; j--) {
            resultArr = resultArr.concat(GoodsData[num - j])
        }
        return {
            status: 0,
            message: resultArr
        }
    }
    return {
        status: 0,
        message: []
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/goods\/getinfo\/\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    const match = regex.exec(options.url);
    const len = GoodsInfoData.length;
    for(let i = 0; i < len; i++) {
        if(GoodsInfoData[i].id == match[0]) {
            return {
                status: 0,
                message: [GoodsInfoData[i]]
            }
        }
    }
    return {
        status: 0,
        message: []
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/goods\/getdesc\/\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    const match = regex.exec(options.url);
    const len = GoodsInfoData.length;
    for(let i = 0; i < len; i++) {
        if(GoodsInfoData[i].id == match[0]) {
            return {
                status: 0,
                message: [GoodsInfoData[i]]
            }
        }
    }
    return {
        status: 0,
        message: []
    }
})
Mock.mock(/http:\/\/vue-shopping-mall\/data\/goods\/getshopcarlist\/[\d+,]*\d+/, 'get', function (options) {
    const regex = /[\d]+/g;
    let matchArr = [];
    let match;
    let result;
    while((match = regex.exec(options.url)) != null) {
        matchArr = matchArr.concat(match)
    }
    result = GoodsData.filter(goodsitem => {
        let flag = false;
        matchArr.some(item => {
            if(goodsitem.id == item) {
                flag = true
                return true;
            }
        })
        return flag
    })
    return {
        status: 0,
        message: result
    }
})