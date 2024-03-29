/*
 * @Date: 2023-11-24 11:12:32
 * @Description: description
 */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-swiper';

const Stack = createStackNavigator();
export default () => {
  return (
    <View>
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          
        部编版七年级（上） 01 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《观沧海》（必背） 东汉·曹操 东临碣石，以观沧海。
        水何澹澹，山岛竦峙。 树木丛生，百草丰茂。 秋风萧瑟，洪波涌起。
        日月之行，若出其中； 星汉灿烂，若出其里。 幸甚至哉，歌以咏志。 02
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《闻王昌龄左迁龙标遥有此寄》（必背） 唐·李白
        杨花落尽子规啼，闻道龙标过五溪。 我寄愁心与明月，随风直到夜郎西。 03
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《次北固山下》（必背） 唐·王湾 客路青山外，行舟绿水前。
        潮平两岸阔，风正一帆悬。 海日生残夜，江春入旧年。
        乡书何处达，归雁洛阳边。 04 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《天净沙·秋思》（必背） 元·马致远
        枯藤老树昏鸦，小桥流水人家， 古道西风瘦马。夕阳西下，断肠人在天涯。 05
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《论语·十二则》（全文必背）
        学而时习之；吾日三省吾身；吾十有五而志于学；温故而知新；学而不思则罔；贤哉回也；知之者不如好之者；不义而富且贵；三人行；子在川上曰；三军可夺帅也；博学而笃志
        部编版七年级（下） 06 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《木兰辞》（全文必背） 北朝民歌（节选）
        唧唧复唧唧，木兰当户织。不闻机杼声，唯闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。雄兔脚扑朔，雌兔眼迷离。双兔傍地走，安能辨我是雄雌。……
        07 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《陋室铭》（全文必背） 唐·刘禹锡
        山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：“何陋之有？”
        08 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《爱莲说》（全文必背） 宋·周敦颐（节选）
        水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊。自李唐来，世人甚爱牡丹。予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。……
        09 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《登幽州台歌》（必背） 唐·陈子昂 前不见古人，后不见来者。
        念天地之悠悠，独怆然而涕下。 010 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《望岳》（必背） 唐·杜甫
        岱宗夫如何？齐鲁青未了。 造化钟神秀，阴阳割昏晓。
        荡胸生曾云，决眦入归鸟。 会当凌绝顶，一览众山小。 011
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《登飞来峰》（必背） 宋·王安石 飞来山上千寻塔，闻说鸡鸣见日升。
        不畏浮云遮望眼，自缘身在最高层。 012 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《游山西村》（必背） 宋·陆游
        莫笑农家腊酒浑，丰年留客足鸡豚。 山重水复疑无路，柳暗花明又一村。
        萧鼓追随春社近，衣冠简朴古风存。 从今若许闲乘月，拄杖无时夜叩门。 013
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《己亥杂诗》（必背） 清·龚自珍 浩荡离愁白日斜，吟鞭东指即天涯。
        落红不是无情物，化作春泥更护花。 014 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《河中石兽》（全文必背） 清·纪昀
        “凡河中失石，当求之于上流。盖石性坚重，沙性松浮，水不能冲石，其反激之力，必于石下迎水处啮沙为坎穴，渐激渐深，至石之半，石必倒掷坎穴中。如是再啮，石又再转，转转不已，遂反溯流逆上矣。
        求之下流，固颠；求之地中，不更颠乎？”如其言，果得于数里外。然则天下之事，但知其一，不知其二者多矣，可据理臆断欤？
        部编版八年级（上） 015 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《三峡》（全文必背） 南北朝·郦道元（节选）
        自三峡七百里中，两岸连山，略无阙处。重岩叠嶂，隐天蔽日。自非亭午夜分，不见曦月。
        每至晴出霜旦，林寒涧肃，常有高猿长啸，属引凄异，空谷传响，哀转久绝。故渔者歌曰:“巴东三峡巫峡长，猿鸣三声泪沾裳。”……
        016 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《答谢中书书》（全文必背） 南朝·陶弘景
        山川之美，古来共谈。高峰入云，神流见底。两岸石壁，五色交辉。青林翠竹,四时俱备。晓雾将歇,微猿鸟乱鸣；夕日欲颓，沉麟竞跃。实是欲界之仙都。自康乐以来，未复有能与其奇者。
        017 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《记承天寺夜游》（全文必背） 宋·苏轼
        元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。
        庭下如积水空明，水中藻、荇交横，盖竹柏影也。何夜无月？何处无竹柏？但少闲人如吾两人者耳。
        018 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《与朱元思书》（全文必背） 南北朝·吴均
        风烟俱净，天山共色。从流飘荡，任意东西。自富阳至桐庐一百许里，奇山异水，天下独绝。
        水皆缥碧，千丈见底。游鱼细石，直视无碍。急湍甚箭，猛浪若奔。
        夹岸高山，皆生寒树，负势竞上，互相轩邈，争高直指，千百成峰。泉水激石，泠泠作响；好鸟相鸣，嘤嘤成韵。蝉则千转不穷，猿则百叫无绝。鸢飞戾天者，望峰息心；经纶世务者，窥谷忘反。横柯上蔽，在昼犹昏；疏条交映，有时见日。
        019 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《野望》（新增必背） 唐·王绩 东皋薄暮望， 徙倚欲何依。 树树皆秋色，
        山山唯落晖。 牧人驱犊返， 猎马带禽归。 相顾无相识， 长歌怀采薇。 020
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《黄鹤楼》（必背） 唐·崔颢 昔人已乘黄鹤去，此地空余黄鹤楼。
        黄鹤一去不复返，白云千载空悠悠。 晴川历历汉阳树，芳草萋萋鹦鹉洲。
        日暮乡关何处是？烟波江上使人愁。 021 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《使至塞上》（必背） 唐·王维
        单车欲问边，属国过居延， 征蓬出汉塞，归雁入胡天，
        大漠孤烟直，长河落日圆。 萧关逢侯骑，都护在燕然。 022
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《渡荆门送别》（必背） 唐·李白 渡远荆门外，来从楚国游。
        山随平野尽，江入大荒流。 月下飞天镜，云生结海楼。
        仍怜故乡水，万里送行舟。 023 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《钱塘湖春行》（必背） 唐·白居易
        孤山寺北贾亭西，水面初平云脚低。 几处早莺争暖树，谁家新燕啄春泥。
        乱花渐欲迷人眼，浅草才能没马蹄。 最爱湖东行不足，绿杨阴里白沙堤。 024
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《孟子·富贵不能淫》（全文必背）
        景春曰："公孙衍、张仪岂不诚大丈夫哉？一怒而诸侯惧，安居而天下熄。"
        孟子曰："是焉得为大丈夫乎？子未学礼乎？丈夫之冠也，父命之；女子之嫁也，母命之，往送之门，戒之曰：'往之女家，必敬必戒，无违夫子！'以顺为正者，妾妇之道也。居天下之广居，立天下之正位，行天下之大道；得志，与民由之；不得志，独行其道。富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫。"
        025 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《孟子·生于忧患》（全文必背）
        舜发于畎亩之中，傅说举于版筑之间，胶鬲举于鱼盐之中，管夷吾举于士，孙叔敖举于海，百里奚举于市。故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。
        人恒过，然后能改；困于心，衡于虑，而后作；征于色，发于声，而后喻。入则无法家拂士，出则无敌国外患者，国恒亡。
        然后知生于忧患而死于安乐也。 026 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《愚公移山》（全文背诵） 先秦·列御寇
        （节选） 太行、王屋二山，方七百里，高万仞，本在冀州之南，河阳之北。
        北山愚公者，年且九十，面山而居。惩山北之塞，出入之迂也。聚室而谋曰：“吾与汝毕力平险，指通豫南，达于汉阴，可乎？”杂然相许。……
        027 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《饮酒》（必背） 东晋·陶渊明 结庐在人境，而无车马喧。
        问君何能尔，心远地自偏。 采菊东篱下，悠然见南山。
        山气日夕佳，飞鸟相与还。 此中有真意，欲辨已忘言。 028 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《春望》（必背）
        唐·杜甫 国破山河在， 城春草木深。 感时花溅泪， 恨别鸟惊心。 烽火连三月，
        家书抵万金。 白头搔更短， 浑欲不胜簪。 029 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《雁门太守行》（必背）
        唐·李贺 黑云压城城欲摧， 甲光向日金鳞开。 角声满天秋色里，
        塞上燕脂凝夜紫。 半卷红旗临易水， 霜重鼓寒声不起。 报君黄金台上意，
        提携玉龙为君死。 030 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《赤壁》（必背） 唐·杜牧
        折戟沉沙铁未销，自将磨洗认前朝。 东风不与周郎便，铜雀春深锁二乔。 031
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《渔家傲》（必背） 宋·范仲淹 塞下秋来风景异，衡阳雁去无留意。
        四面边声连角起，千嶂里，长烟落日孤城闭。
        浊酒一杯家万里，燕然未勒归无计。
        羌管悠悠霜满地，人不寐，将军白发征夫泪。 部编版八年级（下） 032
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《桃花源记》节选（全文必背） 东晋·陶渊明
        土地平旷，屋舍俨然，有良田美池桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。……
        033 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《小石潭记》节选（全文必背） 唐·柳宗元
        从小丘西行百二十步，隔篁竹，闻水声，如鸣珮环，心乐之。伐竹取道，下见小潭，水尤清冽。
        全石以为底，近岸，卷石底以出，为坻，为屿，为嵁，为岩。青树翠蔓，蒙络摇缀，参差披拂。……
        034 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《诗经·关雎》节选（全文必背）
        关关雎鸠，在河之洲。窈窕淑女，君子好逑。
        参差荇菜，左右流之。窈窕淑女，寤寐求之。…… 035
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《诗经·蒹葭》节选（全文必背） 蒹葭苍苍，白露为霜。所谓伊人，在水一方。
        溯洄从之，道阻且长。溯游从之，宛在水中央。…… 036
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《庄子·北冥有鱼》节选（全文必背）
        北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏，鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。……
        037 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《礼记·虽有嘉肴》（全文必背）
        虽有嘉肴，弗食，不知其旨也。虽有至道，弗学，不知其善也。是故学然后知不足，教然后知困。知不足，然后能自反也；知困，然后能自强也。故曰：教学相长也。<View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《兑命》曰：学学半。其此之谓乎？
        038 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《礼记·大道之行也》（新增必背）
        大道之行也，天下为公，选贤与能，讲信修睦。故人不独亲其亲，不独子其子，使老有所终，壮有所用，幼有所长，矜、寡、孤
        、独、废疾者皆有所养，男有分，女有归。货恶其弃于地也，不必藏于己；力恶其不出于身也，不必为己。是故谋闭而不兴，盗窃乱贼而不作，故外户而不闭，是谓大同。
        039 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《马说》（全文必背） 唐·韩愈
        世有伯乐，然后有千里马。千里马常有，而伯乐不常有。故虽有名马，祇辱于奴隶人之手，骈死于槽枥之间，不以千里称也。　
        马之千里者，一食或尽粟一石。食马者不知其能千里而食也。是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？
        策之不以其道，食之不能尽其材，鸣之而不能通其意，执策而临之，曰：“天下无马！”呜呼！其真无马邪？其真不知马也。
        040 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《卖炭翁》（全文必背） 唐·白居易
        卖炭翁，伐薪烧炭南山中。满面尘灰烟火色，两鬓苍苍十指黑。卖炭得钱何所营？身上衣裳口中食。可怜身上衣正单，心忧炭贱愿天寒。
        夜来城外一尺雪，晓驾炭车辗冰辙。牛困人饥日已高，市南门外泥中歇。翩翩两骑来是谁？黄衣使者白衫儿。手把文书口称敕，回车叱牛牵向北。一车炭，千余斤，宫使驱将惜不得。半匹红绡一丈绫，系向牛头充炭直。
        部编版九年级（上） 041 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《岳阳楼记》节选（全文必背） 宋·范仲淹
        嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰：“先天下之忧而忧，后天下之乐而乐”乎。噫！微斯人，吾谁与归？
        042 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《醉翁亭记》节选（全文必背） 宋·欧阳修（节选）
        环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺而泻出于两峰之间者，酿泉也。
        峰回路转，有亭翼然临于泉上者，醉翁亭也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。
        043 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《湖心亭看雪》（必背） 明·张岱
        崇祯五年十二月，余住西湖。大雪三日，湖中人鸟声俱绝。是日更定矣，余拏一小舟，拥毳衣炉火，独往湖心亭看雪。
        雾凇沆砀，天与云与山与水，上下一白。湖上影子，惟长堤一痕、湖心亭一点，与余舟一芥、舟中人两三粒而已。
        到亭上，有两人铺毡对坐，一童子烧酒炉正沸。见余，大喜曰：“湖中焉得更有此人！”拉余同饮。余强饮三大白而别。问其姓氏，是金陵人，客此。及下船，舟子喃喃曰：“莫说相公痴，更有痴似相公者！”
        044 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《茅屋为秋风所破歌》（全文必背） 唐·杜甫
        八月秋高风怒号，卷我屋上三重茅。
        茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。
        南村群童欺我老无力，忍能对面为盗贼。
        公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。
        俄顷风定云墨色，秋天漠漠向昏黑。 布衾多年冷似铁，娇儿恶卧踏里裂。
        床头屋漏无干处，雨脚如麻未断绝。 自经丧乱少睡眠，长夜沾湿何由彻！
        安得广厦千万间，大庇天下寒士俱欢颜！ 风雨不动安如山。
        呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！ 045
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《酬乐天扬州初逢席上见赠》（必背） 唐·刘禹锡
        巴山楚水凄凉地，二十三年弃置身。 怀旧空吟闻笛赋，到乡翻似烂柯人。
        沉舟侧畔千帆过，病树前头万木春。 今日听君歌一曲，暂凭杯酒长精神。 046
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《水调歌头》（全文必背） 宋·苏轼
        明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
        转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
        部编版九年级（下） 047 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《孟子》节选（全文必背）
        鱼，我所欲也；熊掌，亦我所欲也；二者不可得兼，舍鱼而取熊掌者也。生，亦我所欲也；义，亦我所欲也。二者不可得兼，舍生而取义者也。……
        048 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《唐雎不辱使命·战国策》节选（全文必背）
        秦王使人谓安陵君曰：“寡人欲以五百里之地易安陵，安陵君其许寡人！”安陵君曰：“大王加惠，以大易小，甚善；虽然，受地于先王，愿终守之，弗敢易！”秦王不说。安陵君因使唐雎使于秦。
        049 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《送东阳马生序》节选（全文必背） 明·宋濂
        同舍生皆被绮绣，戴朱缨宝饰之帽，腰白玉之环，左佩刀，右备容臭，烨然若神人；余则缊袍敝衣处其间，略无慕艳意。以中有足乐者，不知口体之奉不若人也。盖余之勤且艰若此。……
        050 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《渔家傲》（全文必背） 北宋·范仲淹
        塞下秋来风景异，衡阳雁去无留意。四面边声连角起。千嶂里，长烟落日孤城闭。浊酒一杯家万里，燕然未勒归无计。羌管悠悠霜满地。人不寐，将军白发征夫泪。
        051 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《江城子·密州出猎》（必背） 宋·苏轼
        老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。
        酒酣胸胆尚开张，鬓微霜，又何妨？持节云中，何日遣冯唐。会挽雕弓如满月，西北望，射天狼。
        052 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《破阵子》（必背） 宋·辛弃疾
        醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。沙场秋点兵。马作的卢飞快，弓如霹雳弦惊。了却君王天下事，赢得生前身后名。可怜白发生！
        053 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《满江红》节选（必背） 秋瑾
        小住京华，早又是，中秋佳节。为篱下，黄花开遍，秋容如拭。四面歌残终破楚，八年风味徒思浙。
        苦将侬，强派作娥眉，殊未屑！身不得，男儿列。心却比，男儿烈！算平生肝胆，因人常热。俗子胸襟谁识我？
        054 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《曹刿论战·左转》节选（全文必背） 先秦·左丘明
        既克，公问其故。对曰：“夫战，勇气也。一鼓作气，再而衰，三而竭。彼竭我盈。故克之。夫大国难测也，惧有伏焉。吾视其辙乱，望其旗靡，故逐之。”
        055 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《出师表》节选（全文必背） 两汉·诸葛亮
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志土之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
        056 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《邹忌讽齐王纳谏》节选（全文必背） 两汉·刘向
        臣诚知不如徐公美。臣之妻私臣，臣之妾畏臣，臣之客欲有求于臣，皆以美于徐公。今齐地方千里，百二十城，宫妇左右莫不私王，朝廷之臣莫不畏王，四境之内不有求于王：由此观之，王之蔽甚矣。
        057 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《十五从军征》（必背） 汉乐府 十五从军征，八十始得归。
        道逢乡里人：家中有阿谁？ 遥看是君家，松柏冢累累。
        兔从狗窦入，雉从梁上飞。 中庭生旅谷，井上生旅葵。
        舂谷持作饭，采葵持作羹。 羹饭一时熟，不知贻阿谁！
        出门东向看，泪落沾我衣。 058 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《白雪歌送武判官归京》（必背） 唐·岑参
        北风卷地白草折，胡天八月即飞雪。 忽如一夜春风来，千树万树梨花开。
        散入珠帘湿罗幕，狐裘不暖锦衾薄。 将军角弓不得控，都护铁衣冷难着。
        瀚海阑干百丈冰，愁云惨淡万里凝。 中军置酒饮归客，胡琴琵琶与羌笛。
        纷纷暮雪下辕门，风掣红旗冻不翻。 轮台东门送君去，去时雪满天山路。
        山回路转不见君，雪上空留马行处。 059 <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《南乡子》（必背） 宋·辛弃疾
        何处望神州？满眼风光北固楼。 千古兴亡多少事？悠悠。不尽长江滚滚流。
        年少万兜鍪，坐断东南战未休。 天下英雄谁敌手？曹刘。生子当如孙仲谋。 060
        <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#f90' }}><Text>8</Text></View>《过零丁洋》（必背） 南宋·文天祥 辛苦遭逢起一经，干戈寥落四周星。
        山河破碎风飘絮，身世浮沉雨打萍。 惶恐滩头说惶恐，零丁洋里叹零丁。
        人生自古谁无死，留取丹心照汗青。
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
