import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

// Ultima Weapon Ultimate
export default {
  zoneId: ZoneId.TheWeaponsRefrainUltimate,
  timelineFile: 'ultima_weapon_ultimate.txt',
  timelineTriggers: [
    {
      id: 'UWU Diffractive Laser',
      regex: /Diffractive Laser/,
      beforeSeconds: 5,
      response: Responses.tankCleave(),
    },
    {
      id: 'UWU Feather Rain',
      regex: /Feather Rain/,
      beforeSeconds: 3,
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move!',
          de: 'Bewegen',
          fr: 'Bougez',
          ja: 'フェザーレイン',
          cn: '躲羽毛',
          ko: '이동',
        },
      },
    },
  ],
  triggers: [
    {
      id: 'UWU Aetherochemical Laser Middle',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2B84', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2B84', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2B84', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2B84', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2B84', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2B84', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Middle Laser',
          de: 'Laser (Mitte)',
          fr: 'Laser (Milieu)',
          ja: 'レーザー (中央)',
          cn: '中间激光',
        },
      },
    },
    {
      id: 'UWU Aetherochemical Laser Right',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2B85', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2B85', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2B85', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2B85', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2B85', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2B85', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'North Laser',
          de: 'Laser (Norden)',
          fr: 'Laser (Nord)',
          ja: 'レーザー (北)',
          cn: '右侧激光',
        },
      },
    },
    {
      id: 'UWU Aetherochemical Laser Left',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2B86', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2B86', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2B86', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2B86', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2B86', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2B86', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'East Laser',
          de: 'Laser (Osten)',
          fr: 'Laser (Est)',
          ja: 'レーザー (東)',
          cn: '左侧激光',
        },
      },
    },
    // Phases
    {
      id: 'UWU Suppression Phase',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2D4D', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2D4D', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2D4D', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2D4D', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2D4D', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2D4D', capture: false }),
      run: function(data) {
        data.phase = 'suppression';
      },
    },
    {
      // Wait after suppression for primal triggers at the end.
      id: 'UWU Finale Phase',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2D4D', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2D4D', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2D4D', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2D4D', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2D4D', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2D4D', capture: false }),
      delaySeconds: 74,
      run: function(data) {
        data.phase = 'finale';
      },
    },
    {
      id: 'UWU Garuda Slipstream',
      netRegex: NetRegexes.startsUsing({ id: '2B53', source: 'Garuda', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2B53', source: 'Garuda', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2B53', source: 'Garuda', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2B53', source: 'ガルーダ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2B53', source: '迦楼罗', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2B53', source: '가루다', capture: false }),
      condition: function(data) {
        return data.role === 'tank';
      },
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Slipstream',
          de: 'Wirbelströmung',
          fr: 'Sillage',
          ja: 'スリップストリーム',
          cn: '螺旋气流',
          ko: '반동 기류',
        },
      },
    },
    {
      id: 'UWU Garuda Mistral Song Marker',
      netRegex: NetRegexes.headMarker({ id: '0010' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Mistral on YOU',
          de: 'Mistral-Song',
          fr: 'Chant Du Mistral',
          ja: 'ミストラルソング',
          cn: '寒风之歌点名',
          ko: '삭풍 징',
        },
      },
    },
    {
      id: 'UWU Garuda Mistral Song Tank',
      netRegex: NetRegexes.headMarker({ id: '0010', capture: false }),
      condition: function(data) {
        return data.role === 'tank';
      },
      suppressSeconds: 5,
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Mistral Song',
          de: 'Mistral-Song',
          fr: 'Chant Du Mistral',
          ja: 'ミストラルソング',
          cn: '寒风之歌',
          ko: '삭풍 징',
        },
      },
    },
    {
      id: 'UWU Garuda Spiny Plume',
      netRegex: NetRegexes.addedCombatant({ name: 'Spiny Plume', capture: false }),
      netRegexDe: NetRegexes.addedCombatant({ name: 'Dornig(?:e|er|es|en) Federsturm', capture: false }),
      netRegexFr: NetRegexes.addedCombatant({ name: 'Plume Perforante', capture: false }),
      netRegexJa: NetRegexes.addedCombatant({ name: 'スパイニープルーム', capture: false }),
      netRegexCn: NetRegexes.addedCombatant({ name: '刺羽', capture: false }),
      netRegexKo: NetRegexes.addedCombatant({ name: '가시돋힌 깃털', capture: false }),
      condition: function(data) {
        return data.role === 'tank';
      },
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Spiny Plume Add',
          de: 'Dorniger Federsturm',
          fr: 'Plume Perforante',
          ja: 'スパイニープルーム',
          cn: '刺羽出现',
          ko: '가시돋힌 깃털 등장',
        },
      },
    },
    {
      id: 'UWU Ifrit Fetters',
      netRegex: NetRegexes.gainsEffect({ effectId: '179' }),
      condition: Conditions.targetIsYou(),
      suppressSeconds: 45,
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Fetters on YOU',
          de: 'Fesseln auf DIR',
          fr: 'Chaînes Infernales',
          ja: '自分に炎獄の鎖',
          cn: '火狱之锁点名',
          ko: '사슬 → 나',
        },
      },
    },
    {
      id: 'UWU Searing Wind',
      netRegex: NetRegexes.startsUsing({ id: '2B5B', source: 'Ifrit' }),
      netRegexDe: NetRegexes.startsUsing({ id: '2B5B', source: 'Ifrit' }),
      netRegexFr: NetRegexes.startsUsing({ id: '2B5B', source: 'Ifrit' }),
      netRegexJa: NetRegexes.startsUsing({ id: '2B5B', source: 'イフリート' }),
      netRegexCn: NetRegexes.startsUsing({ id: '2B5B', source: '伊弗利特' }),
      netRegexKo: NetRegexes.startsUsing({ id: '2B5B', source: '이프리트' }),
      condition: Conditions.targetIsYou(),
      alarmText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Searing Wind on YOU',
          de: 'Versengen auf DIR',
          fr: 'Rugissement Infernal',
          ja: '自分に灼熱',
          cn: '灼热咆哮点名',
          ko: '작열 → 나',
        },
      },
    },
    {
      id: 'UWU Ifrit Flaming Crush',
      netRegex: NetRegexes.headMarker({ id: '0075', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stack',
          de: 'Stack',
          fr: 'Stack',
          ja: '頭割り',
          cn: '集合',
          ko: '집합',
        },
      },
    },
    {
      id: 'UWU Garuda Woken',
      netRegex: NetRegexes.gainsEffect({ target: 'Garuda', effectId: '5F9', capture: false }),
      netRegexDe: NetRegexes.gainsEffect({ target: 'Garuda', effectId: '5F9', capture: false }),
      netRegexFr: NetRegexes.gainsEffect({ target: 'Garuda', effectId: '5F9', capture: false }),
      netRegexJa: NetRegexes.gainsEffect({ target: 'ガルーダ', effectId: '5F9', capture: false }),
      netRegexCn: NetRegexes.gainsEffect({ target: '迦楼罗', effectId: '5F9', capture: false }),
      netRegexKo: NetRegexes.gainsEffect({ target: '가루다', effectId: '5F9', capture: false }),
      sound: 'Long',
    },
    {
      id: 'UWU Ifrit Woken',
      netRegex: NetRegexes.gainsEffect({ target: 'Ifrit', effectId: '5F9', capture: false }),
      netRegexDe: NetRegexes.gainsEffect({ target: 'Ifrit', effectId: '5F9', capture: false }),
      netRegexFr: NetRegexes.gainsEffect({ target: 'Ifrit', effectId: '5F9', capture: false }),
      netRegexJa: NetRegexes.gainsEffect({ target: 'イフリート', effectId: '5F9', capture: false }),
      netRegexCn: NetRegexes.gainsEffect({ target: '伊弗利特', effectId: '5F9', capture: false }),
      netRegexKo: NetRegexes.gainsEffect({ target: '이프리트', effectId: '5F9', capture: false }),
      sound: 'Long',
    },
    {
      id: 'UWU Titan Woken',
      netRegex: NetRegexes.gainsEffect({ target: 'Titan', effectId: '5F9', capture: false }),
      netRegexDe: NetRegexes.gainsEffect({ target: 'Titan', effectId: '5F9', capture: false }),
      netRegexFr: NetRegexes.gainsEffect({ target: 'Titan', effectId: '5F9', capture: false }),
      netRegexJa: NetRegexes.gainsEffect({ target: 'タイタン', effectId: '5F9', capture: false }),
      netRegexCn: NetRegexes.gainsEffect({ target: '泰坦', effectId: '5F9', capture: false }),
      netRegexKo: NetRegexes.gainsEffect({ target: '타이탄', effectId: '5F9', capture: false }),
      sound: 'Long',
    },
    {
      id: 'UWU Titan Gaols',
      netRegex: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'] }),
      netRegexDe: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'] }),
      netRegexFr: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'] }),
      netRegexJa: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['ガルーダ', 'タイタン'] }),
      netRegexCn: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['迦楼罗', '泰坦'] }),
      netRegexKo: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['가루다', '타이탄'] }),
      preRun: function(data, matches) {
        data.titanGaols = data.titanGaols || [];
        data.titanGaols.push(matches.target);
        if (data.titanGaols.length === 3)
          data.titanGaols.sort();
      },
      alertText: function(data, _, output) {
        if (data.titanGaols.length !== 3)
          return;
        const idx = data.titanGaols.indexOf(data.me);
        if (idx < 0)
          return;
        // Just return your number.
        return output.num({ num: idx + 1 });
      },
      infoText: function(data, _, output) {
        if (data.titanGaols.length !== 3)
          return;
        return output.text({
          player1: data.ShortName(data.titanGaols[0]),
          player2: data.ShortName(data.titanGaols[1]),
          player3: data.ShortName(data.titanGaols[2]),
        });
      },
      outputStrings: {
        num: {
          en: '${num}',
          de: '${num}',
          fr: '${num}',
          ja: '${num}',
          cn: '${num}',
          ko: '${num}',
        },
        text: {
          en: '${player1}, ${player2}, ${player3}',
          de: '${player1}, ${player2}, ${player3}',
          fr: '${player1}, ${player2}, ${player3}',
          ja: '${player1}, ${player2}, ${player3}',
          cn: '${player1}, ${player2}, ${player3}',
          ko: '${player1}, ${player2}, ${player3}',
        },
      },
    },
    {
      // If anybody dies to bombs (WHY) and a rock is on them, then glhf.
      id: 'UWU Titan Bomb Failure',
      netRegex: NetRegexes.ability({ id: '2B6A', source: 'Bomb Boulder' }),
      netRegexDe: NetRegexes.ability({ id: '2B6A', source: 'Bomber-Brocken' }),
      netRegexFr: NetRegexes.ability({ id: '2B6A', source: 'Bombo Rocher' }),
      netRegexJa: NetRegexes.ability({ id: '2B6A', source: 'ボムボルダー' }),
      netRegexCn: NetRegexes.ability({ id: '2B6A', source: '爆破岩石' }),
      netRegexKo: NetRegexes.ability({ id: '2B6A', source: '바위폭탄' }),
      infoText: function(data, matches, output) {
        if (!data.titanGaols)
          return;
        if (!data.titanGaols.includes(matches.target))
          return;
        return output.text({ player: data.ShortName(matches.target) });
      },
      outputStrings: {
        text: {
          en: '${player} died',
          de: '${player} gestorben',
          ja: '${player} 死にました',
          cn: '${player} 死亡',
          ko: '${player} 죽음',
        },
      },
    },
    {
      id: 'UWU Gaol Cleanup',
      netRegex: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'], capture: false }),
      netRegexCn: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['迦楼罗', '泰坦'], capture: false }),
      netRegexDe: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'], capture: false }),
      netRegexFr: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['Garuda', 'Titan'], capture: false }),
      netRegexJa: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['ガルーダ', 'タイタン'], capture: false }),
      netRegexKo: NetRegexes.ability({ id: ['2B6C', '2B6B'], source: ['가루다', '타이탄'], capture: false }),
      delaySeconds: 15,
      run: function(data) {
        delete data.titanGaols;
      },
    },
    {
      id: 'UWU Suppression Gaol',
      netRegex: NetRegexes.ability({ id: '2B6B', source: 'Titan' }),
      netRegexDe: NetRegexes.ability({ id: '2B6B', source: 'Titan' }),
      netRegexFr: NetRegexes.ability({ id: '2B6B', source: 'Titan' }),
      netRegexJa: NetRegexes.ability({ id: '2B6B', source: 'タイタン' }),
      netRegexCn: NetRegexes.ability({ id: '2B6B', source: '泰坦' }),
      netRegexKo: NetRegexes.ability({ id: '2B6B', source: '타이탄' }),
      condition: function(data, matches) {
        return data.phase === 'suppression' && data.me === matches.target;
      },
      alarmText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Gaol on YOU',
          de: 'Granitgefängnis',
          fr: 'Geôle',
          ja: 'ジェイル',
          cn: '石牢点名',
          ko: '감옥 → 나',
        },
      },
    },
    {
      id: 'UWU Garuda Finale',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2CD3', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2CD3', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2CD3', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2CD3', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2CD3', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2CD3', capture: false }),
      condition: function(data) {
        return data.phase === 'finale';
      },
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Garuda',
          de: 'Garuda',
          fr: 'Garuda',
          ja: 'ガルーダ',
          cn: '迦楼罗',
          ko: '가루다',
        },
      },
    },
    {
      id: 'UWU Ifrit Finale',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2CD4', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2CD4', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2CD4', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2CD4', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2CD4', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2CD4', capture: false }),
      condition: function(data) {
        return data.phase === 'finale';
      },
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Ifrit',
          de: 'Ifrit',
          fr: 'Ifrit',
          ja: 'イフリート',
          cn: '伊弗利特',
          ko: '이프리트',
        },
      },
    },
    {
      id: 'UWU Titan Finale',
      netRegex: NetRegexes.ability({ source: 'The Ultima Weapon', id: '2CD5', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Ultima-Waffe', id: '2CD5', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Ultima Arma', id: '2CD5', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'アルテマウェポン', id: '2CD5', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '究极神兵', id: '2CD5', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '알테마 웨폰', id: '2CD5', capture: false }),
      condition: function(data) {
        return data.phase === 'finale';
      },
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Titan',
          de: 'Titan',
          fr: 'Titan',
          ja: 'タイタン',
          cn: '泰坦',
          ko: '타이탄',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Bomb Boulder': 'Bomber-Brocken',
        'Chirada': 'Chirada',
        'Garuda': 'Garuda',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': 'Nun, ihr Würmer! Ihr wollt die Macht des Windes spüren?',
        'Ifrit': 'Ifrit',
        'Lahabrea': 'Lahabrea',
        'Spiny Plume': 'dornig(?:e|er|es|en) Federsturm',
        'Suparna': 'Suparna',
        'The Ultima Weapon': 'Ultima-Waffe',
        'Titan': 'Titan',
      },
      'replaceText': {
        'Aerial Blast': 'Windschlag',
        'Aetheric Boom': 'Ätherknall',
        'Aetherochemical Laser': 'Ätherochemischer Laser',
        '(?<! )Aetheroplasm': 'Ätheroplasma',
        'Apply Viscous': 'Ätheroplasma wirkt',
        'Blight': 'Pesthauch',
        'Bury': 'Begraben',
        'Ceruleum Vent': 'Erdseim-Entlüfter',
        'Crimson Cyclone': 'Zinnober-Zyklon',
        'Dark IV': 'Neka',
        'Diffractive Laser': 'Diffraktiver Laser',
        'Downburst': 'Fallböe',
        'Earthen Fury': 'Gaias Zorn',
        'Eruption': 'Eruption',
        'Eye Of The Storm': 'Auge des Sturms',
        'Feather Rain': 'Federregen',
        'Flaming Crush': 'Flammenstoß',
        'Freefire': 'Schwerer Beschuss',
        'Friction': 'Windklinge',
        'Geocrush': 'Geo-Stoß',
        'Grand Whirlwind': 'Großer Wirbelsturm',
        'Hellfire': 'Höllenfeuer',
        'Homing Lasers': 'Leitlaser',
        'Incinerate': 'Einäschern',
        'Infernal Fetters': 'Infernofesseln',
        'Inferno Howl': 'Brennende Wut',
        'Landslide': 'Bergsturz',
        'Mesohigh': 'Meso-Hoch',
        'Mistral Shriek': 'Mistral-Schrei',
        'Mistral Song': 'Mistral-Song',
        'Mountain Buster': 'Bergsprenger',
        'Nail Adds': 'Fessel Adds',
        'Radiant Plume': 'Scheiterhaufen',
        'Rock Buster': 'Steinsprenger',
        'Rock Throw': 'Granitgefängnis',
        'Searing Wind': 'Versengen',
        'Slipstream': 'Wirbelströmung',
        'Summon Random Primal': 'Zufällige Primaebeschwörung',
        'Tank Purge': 'Tankreinigung',
        'Tumult': 'Urerschütterung',
        'Ultima(?!\\w)': 'Ultima',
        'Ultimate Annihilation': 'Ultimative Vernichtung',
        'Ultimate Predation': 'Ultimative Prädation',
        'Ultimate Suppression': 'Ultimative Unterdrückung',
        'Upheaval': 'Urtrauma',
        'Viscous Aetheroplasm': 'Viskoses Ätheroplasma',
        'Vulcan Burst': 'Feuerstoß',
        'Weight Of The Land': 'Gaias Gewicht',
        'Wicked Tornado': 'Tornado der Bosheit',
        'Wicked Wheel': 'Rad der Bosheit',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Bomb Boulder': 'bombo rocher',
        'Chirada': 'Chirada',
        'Garuda': 'Garuda',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': 'Je vais vous écorcher avec mes bourrasques',
        'Ifrit': 'Ifrit',
        'Lahabrea': 'Lahabrea',
        'Spiny Plume': 'plume perforante',
        'Suparna': 'Suparna',
        'The Ultima Weapon': 'Ultima Arma',
        'Titan': 'Titan',
      },
      'replaceText': {
        'Aerial Blast': 'Rafale aérienne',
        'Aetheric Boom': 'Onde d\'éther',
        'Aetherochemical Laser': 'Laser magismologique',
        '(?<! )Aetheroplasm': 'Éthéroplasma',
        'Blight': 'Supplice',
        'Bury': 'Impact',
        'Ceruleum Vent': 'Exutoire à Céruleum',
        'Crimson Cyclone': 'Cyclone écarlate',
        'Dark IV': 'Giga Ténèbres',
        'Diffractive Laser': 'Laser diffractif',
        'Downburst': 'Rafale descendante',
        'Earthen Fury': 'Fureur tellurique',
        'Eruption': 'Éruption',
        'Eye Of The Storm': 'Œil du cyclone',
        'Feather Rain': 'Pluie de plumes',
        'Flaming Crush': 'Fracas de flammes',
        'Freefire': 'Tir d\'artillerie lourde',
        'Friction': 'Lame de vent',
        'Geocrush': 'Broie-terre',
        'Hellfire': 'Flammes de l\'enfer',
        'Homing Lasers': 'Lasers autoguidés',
        'Incinerate': 'Incinération',
        'Infernal Fetters': 'Chaînes infernales',
        'Inferno Howl': 'Rugissement infernal',
        'Landslide': 'Glissement de terrain',
        'Mesohigh': 'Anticyclone de méso-échelle',
        'Mistral Shriek': 'Cri du mistral',
        'Mistral Song': 'Chant du mistral',
        'Mountain Buster': 'Casse-montagnes',
        'Radiant Plume': 'Panache radiant',
        'Rock Buster': 'Casse-roc',
        'Rock Throw': 'Jeté de rocs',
        'Searing Wind': 'Carbonisation',
        'Slipstream': 'Sillage',
        'Tank Purge': 'Vidange de réservoir',
        'Tumult': 'Tumulte',
        'Ultima(?!\\w)': 'Ultima',
        'Ultimate Annihilation': 'Fantasmagorie infernale',
        'Ultimate Predation': 'Fantasmagorie prédatrice',
        'Ultimate Suppression': 'Fantasmagorie bestiale',
        'Upheaval': 'Bouleversement',
        'Viscous Aetheroplasm': 'Éthéroplasma poisseux',
        'Vulcan Burst': 'Explosion volcanique',
        'Weight Of The Land': 'Poids de la terre',
        'Wicked Tornado': 'Tornade meurtrière',
        'Wicked Wheel': 'Roue mauvaise',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Bomb Boulder': 'ボムボルダ',
        'Chirada': 'チラーダ',
        'Garuda': 'ガルーダ',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': 'はじめようぞ、虫ケラ…… .わたくしの風でッ！　嵐でッ！　無残に散れッ！',
        'Ifrit': 'イフリート',
        'Lahabrea': 'アシエン・ラハブレア',
        'Spiny Plume': 'スパイニープルーム',
        'Suparna': 'スパルナ',
        'The Ultima Weapon': 'アルテマウェポン',
        'Titan': 'タイタン',
      },
      'replaceText': {
        'Aerial Blast': 'エリアルブラスト',
        'Aetheric Boom': 'エーテル波動',
        'Aetherochemical Laser': '魔科学レーザー',
        '(?<! )Aetheroplasm': 'エーテル爆雷',
        'Apply Viscous': '吸着式エーテル爆雷',
        'Blight': 'クラウダ',
        'Bury': '衝撃',
        'Ceruleum Vent': 'セルレアムベント',
        'Crimson Cyclone': 'クリムゾンサイクロン',
        'Dark IV': 'ダージャ',
        'Diffractive Laser': '拡散レーザー',
        'Downburst': 'ダウンバースト',
        'Earthen Fury': '大地の怒り',
        'Eruption': 'エラプション',
        'Eye Of The Storm': 'アイ・オブ・ストーム',
        'Feather Rain': 'フェザーレイン',
        'Flaming Crush': 'フレイムクラッシュ',
        'Freefire': '誘爆',
        'Friction': 'ウィンドブレード',
        'Geocrush': 'ジオクラッシュ',
        'Grand Whirlwind': '大旋風',
        'Hellfire': '地獄の火炎',
        'Homing Lasers': '誘導レーザー',
        'Incinerate': 'インシネレート',
        'Infernal Fetters': '炎獄の鎖',
        'Inferno Howl': '灼熱の咆吼',
        'Landslide': 'ランドスライド',
        'Mesohigh': 'メソハイ',
        'Mistral Shriek': 'ミストラルシュリーク',
        'Mistral Song': 'ミストラルソング',
        'Mountain Buster': 'マウンテンバスター',
        'Nail Adds': '雑魚: 楔',
        'Radiant Plume': '光輝の炎柱',
        'Rock Buster': 'ロックバスター',
        'Rock Throw': 'グラナイト・ジェイル',
        'Searing Wind': '熱風',
        'Slipstream': 'スリップストリーム',
        'Summon Random Primal': 'ランダム蛮神を召喚',
        'Tank Purge': '魔導フレア',
        'Tumult': '激震',
        'Ultima(?!\\w)': 'アルテマ',
        'Ultimate Annihilation': '爆撃の究極幻想',
        'Ultimate Predation': '追撃の究極幻想',
        'Ultimate Suppression': '乱撃の究極幻想',
        'Upheaval': '大激震',
        'Viscous Aetheroplasm': '吸着爆雷起爆',
        'Vulcan Burst': 'バルカンバースト',
        'Weight Of The Land': '大地の重み',
        'Wicked Tornado': 'ウィケッドトルネード',
        'Wicked Wheel': 'ウィケッドホイール',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Bomb Boulder': '爆破岩石',
        'Chirada': '妙翅',
        'Garuda': '迦楼罗',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': '哈哈哈哈哈！',
        'Ifrit': '伊弗利特',
        'Lahabrea': '拉哈布雷亚',
        'Spiny Plume': '刺羽',
        'Suparna': '美翼',
        'The Ultima Weapon': '究极神兵',
        'Titan': '泰坦',
      },
      'replaceText': {
        'Aerial Blast': '大气爆发',
        'Aetheric Boom': '以太波动',
        'Aetherochemical Laser': '魔科学激光',
        '(?<! )Aetheroplasm': '以太爆雷',
        'Apply Viscous': '吸附式炸弹',
        'Blight': '毒雾',
        'Bury': '塌方',
        'Ceruleum Vent': '青磷放射',
        'Crimson Cyclone': '深红旋风',
        'Dark IV': '冥暗',
        'Diffractive Laser': '扩散射线',
        'Downburst': '下行突风',
        'Earthen Fury': '大地之怒',
        'Eruption': '地火喷发',
        'Eye Of The Storm': '台风眼',
        'Feather Rain': '飞翎雨',
        'Flaming Crush': '烈焰碎击',
        'Freefire': '诱导爆炸',
        'Friction': '烈风刃',
        'Geocrush': '大地粉碎',
        'Grand Whirlwind': '大龙卷风',
        'Hellfire': '地狱之火炎',
        'Homing Lasers': '诱导射线',
        'Incinerate': '烈焰焚烧',
        'Infernal Fetters': '火狱之锁',
        'Inferno Howl': '灼热咆哮',
        'Landslide': '地裂',
        'Mesohigh': '中高压',
        'Mistral Shriek': '寒风之啸',
        'Mistral Song': '寒风之歌',
        'Mountain Buster': '山崩',
        'Nail Adds': '火神柱',
        'Radiant Plume': '光辉炎柱',
        'Rock Buster': '碎岩',
        'Rock Throw': '花岗岩牢狱',
        'Searing Wind': '灼热',
        'Slipstream': '螺旋气流',
        'Summon Random Primal': '召唤随机蛮神',
        'Tank Purge': '魔导核爆',
        'Tumult': '怒震',
        'Ultima(?!\\w)': '究极',
        'Ultimate Annihilation': '爆击之究极幻想',
        'Ultimate Predation': '追击之究极幻想',
        'Ultimate Suppression': '乱击之究极幻想',
        'Upheaval': '大怒震',
        'Viscous Aetheroplasm': '引爆吸附式炸弹',
        'Vulcan Burst': '火神爆裂',
        'Weight Of The Land': '大地之重',
        'Wicked Tornado': '邪气龙卷',
        'Wicked Wheel': '邪轮旋风',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Bomb Boulder': '화강암 감옥',
        'Chirada': '치라다',
        'Garuda': '가루다',
        'Heehee HAHA hahaha HEEHEE haha HEEEEEE': '시작하자, 버러지들아',
        'Ifrit': '이프리트',
        'Lahabrea': '아씨엔 라하브레아',
        'Spiny Plume': '가시돋힌 깃털',
        'Suparna': '수파르나',
        'The Ultima Weapon': '알테마 웨폰',
        'Titan': '타이탄',
      },
      'replaceText': {
        'Aerial Blast': '대기 폭발',
        'Aetheric Boom': '에테르 파동',
        'Aetherochemical Laser': '마과학 레이저',
        '(?<! )Aetheroplasm': '에테르 폭뢰',
        'Apply Viscous': '흡착식 에테르 폭뢰',
        'Blight': '독안개',
        'Bury': '충격',
        'Ceruleum Vent': '청린 방출',
        'Crimson Cyclone': '진홍 회오리',
        'Dark IV': '다쟈',
        'Diffractive Laser': '확산 레이저',
        'Downburst': '하강 기류',
        'Earthen Fury': '대지의 분노',
        'Eruption': '용암 분출',
        'Eye Of The Storm': '태풍의 눈',
        'Feather Rain': '깃털비',
        'Flaming Crush': '화염 작열',
        'Freefire': '유폭',
        'Friction': '바람의 칼날',
        'Geocrush': '대지 붕괴',
        'Grand Whirlwind': '대선풍',
        'Hellfire': '지옥의 화염',
        'Homing Lasers': '유도 레이저',
        'Incinerate': '소각',
        'Infernal Fetters': '염옥의 사슬',
        'Inferno Howl': '작열의 포효',
        'Landslide': '산사태',
        'Mesohigh': '뇌우고기압',
        'Mistral Shriek': '삭풍의 비명',
        'Mistral Song': '삭풍의 노래',
        'Mountain Buster': '산 쪼개기',
        'Nail Adds': '염옥의 말뚝',
        'Radiant Plume': '광휘의 불기둥',
        'Rock Buster': '바위 쪼개기',
        'Rock Throw': '화강암 감옥',
        'Searing Wind': '열풍',
        'Slipstream': '반동 기류',
        'Summon Random Primal': '무작위 야만신 소환',
        'Tank Purge': '마도 플레어',
        'Tumult': '격진',
        'Ultima(?!\\w)': '알테마',
        'Ultimate Annihilation': '궁극의 폭격 환상',
        'Ultimate Predation': '궁극의 추격 환상',
        'Ultimate Suppression': '궁극의 난격 환상',
        'Upheaval': '대격진',
        'Viscous Aetheroplasm': '흡착 폭뢰 기폭',
        'Vulcan Burst': '폭렬 난사',
        'Weight Of The Land': '대지의 무게',
        'Wicked Tornado': '마녀의 회오리',
        'Wicked Wheel': '마녀의 수레바퀴',
      },
    },
  ],
};
