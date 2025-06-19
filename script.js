// Конфигурация проекта
const CONFIG = {
    signatureName: "Бабадук ❤️", // Замените на своё имя
    finalLevelPassword: "02.09.2010", // Пароль для последнего уровня
    musicEnabled: true // Включить фоновую музыку
};

// Полный массив со 100 уровнями
const levels = [
    // Уровень 1
    {
        riddle: "В каком году мы познакомились?",
        answer: "2023",
        letter: "2023 год подарил мне тебя. Это был самый счастливый год в моей жизни, несмотря на все трудности.Я никогда не забуду ту твою улыбку❤️"
    },
    
    // Уровень 2
    {
        riddle: "Где мы впервые встретились?",
        answer: "рядом со школой",
        letter: "В тот день я остановил тебя схватитв за плечо со словами  (Осторожнее машина) ,а ты обматерила меня.Тогда я подумал  (Вот и помгай после такого людям) .Кто же знал что та маленькая злюка станет спутницей моей жизни❤️"
    },
    
    // Уровень 3
    {
        riddle: "Какого цвета было твоё платье на первом свидании?",
        answer: "чёрное",
        letter: "Ты запомнила цвет своего платья! Поздравляю злюка❤️."
    },
    
    // Уровень 4
    {
        riddle: "Как звали мою собаку?",
        answer: "тузик",
        letter: "А я знал что ты не угадаешь :)❤️"
    },
    
    // Уровень 5
    {
        riddle: "Какой был мой первый подарок тебе?",
        answer: "babyfox",
        letter: "Ты сказала, что это твоя любимая конфета.Ты досихпор хранишь от них бумажки ❤️"
    },
    
    // Уровень 6
    {
        riddle: "Какой танец мы танцевали впервые?",
        answer: "вальс",
        letter: "Я никогдане танцевал вальс, хоть это и был первый раз когда я его станцевал, и получилось ужасно.Нам было очень весело.❤️Я хочу и дальше танцевать вместе с тобой❤️"
    },
    
    // Уровень 7
    {
        riddle: "На сколько минут ты опоздала на наше первое свидание.Хоть мы и не считали это за свидание?",
        answer: "60",
        letter: "Эти 60 минут ожидания стоили того.Я увидел тебя такой счастливой , в тот момент я подумал (Это самая прекрасная улыбка во всем мире❤️).Я хочу чтобы ты всегда улыбалась и была счастлива❤️"
    },
    
    // Уровень 8
    {
        riddle: "Какой мультфильм мы смотрели но так и не досмотрели, потому что оба заснули?",
        answer: "рататуй",
        letter: "Ты уснул(а) на середине фильма, но я не стала будить - ты был(а) так прекрасен(на) во сне."
    },
    
    // Уровень 9
    {
        riddle: "Что я приготовил для тебя впервые?",
        answer: "плов",
        letter: "Ты попробовала её но так и не доела -_-"
    },
    
    // Уровень 10
    {
        riddle: "Куда ты хотела пойти вместе со мной,летом но мы так и не пошли",
        answer: "речка",
        letter: "Ты так хотела туда пойти что, я даже сегодня думал о том как бы мы могли туда пойти❤️"
    },

    // Уровни 11-20
    {
        riddle: "Сколько дней мы переписывались до первой встречи?",
        answer: "не знаю",
        letter: "Мы то переписывались то пропадали , я не могу сказать точно сколько дней прошло до первой встречи но она была не забываемая❤️"
    },
    {
        riddle: "Что ты сделала когда зашла мой класс?",
        answer: "фото",
        letter: "Ты буквально зашла и сфоткала фотографию с классного уголка.Это было не ожиданно❤️"
    },
    {
        riddle: "Какой букет я подарил тебе на 8 марта?",
        answer: "сладкий",
        letter: "Ты пришла на встречу и явно была удивлена такому букету.Сначала я думал заказать обычный букет но решил что для такой сладкоежки  как ты лучше сделать что то особенное❤️"
    },
    {
        riddle: "Твоя любимая еда?",
        answer: "жаренная картошка",
        letter: "Помнишь как мы вместе её готовили ? Думаю что готовить картошку ты никогда не разучишься ❤️"
    },
    {
        riddle: "Какой напиток ты пила в ту ночь когда попросила меня о встрече, а сама пошла гулять с Фатимой?",
        answer: "голубая лагуна",
        letter: "Я же говорил что не забуду эту ночь -_-.Но скажутак чтобы ты не сделала, я буду с тобой❤️"
    },
    {
        riddle: "Куда я приехал на встречу к тебе?",
        answer: "к тёте",
        letter: "Тогда ты мне сказала  что ты очень сильно хотела бы, что бы я приехал туда и , я решил посмотреть что будет если я приеду.Ты была тогда такой счастливой ❤️ "
    },
    {
        riddle: "Какой у меня был самый смешной провал в кулинарии для тебя?",
        answer: "пирог",
        letter: "Мой первый пирог на столько не получился что я даже не сказал тебе о том что готовил его❤️"
    },
    {
        riddle: "Где я всегда оставлял для тебя babyfox?",
        answer: "айшатин магазин",
        letter: "Ты и сама помнишь что там было :) ❤️"
    },
    {
        riddle: "Какой у нас был самый долгий разговор по телефону? (в часах)",
        answer: "10",
        letter: "10 часов пролетели как одна минута. Я тогда понял, что могу говорить с тобой вечно."
    },
    {
        riddle: "Какую песню ты спела не зная что я рядом?",
        answer: "чёрные глаза",
        letter: "Твой голос прекрасен ,буду счастлив  слушать твое пение каждый день❤️"
    },

    // Уровни 21-30
    {
        riddle: "Как я называю тебя, когда злюсь?",
        answer: "кидло",
        letter: "Даже когда злюсь, не могу придумать что-то обидное - ты моя бука❤️ навсегда!"
    },
    {
        riddle: "Что я всегда говорю тебе когда ты плачешь?",
        answer: "не плачь плакса мая",
        letter: "Ты очень мило плачешь солнышко моё.Но даже так улыбайся почаще улыбашка мая!"
    },
    {
        riddle: "Как мы называли друг друга когда начали общаться?",
        answer: "брат и сестра",
        letter: "Я спросил тебя кем ты хочешь быть для меня и ты ответила (сестрой) да я знал что ты сказала не всю правду но решил что будет интересно❤️."
    },
    {
        riddle: "Какой мой любимый запах твоих духов?",
        answer: "клубничный",
        letter: "Ты пахнешь клубникой и теплом. Иногда я просто закрываю глаза и думаю что я на той самой поляне сижу под деревом вместе с тобой ❤️"
    },
    {
        riddle: "Какой самый нелепый комплимент я тебе говорил?",
        answer: "красивая",
        letter: "Мы играли в майн и задавали друг другу задания и мне выпало задание сделать тебе комплимент это было так неожиданно что я не зная что ответить сказал (Ты красивая)  ❤️  "
    },
    {
        riddle: "Что ты мне подарила на моё др?",
        answer: "краски часы и стикеры",
        letter: "Я просто хотел что бы ты провела этот день рядом со мной.Больше всего меня удивило то что ты назвала свой подарок плохим . Ты просто мой ангелочек я вообще не люблю празновать своё др. и в тот день я праздновал не своё др. а то что в моей жизни появилась ты."
    },
    {
        riddle: "Какое слово я повторяю всё время?",
        answer: "бука",
        letter: "Я начал назыать тебя так просто по тому что тынастолько красивая и милая что я скрее умру от твоей красоты чем от чего либо другого.❤️Не хочу умирать,лучше умру от старости в твоих объятиях❤️  "
    },
    {
        riddle: "Какой у меня был самый неудачный сюрприз для тебя?",
        answer: "встреча",
        letter: "Я хотел прийти к тебе, договорился с твоей матерью договорился с другом. Он пришел ко мне что бы я скачал ему майн ,я скачал и вышел. Он тоже вышел что бы пойти домой ,а ты ждала меня на нашей улице обиделась и ушла домой хоть это и был самый неудачный  сюрприз я просто хочу чтобы ты знала(я хотел обрадовать тебя но получилось наоборот прости меня❤️) "
    },
    {
        riddle: "Какое наше любимое домашнее блюдо?",
        answer: "жаренная картошка",
        letter: "Наша фирменная картошка с томатам - вкус семейного счастья."
    },
    {
        riddle: "Как ты хочешь заснуть?",
        answer: "в обнимку",
        letter: "Без тебя в качесте плюшевой игрушки под рукой сон не такой хороший❤️."
    },

    // Уровни 31-40
    {
        riddle: "Где ты хочешь жить?",
        answer: "хасвюрт",
        letter: "Ты выбрала это место что бы не жить в селе и люди не лезли к нам , а также чтобы быть ближе к матери и каждый день могла приехать к ней ❤️"
    },
    {
        riddle: "Какой самый долгий период мы не виделись? (в днях)",
        answer: "68",
        letter: "Эти 68 дней разлуки показали, что даже на расстоянии мы всегда будем вместе❤️."
    },
    {
        riddle: "Какой у нас был совместный рисунок❤️",
        answer: "виноград",
        letter: "Мы нарисовали этот виноград вместе и я досихпор храню этот рисноку как символ того что мы всегда будем вместе❤️"
    },
    {
        riddle: "Какой город мы  выбрали на карте для будущей поездки?",
        answer: "санк петербург",
        letter: "Ты сказала что никогда не была дальше хаса  и я решил поехать с тобой в путешествие что бы ты ни когда не жалела о том что что либо не сделала или не увидела❤️"
    },
    {
        riddle: "Какой наш любимый сезон для прогулок?",
        answer: "лето",
        letter: "Летом можно сходить на речку или поехать на море что мы и сделаем ❤️"
    },
    {
        riddle: "Как мы называем наш первый совместный фотоальбом?",
        answer: "никак",
        letter: "Мы его толька недавно начали и ты не придумала название ❤️"
    },
    {
        riddle: "Как ты обожаешь называть меня ?",
        answer: "бубусь",
        letter: "Не знаю почему так был бабадук стал бубусь❤️"
    },
    {
        riddle: "Что холодное и нам обоим нравится",
        answer: "мороженное",
        letter: "У нас марозилка должна быть полна мороженным❤️"
    },
    {
        riddle: "Какой самый неожиданный комплимент ты мне сделала?",
        answer: "уши",
        letter: "У тебя самые красивые уши на свете' - до сих пор не понимаю, как тебе это пришло в голову"
    },
    {
        riddle: "Какую игру мы играем вместе?",
        answer: "роблокс",
        letter: "Мы обожаем играть в майн но играем в роблокс ❤️"
    },

    // Уровни 41-50
    {
        riddle: "Что я подарил тебе на др?",
        answer: "мишутка",
        letter: "Ты до сих пор наверное где то там воляется❤️"
    },
    {
        riddle: "Где ты была с тетей в Хасе и ты просила меня прийти чтобы встретиться?",
        answer: "стамбул",
        letter: "Я пошел в стамбул но ты уехала только через несколько дней я понял что это был совершенно другой стамбул"
    },
    {
        riddle: "Какой самый нелепый подарок я тебе дарил?",
        answer: "носок",
        letter: "Тот носок который я подарил тебе просто по тому что захотел чтобы он был у тебя.Но хотя бы его ты точно потеряла ни кто не устоит перд силой насков теряться❤️"
    },
    {
        riddle: "Где мы встетились с твоей матерью впервые?",
        answer: "айшаткин магазин",
        letter: "Странная была встреча хоть и специальная ❤️"
    },
    {
        riddle: "Какой у меня был самый неудачный эксперимент с причёской?",
        answer: "чёлка",
        letter: "даже сейчас ты говоришь главное не делай ту чёлку"
    },
    {
        riddle: "Ты споешь мне?",
        answer: "нет",
        letter: "Не удивлен ты всегда отвечаешь нет -_- я же хочу послушать ❤️спой для меня пожалуйста❤️"
    },
    {
        riddle: "Какой наш любимый дождливый день?",
        answer: "12",
        letter: "12 апреля прошлого года - мы весь день провели под одеялом, слушая дождь за окном."
    },
    {
        riddle: "Какое мороженное мы часто покупали?",
        answer: "банан",
        letter: "Ты прям обожала банановое мороженное но почему то всегда берешь как оно там называлось что то похожее на белые ночи но так же обожаешь фруктовый лёд❤️"
    },
    {
        riddle: "Какой самый романтичный фильм мы смотрели?",
        answer: "не смотрели",
        letter: "Ты обожаешь страшилки но после них прячешься под одеяло и не можешь заснуть❤️"
    },
    {
        riddle: "Какие фильмы мы чаще всего смотрели?",
        answer: "страшилки",
        letter: "Да признаюсь я спешу встретиться с тобой по этому сложно придумать вопросы я и так не успеваю ❤️"
    },

    // Уровни 51-60
    {
        riddle: "сколько детей ты хотела?",
        answer: "100000",
        letter: "Хочу свою армию надо сдеалть армию из 100000 детей а потом продавать их вот что ты мне сказала❤️я долго над этим смеялся❤️"
    },
    {
        riddle: "Что тебе снится в кошмарах?",
        answer: "измена",
        letter: "Ты так боишься потерять меня что тебе начали сниться кошмары❤️не бойся бука❤️ я всегда буду с тобой и только стобой❤️ "
    },
    {
        riddle: "Какой твой любимый аромат духов?",
        answer: "клубника",
        letter: "клубника это твои любимые духи и ягоды❤️"
    },
    {
        riddle: "Что ты до последнего не хотела чтобы я видел в твоем теле?",
        answer: "зубы",
        letter: "Ты боялась того что я увижу твои зубы по тому что ты считала их кривыми и не красивыми ❤️но они прекрасны бука  мая не переживай о своей внешности ты прекрасна во всём❤️"
    },
    {
        riddle: "Какой у номер?",
        answer: "89319980612",
        letter: "Ах ты подсмотрела в телефоне ?❤️"
    },
    {
        riddle: "Какой самый романтичный жест ты сделал без повода?",
        answer: "цветок",
        letter: "Мы сидели около твоего дома и ты встала сорвала цветок с дерева и подарила мне ❤️Это было не ожиданно и очень мило❤️"
    },
    {
        riddle: "Мая любимая песня?",
        answer: "та которую поёшь ты",
        letter: "Твой голос мой любимый звук на свете даже если тыругаешь меня я рад слышать тебя я хочу услышать твоё пение❤️спой бука мая❤️ "
    },
    {
        riddle: "Что ты всегда просила меня принести?",
        answer: "алчу",
        letter: "❤️Куда же без неё, ведь всё время мы проводили за поеданием и поиском алчи❤️"
    },
    {
        riddle: "Где мы впервые договорились встретиться?❤️",
        answer: "на углу",
        letter: "Этот угал мы ещё долго не забудем❤️❤️❤️❤️"
    },
    {
        riddle: "Что ты хотела что бы я тебе приготовил ?",
        answer: "пиццу",
        letter: "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️"
    },

    // Уровни 61-70
    {
        riddle: "Сколько дней мы не виделись в тот сложный период?",
        answer: "68",
        letter: "Эти 68 дней разлуки показали, как сильно я скучаю по тебе каждую минуту."
    },
    {
        riddle: "Какой самый ценный совет ты мне дала?",
        answer: "дыши",
        letter: "Просто 'дыши' - этот совет выручает меня в самых сложных ситуациях.Как бы я жил незная этого❤️❤️Люблю тебя❤️❤️"
    },
    {
        riddle: "Какой наш любимый способ мириться?",
        answer: "обниматься",
        letter: "Мы всегда даже если злимся, всё равно обнимаемся❤️."
    },
    {
        riddle: "Какой самый нелепый повод для ревности у меня был?",
        answer: "мама",
        letter: "Я ревновал тебя к матери, которая всегда можетбыь с тобой .Это было так глупо! Этих слов ты ждала ? Неа вот побыстрее и получше закончу учёбу и тоже смогу всё время быть рядом с тобой❤️❤️❤️❤️ "
    },
    {
        riddle: "Какой у нас любимый способ проводить день?",
        answer: "лениться",
        letter: "Целый день лёжа играя в майн и поедая сладкое - наш идеальный отдых."
    },
    {
        riddle: "Какой самый смешной подарок ты мне сделала?",
        answer: "носки от мелкой",
        letter: "Те носки всё ещё где то там лежат"
    },
    {
        riddle: "С каким смайликом я должен был сохранить тебя что бы ты не обижалась на меня?",
        answer: "сердечко",
        letter: "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️"
    },
    {
        riddle: "Какой самый неожиданный комплимент я тебе сделал?",
        answer: "зубы",
        letter: "Ты так боялась того что, я увижу твои зубы по этому ты не ожидала того что я сделаю комплимент твоим зубкам❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ "
    },
    {
        riddle: "Какой наш любимый способ отмечать маленькие победы?",
        answer: "обняться",
        letter: "Обьятия для нас как особый знак того что мы рядом и можем положиться друг на друга чтобы не случилось❤️ "
    },
    {
        riddle: "Какой у нас был самый долгий поцелуй? (в минутах)",
        answer: "не скажу",
        letter: "Не тот вопрос задал ❤️"
    },

    // Уровни 71-80
    {
        riddle: "Какой мой любимый месяц в году?",
        answer: "сентябрь",
        letter: "Сентябрь по тому что это день в котором родился смысл моей жизни❤️ты для меня важнее всех улыбнись солнышко моё❤️ "
    },
    {
        riddle: "Кто из нас будет готовить когда мы будем жить вместе?",
        answer: "вместе",
        letter: "Давай угадаю ты написал что готовить буду я ?❤️"
    },
    {
        riddle: "Какой самый романтичный подарок я тебе сделал?",
        answer: "букет",
        letter: "Не знаю какой был самый романтичный это решать тебе бука ❤️"
    },
    {
        riddle: "Какой у нас любимый способ встречать рассвет?",
        answer: "в обнимку",
        letter: "Где бы я не был я буду с тобой и самый лучший рассвет в моей жизни был 02.09.2010 года.❤️ "
    },
    {
        riddle: "Кем ты хочешь работать?",
        answer: "визажистом",
        letter: "Ты всегда хотела стать визажистом , я думаю что ты прекрасно с этим справишься и даже готов разрешить экспрементировать на мне❤️"
    },
    {
        riddle: "Кто ещё играл с нами в майн?",
        answer: "мелкая",
        letter: "Она единственный человек который играл с нами"
    },
    {
        riddle: "Как мы собирались провести новый год?",
        answer: "вместе",
        letter: "Мы каждый раз хотели встретить новый год вместе и нам ни разу не удалось это сделать обидно но всё равно я не сдамся и встречу новый год вместе с тобой ❤️"
    },
    {
        riddle: "Какой самый смешной костюм на меня надевала?",
        answer: "платье",
        letter: "То самое платье и платок который я разрешил тебе надеть на меня.Мы тогда так ха-ха ловили❤️"
    },
    {
        riddle: "Какого числа у меня др.",
        answer: "21",
        letter: "21 да ты угадала бука укушу -_-"
    },
    {
        riddle: "А месяц какой?",
        answer: "декабрь",
        letter: "Да я серьёзно, я уже засыпаю не думал что будет так сложно создавать этот сайт❤️ "
    },

    // Уровни 81-90
    {
        riddle: "А давай дату моего рожденя?",
        answer: "21.12.2006",
        letter: "Если бы ты не угадала не простил бы -_- а укусил ❤️"
    },
    {
        riddle: "Какой наш любимый способ выбирать фильм?",
        answer: "спорить",
        letter: "Мы часами спорим, что посмотреть, а в итоге засыпаем на третьей минуте."
    },
    {
        riddle: "Какое твоё не любимое блюдо ты начала есть просто из-за того что я её приготовил?",
        answer: "плов",
        letter: "Я помню тот день когда я приготовил плов зная чтоты его не любишь . Я хотел проверить на сколько ты хочешь попробовать то что приготовил я ?"
    },
    {
        riddle: "Поедем вместе в Дербент?",
        answer: "конечтно да",
        letter: "Почему бы и не поехать. Темболее с таким ангелочком как ты ❤️"
    },
    {
        riddle: "Какой самый романтичный закат мы видели?",
        answer: "река",
        letter: "❤️❤️Тот закат у реки, когда ты вдруг встала и посмотрела на закат со словами (Как красиво❤️)❤️❤️❤️"
    },
    {
        riddle: "Как мы  будем отмечать месяц знакомства?",
        answer: "фотографией",
        letter: "Каждый месяц мы будем делать одно фото в одном и том же месте.❤️"
    },
    {
        riddle: "Какой самый лучший день в твоей жизни?❤️",
        answer: "день когда встретила тебя",
        letter: "❤️ОЙ как мило не ожидал такой милоты от тебя❤️Хотя я знал чтоты милашка ❤️ "
    },
    {
        riddle: "В какую погоду я хочу быть с тобой что бы не случилось?❤️",
        answer: "плохую",
        letter: " Когда погода плохая я не могу заснуть по тому что переживаю за тебя особенно если ты одна дома ❤️"
    },
    {
        riddle: "Какой мультик ты предложила пересмотреть вместе?",
        answer: "смурфики",
        letter: "❤️смурфики это мультик детсва такой же долгий как и вся жизнь, я с радостью потрачу свою жизнь для просмотра смурфиков вместе с тобой❤️"
    },
    {
        riddle: "Какой у нас любимый способ заканчивать ссоры?",
        answer: "обняться",
        letter: "Кто первым обнимет - тот и выиграл. Так мы научились обниматься ❤️:)"
    },

    // Уровни 91-99
    {
        riddle: "Сколько лет я мечтаю сделать тебе предложение?",
        answer: "всю свою жизнь",
        letter: "Всю свою жизнь  я копил любовь, чтобы сегодня сказать самое важное...❤️Я люблю тебя❤️"
    },
    {
        riddle: "Какой наш любимый ритуал перед сном?",
        answer: "звонок",
        letter: "Мы всегда звоним друг другу перд сном хоть в последнее время ты и начала пропадать❤️"
    },
    {
        riddle: "Какую фотку ты должнабыла скинуть ко мне но так и не скинула?",
        answer: "своих долгов",
        letter: "Я жду фотку бука❤️-_-❤️"
    },
    {
        riddle: "Какой наш любимый способ друг друга?",
        answer: "объятия",
        letter: "Мы всегда обнимаем друг друга при встрече надеюсь так будет всегда❤️"
    },
    {
        riddle: "Сколько лет я готов прожить с тобой?",
        answer: "∞",
        letter: "❤️Сколькобы лет не прошло моя любовь к тебе и моё желание быть рядом с тобой никуда неденеться❤️ "
    },
    {
        riddle: "Какая твоя любимая песня?",
        answer: "Магистрали",
        letter: "Пора мне начать слушать её по тому что я буду слышать её каждый раз когда ты будешь чем то заниматься у нас дома❤️"
    },
    {
        riddle: "Какой самый нелепый спор мы вели?",
        answer: "кто сильнее любит",
        letter: "Мы так часто спорили на эту тему но в итоге я понял что мы оба любим друг друга очень сильно и так же одинаково❤️"
    },
    {
        riddle: "Что ты хотела сделать со мной на последнем звонке?",
        answer: "станцевать",
        letter: "Ты звала меня потанцевать но я плохо себя чувствовал и не мог станцевать но скажу тебе так на твоём выпускном мы станцуем вместе и уйдем оттуда вместе❤️"
    },
    {
        riddle: "Какой самый важный урок ты мне дал?",
        answer: "любить",
        letter: "Ты научила меня любить по-настоящему - без фальшивых прочитанных где либо слов научила меня любить и чувст."
    },

    // Уровень 100 (Финальный)
    {
        riddle: "Какая самая главная дата в моей жизни?",
        answer: CONFIG.finalLevelPassword,
        letter: `
            <p>Этот момент я запомню навсегда...</p>
            <p>Ты сделала меня самым счастливым человеком на свете!</p>
            <p>Я обещаю любить тебя вечно, заботиться о тебе и делать нашу жизнь сказкой.</p>
            <p>Ты мойя судьба, бука мая❤️</p>
            <p>Будешь моей женой?❤️</p>
        `,
        isFinal: true
    }
];


// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация элементов
    const splashScreen = document.querySelector('.splash-screen');
    const mainPage = document.querySelector('.main-page');
    const musicControl = document.querySelector('.music-control');
    const bgMusic = document.getElementById('bgMusic');
    
    // Загружаем прогресс
    const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [];
    
    // Создаем лепестки
    createPetals();
    
    // Настройка музыки
    if (CONFIG.musicEnabled) {
        bgMusic.volume = 0.3; // Установка комфортной громкости
        musicControl.style.display = 'flex';
        
        // Обработчик клика по контролу музыки
        musicControl.addEventListener('click', toggleMusic);
    } else {
        musicControl.style.display = 'none';
    }
    
    // Установка подписи
    document.getElementById('signature-name').textContent = CONFIG.signatureName;
    
    // Показ заставки
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainPage.style.display = 'block';
        generateLevelButtons(completedLevels);
        
        // Автовоспроизведение музыки (работает не во всех браузерах)
        if (CONFIG.musicEnabled) {
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    musicControl.textContent = '🎵';
                });
            }
        }
    }, 3000);
    
    // Закрытие модальных окон
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.modal-overlay').style.display = 'none';
            document.querySelector('.letter-overlay').style.display = 'none';
        });
    });
    
    // Обработчик для оверлея (закрытие по клику вне модалки)
    document.querySelectorAll('.modal-overlay, .letter-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
});

// Создание анимированных лепестков
function createPetals() {
    const petalsContainer = document.querySelector('.petals');
    const petalCount = 15;
    const petalIcons = ['🌸', '🌹', '🌼', '🌷'];
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = petalIcons[Math.floor(Math.random() * petalIcons.length)];
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${10 + Math.random() * 20}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petalsContainer.appendChild(petal);
    }
}

// Управление музыкой
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicControl = document.querySelector('.music-control');
    
    if (bgMusic.paused) {
        bgMusic.play();
        musicControl.textContent = '🔊';
    } else {
        bgMusic.pause();
        musicControl.textContent = '🎵';
    }
}

// Генерация кнопок уровней
function generateLevelButtons(completedLevels) {
    const grid = document.querySelector('.levels-grid');
    grid.innerHTML = '';
    
    levels.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        btn.textContent = index + 1;
        btn.id = `level-${index + 1}`;
        
        if (completedLevels.includes(index)) {
            markLevelAsCompleted(btn, index);
        } else {
            btn.addEventListener('click', () => openLevel(index));
        }
        
        grid.appendChild(btn);
    });
}

// Открытие уровня
function openLevel(levelIndex) {
    const level = levels[levelIndex];
    const modal = document.querySelector('.modal-overlay');
    
    // Проверка пароля для последнего уровня
    if (level.isFinal) {
        const password = prompt("Этот уровень особенный. Введи пароль чтобы продолжить:");
        
        if (password?.toLowerCase() !== level.answer) {
            alert("Попробуй ещё раз, дорогая");
            return;
        }
    }
    
    document.getElementById('current-level').textContent = levelIndex + 1;
    document.querySelector('.modal-riddle').textContent = level.riddle;
    
    // Создание поля для ввода ответа
    const inputContainer = document.querySelector('.crossword-input');
    inputContainer.innerHTML = '';
    
    for (let i = 0; i < level.answer.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.dataset.index = i;
        input.addEventListener('input', moveToNextInput);
        inputContainer.appendChild(input);
    }
    
    modal.style.display = 'flex';
    document.querySelector('.crossword-input input').focus();
}

// Проверка ответа
document.querySelector('.submit-btn').addEventListener('click', checkAnswer);

function checkAnswer() {
    const levelIndex = parseInt(document.getElementById('current-level').textContent) - 1;
    const inputs = document.querySelectorAll('.crossword-input input');
    let userAnswer = '';
    
    inputs.forEach(input => {
        userAnswer += input.value.toLowerCase();
    });
    
    if (userAnswer === levels[levelIndex].answer) {
        // Сохраняем прогресс
        const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || [];
        
        if (!completedLevels.includes(levelIndex)) {
            completedLevels.push(levelIndex);
            localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
        }
        
        showLetter(levelIndex);
    } else {
        alert('Попробуй ещё раз, любимый(ая)!');
        inputs[0].focus();
    }
}

// Показ письма
function showLetter(levelIndex) {
    const level = levels[levelIndex];
    const letterModal = document.querySelector('.letter-overlay');
    
    document.querySelector('.letter-text').innerHTML = level.letter;
    document.querySelector('.modal-overlay').style.display = 'none';
    letterModal.style.display = 'flex';
    
    // Обновляем кнопку уровня
    const btn = document.getElementById(`level-${levelIndex + 1}`);
    markLevelAsCompleted(btn, levelIndex);
    
    // Особые эффекты для последнего уровня (только стили, без изображений)
    if (level.isFinal) {
        const letterModalContent = document.querySelector('.letter-modal');
        letterModalContent.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
        letterModalContent.style.color = 'white';
        
        // Запускаем конфетти (если нужно оставить)
        startConfetti();
    }
}

// Пометка уровня как пройденного
function markLevelAsCompleted(btn, levelIndex) {
    btn.classList.add('completed');
    btn.style.background = 'var(--primary-color)';
    btn.style.color = 'white';
    btn.onclick = () => showLetter(levelIndex);
}

// Автопереход между инпутами
function moveToNextInput(e) {
    const inputs = document.querySelectorAll('.crossword-input input');
    const currentIndex = parseInt(e.target.dataset.index);
    
    if (e.target.value && currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
    }
}

// Эффект конфетти
function startConfetti() {
    const confettiSettings = { 
        target: 'confetti-canvas',
        max: 150,
        size: 1.5,
        animate: true,
        props: ['🌸', '💖', '💍', '✨'],
        colors: [[255, 186, 193], [255, 255, 255], [255, 222, 235]],
        clock: 25,
        rotate: true
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    // Остановка через 10 секунд
    setTimeout(() => confetti.clear(), 10000);
}
function resetProgress() {
  const modal = document.createElement('div');
  modal.className = 'confirm-modal-overlay';
  modal.innerHTML = `
    <div class="confirm-modal">
      <h3>Сбросить все воспоминания?</h3>
      <p>Все пройденные уровни будут сброшены, и вам нужно будет начать путешествие заново.</p>
      <div class="confirm-buttons">
        <button class="confirm-btn confirm-yes">Да, начать сначала</button>
        <button class="confirm-btn confirm-no">Нет, продолжить</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Стили для модального окна (добавьте в ваш CSS)
  const style = document.createElement('style');
  style.textContent = `
    .confirm-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 223, 235, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      backdrop-filter: blur(3px);
    }
    .confirm-modal {
      background: white;
      padding: 30px;
      border-radius: 20px;
      max-width: 400px;
      width: 90%;
      text-align: center;
      box-shadow: 0 10px 30px rgba(212, 106, 142, 0.2);
      border: 1px solid var(--secondary-color);
    }
    .confirm-modal h3 {
      color: var(--primary-color);
      margin-bottom: 15px;
      font-family: 'Playfair Display', serif;
    }
    .confirm-modal p {
      margin-bottom: 25px;
      color: var(--text-color);
      line-height: 1.5;
    }
    .confirm-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }
    .confirm-btn {
      padding: 12px 25px;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s;
      font-family: 'Playfair Display', serif;
    }
    .confirm-yes {
      background: var(--primary-color);
      color: white;
    }
    .confirm-yes:hover {
      background: #c55a7e;
      transform: translateY(-2px);
    }
    .confirm-no {
      background: white;
      color: var(--primary-color);
      border: 1px solid var(--secondary-color);
    }
    .confirm-no:hover {
      background: #fff9fb;
      transform: translateY(-2px);
    }
  `;
  document.head.appendChild(style);

  document.querySelector('.confirm-yes').addEventListener('click', () => {
    localStorage.removeItem('completedLevels');
    
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.innerHTML = '<span class="reset-icon">✓</span> <span class="reset-text">Воспоминания обновлены</span>';
    resetBtn.classList.add('reset-success');
    resetBtn.disabled = true;
    
    // Добавляем лепестки для эффекта
    for (let i = 0; i < 5; i++) {
      createPetalAnimation(resetBtn);
    }
    
    setTimeout(() => {
      location.reload();
    }, 1500);
  });

  document.querySelector('.confirm-no').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.head.removeChild(style);
  });
}

// Функция для анимации лепестков
function createPetalAnimation(element) {
  const petal = document.createElement('div');
  petal.innerHTML = '🌸';
  petal.style.position = 'absolute';
  petal.style.fontSize = '20px';
  petal.style.animation = `fallPetal ${Math.random() * 2 + 1}s linear forwards`;
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.top = '0';
  petal.style.zIndex = '100';
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fallPetal {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  
  element.appendChild(petal);
  
  setTimeout(() => {
    petal.remove();
    document.head.removeChild(style);
  }, 1000);
}