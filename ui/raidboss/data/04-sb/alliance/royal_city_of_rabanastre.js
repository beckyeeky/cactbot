import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

export default {
  zoneId: ZoneId.TheRoyalCityOfRabanastre,
  timelineNeedsFixing: true,
  timelineFile: 'royal_city_of_rabanastre.txt',
  triggers: [
    {
      id: 'Rab Mateus Aqua Sphere',
      netRegex: NetRegexes.startsUsing({ id: '2633', source: 'Mateus, The Corrupt', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2633', source: 'Mateus (?:der|die|das) Peiniger', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2633', source: 'Mateus Le Corrompu', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2633', source: '背徳の皇帝マティウス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2633', source: '背德皇帝马提乌斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2633', source: '배덕의 황제 마티우스', capture: false }),
      delaySeconds: 11,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Kill Aqua Spheres',
          de: 'Wasserkugeln zerstören',
          fr: 'Détruire les bulles d\'eau',
          ja: 'アクアスフィアを倒す',
          cn: '击杀水球',
          ko: '물 구체 죽이기',
        },
      },
    },
    {
      // Note: this could probably use |matches.count| directly instead of
      // using data.breathless to count the stacks.
      id: 'Rab Mateus Breathless Gain',
      netRegex: NetRegexes.gainsEffect({ effectId: '595' }),
      condition: Conditions.targetIsYou(),
      alarmText: (data, _matches, output) => {
        if (data.breathless === 6)
          return output.getInBubble();
      },
      infoText: (data, _matches, output) => {
        if (data.breathless >= 7)
          return output.breathless({ num: (data.breathless + 1) });
      },
      tts: (data, _matches, output) => {
        if (data.breathless === 6)
          return output.bubble();
      },
      run: (data) => {
        data.breathless = data.breathless | 0;
        data.breathless++;
      },
      outputStrings: {
        breathless: {
          en: 'Breathless: ${num}',
          de: 'Atemnot: ${num}',
          fr: 'Suffocation :${num}',
          ja: '呼吸困難 :${num}',
          cn: '窒息层数:${num}',
          ko: '호흡곤란: ${num}',
        },
        getInBubble: {
          en: 'Get In Bubble',
          de: 'Geh in die Blase',
          fr: 'Allez dans une bulle',
          ja: '泡に入る',
          cn: '进气泡',
          ko: '물방울 안으로',
        },
        bubble: {
          en: 'bubble',
          de: 'blase',
          fr: 'bulle',
          ja: '泡',
          cn: '进气泡',
          ko: '숨쉬어!',
        },
      },
    },
    {
      id: 'Rab Mateus Breathless Lose',
      netRegex: NetRegexes.losesEffect({ effectId: '595' }),
      condition: Conditions.targetIsYou(),
      run: (data) => data.breathless = 0,
    },
    {
      id: 'Rab Mateus Blizzard IV',
      netRegex: NetRegexes.startsUsing({ id: '263D', source: 'Mateus, The Corrupt', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '263D', source: 'Mateus (?:der|die|das) Peiniger', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '263D', source: 'Mateus Le Corrompu', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '263D', source: '背徳の皇帝マティウス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '263D', source: '背德皇帝马提乌斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '263D', source: '배덕의 황제 마티우스', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move To Safe Spot',
          de: 'Zur sicheren Zone',
          fr: 'Allez en zone sûre',
          ja: '安置へ',
          cn: '去安全点',
          ko: '안전 지대로 이동',
        },
      },
    },
    {
      id: 'Rab Hashmal Rock Cutter',
      netRegex: NetRegexes.startsUsing({ id: '25D7', source: 'Hashmal, Bringer Of Order' }),
      netRegexDe: NetRegexes.startsUsing({ id: '25D7', source: 'Hashmallim der Einiger' }),
      netRegexFr: NetRegexes.startsUsing({ id: '25D7', source: 'Hashmal Le Grand Ordonnateur' }),
      netRegexJa: NetRegexes.startsUsing({ id: '25D7', source: '統制者ハシュマリム' }),
      netRegexCn: NetRegexes.startsUsing({ id: '25D7', source: '统治者哈修马利姆' }),
      netRegexKo: NetRegexes.startsUsing({ id: '25D7', source: '통제자 하쉬말림' }),
      response: Responses.tankCleave(),

    },
    {
      id: 'Rab Hashmal Earth Hammer',
      netRegex: NetRegexes.startsUsing({ id: '25CB', source: 'Hashmal, Bringer Of Order', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '25CB', source: 'Hashmallim der Einiger', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '25CB', source: 'Hashmal Le Grand Ordonnateur', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '25CB', source: '統制者ハシュマリム', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '25CB', source: '统治者哈修马利姆', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '25CB', source: '통제자 하쉬말림', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move Away',
          de: 'Weg da',
          fr: 'Eloignez-vous',
          ja: 'ハンマーから離れる',
          cn: '远离大锤落点',
          ko: '기둥으로부터 피하기',
        },
      },
    },
    {
      id: 'Rab Hashmal Golems',
      netRegex: NetRegexes.startsUsing({ id: '25D4', source: 'Hashmal, Bringer Of Order', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '25D4', source: 'Hashmallim der Einiger', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '25D4', source: 'Hashmal Le Grand Ordonnateur', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '25D4', source: '統制者ハシュマリム', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '25D4', source: '统治者哈修马利姆', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '25D4', source: '통제자 하쉬말림', capture: false }),
      delaySeconds: 5,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Kill Golems',
          de: 'Golems töten',
          fr: 'Détruisez les golems',
          ja: 'ゴーレムを倒す',
          cn: '击杀小怪',
          ko: '골렘 죽이기',
        },
      },
    },
    {
      id: 'Rab Trash Dragon Voice',
      netRegex: NetRegexes.startsUsing({ id: 'D10', source: 'Archaeolion', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: 'D10', source: 'Archaeolöwe', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: 'D10', source: 'Archéochimère', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: 'D10', source: 'アルケオキマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: 'D10', source: '古奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: 'D10', source: '원시 키마이라', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Dragon Voice: Move In',
          de: 'Stimme Des Drachen: Rein',
          fr: 'Voix Du Dragon : Packez-vous',
          ja: '雷電の咆哮：中へ',
          cn: '雷电咆哮: 靠近',
          ko: '뇌전의 포효: 안으로',
        },
      },
    },
    {
      id: 'Rab Trash Ram Voice',
      netRegex: NetRegexes.startsUsing({ id: ['D0F', '273B'], source: 'Archaeolion', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['D0F', '273B'], source: 'Archaeolöwe', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['D0F', '273B'], source: 'Archéochimère', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['D0F', '273B'], source: 'アルケオキマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['D0F', '273B'], source: '古奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['D0F', '273B'], source: '원시 키마이라', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Ram Voice: Move Out',
          de: 'Stimme Des Widders: Raus',
          fr: 'Voix Du Bélier : Eloignez-vous',
          ja: '氷結の咆哮：外へ',
          cn: '寒冰咆哮: 远离',
          ko: '빙결의 포효: 바깥으로',
        },
      },
    },
    {
      id: 'Rab Rofocale Chariot',
      netRegex: NetRegexes.headMarker({ id: '0017' }),
      condition: Conditions.targetIsYou(),
      response: Responses.getIn(),
    },
    {
      id: 'Rab Rofocale Trample',
      netRegex: NetRegexes.startsUsing({ id: '2676', source: 'Rofocale', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2676', source: 'Rofocale', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2676', source: 'Rofocale Le Roi Centaure', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2676', source: '人馬王ロフォカレ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2676', source: '人马王洛弗卡勒', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2676', source: '인마왕 로포칼레', capture: false }),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Trample',
          de: 'Zertrampeln',
          fr: 'Fauchage',
          ja: '蹂躙',
          cn: '蹂躏',
          ko: '유린',
        },
      },
    },
    {
      id: 'Rab Argath Mask of Truth',
      netRegex: NetRegexes.ability({ source: 'Argath Thadalfus', id: '261A', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Argath Thadalfus', id: '261A', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Argath Thadalfus', id: '261A', capture: false }),
      netRegexJa: NetRegexes.ability({ source: '冷血剣アルガス', id: '261A', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '冷血剑阿加斯', id: '261A', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '냉혈검 아르가스', id: '261A', capture: false }),
      run: (data) => data.maskValue = true,
    },
    {
      id: 'Rab Argath Mask of Lies',
      netRegex: NetRegexes.ability({ source: 'Argath Thadalfus', id: '2619', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Argath Thadalfus', id: '2619', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Argath Thadalfus', id: '2619', capture: false }),
      netRegexJa: NetRegexes.ability({ source: '冷血剣アルガス', id: '2619', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '冷血剑阿加斯', id: '2619', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '냉혈검 아르가스', id: '2619', capture: false }),
      run: (data) => data.maskValue = false,
    },
    {
      id: 'Rab Argath Command Scatter',
      netRegex: NetRegexes.headMarker({ id: '007B' }),
      condition: Conditions.targetIsYou(),
      infoText: (data, _matches, output) => {
        if (data.maskValue)
          return output.move();

        return output.stop();
      },
      outputStrings: {
        move: {
          en: 'Move',
          de: 'Bewegen',
          fr: 'Bougez',
          ja: '動け',
          cn: '动起来',
          ko: '움직이기',
        },
        stop: {
          en: 'Stop',
          de: 'Stopp',
          fr: 'Stop',
          ja: '動くな',
          cn: '不要动',
          ko: '멈추기',
        },
      },
    },
    {
      id: 'Rab Argath Command Turn',
      netRegex: NetRegexes.headMarker({ id: '007C' }),
      condition: Conditions.targetIsYou(),
      infoText: (data, _matches, output) => {
        if (data.maskValue)
          return output.lookAway();

        return output.lookTowards();
      },
      outputStrings: {
        lookAway: {
          en: 'Look Away',
          de: 'Wegschauen',
          fr: 'Regardez ailleurs',
          ja: '見ない',
          cn: '背对BOSS',
          ko: '바라보지 말기',
        },
        lookTowards: {
          en: 'Look Towards',
          de: 'Anschauen',
          fr: 'Regardez le boss',
          ja: 'ボスを見る',
          cn: '面对BOSS',
          ko: '바라보기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'missingTranslations': true,
      'replaceSync': {
        'Archaeolion': 'Archaeolöwe',
        'Archaeodemon': 'Archaeodämon',
        'command tower': 'Kommandoturm',
        'I am Revelation': 'Seht die Offenbarung',
        'I am the truth from which you run': 'Die Maske zeigt euch die Macht des wahren Gottes! Fügt euch der Offenbarung!',
        'I am the lies upon which you sup': 'Die Maske zeigt euch die Macht des falschen Gottes! Fügt euch der Offenbarung!',
        'Mateus, The Corrupt': 'Mateus (?:der|die|das) Peiniger',
        'Argath Thadalfus': 'Argath Thadalfus',
        'Hashmal, Bringer Of Order': 'Hashmallim der Einiger',
        'Rofocale': 'Rofocale',
        'The heavens tremble in my wake': 'Mein Streitwagen donnert empor in luftige Höhen',
      },
      'replaceText': {
        '\\(misdirect\\)': '(fehlgeleitet)',
        '--face--': '--Gesicht--',
        '--ice disappears--': '--Eis verschwindet--',
        '--invulnerable--': '--unverwundbar--',
        '--lock out--': '--ausgesperrt--',
        '--meteors--': '--Meteore--',
        'Aqua Sphere Adds': 'Wasserblase Adds',
        'Archaeodemon Adds': 'Archaeodämon Adds',
        'Azure Guard Adds': 'Azurwächter Adds',
        'Blade, or putt putt': 'Schwert oder putt putt',
        'Blizzard IV': 'Eiska',
        'Chariot': 'Streitwagen',
        'Coldblood': 'Kaltblut',
        'Command Tower': 'Turmkommando',
        'Control Tower': 'Turmkontrolle',
        'Crippling Blow': 'Verkrüppelnder Schlag',
        'Crush Helm': 'Himmelsbombardement',
        'Crush Weapon': 'Jenseitsschrei',
        'Cry of Victory': 'Kampfruf',
        'Dark Geas': 'Dunkles Gelöbnis',
        'Earth Hammer': 'Erdhammer',
        'Embrace': 'Attacke',
        'Extreme Edge': 'Extremkante',
        'Fire IV': 'Feuka',
        'Frog Phase': 'Frisch Phase',
        'Frostwave': 'Polarlanze',
        'Gnawing Dread': 'Nagende Angst',
        'Golem Adds': 'Sandstein-Golem Adds',
        'Heavenly Subjugation': 'Himmelsgewalt',
        'Hole In One': 'Hole In One',
        'Ice Cone Phase': 'Eis-Flächen Phase',
        'Judgment': 'Aburteilung',
        'Landwaster': 'Landverwüster',
        'Line AOEs': 'Linien AoEs',
        'Maverick': 'Einzelgänger',
        'Pomp and Circumstance': 'Pauken und Trompeten',
        'Putt putt, or Blade': 'Putt putt oder Schwert',
        'Quake IV': 'Seiska',
        'Rock Cutter': 'Steinfräse',
        'Royal Blood': 'Blaues Blut',
        'Sand Sphere Adds': 'Sandwirbel Adds',
        'Shades Appear': 'Schatten erscheinen',
        'Shard Adds': 'Nichtskristall Adds',
        'Soulfix': 'Seelenspießer',
        'Stack Damage': 'Sammel-Schaden',
        'Submission Tower': 'Turmdivision',
        'Trample': 'Mariden-Stampfer',
        'Trepidation': 'Beklemmung',
        'Unbind': 'Loseisen',
        'Unrelenting': 'Unerbittliche Klinge',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Archaeodemon': 'archéodémon',
        'command tower': 'tour de commandement',
        'Mateus, The Corrupt': 'Mateus le Corrompu',
        'Argath Thadalfus': 'Argath Thadalfus',
        'Hashmal, Bringer Of Order': 'Hashmal le Grand Ordonnateur',
        'Rofocale': 'Rofocale le Roi centaure',
        'Archaeolion': 'archéochimère',
      },
      'replaceText': {
        'Blizzard IV': 'Giga Glace',
        'Chariot': 'Charge centaure',
        'Coldblood': 'Sang-froid',
        'Command Tower': 'Tour de commandement',
        'Control Tower': 'Tour de contrôle',
        'Crippling Blow': 'Coup handicapant',
        'Crush Helm': 'Bombardement céleste',
        'Crush Weapon': 'Cri de l\'au-delà',
        'Cry of Victory': 'Cri de triomphe',
        'Dark Geas': 'Invocation ténébreuse',
        'Earth Hammer': 'Marteau tellurique',
        'Embrace': 'Attaque',
        'Extreme Edge': 'Taille suprême',
        'Fire IV': 'Giga Feu',
        'Frostwave': 'Vague réfrigérante',
        'Gnawing Dread': 'Peur calamiteuse',
        'Heavenly Subjugation': 'Marche triomphale',
        'Judgment': 'Jugement',
        'Landwaster': 'Dislocation terrestre',
        'Maverick': 'Franc-tireur',
        'Pomp and Circumstance': 'La pompe et l’attirail',
        'Quake IV': 'Giga Séisme',
        'Rock Cutter': 'Trancheur rocheux',
        'Royal Blood': 'Sang royal',
        'Soulfix': 'Fixage d\'âme',
        'Submission Tower': 'Tour de soumission',
        'Trample': 'Martèlement pachydermique',
        'Trepidation': 'Trépidation',
        'Unbind': 'Délivrance',
        'Unrelenting': 'Déferlement',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Archaeodemon': 'アルケオデーモン',
        'command tower': '支配の塔',
        'Mateus, The Corrupt': '背徳の皇帝マティウス',
        'I am Revelation': '啓示を授けようッ！',
        'I am the truth from which you run': '「真なる神」の力を見せてやろうぞッ！\\s+朕の仮面の啓示に従え！！',
        'I am the lies upon which you sup': '「偽りの神」の力を見せてやろうぞッ！\\s+朕の仮面の啓示に従え！！',
        'Argath Thadalfus': '冷血剣アルガス',
        'Hashmal, Bringer Of Order': '統制者ハシュマリム ',
        'Rofocale': '人馬王ロフォカレ',
        'The Crumbling Bridge': '崩れかけた橋',
        'The heavens tremble in my wake': '我が戦車の車輪は、天をも駆ける！\\s+ゆくぞ……！',
        'The Lesalia Garden Ruins': 'ルザリア円庭跡',
        'The Lesalia Temple Ruins': 'ルザリア神殿跡',
        'The Palace Square': '王宮前広場',
        'Archaeolion': 'アルケオキマイラ',
      },
      'replaceText': {
        '--face--': '--向け--',
        '--ice disappears--': '--氷消える--',
        '--invulnerable--': '--インヴィンシブル--',
        '--lock out--': '--ロックオン--',
        '--meteors--': '--メテオ--',
        '\\(misdirect\\)': '(目押し)',
        'Aqua Sphere Adds': 'アクアスフィア',
        'Archaeodemon Adds': 'アルケオデーモン',
        'Azure Guard Adds': 'アズールガード',
        'Blade, or putt putt': '千手無双剣／喪失の恐怖',
        'Blizzard IV': 'ブリザジャ',
        'Chariot': '人馬戦車',
        'Coldblood': '冷血乱舞',
        'Command Tower(?! )': '支配の塔',
        'Command Tower Add': '支配の塔',
        'Control Tower': '統制の塔',
        'Crippling Blow': '痛打',
        'Crush Helm': '星天爆撃打',
        'Crush Weapon': '冥界恐叫打',
        'Cry of Victory': '鬨の声',
        'Dark Geas': '暗黒魔法陣',
        'Earth Hammer': '大地のハンマー',
        'Embrace': '攻撃',
        'Extreme Edge': 'ブーストエッジ',
        'Fire IV': 'ファイジャ',
        'Frog Phase': 'ゲロゲロ、カエルフェイスゲロ',
        'Frostwave': '凍てつく波動',
        'Gnawing Dread': '喪失の恐怖',
        'Golem Adds': 'ゴーレム',
        'Heavenly Subjugation': '天将覇道撃',
        'Hole In One': 'ボスと貼りつく',
        'Ice Cone Phase': '氷だよ、氷！',
        'Judgment(?! Blade)': 'ジャッジメント',
        'Judgment Blade': '不動無明剣',
        'Landwaster': 'ランドワスター',
        'Line AOEs': '直線AoE',
        'Maverick': '独立独行',
        'Meteors': 'メテオ',
        'Pomp and Circumstance': '威風堂々',
        'Putt putt, or Blade': '喪失の恐怖／千手無双剣',
        'Quake IV': 'クエイジャ',
        'Rock Cutter': 'ロックカッター',
        'Royal Blood': '高貴なる血脈',
        'Sand Sphere Adds': 'サンドスフィア',
        'Shades Appear': 'アルガスの影',
        'Shard Adds': '虚無の結晶',
        'Soulfix': '呪槍串刺',
        'Stack Damage': '集合',
        'Submission Tower': '服従の塔',
        'Trample': '踏みつけ',
        'Trepidation': '狐鶏鼠',
        'Unbind': '拘束解放',
        'Unrelenting': '千手無双剣',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Archaeodemon': '古恶魔',
        'command tower': '支配之塔',
        'I am Revelation': '遵从朕的神谕',
        'I am the truth from which you run': '此乃真神之力！',
        'I am the lies upon which you sup': '此乃伪神之力！',
        'Mateus, The Corrupt': '背德皇帝马提乌斯',
        'Argath Thadalfus': '冷血剑阿加斯',
        'Hashmal, Bringer Of Order': '统治者哈修马利姆',
        'Rofocale': '人马王洛弗卡勒',
        'The Crumbling Bridge': '崩塌的桥',
        'The heavens tremble in my wake': '我的战车驰骋天际！',
        'The Lesalia Garden Ruins': '勒萨利亚圆庭遗迹',
        'The Lesalia Temple Ruins': '勒萨利亚神殿遗迹',
        'The Palace Square': '王宫前广场',
        'Archaeolion': '古奇美拉',
      },
      'replaceText': {
        '--face--': '--面对--',
        '--ice disappears--': '--冰消失--',
        '--invulnerable--': '--无敌--',
        '--lock out--': '--封锁--',
        '--meteors--': '--陨石--',
        '\\(misdirect\\)': '(误导)',
        'Aqua Sphere Adds': '水球出现',
        'Archaeodemon Adds': '古恶魔出现',
        'Azure Guard Adds': '蔚蓝护卫出现',
        'Blade, or putt putt': '去刀AOE缝隙处/去BOSS脚下',
        'Blizzard IV': '冰澈',
        'Chariot': '人马战车',
        'Coldblood': '冷血乱舞',
        '(?<! )Command Tower(?! )': '支配之塔',
        'Command Tower Add': '支配之塔出现',
        'Control Tower': '统治之塔',
        'Crippling Blow': '痛击',
        'Crush Helm': '星天爆击打',
        'Crush Weapon': '冥界恐叫打',
        'Cry of Victory': '战吼',
        'Dark Geas': '暗黑魔法阵',
        'Earth Hammer': '大地之锤',
        'Embrace': '攻击',
        'Extreme Edge': '加速刃',
        'Fire IV': '炽炎',
        'Frog Phase': '窒息阶段',
        'Frostwave': '寒冰波动',
        'Gnawing Dread': '丧失之痛',
        'Golem Adds': '巨像兵出现',
        'Heavenly Subjugation': '天将霸道击',
        'Hole In One': '去BOSS脚下',
        'Ice Cone Phase': '引导冰块阶段',
        '(?<! )Judgment(?! )': '制裁',
        'Judgment Blade': '不动无明剑',
        'Landwaster': '地动',
        'Line AOEs': '直线AOE',
        'Maverick': '特立独行',
        'Meteors': '陨石',
        'Pomp and Circumstance': '威风凛凛',
        'Putt putt, or Blade': '去BOSS脚下/去刀AOE缝隙处',
        'Quake IV': '激震',
        'Rock Cutter': '石刃',
        'Royal Blood': '高贵血脉',
        'Sand Sphere Adds': '沙球出现',
        'Shades Appear': '阿加斯之影出现',
        'Shard Adds': '虚无结晶出现',
        'Soulfix': '咒枪穿刺',
        'Stack Damage': '分摊伤害',
        'Submission Tower': '服从之塔',
        'Trample': '踩踏',
        'Trepidation': '狐鸡鼠',
        'Unbind': '拘束解放',
        'Unrelenting': '千手无双剑',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Archaeodemon': '원시 악마',
        'command tower': '지배의 탑',
        'I am Revelation': '신벌을 받아라',
        'I am the truth from which you run': '가면의 계시에 따라라',
        'I am the lies upon which you sup': '계시를 내리겠다',
        'Mateus, The Corrupt': '배덕의 황제 마티우스',
        'Argath Thadalfus': '냉혈검 아르가스',
        'Hashmal, Bringer Of Order': '통제자 하쉬말림',
        'Rofocale': '인마왕 로포칼레',
        'The Crumbling Bridge': '무너진 다리',
        'The Lesalia Garden Ruins': '르잘리아 정원 옛터',
        'The Lesalia Temple Ruins': '르잘리아 신전 옛터',
        'The Palace Square': '왕궁 광장',
        'The heavens tremble in my wake': '이것이 바로 빛나는 \'성석\'의 힘이다!',
        'Archaeolion': '원시 키마이라',
      },
      'replaceText': {
        '--face--': '--얼굴--',
        '--ice disappears--': '--얼음 사라짐--',
        '--invulnerable--': '--무적--',
        '--lock out--': '--지역 분리--',
        '--meteors--': '--메테오--',
        'Aqua Sphere Adds': '물 구체 생성',
        'Archaeodemon Adds': '원시 악마 생성',
        'Azure Guard Adds': '푸른 파수꾼 생성',
        'Blizzard IV': '블리자쟈',
        'Chariot': '인마전차',
        'Coldblood': '냉혈난무',
        'Command Tower': '지배의 탑',
        'Control Tower': '통제의 탑',
        'Crippling Blow': '통타',
        'Crush Helm': '성천폭격타',
        'Crush Weapon': '명계공규타',
        'Cry of Victory': '승리의 함성',
        'Dark Geas': '암흑 마법진',
        'Earth Hammer': '대지의 망치',
        'Embrace': '공격',
        'Extreme Edge': '돌격하는 칼날',
        'Fire IV': '파이쟈',
        'Frog Phase': '개구리 페이즈',
        'Frostwave': '얼어붙은 파동',
        'Gnawing Dread': '상실의 공포',
        'Golem Adds': '골렘 생성',
        'Heavenly Subjugation': '천장패도격',
        'Judgment': '심판의 날',
        'Landwaster': '대지 황폐화',
        'Line AOEs': '직선 장판',
        'Maverick': '독립독행',
        'Pomp and Circumstance': '위풍당당',
        'Quake IV': '퀘이쟈',
        'Rock Cutter': '바위 가르기',
        'Royal Blood': '고귀한 혈통',
        'Sand Sphere Adds': '모래공 생성',
        'Shades Appear': '분신 생성',
        'Shard Adds': '허무의 결정 생성',
        'Soulfix': '저주창 내리꽂기',
        'Stack Damage': '쉐어뎀',
        'Submission Tower': '복종의 탑',
        'Trample': '짓밟기',
        'Trepidation': '여우 닭 쥐',
        'Unbind': '구속 해방',
        'Unrelenting': '천수무쌍검',
      },
    },
  ],
};
