const quotes = [
  {
    quote: "速度を上げるばかりが、人生ではない",
    author: "日本",
  },
  {
    quote: "夢を見るから、人生は輝く",
    author: "東京",
  },
  {
    quote: "急いそがば回まわれ",
    author: "北海道",
  },
  {
    quote: "時は人を待たず",
    author: "福岡",
  },
  {
    quote: "時は 金なり",
    author: "大阪",
  },
  {
    quote: "負けたら終わりじゃなくて. やめたら終わりなんだよね.",
    author: "名古屋",
  },
  {
    quote: "自分に打ち勝つことは、勝利のうちで最も偉大な勝利である.",
    author: "京都",
  },
  {
    quote: "海を泳いでる最中には 海の広さはわからんよ",
    author: "静岡",
  },
  {
    quote: "最高の選択は即ち君の選択だ.",
    author: "宮崎",
  },
  {
    quote:
      "世の中がどんなに変化しても、人生は家族で始まり、家族で終わることに変わりはない.",
    author: "埼玉",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
