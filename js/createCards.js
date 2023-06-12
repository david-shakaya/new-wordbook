// Динамически добавляет поля ввода для слов

const btnAddedTextarea = document.querySelector(".btn-added-textarea-js");
const innerTextarea = document.querySelector(".inner-textarea-js");

btnAddedTextarea.addEventListener("click", addedNewArea);

let counter = 3;

function addedNewArea(e) {
  const htmlMark = `                        <label class="create-cards-page__label">
                            Слово/фраза
                            <textarea class="create-cards-page__textarea create-cards-page__textarea--term" type="text"
                                autocomplete="off" minlength="1" maxlength="220"></textarea>
                        </label>
                        <label class="create-cards-page__label">
                            Перевод
                            <textarea class="create-cards-page__textarea create-cards-page__textarea--definition"
                                type="text" autocomplete="off" minlength="1" maxlength="220"></textarea>
                        </label>`;
  innerTextarea.insertAdjacentHTML("beforeend", htmlMark);
  counter += 1;
}
