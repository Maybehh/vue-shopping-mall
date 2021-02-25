import Mock from 'mockjs'

const data = {
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


Mock.mock('http://getSlideshow', 'get', data)
