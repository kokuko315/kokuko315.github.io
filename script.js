// 1. ダークモード切り替え機能
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ ライトモード';
  } else {
    themeToggleBtn.textContent = '🌙 ダークモード';
  }
});

// 2. 今日の開発おみくじ機能
const omikujiBtn = document.getElementById('omikuji-btn');
const omikujiResult = document.getElementById('omikuji-result');

const fortunes = [
  { rank: '大吉', lang: 'C# (Unity)', msg: 'バグが一発で直る予感！新しいギミックの実装に最適です。' },
  { rank: '中吉', lang: 'Java (Minecraft Mod)', msg: 'アイデアが次々浮かぶ日。まずは小さなクラスから作ってみましょう。' },
  { rank: '吉', lang: 'JavaScript / CSS', msg: 'UIデザインやアニメーションの調整が捗ります。' },
  { rank: '超吉', lang: 'Git / GitHub', msg: 'コミットもマージもスムーズ！進捗が爆速で進みます。' }
];

omikujiBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const selected = fortunes[randomIndex];
  omikujiResult.innerHTML = `【${selected.rank}】ラッキー技術：${selected.lang}<br><span style="font-weight:normal; font-size:0.9rem;">${selected.msg}</span>`;
});
