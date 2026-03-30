// ============================================
// Google Apps Script для UX-опроса: Обратная связь по ДЗ
// ============================================
//
// ИНСТРУКЦИЯ:
// 1. Создай новую Google Таблицу (sheets.new)
// 2. Переименуй первый лист в «Feedback»
// 3. Заголовки создадутся автоматически при первом ответе
// 4. Открой Расширения → Apps Script
// 5. Удали всё содержимое и вставь этот код
// 6. Нажми «Развернуть» → «Новое развёртывание»
//    - Тип: Веб-приложение
//    - Выполнять от: Меня
//    - Доступ: Все (включая анонимных)
// 7. Скопируй URL развёртывания
// 8. Вставь его в survey/index.html в строку GOOGLE_SCRIPT_URL = '...'
//

// Столбцы в порядке как в таблице:
// Время | Р1: Формат оценки | Р1: Почему | Р2: Разбор ошибок | Р2: Что удобнее | Р3: Оспаривание | Р3: Пользовался бы | Р3: В какой ситуации | Тон ОС | Подсказки | Хочется сдать | Мотивация | Чего не хватает

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Feedback');

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: 'Invalid JSON' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.r1_q1 || '',
    data.r1_q2 || '',
    data.r2_q1 || '',
    data.r2_q2 || '',
    data.r3_q1 || '',
    data.r3_q2 || '',
    data.r3_q2_detail || '',
    data.t_q1 || '',
    data.t_q2 || '',
    data.t_q3 || '',
    data.t_q4 || '',
    data.f_q1 || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ready' }))
    .setMimeType(ContentService.MimeType.JSON);
}
