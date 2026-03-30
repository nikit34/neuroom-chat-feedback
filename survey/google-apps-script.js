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

// Столбцы в нужном порядке
var COLUMNS = [
  'timestamp',
  'r1_q1',         // Какой формат показа оценки понравился
  'r1_q2',         // Почему (опционально)
  'r2_q1',         // Где разбор ошибок понятнее
  'r2_q2',         // Что удобнее (опционально)
  'r3_q1',         // Где удобнее оспаривать
  'r3_q2',         // Пользовался бы кнопкой
  'r3_q2_detail',  // В какой ситуации
  'f_q1',          // Чего не хватает
  'f_q2',          // Одно слово
];

// Читаемые заголовки
var HEADERS = [
  'Время',
  'Р1: Формат оценки',
  'Р1: Почему',
  'Р2: Разбор ошибок',
  'Р2: Что удобнее',
  'Р3: Оспаривание',
  'Р3: Пользовался бы',
  'Р3: В какой ситуации',
  'Чего не хватает',
  'Одно слово',
];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Feedback');
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Feedback');
  }

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: 'Invalid JSON' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Создать заголовки если лист пустой
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }

  // Собрать строку в нужном порядке
  var row = COLUMNS.map(function(key) {
    return data[key] || '';
  });

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ready' }))
    .setMimeType(ContentService.MimeType.JSON);
}
