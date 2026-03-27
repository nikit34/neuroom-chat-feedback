# Опрос: Обратная связь по ДЗ — Настройка

## 1. Подключение Google Sheets

### Шаг 1: Создай Google Таблицу
Создай новую таблицу. Переименуй первый лист в `Feedback`. Первая строка — заголовки:

```
timestamp | first_impression | grade_display | feedback_text | error_breakdown | error_breakdown_correct | error_breakdown_wrong | error_elements | dispute_button | dispute_button_detail | dispute_process | photo_highlights | missing_features | one_word | theme_switches | final_theme
```

### Шаг 2: Создай Google Apps Script
1. В таблице: **Расширения → Apps Script**
2. Замени содержимое на код из `google-apps-script.js`
3. **Развернуть → Новое развёртывание**
4. Тип: **Веб-приложение**
5. Выполнять от: **Меня**
6. Доступ: **Все**
7. Скопируй URL развёртывания

### Шаг 3: Вставь URL в опросник
В `index.html` найди строку:
```javascript
const GOOGLE_SCRIPT_URL = '';
```
Вставь свой URL:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/XXXX/exec';
```

## 2. Без Google Sheets (офлайн)

Если не подключать Google Sheets, ответы сохраняются в `localStorage` браузера.
Чтобы выгрузить: открой DevTools → Console:
```javascript
JSON.parse(localStorage.getItem('neuroom_feedback_survey_responses'))
```

## 3. Вопросы опроса

| # | ID | Тип | Вопрос |
|---|-----|------|--------|
| 1 | first_impression | textarea | Что запомнилось больше всего на экране ОС? |
| 2 | grade_display | tags | Оцени элементы отображения оценки |
| 3 | feedback_text | choice | Понятна ли обратная связь от учителя? |
| 4 | error_breakdown | multiselect* | Какие элементы разбора ошибок заметил? |
| 5 | error_elements | tags | Насколько полезны элементы разбора? |
| 6 | dispute_button | choice+followup | Воспользовался бы кнопкой «Я не согласен»? |
| 7 | dispute_process | textarea | Что должно произойти после «Я не согласен»? |
| 8 | photo_highlights | choice | Полезно ли фото с выделениями? |
| 9 | missing_features | multiselect | Чего не хватает на экране ОС? |
| 10 | one_word | short_text | Одно слово про экран ОС |

\* = содержит ловушки (ложные элементы) для проверки внимательности
