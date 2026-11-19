// 1. 燭台の灯り（明るさ）切り替え機能
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('candle-mode');
  if (document.body.classList.contains('candle-mode')) {
    themeToggleBtn.textContent = '🌑 深淵の闇 (Dark)';
  } else {
    themeToggleBtn.textContent = '🕯️ 燭台の灯り (Brightness)';
  }
});

// 2. 今日のお茶会診断（気分別おすすめティー＆スイーツ）
const teaBtn = document.getElementById('tea-btn');
const moodSelect = document.getElementById('mood-select');
const teaResult = document.getElementById('tea-result');

const teaMenus = {
  elegant: [
    {
      tea: 'ダージリン・ファーストフラッシュ',
      sweets: '薔薇の香りのマカロン＆ヴィクトリアスポンジケーキ',
      desc: '繊細なマスカテルフレーバーが、優雅な午後のひとときを演出いたします。'
    },
    {
      tea: 'アールグレイ・インペリアル',
      sweets: 'クロテッドクリームを添えた焼きたてスコーン',
      desc: 'ベルガモットの気品ある香りが心を解きほぐす、王道の英国式ティータイムです。'
    }
  ],
  focus: [
    {
      tea: 'アッサム・セカンドフラッシュ（ストレート）',
      sweets: 'ビターチョコレートのオランジェット',
      desc: '心地よい渋みとカカオのほろ苦さが、コーディングや創作の集中力を研ぎ澄まします。'
    },
    {
      tea: 'ペパーミント＆カモミールブレンド',
      sweets: 'アールグレイ風味のディアマンクッキー',
      desc: '頭をすっきりと冴え渡らせ、新たなアイデアが舞い降りる一杯でございます。'
    }
  ],
  sweet: [
    {
      tea: 'ロイヤルミルクティー（ウバ茶葉使用）',
      sweets: 'カシスとすみれのゴシック・モンブラン',
      desc: '濃厚なミルクの甘みとベリーの酸味が織りなす、至福のご褒美ペアリングです。'
    },
    {
      tea: 'キャラメル＆バニラのフレーバーティー',
      sweets: 'ダークチェリーのフォレノワール（黒い森のケーキ）',
      desc: '甘い香りに包まれながら、心ゆくまで癒やしの時間をお過ごしくださいませ。'
    }
  ],
  mystic: [
    {
      tea: 'バタフライピー＆ラベンダーティー',
      sweets: '紫芋と黒ごまのタルトレット',
      desc: '夜空のような深い紫色に変化する神秘的なハーブティーが、静かな夜に寄り添います。'
    },
    {
      tea: 'ラプサンスーチョン（正山小種）',
      sweets: '無花果（イチジク）と赤ワインのパウンドケーキ',
      desc: 'スモーキーで重厚な香りが漂う、大人の書斎にふさわしい特別な組み合わせです。'
    }
  ]
};

teaBtn.addEventListener('click', () => {
  const mood = moodSelect.value;
  const list = teaMenus[mood];
  const selected = list[Math.floor(Math.random() * list.length)];

  teaResult.innerHTML = `
    <div class="tea-title">🫖 ${selected.tea}</div>
    <div><strong>🍰 本日のスイーツ：</strong>${selected.sweets}</div>
    <p style="margin-top:8px; font-size:0.92rem; color:var(--text-sub);">${selected.desc}</p>
  `;
});
