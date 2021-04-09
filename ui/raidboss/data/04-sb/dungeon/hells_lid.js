import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

export default {
  zoneId: ZoneId.HellsLid,
  timelineFile: 'hells_lid.txt',
  timelineTriggers: [
    {
      id: 'Hells Lid Stone Cudgel',
      regex: /Stone Cudgel/,
      beforeSeconds: 4,
      suppressSeconds: 10,
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Away from club/shield',
          de: 'Weg von der Keule/dem Schild',
          fr: 'Éloignez-vous du bouclier/fauche',
          ja: '岩棍棒から離れる',
          cn: '远离棍棍和盾盾',
          ko: '검/방패에게서 멀어지기',
        },
      },
    },
    {
      id: 'Hells Lid Whittret',
      regex: /Whipping Whittret/,
      beforeSeconds: 4,
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Hells Lid Caduceus',
      regex: /Caduceus/,
      beforeSeconds: 4,
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
  ],
  triggers: [
    {
      id: 'Hells Lid Swing',
      netRegex: NetRegexes.startsUsing({ id: '27BE', source: 'Otake-Maru', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27BE', source: 'Otake-Maru', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27BE', source: 'Ôtake Maru', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27BE', source: 'オオタケ丸', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27BE', source: '大岳丸', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27BE', source: '오오타케마루', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'Hells Lid Targeted Leap',
      netRegex: NetRegexes.headMarker({ id: '0001' }),
      infoText: (data, matches, output) => {
        if (data.me === matches.target)
          return output.targetText();
        return output.otherText();
      },
      outputStrings: {
        targetText: {
          en: 'Boss chasing--GET AWAY',
          de: 'Boss-Verfolgung--RENN WEG',
          fr: 'Ruée du boss -- ÉLOIGNEZ-VOUS',
          ja: 'ボス追いつけるよ～早く走れ！',
          cn: 'BOSS追逐点名———快跑鸭',
          ko: '보스 추격중 --도망가세요',
        },
        otherText: {
          en: 'Avoid boss',
          de: 'Weiche dem Boss aus',
          fr: 'Évitez le boss',
          ja: 'ボスから離れる',
          cn: '远离BOSS',
          ko: '도망가기',
        },
      },
    },
    {
      id: 'Hells Lid Circling Winds',
      netRegex: NetRegexes.startsUsing({ id: '27C8', source: 'Kamaitachi', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27C8', source: 'Kamaitachi', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27C8', source: 'Kamaitachi', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27C8', source: 'カマイタチ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27C8', source: '镰鼬', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27C8', source: '카마이타치', capture: false }),
      response: Responses.getIn(),
    },
    {
      id: 'Hells Lid Rolling Winds',
      netRegex: NetRegexes.startsUsing({ id: '27C9', source: 'Kamaitachi', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27C9', source: 'Kamaitachi', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27C9', source: 'Kamaitachi', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27C9', source: 'カマイタチ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27C9', source: '镰鼬', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27C9', source: '카마이타치', capture: false }),
      response: Responses.goSides(),
    },
    {
      id: 'Hells Lid Sinister Tide',
      netRegex: NetRegexes.startsUsing({ id: '27D4', source: 'Genbu', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27D4', source: 'Genbu', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27D4', source: 'Genbu', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27D4', source: '玄武', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27D4', source: '玄武', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27D4', source: '현무', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid water orb',
          de: 'Weiche dem Wasser-Orb aus',
          fr: 'Évitez l\'orbe d\'eau',
          ja: '水玉から離れる',
          cn: '躲避水球移动路径',
          ko: '물구슬 피하기',
        },
      },
    },
    {
      id: 'Hells Lid Hell Of Waste',
      netRegex: NetRegexes.headMarker({ id: '002B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Hells Lid Hell Of Waves',
      netRegex: NetRegexes.startsUsing({ id: '27D3', source: 'Genbu', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27D3', source: 'Genbu', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27D3', source: 'Genbu', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27D3', source: '玄武', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27D3', source: '玄武', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27D3', source: '현무', capture: false }),
      response: Responses.knockback(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demonsgate': 'Dämonentor',
        'The Furnace': 'Höllenkessel',
        'Genbu': 'Genbu',
        'Kamaitachi': 'Kamaitachi',
        'Otake-Maru': 'Otake-Maru',
        'The Polished Shell': 'Schildpanzer',
        'Volcanic Debris': 'Schlacke',
      },
      'replaceText': {
        '10-Tonze Slash': '11-Tonzen-Schlag',
        '100-Tonze Swing': '100-Tonzen-Schwung',
        'Caduceus': 'Caduceus',
        'Circling Winds': 'Sturmkreis',
        'Disrobe': 'Abmanteln',
        'Divine Cataract': 'Wasserwand',
        'Eruptive Leap': 'Eruptiver Sprung',
        'Hell Of Waste': 'Windhölle',
        'Hell Of Water': 'Wasserhölle',
        'Hell Of Waves': 'Wellenhölle',
        'Late Harvest': 'Späte Ernte',
        'Reaper\'s Gale': 'Sensenwind',
        'Rolling Winds': 'Wirbelnde Bö',
        'Shell Shower': 'Panzerquetsche',
        'Sinister Tide': 'Tückische Gezeiten',
        'Stone Cudgel': 'Felsknüttel',
        'The Patient Blade': 'Geduldige Klinge',
        'Volcanic Debris': 'Schlacke',
        'Whipping Whittret': 'Wieselpeitsche',
        'Whisper In The Wind': 'Flüstern des Windes',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Demonsgate': 'Porte des Oni',
        'The Furnace': 'Chaudron des enfers',
        'Genbu': 'Genbu',
        'Kamaitachi': 'Kamaitachi',
        'Otake-Maru': 'Ôtake Maru',
        'The Polished Shell': 'Vénérable Carapace',
        'Volcanic Debris': 'Débris volcanique',
      },
      'replaceText': {
        '10-Tonze Slash': 'Taillade de 10 tonz',
        '100-Tonze Swing': 'Swing de 100 tonz',
        'Caduceus': 'Caducée',
        'Circling Winds': 'Vents circulaires',
        'Disrobe': 'Déshabillage',
        'Divine Cataract': 'Cataracte divine',
        'Eruptive Leap': 'Bond éruptif',
        'Hell Of Waste': 'Enfer de vent',
        'Hell Of Water': 'Enfer d\'eau',
        'Hell Of Waves': 'Enfer de vagues',
        'Late Harvest': 'Moisson tardive',
        'Reaper\'s Gale': 'Rafale fauchante',
        'Rolling Winds': 'Vents perçants',
        'Shell Shower': 'Pluie de carapaces',
        'Sinister Tide': 'Marée sinistre',
        'Stone Cudgel': 'Gourdin de pierre',
        'The Patient Blade': 'Lame patiente',
        'Volcanic Debris': 'Débris volcanique',
        'Whipping Whittret': 'Fouine fouettante',
        'Whisper In The Wind': 'Murmure du vent',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demonsgate': '鬼之門',
        'The Furnace': '獄之釜',
        'Genbu': '玄武',
        'Kamaitachi': 'カマイタチ',
        'Otake-Maru': 'オオタケ丸',
        'The Polished Shell': '亀甲舞台',
        'Volcanic Debris': '噴石',
      },
      'replaceText': {
        '10-Tonze Slash': '10トンズ・スラッシュ',
        '100-Tonze Swing': '100トンズ・スイング',
        'Caduceus': '蛇杖撃',
        'Circling Winds': '疾風衝',
        'Disrobe': '無手法',
        'Divine Cataract': '玄天武水壁',
        'Eruptive Leap': '噴火飛び',
        'Hell Of Waste': '玄冥瀑',
        'Hell Of Water': '玄冥流',
        'Hell Of Waves': '玄冥波',
        'Late Harvest': '野鎌',
        'Reaper\'s Gale': '鎌風',
        'Rolling Winds': '突風衝',
        'Shell Shower': '亀甲流',
        'Sinister Tide': '迷潮流',
        'Stone Cudgel': '岩棍棒',
        'The Patient Blade': '構え太刀',
        'Volcanic Debris': '噴石',
        'Whipping Whittret': '鞭イタチ',
        'Whisper In The Wind': '風の呼び声',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Demonsgate': '鬼之门',
        'The Furnace': '狱之釜',
        'Genbu': '玄武',
        'Kamaitachi': '镰鼬',
        'Otake-Maru': '大岳丸',
        'The Polished Shell': '龟甲舞台',
        'Volcanic Debris': '喷石',
      },
      'replaceText': {
        '10-Tonze Slash': '十吨挥打',
        '100-Tonze Swing': '百吨回转',
        'Caduceus': '蛇杖击',
        'Circling Winds': '疾风冲',
        'Disrobe': '徒手',
        'Divine Cataract': '玄天武水壁',
        'Eruptive Leap': '爆发跳跃',
        'Hell Of Waste': '玄冥瀑',
        'Hell Of Water': '玄冥流',
        'Hell Of Waves': '玄冥波',
        'Late Harvest': '野镰',
        'Reaper\'s Gale': '镰风',
        'Rolling Winds': '突风冲',
        'Shell Shower': '龟甲流',
        'Sinister Tide': '迷潮',
        'Stone Cudgel': '岩棍',
        'The Patient Blade': '镰鼬斩',
        'Volcanic Debris': '喷石',
        'Whipping Whittret': '鞭鼬',
        'Whisper In The Wind': '风的呼声',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Demonsgate': '귀문',
        'The Furnace': '지옥솥',
        'Genbu': '현무',
        'Kamaitachi': '카마이타치',
        'Otake-Maru': '오오타케마루',
        'The Polished Shell': '귀갑 무대',
        'Volcanic Debris': '화산재',
      },
      'replaceText': {
        '10-Tonze Slash': '10톤즈 베기',
        '100-Tonze Swing': '100톤즈 휘두르기',
        'Caduceus': '뱀 지팡이',
        'Circling Winds': '질풍 충격',
        'Disrobe': '마구잡이',
        'Divine Cataract': '현천무수벽',
        'Eruptive Leap': '분화',
        'Hell Of Waste': '명계의 검은 폭발',
        'Hell Of Water': '명계의 검은 물',
        'Hell Of Waves': '명계의 검은 파도',
        'Late Harvest': '늦수확',
        'Reaper\'s Gale': '낫바람',
        'Rolling Winds': '돌풍 충격',
        'Shell Shower': '귀갑류',
        'Sinister Tide': '어지러운 파도',
        'Stone Cudgel': '돌방망이',
        'The Patient Blade': '족제비 칼날',
        'Volcanic Debris': '용암 조각',
        'Whipping Whittret': '족제비 채찍',
        'Whisper In The Wind': '바람의 속삭임',
      },
    },
  ],
};
