<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link rel="stylesheet" href="./css/main.css" />
    <link rel="shortcut icon" type="favicon/png" href="./img/favicon.png" />
    <title>E-WORDBOOK</title>
</head>

<body class="body">


    <?php include('components/header.php'); ?>

    <main class="main">
        <section class="words-page">
            <div class="container">
                <div class="components-training__wrapper">
                    <h1 class="components-training__title typography__h2">
                        Изучение слов
                    </h1>
                    <p class="components-training__subtitle">
                        Слова идут по порядку или рандомно?
                    </p>
                    <form class="components-training__form">
                        <div class="components-training__input-wrapper">
                            <input class="components-training__input components-training__input--first" id="random"
                                type="radio" name="question" value="random" />
                            <label class="components-training__label" for="random">
                                рандомно
                            </label>
                        </div>
                        <div class="components-training__input-wrapper">
                            <input class="components-training__input components-training__input--second" type="radio"
                                name="question" value="in-order" id="in-order" checked />
                            <label class="components-training__label" for="in-order">
                                по порядку
                            </label>
                        </div>
                    </form>
                    <p class="components-training__word-count word-count-js">1/20</p>
                    <div class="components-training__screen-wrapper">
                        <div class="components-training__screen screen-js"></div>
                        <div class="components-training__screen screen2-js"></div>
                    </div>
                    <div class="components__buttons components-training__btns">
                        <button class="components__button components__button--training button btn-next-word-js">
                            слудующее слово
                        </button>
                        <button disabled class="components__button components__button--training btn-show-answer-js">
                            показать ответ
                        </button>
                        <button class="components__button components__button--show-words show-all-words-js"
                            type="button">
                            Показать все слова
                        </button>
                    </div>
                    <ul class="components-training__list-all-words list-all-words-js"></ul>
                </div>
            </div>
        </section>
    </main>

    <script src="./data/data.js"></script>
    <script type="module" src="./js/index.js"></script>
    <script type="module" src="./js/words.js"></script>
</body>

</html>