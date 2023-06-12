const worlds = [
  { id: 1, uk: "Раздеватся", en: "undress" },
  { id: 2, uk: "Примерять", en: "try on" },
  { id: 4, uk: "Одевать", en: "put on" },
  { id: 5, uk: "Вернуть обратно", en: "take back" },
  { id: 6, uk: "По этому", en: 'that"s why' },
  { id: 7, uk: "Редко, не часто", en: "seldom" },
  { id: 8, uk: "Вылетело из головы", en: "it slipped my mind" },
  { id: 9, uk: "Предполагать, угадать", en: "guess" },
  { id: 10, uk: "Разные", en: "different" },
  { id: 11, uk: "Разделять, отделятся", en: "separate" },
  { id: 12, uk: "Включая, в том числе", en: "including" },
  { id: 13, uk: "Наверное", en: "probably" },
  { id: 14, uk: "Типа того", en: "sort of" },
  {
    id: 15,
    uk: "Я был на улице когда это случилось",
    en: "I was in outsaid when it happened",
  },
  { id: 16, uk: "Скорее всего, да", en: "probably to yes" },
  {
    id: 17,
    uk: "Я согласен с твоими условиями",
    en: "I agree to your conditions",
  },
  { id: 18, uk: "Превращается в", en: "turn into" },
  { id: 19, uk: "Привычка", en: "habits" },
  { id: 20, uk: "Зависимость", en: "addiction" },
  {
    id: 21,
    uk: "У меня зависимость от курения",
    en: "I have a smoking addiction",
  },
  {
    id: 22,
    uk: "Я был в замешательстве от иностранных знаков",
    en: "I was confused by foreign signs",
  },
  {
    id: 23,
    uk: "Ну ты знаешь, я думаю как-то так",
    en: "Well you now, i mean something like this",
  },

  { id: 24, uk: "С тех пор", en: "since then" },
  {
    id: 25,
    uk: "Я действительно давно тебя не видел",
    en: 'I really haven"t seen you in a long time',
  },
  {
    id: 26,
    uk: "Человек может быть тем кем захочет",
    en: "A person can be whoever he wants",
  },
  { id: 27, uk: "Когда это было?", en: "When it was?" },
  {
    id: 28,
    uk: "Ты хотел бы сменить работу?",
    en: "Would you like to change jobs?",
  },

  {
    id: 29,
    uk: "Я бы хотел получить новую работу",
    en: "I would like to get a new job",
  },
  {
    id: 30,
    uk: "Он хотел бы лететь в чистом небе с птицами.",
    en: "He would like to fly in a clear sky with birds.",
  },
  {
    id: 31,
    uk: "Я испортил воздух. Но об этом никто не узнал. Это сошло с рук.",
    en: "I messed up the air. But no one found out about it. It got away with it.",
  },
  { id: 32, uk: "Не в том смылсе", en: "In the wrong sense" },
  {
    id: 33,
    uk: "Работник который принял приглашение",
    en: "The employee who accepted the invitation",
  },
  { id: 34, uk: "Общий", en: "mutual (мйючл)" },
  { id: 35, uk: "Взаимопонимание", en: "mutual understanding" },
  { id: 36, uk: "Общий друг", en: "mutual friend" },

  {
    id: 37,
    uk: "Я не могу сказать тебе, где я видел этого человека.",
    en: ' I can"t tell you where I saw this man.',
  },
  {
    id: 38,
    uk: "Мой учитель не может сказать нам как долго мы будем в школе сегодня. ",
    en: ' My teacher can"t tell us how long we"ll be at school today.',
  },
  {
    id: 39,
    uk: "Может ли она показать нам свой дом на следующей неделе? ",
    en: "Can she show us her house next week?",
  },
  {
    id: 40,
    uk: "Они не могут видеть как мы работаем здесь весь день. ",
    en: 'They can"t see us working here all day.',
  },
  {
    id: 41,
    uk: "Она не может быть в киеве в субботу. ",
    en: 'She can"t be in Kyiv on Saturday.',
  },
  {
    id: 42,
    uk: "Суббота это очень большой день для неё и она не будет думать о своей работе.  ",
    en: 'Saturday is a very big day for her and she won"t think about her work.',
  },
  {
    id: 43,
    uk: "Воскресенье для неё рабочий день.  ",
    en: "Sunday is her working day.",
  },
  {
    id: 44,
    uk: "Когда она имеет выходной? Только в понедельник.  ",
    en: "When does she have a day off? Only on Monday.",
  },
  {
    id: 45,
    uk: " Может ли она брать другие выходные дни?",
    en: " Can she take other days off? ",
  },
  {
    id: 46,
    uk: "  Мой брат может приехать и помочь ей на её день рождение. ",
    en: " My brother can come and help her for her birthday. ",
  },
  {
    id: 47,
    uk: "  Её босс собирается дать ей 3 дня выходных из-за её дня рождения. ",
    en: " Her boss is going to give her 3 days off because of her birthday. ",
  },
  {
    id: 48,
    uk: "    Ты говоришь о ее мыслях постоянно? ",
    en: " Do you talk about her thoughts all the time?",
  },
  {
    id: 49,
    uk: "    Ты говоришь о ее мыслях сейчас?",
    en: " Are you talking about her thoughts now?",
  },
  {
    id: 50,
    uk: " Когда Саша исчез, мы продолжили поиски.",
    en: " When Sasha disappeared, we continued our search.",
  },
  {
    id: 51,
    uk: " Ты знаешь сколько денег ему было нужно что бы купить такое большое здание в центре Киева?",
    en: " Do you know how much money he needed to buy such a big building in the center of Kyiv?",
  },
  {
    id: 52,
    uk: "Как зовут ее босса?",
    en: " What is the name of her boss?",
  },
  {
    id: 53,
    uk: "Как зовут ее босса?",
    en: " What is the name of her boss?",
  },
  {
    id: 54,
    uk: "Теперь кирил живет в Германии и путешествует по миру в то время как его бизнес работает на него. ",
    en: " Now Kiril lives in Germany and travels the world while his business works for him.",
  },
  {
    id: 55,
    uk: "python или js, Сережа долго думал, какой язык программирования выбрать. =)",
    en: "python or js, Serezha thought for a long time which programming language to choose. =)",
  },
];

const cards = [
  {
    cards_1: [
      {
        id: 1,
        uk: "Я был на улице когда это случилось.  Я согласен с твоими условиями. Я согласен с твоими условиями",
        en: "I was in outsaid when it happened. I agree to your conditions. I agree to your conditions ",
        phrase: "",
      },
      { id: 2, uk: "Примерять", en: "try on" },
      { id: 3, uk: "Разные", en: "different" },
      { id: 4, uk: "Одевать", en: "put on" },
      { id: 5, uk: "Вернуть обратно", en: "take back" },
      { id: 6, uk: "По этому", en: 'that"s why' },
      { id: 7, uk: "Редко, не часто", en: "seldom" },
      { id: 8, uk: "Вылетело из головы", en: "it slipped my mind" },
      { id: 9, uk: "Предполагать, угадать", en: "guess" },
      { id: 10, uk: "Разные", en: "different" },
      { id: 11, uk: "Разделять, отделятся", en: "separate" },
      { id: 12, uk: "Включая, в том числе", en: "including" },
      { id: 13, uk: "Наверное", en: "probably" },
      { id: 14, uk: "Типа того", en: "sort of" },
      {
        id: 15,
        uk: "Я был на улице когда это случилось",
        en: "I was in outsaid when it happened",
      },
      { id: 16, uk: "Скорее всего, да", en: "probably to yes" },
      {
        id: 17,
        uk: "Я согласен с твоими условиями",
        en: "I agree to your conditions",
      },
      { id: 18, uk: "Превращается в", en: "turn into" },
      { id: 19, uk: "Привычка", en: "habits" },
      { id: 20, uk: "Зависимость", en: "addiction" },
    ],

    cards_2: [
      { id: 1, uk: "Раздеватся", en: "undress", phrase: "" },
      { id: 2, uk: "Примерять", en: "try on" },
      { id: 3, uk: "Одевать", en: "put on" },
      { id: 4, uk: "Вернуть обратно", en: "take back" },
    ],
  },
];
