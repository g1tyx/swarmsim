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
    ', ': '，',
    '.': '。',
    //标点符号结束
    
    //主界面等
    'Swarm Simulator': '模拟虫群',
    'Close': '关闭',
    'Oh no! There was a problem loading your saved game. ': '载入游戏时发生错误。',
    'This is a bug.': '这可能是由于BUG引起的。',
    'Here\'s your saved game data. ': '以下是您的存档数据。',
    'Save this': '请妥善保管',
    'once the bug is fixed, you can import this to restore your game.': '当BUG修复以后，您可以导入此数据来恢复进度。',
    'The error message was': '错误消息为',
    'Please ': '请',
    'report this bug': '上报此BUG',
    '. Thanks!': '。感谢您！',
    'Oh no! There was a problem loading your saved game.': '载入游戏时发生错误。',
    'Please make sure ': '请确保',
    ' has permission to set cookies/localstorage in your browser.': '可以在浏览器中存储cookies或本地存储。',
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
    'You found the debug page! Too bad it only works in the development build.': '您发现了DEBUG界面！很遗憾它只能在开发版本中使用。',
    'We\'re moving to ': '英文原版最新地址为',
    '. If your saved game wasn\'t copied, this page will help.': '。如果您的存档未被复制过来，可以使用此页面来完成。',
    'Copy your saved game to www.swarmsim.com': '将旧存档复制到www.swarmsim.com(与汉化版无关)',
    'Or, export your saved game data below': '或者您也可以复制下方的存档数据',
    //主界面等结束

    //购买相关
    'Can\'t buy': '无法购买',
    ' Can\'t buy ': ' 无法购买 ',
    ' will cost ': '需花费',
    ' and ': '及',
    'Upgrades': '升级',
    'Hide upgrade': '隐藏升级',
    'Never notify': '永不提醒',
    'Notify when buyable': '当可购买时提醒',
    'Notify at 2× cost': '当2倍成本时提醒',
    'Notify at 4× cost': '当4倍成本时提醒',
    'This': '此',
    'Next': '下一个',
    ' upgrade costs ': '升级花费',
    'Abilities': '能力',
    ' This ability costs ': '此能力每次使用花费',
    ' per use. ': '。',
    //购买相关结束

    //PlayFab相关
    'Log in': '登录',
    'Sign up': '注册',
    'Forgot password': '忘记密码',
    'Email': '电子邮箱地址',
    'Recovery email sent.': '已发送找回密码的邮件。',
    'Send recovery email': '发送邮件找回密码',
    'Password': '密码',
    'Remember me': '记住登录信息',
    'Forgot your password?': '忘记了密码吗？',
    'Logout': '注销',
    'Auto-export every 15 minutes and before closing': '在游戏运行时，每15分钟自动导出至在线存储',
    'Export online saved data': '导出存档至在线存储',
    'Check for new online saved data': '检查新的在线存储数据',
    'No online saved data yet.': '暂无在线存储数据。',
    'Import online saved data (replaces your current game': '从在线存储数据中导入存档(将覆盖现有存档',
    'Delete online saved data': '删除在线存储数据',
    'Will not auto-export online': '无法自动导出至在线存储',
    ' because nothing\'s changed since the last export': '，因为数据与上次导出存档没有任何区别',
    ' because this is a new game': '，因为您才刚开始游戏',
    ' because the online save is newer than the one you\'re playing': '因为在线存储的数据比您目前游玩的存档数据要更加新',
    'We\'ll only send you account recovery/lost password emails.': '我们只会向您发送找回密码的邮件。',
    'Passwords do not match.': '密码错误。',
    ' Sync saved data with other devices ': ' 与其他设备同步存储数据 ',
    //PlayFab相关结束

    //选项
    'Options': '选项',
    ' Show advanced unit data ': ' 显示高级单位数据',
    'Show more detailed numbers for each of your units, and allow customizing when each upgrade notifier appears.': '显示每个单位更详细的数据，并且可以自定义每个升级提醒的出现方式。',
    ' Maximum frames per second': ' 每秒最大帧数',
    ' Automatic': ' 自动调整',
    'About ': '约',
    'Reduce this setting if the game is slowing down your computer. This doesn\'t affect gameplay; your units won\'t produce resources any faster or slower.': '如果此游戏使电脑的运行速度变慢了，可以减少此项的数值。调整帧数不会影响产量。',
    ' Number format': ' 数字格式',
    'Standard decimal ': '标准十进制',
    'legend': '说明',
    'Scientific-E': '科学记数法',
    'Hybrid': '混合',
    'Engineering': '工程记数法',
    'Standard-decimal suffixes': '十进制数字相关后缀',
    'Based on ': '(由于技术原因，后缀无法汉化，如果看不懂的话，请换成科学计数法)基于',
    'this list': '此清单',
    'Value': '数值',
    'Short suffix': '短后缀',
    'Long suffix': '长后缀',
    ' Velocity format': ' 速度格式',
    ' Duration format': ' 时间格式',
    'Exact': '精确',
    'Approximate': '近似',
    ' Theme ': ' 主题样式 ',
    'Default white': '默认白色',
    'cerulean': '深蓝',
    'cosmo': '宇宙',
    'cyborg': '半机械',
    'darkly': '黑暗',
    'flatly': '平淡',
    'journal': '日报',
    'lumen': '流明',
    'paper': '纸张',
    'readable': '易读',
    'sandstone': '砂石',
    'simplex': '极简',
    'slate': '石板',
    'spacelab': '太空实验室',
    'superhero': '超级英雄',
    'united': '联合',
    'yeti': '雪人',
    'Custom style': '自定义样式',
    'Additional styling (advanced': '额外样式(高级设置',
    'Current theme': '目前主题样式',
    'CSS file URL: (': 'CSS文件地址：(',
    'Reset': '重置',
    'Theme set.': '主题样式已重置。',
    'Set theme': '设置主题样式',
    'Clear all extra styling/graphics': '清除所有额外的样式/图像',
    ' to save space.': '以节省空间。',
    'Apply': '应用',
    ' Import/export saved data': ' 导入/导出存储数据',
    'To export, click the text above and ': '想要导出的话，请点击上方的文本并进行',
    'copy': '复制',
    ' (ctrl-c). To import, click the text and paste (ctrl-v) your exported data.': '(ctrl-c)。想要导入的话，请点击上方的文本并将您的存储数据粘贴进去(ctrl-v)。',
    'It\'s normal for imported saves to have more units than you exported with. Your swarm continues its work even after saved data is exported/before it\'s imported.': '一般来说，导入以后都会比导入时拥有更多的单位。因为您的虫群在此期间仍然在辛勤工作着。',
    ' Where is Swarm Simulator\'s data saved? ': '模拟虫群的数据保存在哪里？',
    'Swarm Simulator saves your progress in your browser\'s localstorage, cookies, and Flash (SWF) storage. Your saved game will be loaded if it\'s found in any one of these sources. This is done to avoid accidentally losing your saved data; it\'s not intended to track you or otherwise invade your privacy. The \'wipe all saved data\' button below will clear all three storage locations.': '模拟虫群在本地存储，cookies和Flash (SWF) 存储上存储数据。只要在任何一处找到了存储数据，就可以载入存档。这么做是为了防止丢失数据，并非是为了侵犯隐私之类的。下方的“清除所有存储数据”按钮将清除这三个地方的所有相关数据。',
    ' storage': '存储',
    'local': '本地',
    'empty': '空',
    ' Wipe all saved data and start over ': '清除所有存储数据并重新开始',
    ' Analytics': ' 分析',
    'Swarm Simulator, like many websites, uses Google Analytics to track actions you take while playing. We use this data to improve the game. Feel free to ': '模拟虫群跟很多其他网站一样，使用了谷歌分析来收集游戏行为数据。我们将使用这些数据来改进游戏。您当然也可以自行',
    'opt out of Google Analytics': '停用谷歌分析',
    'How Google uses data when you use our partners\' sites or apps': '谷歌将如何使用相关数据',
    //选项结束

    //成就
    ' achievement points': ' 成就点数',
    'Show ': '显示',
    'earned': '已获得',
    'unearned': '未获得',
    'masked': '未解锁',
    ' achievements, sorted by ': '的成就，排序方式为',
    'default': '默认',
    '% complete': '完成率',
    'highest first': '从高到低',
    'lowest first': '从低到高',
    'Your achievements grant a ': '您的成就使幼虫产量获得了',
    ' bonus to larva production.': '的加成。',
    //成就结束

    //数据统计
    'Statistics': '数据统计',
    'unit': '单位',
    'first bought': '首次购买时间',
    'clicks': '点击次数',
    'bought manually': '手动购买数量',
    'twins': '双重倍率后数量',
    ' No units purchased. ': '未购买任何单位。',
    'upgrade': '升级',
    'total bought': '总购买数量',
    ' No upgrades purchased. ': '未购买任何升级。',
    'save file size': '存储文件大小',
    'start date': '起始日期',
    'last ascended': '最近一次飞升日期',
    'never': '未曾',
    //数据统计结束

    //更新日志
    'Patch Notes': '补丁更新说明',
    'Swarm Simulator is open source. See the ': '模拟虫群属于开源软件，查阅',
    'source code repository': '源代码仓库',
    //更新日志结束

    //联系作者
    'Contact the Swarm Simulator developer': '联系模拟虫群的开发者',
    'Posting': '发帖',
    ' on the ': '于',
    'Swarm Simulator subreddit': 'Reddit的模拟虫群子版块',
    ' is the best way to reach the developer! I read everything written there, even if I don\'t always reply.': '是联系开发者最好的途径！我会阅读所有的帖子，但不一定会回复。',
    'Did you play on the old website, swarmsim.github.io, and you\'re looking for your saved progress?': '您是否在旧网站swarmsim.github.io下玩过游戏，并想把存档转移过来？',
    'Did you lose your saved progress some other way?': '您是否由于某些原因而丢失了存档？',
    'Email the developer?': '需要向作者发送电子邮件吗？',
    'Please email me if you\'re having trouble with a crystal purchase, or if you\'re reporting an exploitable bug.': '如果您无法完成水晶购买，或者是发现了可能被恶意利用的BUG，请通过电子邮件联系我。',
    'For most other topics, ': '对于其他的情况，',
    'I probably won\'t reply. Please post on Reddit instead.': '我可能不会回复，请在Reddit上发帖。',
    'Swarm Simulator is run in one human\'s free time. I love you and your feedback, I really do - but email is stressful, and takes more of my limited time than you think. The Reddit community really is very helpful!': '模拟虫群只是我利用业余时间完成的作品。我当然希望获得您的反馈，真的——但电子邮件会让人紧张，会花掉我更多的时间。Reddit社区真的帮了我很多！',
    //联系作者结束

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
    /^\s\d+(e\.\,\d+)?[A-Za-z]{0,4}(.*)$/, //处理数字及单位
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
    /^(.*)的(.*)$/, //不抓取的内容
    /^最大(.*)$/, //不抓取的内容
    /^最多(.*)$/, //不抓取的内容
    /^\s?您(.*)$/, //不抓取的内容
    /^(.*)秒\s?$/, //不抓取的内容
    /^(.*)分\s?$/, //不抓取的内容
    /^(.*)时\s?$/, //不抓取的内容
    /^(.*)日\s?$/, //不抓取的内容
    /^(.*)跃迁\s?$/, //不抓取的内容
    /^(.*)加成$/, //不抓取的内容
    /^(.*)倍率$/, //不抓取的内容
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