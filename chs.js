/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //标点符号
    '.': '。',
    //标点符号结束
    
    //主界面等
    'Swarm Simulator': '模拟虫群',
    'Close': '关闭',
    'Oh no! There was a problem loading your saved game.': '载入游戏时发生错误。',
    'This is a bug.': '这可能是由于BUG引起的。',
    'Here\'s your saved game data. ': '以下是您的存档数据。',
    'Save this': '请妥善保管',
    'once the bug is fixed, you can import this to restore your game.': '当BUG修复以后，您可以导入此数据来恢复进度。',
    'The error message was': '错误消息为',
    'Please ': '请',
    'report this bug': '上报此BUG',
    '. Thanks!': '。感谢您！',
    'Please make sure ': '请确保',
    ' has permission to set cookies/localstorage in your browser.': '可以在浏览器中存储cookies或localstorage。',
    'This problem usually happens when your browser is ': '这通常是由于您的浏览器',
    'blocking third-party cookies': '阻止了第三方cookies',
    '. Swarm Simulator needs this storage to save your game. It\'s not doing anything evil, I promise.': '。模拟虫群需要获得许可才可以进行存储，它并不作其他用途。',
    'If you think this is a bug, you can ': '如果您觉得这是BUG，您可以',
    'report it': '上报它',
    'Oh no! There was a problem saving your game.': '保存游戏时发生错误。',
    'Here\'s the data we tried to save. You can import this through the ': '以下是您尝试保存的存档数据。您可以通过',
    'options screen': '选项界面进行导入',
    'Exciting changes are coming to Swarm Simulator soon!': '模拟虫群喜迎新变化！',
    'Insects are too icky, so we\'re changing our name. Also, we\'ll require graphics to play.': '虫子们太不招人喜欢，所以我们准备把名字全给换了。另外，我们也希望这个游戏有图像。',
    'Try out the upcoming changes now!': '现在就尝试一下新的变化吧！',
    'Swarm Simulator is now Kitten Klicker!': '模拟虫群变成了喵拟喵群！',
    'Insects were too icky, so we\'ve changed our name. Also, we now require graphics to play. Thanks to ': '虫子们太不招人喜欢，所以我们把名字全给换了。另外，这个游戏也有图像了。感谢',
    ' for providing graphics. Enjoy the new game!': '提供图像。享受崭新的游戏吧！',
    'Click here if you hate kittens, you monster.': '如果您竟然会讨厌喵星人的话，就点这里吧，愚蠢的蓝星人。',
    'I hope you enjoyed yesterday\'s April Fools joke!': '希望您喜欢昨天的愚人节玩笑！',
    'Click here to keep the kitten pictures.': '点击此处可以保留喵星人的图像。',
    ' To remove them later, go to the options screen and click "Clear all extra styling/graphics".': '如果您之后想要移除它们，只需进入选项界面，点击“清除所有额外的样式/图像”即可。',
    'Achievement': '获得成就',
    '': '',
    '': '',
    //主界面等结束

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "：",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "：",
    "： ": "：",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s\d+(e\.\,\d+)+(.*)$/, //处理数字及单位
    /^打开微信扫一扫$/, //不抓取的内容
    /^点击加群$/, //不抓取的内容
    /^更多同类游戏$/, //不抓取的内容
    /^关注公众号$/, //不抓取的内容
    /^旧版$/, //不抓取的内容
    /^论坛$/, //不抓取的内容
    /^Git游戏$/, //不抓取的内容
    /^QQ群号$/, //不抓取的内容
    /^帮助(.*)$/, //不抓取的内容
    /^(.*)\{(.+)\}(.*)$/, //不抓取内容
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.d+)Just make up for the space(\d+)$/, '纯举例用意'],
]);