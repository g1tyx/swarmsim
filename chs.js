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
    ' More... ': '更多……',
    ' Undo ': ' 撤销',
    ' Options ': ' 选项',
    ' Achievements ': ' 成就',
    ' Statistics ': ' 数据统计',
    ' Patch Notes ': ' 补丁更新说明',
    ' Community ': ' 玩家社区',
    ' Send Feedback ': ' 提交反馈',
    ' Report Problem ': ' 报告问题',
    ' Show all units ': ' 显示所有单位',
    'Open the meat tab': '打开肉面板',
    'Open the larva tab': '打开幼虫面板',
    'Open the territory tab': '打开领土面板',
    'Open the energy tab': '打开能量面板',
    'Open the mutagen tab': '打开突变原面板',
    'Open the all-units tab': '打开所有单位面板',
    'Open the options screen': '打开选项界面',
    'Open the achievements screen': '打开成就界面',
    'Open the statistics screen': '打开统计数据界面',
    'Open the patch notes screen': '打开补丁更新说明界面',
    'Undo the last action': '撤销最近的操作',
    'Buy all available upgrades': '购买所有的升级',
    'Buy cheapest available upgrades': '购买便宜的升级',
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
    'Welcome to Swarm Simulator. Starting with just a few larvae and a small pile of meat, grow a massive swarm of giant bugs.': '欢迎来到模拟虫群。开局只有几只幼虫和一小堆肉，带领它们一步步走向伟大的虫群吧。',
    'Your brood starts its life with a small pile of meat and a single larva-producing hatchery. Larvae mutate into other units. Begin your growth by using your meat and larvae to hatch some ': '您的种族开局只有一小堆肉和一个产生幼虫的孵化场。幼虫可以突变为其他单位。请先使用肉和幼虫来孵化一些',
    'drones': '工蜂',
    'You lead a small brood of worker drones. Drones gather meat. Use this meat to build more drones and expand your brood.': '您领导着一小群工蜂。工蜂可以收集肉。使用它们收集到的肉来孵化更多工蜂，壮大您的种群。',
    'You lead a small brood of worker drones. Once you have plenty of meat, upgrade your hatchery to produce more larvae by selecting \'': '您领导着一小群工蜂。当您拥有足够的肉以后，选择',
    'larvae': '幼虫',
    '\' and spending some meat.': '并花费相应的肉，以升级您的孵化场。',
    'A ': '一个',
    ' appears when you have enough meat to upgrade your hatchery.': '图标将在您有足够的肉升级孵化场时出现。',
    'You lead a small brood of worker drones. They long for a ': '您领导着一小群工蜂。它们渴望拥有一位',
    'queen': '虫后',
    '. You must sacrifice many drones to hatch a queen, but once born, your queen will slowly hatch drones without consuming meat or larvae.': '。您必须牺牲许多工蜂才能孵化一位虫后，虫后可以缓慢地孵化工蜂，并且不需要消耗肉或者幼虫。',
    'Hatch more queens to grow your swarm. Hatching drones with the "Twin Drones" upgrade will allow you to rapidly raise more queens.': '孵化更多的虫后来壮大您的虫群。进行“双重工蜂”升级后，孵化工蜂将更有效率，使您可以更快地孵化虫后。',
    'Queens have rapidly grown your swarm, and your growth demands more ': '虫后使您的虫群快速增长，因此，您需要更多的',
    'territory': '领土',
    '. Begin capturing ': '。开始孵化军事单位以占领',
    ' by building military units - swarmlings or stingers.': '吧————跳虫或者兵蜂都可以。',
    'Your warriors have slowly begun securing territory. Continue expanding your military.': '您的战士们开始缓慢地占领领土了。请继续扩张军队。',
    'Your warriors have captured a lot of territory, and soon you can secure your first expansion. Expansions increase larva production. Select \'': '您的战士们占领了大量领土，您可以进行扩张了。扩张后幼虫产量将增加。请选择',
    '\' to expand.': '来进行扩张。',
    'Expansion is the key to growing your swarm rapidly. Build a large military to expand your territory and produce more larvae. Build more queens and, eventually, nests to produce more meat for your military.': '扩张是壮大虫群的不二法门。建立一支大军来占领更多领土，产生更多幼虫。同时，孵化更多虫后，以及之后的虫巢等可以产生更多的肉来供养军队。',
    'Your swarm has grown large enough to ': '您的虫群已经大到可以进行',
    'ascend': '飞升',
    ' - gain even greater power and restart on a new world! Take a look at the ': '了————可以获得更强大的力量，并在一个新的世界重新开始！看看',
    'mutagen tab': '突变原面板吧',
    'Congratulations on your first ascension! Mutations can make your swarm much more powerful. Mutagen you haven\'t spent yet will produce some larvae - don\'t spend it all right away!': '恭喜您完成了首次飞升！突变使您的虫群变得更加强大。还未花费的突变原可以产生一些幼虫————所以别马上把突变原一口气全花完了！',
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

    //单位相关
    'Meat is delicious. All of your swarm\'s creatures eat meat.': '肉相当美味可口。虫群中的所有生物都吃肉。',
    'The children of your swarm. These young creatures morph into other adult units.': '虫群的幼生体。它们可以进化成其他的成熟单位。',
    'Drones are the lowest class of worker in your swarm. They continuously gather meat to feed your swarm.': '工蜂是虫群最基础的工人单位。它们持续收集肉以维持虫群的温饱。',
    'Queens rule over your swarm\'s workers.': '虫后管理着虫群的工人。',
    'Nests provide space and support for your swarm\'s queens.': '虫巢为虫后提供空间和支持。',
    'Your first nest will take a long time to regenerate the queens sacrificed to build it. Consider hatching more queens first.': '首次建造虫巢后需要很长的时间才能补回花费的虫后。请先考虑孵化更多的虫后吧。',
    'Greater queens rule over the lesser queens of very large swarms.': '大虫后管理着较大的虫群中低阶的虫后。',
    'Your first few greater queens will take a long time to regenerate the nests sacrificed to build them. Consider building more nests first.': '首次孵化大虫后后需要很长的时间才能补回花费的虫巢。请先考虑建造更多的虫巢吧。',
    'Hives are huge structures crafted from meat and the bodies of thousands of queens. They allow your swarm to grow even faster.': '主巢由大量肉和虫后构建而成。它们可以使虫群更快地成长。',
    'Your first few hives will take a long time to regenerate the greater queens sacrificed to build them. Consider hatching more greater queens first.': '首次建造主巢后需要很长的时间才能补回花费的大虫后。请先考虑孵化更多的大虫后吧。',
    'Hive queens oversee the production of hives in the largest swarms.': '主巢虫后监管着最大的虫群中主巢的生产流程。',
    'Your first few hive queens will take a long time to regenerate the hives sacrificed to build them. Consider building more hives first.': '首次孵化主巢虫后后需要很长的时间才能补回花费的主巢。请先考虑建造更多的主巢吧。',
    'The mightiest creature to rule over your swarm so far.': '目前为止最强大的虫群管理者。',
    'Your prophets foresee the guidance of a higher power, a greater being - yet, the heavens have fallen silent.': '您的先知们预见到了一个更加强大，更加伟大的存在，它正在指引着您————诸天俱寂。',
    'Neurons are the building blocks of a greater hive intelligence.': '主巢神经元是更强大的主巢心智的组成部分。',
    'Groups of neurons begin to exert mild psychic powers, influencing the minds of lesser creatures in your swarm.': '成团成簇的主巢神经元开始使用温和的精神力来影响虫群中更低阶的生物。',
    'Networking your hive\'s neurons allows them to coordinate their actions, much as a single entity would.': '主巢神经元开始形成网络，这使它们的步调更加一致，更像是一个整体了。',
    'Your neural networks have finally formed a single greater intelligence, primitive though it may be. The psychic powers of lesser hive minds are great enough to directly control several hundred lesser members of your swarm.': '主巢网络终于形成了强大的主巢心智。尽管它还比较幼小，但小主巢心智的精神力足以直接控制虫群中极大量的低阶生物',
    'Mature hive minds control thousands of lesser members of your swarm, and their capacity for intelligent planning is dramatically improved.': '成熟的主巢心智可以控制虫群中更多的低阶生物，而且它们智能规划的能力也大大提升了。',
    'Multiple hive minds merge their collective consciousness into a single greater being.': '大量主巢心智将它们的意识融合到了一起，形成了更强大的存在。',
    'The Overmind psychically controls the actions of every member of your swarm, including all of the lesser hive minds. Building more physical manifestations of the Overmind merely increases its influence; all belong to the same being, the same greater intelligence. Your swarm now exists to serve the will of its Overmind.': '主宰可以操控虫群的一切，包括所有主巢心智。建造更多的主宰只是让它变得更加强大，但主宰只有一个。您的虫群从现在起为主宰而生。',
    'Eternity lies ahead of us, and behind. Have you drunk your fill?': '您的身前和身后都是永恒。您满足了吗？',
    'Your swarm\'s smallest and weakest warriors. They use their teeth and claws to attack foes, and can be vicious in large numbers.': '虫群最小，也是最弱的战士。它们使用爪子和利齿攻击敌人，成群结队时相当凶猛。',
    'Weak flying warriors. They roam in packs, attacking any threats with venomous stingers.': '弱小的飞行战士。它们成群结队行动，使用毒刺攻击敌人。',
    'Terrifying eight-legged beasts who leap upon their prey, ensnare it in sticky traps, and finally liquify it into a delicious beverage.': '可怕的八脚野兽，它们会扑向猎物，将猎物用丝包裹，最后把猎物变为美味的饮料。',
    'These hated creatures feast on the blood of their victims, and spread disease to larger prey they cannot kill outright.': '这些讨厌的生物会享用猎物的血液，对于更大的猎物，虽然无法杀死对方，但还会向对方传播疾病。',
    'Groups of hungry locusts devour any creature that makes the mistake of standing in their way.': '饥饿的蝗虫群将吞噬任何不小心挡在它们面前的生物。',
    'The hard shell of the roach makes it a fearsome opponent; it is nearly impossible to kill.': '没有谁想要面对可怕的蟑螂，它们的外壳太坚硬了，几乎无法被杀死。',
    'The larger, and more fearsome, cousin of the arachnomorph.': '蜘蛛的表亲，更大，更可怕。',
    'Swift wormlike creatures with hundreds of legs and an extremely venomous bite.': '迅捷的百足虫，口器中有剧毒。',
    'An advanced cousin of the stinger, wasps are far more aggressive and much better hunters.': '兵蜂的高级表亲，黄蜂更凶猛，更强大。',
    'Huge burrowing worms, devourers appear from beneath the earth to swallow their prey before it can react.': '吞噬者是巨大的埋地蠕虫，它们从地底接近猎物，并在猎物还没反应过来之前就将其吞噬。',
    'Goons cannot fly on their own, but instead use metal to construct powerful flying exoskeletons that rule the skies.': '暴徒自己无法飞行，但它们使用金属构造了强大的飞行装甲，这使它们成为了天空之主。',
    'Allows your larvae to encase themselves within cocoons. Cocooned larvae cannot mutate into other units, and can still be cloned by Clone Larvae. You may cocoon and uncocoon your larvae whenever you wish.': '使幼虫可以进行结茧。虫茧状态下的幼虫无法突变为其他单位，但仍然可以被克隆幼虫克隆。您可以在任意时刻结茧或破茧。',
    'Drones gather more meat.': '工蜂可以收集更多肉。',
    'Queens produce more drones.': '虫后可以产生更多工蜂。',
    'Nests produce more queens.': '虫巢可以产生更多虫后。',
    'Greater queens produce more nests.': '大虫后可以产生更多虫巢。',
    'Hives produce more greater queens.': '主巢可以产生更多大虫后。',
    'Hive queens produce more hives.': '主巢虫后可以产生更多主巢。',
    'Hive empresses produce more hive queens.': '主巢女皇可以产生更多主巢虫后。',
    'Neuroprophets produce more hive empresses.': '神经元先知可以产生更多主巢女皇。',
    'Hive neurons produce more neuroprophets.': '主巢神经元可以产生更多神经元先知。',
    'Neural clusters produce more hive neurons.': '神经元簇可以产生更多主巢神经元。',
    'Hive networks produce more neural clusters.': '主巢网络可以产生更多神经元簇。',
    'Lesser hive minds produce more hive networks.': '小主巢心智可以产生更多主巢网络。',
    'Hive minds produce more lesser hive minds.': '主巢心智可以产生更多小主巢心智。',
    'Arch-minds produce more hive minds.': '高级心智可以产生更多主巢心智。',
    'Overminds produce more arch-minds.': '主宰可以产生更多高级心智。',
    'Overmind IIs produce more overminds.': '主宰 II可以产生更多主宰。',
    'Overmind IIIs produce more overmind IIs.': '主宰 III可以产生更多主宰 II。',
    'Overmind IVs produce more overmind IIIs.': '主宰 IV可以产生更多主宰 III。',
    'Overmind Vs produce more overmind IVs.': '主宰 V可以产生更多主宰 IV。',
    'Overmind VIs produce more overmind Vs.': '主宰 VI可以产生更多主宰 V。',
    'Multiple drones hatch from each larva. (This does not affect queen production.': '每只幼虫可以孵化更多工蜂。(不影响虫后产量。',
    'Multiple queens hatch from each larva. (This does not affect nest production.': '每只幼虫可以孵化更多虫后。(不影响虫巢产量。',
    'Multiple nests are constructed from each larva. (This does not affect greater queen production.': '每只幼虫可以建造更多虫巢。(不影响大虫后产量。',
    'Multiple greater queens hatch from each larva. (This does not affect hive production.': '每只幼虫可以孵化更多大虫后。(不影响主巢产量。',
    'Multiple hives are constructed from each larva. (This does not affect hive queen production.': '每只幼虫可以建造更多主巢。(不影响主巢虫后产量。',
    'Multiple hive queens hatch from each larva. (This does not affect hive empress production.': '每只幼虫可以孵化更多主巢虫后。(不影响主巢女皇产量。',
    'Multiple hive empresses hatch from each larva. (This does not affect neuroprophet production.': '每只幼虫可以孵化更多主巢女皇。(不影响神经元先知产量。',
    'Multiple neuroprophets hatch from each larva. (This does not affect hive neuron production.': '每只幼虫可以孵化更多神经元先知。(不影响主巢神经元产量。',
    'Multiple hive neurons are created from each larva. (This does not affect neural cluster production.': '每只幼虫可以产生更多主巢神经元。(不影响神经元簇产量。',
    'Multiple neural clusters are created from each larva. (This does not affect hive network production.': '每只幼虫可以产生更多神经元簇。(不影响主巢网络产量。',
    'Multiple hive networks are created from each larva. (This does not affect lesser hive mind production.': '每只幼虫可以产生更多主巢网络。(不影响小主巢心智产量。',
    'Multiple lesser hive minds are created from each larva. (This does not affect hive mind production.': '每只幼虫可以产生更多小主巢心智。(不影响主巢心智产量。',
    'Multiple hive minds are created from each larva. (This does not affect arch-mind production.': '每只幼虫可以产生更多主巢心智。(不影响高级心智产量。',
    'Multiple arch-minds are created from each larva. (This does not affect overmind production.': '每只幼虫可以产生更多高级心智。(不影响主宰产量。',
    'Multiple overminds are created from each larva. (This does not affect overmind II production.': '每只幼虫可以产生更多主宰。(不影响主宰 II产量。',
    'Multiple overmind IIs are created from each larva. (This does not affect overmind III production.': '每只幼虫可以产生更多主宰 II。(不影响主宰 III产量。',
    'Multiple overmind IIIs are created from each larva. (This does not affect overmind IV production.': '每只幼虫可以产生更多主宰 III。(不影响主宰 IV产量。',
    'Multiple overmind IVs are created from each larva. (This does not affect overmind V production.': '每只幼虫可以产生更多主宰 IV。(不影响主宰 V产量。',
    'Multiple overmind Vs are created from each larva. (This does not affect overmind VI production.': '每只幼虫可以产生更多主宰 V。(不影响主宰 VI产量。',
    'Multiple overmind VIs are created from each larva.': '每只幼虫可以产生更多主宰 VI。',
    'Multiple swarmlings hatch from each larva.': '每只幼虫可以孵化更多跳虫。',
    'Multiple stingers hatch from each larva.': '每只幼虫可以孵化更多兵蜂。',
    'Multiple arachnomorphs hatch from each larva.': '每只幼虫可以孵化更多蜘蛛。',
    'Multiple culicimorphs hatch from each larva.': '每只幼虫可以孵化更多蚊子。',
    'Multiple locusts hatch from each larva.': '每只幼虫可以孵化更多蝗虫。',
    'Multiple roaches hatch from each larva.': '每只幼虫可以孵化更多蟑螂。',
    'Multiple giant arachnomorphs hatch from each larva.': '每只幼虫可以孵化更多巨蜘蛛。',
    'Multiple chilopodomorphs hatch from each larva.': '每只幼虫可以孵化更多蜈蚣。',
    'Multiple wasps hatch from each larva.': '每只幼虫可以孵化更多黄蜂。',
    'Multiple devourers hatch from each larva.': '每只幼虫可以孵化更多吞噬者。',
    'Multiple goons hatch from each larva.': '每只幼虫可以孵化更多暴徒。',
    'Build your first nexus, which generates energy and allows you to cast basic spells.': '建造第一个枢纽，它可以产生能量，并使您可以施放基础法术。',
    'Build your second nexus, which generates more energy and unlocks several more special abilities.': '建造第二个枢纽，它可以产生更多能量，并解锁更多的特殊能力。',
    'Build your third nexus, generating even more energy and unlocking more advanced spells.': '建造第三个枢纽，它可以产生更多能量，并解锁更高级的法术。',
    'Build your fourth nexus, generating even more energy and unlocking some of the most advanced spells available to your swarm.': '建造第四个枢纽，它可以产生更多能量，并解锁最高级的法术。',
    'Build your fifth and final nexus. All spells and abilities are unlocked. Your spellcasters cannot channel energy from more than five nexus; this is the limit of their power.': '建造第五个，也是最后一个枢纽。所有的法术和特殊能力都解锁了。您的施法者们无法再从更多的枢纽中获取能量，这超过了他们的能力范围。',
    ' achievement points ': '成就点数',
    'achievement points': '成就点数',
    'Each cocoon is a larva encased within a protective shell. Larvae can freely enter and leave their cocoons, but cannot be transformed into other units while cocooned.': '每个虫茧中都有一只幼虫。幼虫可以随时结茧和破茧，结茧时无法转化成其他单位。',
    'Clone Larvae clones cocoons as if they were normal larvae. Cocoon your larvae intended for cloning to avoid accidentally spending them.': '克隆幼虫时可以连着虫茧中的幼虫一起克隆。因此，您可以将想要克隆的幼虫结茧，以避免意外将它们花费在其他地方。',
    'Hide chart': '隐藏图表',
    'Bats empower all of your swarm\'s energy-based abilities.': '蝙蝠可以强化虫群所有能量相关的能力。',
    ' Please log in to buy crystals: More... > Options ': '请登录后再购买水晶：更多……>选项',
    //单位相关结束

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
    'Examples': '例如',
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
    'Finish the tutorial': '完成教程',
    'tutorial complete': '教程完毕',
    'Create your first expansion': '首次升级扩张',
    'two base play': '分基地',
    'vast expanse': '广袤无垠',
    'infestation': '感染蔓延',
    'creepy': '菌毯集群',
    'no vacancy': '虫满为患',
    'diminishing returns': '收益递减',
    'we have become as a vapor': '我等已经汽化',
    'imperialus conceptus': '帝国元年',
    'manifest destiny': '昭昭天命',
    'Hatch your first drone': '首次孵化工蜂',
    'a good start': '开门红',
    'supply limit exceeded': '突破补给上限',
    '"exponential" growth': '“指数”增长',
    'Drones hatched by queens don\'t count.': '由虫后孵化的工蜂不计入。',
    'Hatch your first queen': '首次孵化虫后',
    'queen me': '升变为后',
    'is this the real life?': 'Is This the Real Life?(皇后乐队名曲)',
    'don\'t stop me now': 'Don\'t Stop Me Now(皇后乐队名曲)',
    'Queens hatched by nests don\'t count.': '由虫巢孵化的虫后不计入。',
    'Build your first nest': '首次建造虫巢',
    'I wanna be the very nest': '做到最好的巢(宝可梦梗)',
    'to hatch them is my real test': '孵化它们是我的试炼(宝可梦梗)',
    'final nesting place': '理想乡终至',
    'Hatch your first greater queen': '首次孵化大虫后',
    'some are born great': '虫与虫的差距有时候就是这么大',
    'catherine': '叶卡捷琳娜大帝',
    'greater and greater': '越来越大',
    'Build your first hive': '首次建造主巢',
    'we\'ll do it hive': '巢然物外',
    'breaking out': '大爆发',
    'hive mind': '主巢心智',
    'Hatch your first hive queen': '首次孵化主巢虫后',
    'too many kinds of queens': '有这么多种虫后的吗',
    'or just too many queens': '还是说虫后太多了',
    'no more queens, honest': '后面不会再有虫后了，真的',
    'Grow your first hive empress': '首次产生主巢女皇',
    'queen of queens': '王中王，皇中皇',
    'wu zetian': '武曌，武则天',
    'matriarchy': '母系社会',
    'Grow your first neuroprophet': '首次产生神经元先知',
    '1. collect larvae': '1、产生幼虫',
    '2. ?': '2、？',
    '3. prophet': '3、先知',
    'Grow your first hive neuron': '首次产生主巢神经元',
    'neurogenesis': '神经元发生',
    'new neurons': '新的神经元',
    'neuronerd': '神经元怪人',
    'Grow your first neural cluster': '首次产生神经元簇',
    'nucleus': '核心',
    'ganglion': '神经节',
    'cluster-something': '聚集成簇',
    'Grow your first hive network': '首次产生主巢网络',
    'arpanet': '阿帕网',
    'backpropagation': '反向传播',
    'nydus': '虫群坑道',
    'Grow your first lesser hive mind': '首次产生小主巢心智',
    'do you mind?': '您很有兴致？',
    'lesser is morer': '虽次亦佳',
    'lord have mercy': '此即主之行至',
    'Grow your first hive mind': '首次产生主巢心智',
    'one of us': '合而为一',
    'groupthink': '集体审议',
    'swarm intelligence': '群体智慧',
    'Grow your first arch-mind': '首次产生高级心智',
    'ante meridiem': '高尚心灵',
    'archery': '位高权重',
    'cerebration time': '脑虫庆典',
    'Grow your first overmind': '首次产生主宰',
    'awaken, my child': 'Awaken, my child(星际争霸1的隐藏歌曲)',
    'how ya like my groove?': 'How ya like my groove?(星际争霸1的隐藏歌曲)',
    'well done!': 'Well done!(星际争霸1的隐藏歌曲)',
    'Grow your first overmind II': '首次产生主宰 II',
    'transcendent thought': '思维超越',
    'Grow your first overmind III': '首次产生主宰 III',
    'Grow your first overmind IV': '首次产生主宰 IV',
    'Grow your first overmind V': '首次产生主宰 V',
    'Grow your first overmind VI': '首次产生主宰 VI',
    'Ascend once': '飞升1次',
    'betcha can\'t beat just one': '我敢保证您不会只飞升这么1次的',
    'third time\'s the charm': '三顾茅庐',
    'interplanetary infestation': '星际感染',
    'reseterrific': '重置为乐',
    'prestigious': '转生达人',
    'Unlock your first mutation': '解锁第一种变异',
    'cowabunga!': 'Cowabunga!(忍者神龟主角的口头禅)',
    'intelligent design': '智能设计',
    'unnatural selection': '物竞虫择',
    'a bath, ur': '阝可巴瑟',
    'rush': '冲冲冲，速攻',
    'metabolic boost': '代谢增强',
    'adrenal glands': '肾上腺素',
    'Swarmlings hatched by nexus abilities don\'t count.': '由枢纽能力孵化的跳虫不计入。',
    'beekeeper': '养蜂人',
    'to bee or not to bee': '兵蜂的哲学',
    'waxing poetic': '蜂言蜂语',
    'Stingers hatched by nexus abilities don\'t count.': '由枢纽能力孵化的兵蜂不计入。',
    'with great power': '能力越大',
    'the amazing spider': '超凡蜘蛛',
    'how do i shot web': '蛛丝该怎么射',
    'Arachnomorphs hatched by nexus abilities don\'t count.': '由枢纽能力孵化的蜘蛛不计入。',
    'sparkly': '亮闪闪',
    'west nile': '西尼罗病毒',
    'this achievement sucks': '还在吸？这个成就真是烂透了',
    'Culicimorphs hatched by nexus abilities don\'t count.': '由枢纽能力孵化的飞蚊不计入。',
    'shadow over egypt': '埃及蝗灾',
    'stalemate': '僵持不下',
    'trypophobia': '密集恐惧症',
    'Locusts hatched by nexus abilities don\'t count.': '由枢纽能力孵化的蝗虫不计入。',
    'roach coach': '蟑螂馆子',
    'roach clips': '蟑螂镊子',
    'papa': '蟑螂老爹',
    'Roaches hatched by nexus abilities don\'t count.': '由枢纽能力孵化的蟑螂不计入。',
    'with greater power': '能力更大',
    'whatever a spider can': '蜘蛛尽力而为',
    'and I\'m just sitting here': '而我只是坐在一边',
    'Giant Arachnomorphs hatched by nexus abilities don\'t count.': '由枢纽能力孵化的巨蜘蛛不计入。',
    'centipede': '蜈蚣',
    'millipede': '千足虫',
    'missile command': '导弹指令',
    'Chilopodomorphs hatched by nexus abilities don\'t count.': '由枢纽能力孵化的蜈蚣不计入。',
    'aldrin': '奥尔德林',
    'lightyear': '光年',
    'kill': '扫兴',
    'Wasps hatched by nexus abilities don\'t count.': '由枢纽能力孵化的黄蜂不计入。',
    'these things fly, right?': '那些玩意是飞着的，对吧？',
    'or do they burrow?': '等等，它们是埋地的？',
    'sometimes they drain energy': '有时候它们还要消耗能量',
    'Devourers hatched by nexus abilities don\'t count.': '由枢纽能力孵化的吞噬者不计入。',
    'new year\'s': '新年前',
    'adam and': '无眠之',
    'all hallows\'': '万圣节前',
    'Goons hatched by nexus abilities don\'t count.': '由枢纽能力孵化的暴徒不计入。',
    'Build 1 nexus': '建造1个枢纽',
    'phenomenal cosmic power': '寰宇之力，震慑古今',
    'Build 5 nexus': '建造5个枢纽',
    'power overwhelming': '势不可挡',
    'Find the Patch Notes': '发现补丁更新说明',
    'patchy knowledge': '帕秋莉·诺蕾姬(谐音梗',
    'Don\'t take any books, please.': 'X理沙不要再来偷书了。',
    'Import your saved game': '导入存储数据',
    'portable swarm': '掌上虫群',
    'Click this achievement\'s slot': '点击此成就的方框',
    'since you asked nicely': '既然你诚心诚意的发问了',
    'Enter the Konami Code': '输入Konami秘籍(上上下下左右左右BABA)',
    'Find the debug page': '发现DEBUG页面',
    'even de bugs have bugs': '即使是那里也有BUG',
    'Ask the right question': '问了正确的问题',
    'signs point to yes': '回答是肯定的',
    'The secret\'s out - read it on /r/swarmsim': '秘密已经揭晓————在/r/swarmsim的reddit子版块下查看吧',
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
    'Added keyboard shortcuts throughout the game. Press \'?\' for a list of shortcuts.': '在游戏中添加了快捷键。按?键就可以查看快捷键清单了。',
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
    'Swarm Simulator is run in one human\'s free time. I love you and your feedback, I really do - but email is stressful, and takes more of my limited time than you think. The Reddit community really is very helpful!': '模拟虫群只是我利用业余时间完成的作品。我当然希望获得您的反馈，真的————但电子邮件会让人紧张，会花掉我更多的时间。Reddit社区真的帮了我很多！',
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
    /^(.*)[\u4E00-\u9FFF]+(.*)$/, //不抓取内容
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
    [/^Have (.+) expansions at once$/, '同时进行过$1次扩张'],
    [/^Hatch (.+) drones$/, '孵化$1单位 工蜂'],
    [/^Build (.+) nests$/, '建造$1单位 虫巢'],
    [/^Hatch (.+) greater queens$/, '孵化$1单位 大虫后'],
    [/^Build (.+) hives$/, '建造$1单位 主巢'],
    [/^Hatch (.+) hive queens$/, '孵化$1单位 主巢虫后'],
    [/^Hatch (.+) queens$/, '孵化$1单位 虫后'],
    [/^Grow (.+) hive empresses$/, '产生$1单位 主巢女皇'],
    [/^Grow (.+) neuroprophets$/, '产生$1单位 神经元先知'],
    [/^Grow (.+) hive neurons$/, '产生$1单位 主巢神经元'],
    [/^Grow (.+) neural clusters$/, '产生$1单位 神经元簇'],
    [/^Grow (.+) hive networks$/, '产生$1单位 主巢网络'],
    [/^Grow (.+) lesser hive minds$/, '产生$1单位 小主巢心智'],
    [/^Grow (.+) hive minds$/, '产生$1单位 主巢心智'],
    [/^Grow (.+) arch-minds$/, '产生$1单位 高级心智'],
    [/^Grow (.+) overminds$/, '产生$1单位 主宰'],
    [/^Grow (.+) overmind IIs$/, '产生$1单位 主宰 II'],
    [/^Grow (.+) overmind IIIs$/, '产生$1单位 主宰 III'],
    [/^Grow (.+) overmind IVs$/, '产生$1单位 主宰 IV'],
    [/^Grow (.+) overmind Vs$/, '产生$1单位 主宰 V'],
    [/^Grow (.+) overmind VIs$/, '产生$1单位 主宰 VI'],
    [/^Ascend (.+) times$/, '飞升$1次'],
    [/^Unlock (.+) mutations$/, '解锁$1种变异'],
    [/^Hatch (.+) swarmlings$/, '孵化$1单位 跳虫'],
    [/^Hatch (.+) stingers$/, '孵化$1单位 兵蜂'],
    [/^Hatch (.+) giant arachnomorphs$/, '孵化$1单位 巨蜘蛛'],
    [/^Hatch (.+) arachnomorphs$/, '孵化$1单位 蜘蛛'],
    [/^Hatch (.+) culicimorphs$/, '孵化$1单位 飞蚊'],
    [/^Hatch (.+) locusts$/, '孵化$1单位 蝗虫'],
    [/^Hatch (.+) roaches$/, '孵化$1单位 蟑螂'],
    [/^Hatch (.+) chilopodomorphs$/, '孵化$1单位 蜈蚣'],
    [/^Hatch (.+) wasps$/, '孵化$1单位 黄蜂'],
    [/^Hatch (.+) devourers$/, '孵化$1单位 吞噬者'],
    [/^Hatch (.+) goons$/, '孵化$1单位 暴徒'],
    [/^ Buy (.+) crystals for (.+)$/, '购买$1水晶，需花费$2'],
]);