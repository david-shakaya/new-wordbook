  <header class="header">
      <nav class="header__nav">
          <div class="header__menu">
              <a class="header__logo-link" href="./index.php"> </a>
              <ul class="header__menu-list">
                  <li class="header__menu-item">
                      <a class="header__menu-link" href="./grammar.php">Грамматика</a>
                  </li>
                  <li class="header__menu-item">
                      <a class="header__menu-link" href="./cards.php">Учить слова</a>
                  </li>
              </ul>
          </div>
          <div class="header__menu-icon">
              <ul class="header__list-icon">
                  <li class="header__item-icon header__item-icon--user">
                      <a title="вход/регистрация" class="header__item-link header__item-link--user" href="#">
                          <svg class="header__icon-user" role="img" aria-label="Иконка входа">
                              <use class="header__icon-user--svg" href="/img/sprite.svg#user"></use>
                          </svg>
                      </a>
                  </li>
                  <li class="header__item-icon">
                      <div class="theme-switch">
                          <svg class="theme-switch__icon" role="img" aria-label="Иконка солнца">
                              <use href="./img/sprite.svg#sun"></use>
                          </svg>

                          <div class="theme-switch__control">
                              <input class="theme-switch__toggle" type="checkbox" name="theme" id="theme-switch-toggle"
                                  aria-label="Переключить между тёмной и светлой темой" />
                              <label aria-hidden="true" class="theme-switch__track" for="theme-switch-toggle">
                              </label>
                              <div aria-hidden="true" class="theme-switch__marker"></div>
                          </div>

                          <svg class="theme-switch__icon" aria-label="Иконка луны">
                              <use href="./img/sprite.svg#moon"></use>
                          </svg>
                      </div>
                  </li>
                  <li class="header__item-icon header__item-icon--burger">
                      <button class="header__item-icon-btn  btn-burger-js" type="button"></button>
                  </li>
              </ul>
          </div>
          <ul class="header__menu-mob header-menu-mob header-menu-mob-js">
              <li class="header-menu-mob__item">
                  <a class="header-menu-mob__link" href="./cards.php">Учить слова</a>
              </li>
              <li class="header-menu-mob__item">
                  <a href="#" class="header-menu-mob__link">Грамматика</a>
              </li>
          </ul>
      </nav>
  </header>