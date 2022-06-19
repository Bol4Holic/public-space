const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다.",
        author : "키케로",
    },
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
        author : "파울로 코엘료",
    },
    {
        quote :  "피할수 없으면 즐겨라.",
        author : "로버트 앨리엇",
    },
    {
        quote : "내일은 내일의 태양이 뜬다.",
        author : "작자미상",
    },
    {
        quote : "1퍼센트의 가능성, 그것이 나의 길이다.",
        author : "나폴레용",
    },
    {
        quote : " 꿈을 게속 간직하고 있으면 반드시 실현할 떄가 온다.",
        author : "괴테",
    },
    {
        quote : "진짜 문제는 사람드르이 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author : "아인슈타인",
    },
    {
        quote : " 고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author : "헬렌 켈러",
    },
    {
        quote : "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author : " 헨리 포드",
    },
    {
        quote : "가난은 가난하다고 느끼는 곳에 존재한다.",
        author : "에디슨",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;