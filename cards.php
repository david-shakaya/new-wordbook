<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link rel="stylesheet" href="./css/main.css" />
    <title>Document</title>
</head>

<body class="body">

    <?php include('components/header.php'); ?>

    <main class="main">
        <section class="cards-page">
            <div class="container">
                <h1 class="typography__h1 cards-page__title">
                    Карточки по темам
                </h1>

                <ul class="cards-page-list">
                    <li class="cards-page-list__item">
                        <div class="components-cards components-cards--small">
                            <a class="components-cards__link" href="./page-cards-1.php">
                                <p class="components-cards__title">
                                    Часто используемые слова (часть-1)
                                </p>
                                <p class="components-cards__amount">20 слов</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>

    <?php include('components/footer.php'); ?>

    <script type="module" src="./js/index.js"></script>
    <script src="./data/data.js"></script>
</body>

</html>