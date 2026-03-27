// ============================================
// Google Apps Script для UX-опроса: Обратная связь по ДЗ
// ============================================
//
// ИНСТРУКЦИЯ:
// 1. Создай новую Google Таблицу (sheets.new)
// 2. Переименуй первый лист в «Feedback»
// 3. В первую строку впиши заголовки (каждый в свою ячейку):
//    Время | Выбранный вариант | Причина выбора | Первое впечатление | Оценка | Текст ОС | Элементы разбора | Элементы разбора ✓ | Элементы разбора ✗ | Полезность элементов | Кнопка несогласия | Кнопка несогласия детали | Процесс оспаривания | Фото с рамками | Чего не хватает | Одно слово | Смен темы | Финальная тема
// 4. Открой Расширения → Apps Script
// 5. Удали всё содержимое и вставь этот код
// 6. Нажми «Развернуть» → «Новое развёртывание»
//    - Тип: Веб-приложение
//    - Выполнять от: Меня
//    - Доступ: Все (включая анонимных)
// 7. Скопируй URL развёртывания
// 8. Вставь его в survey/index.html в строку GOOGLE_SCRIPT_URL = '...'
//

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
    data.chosen_variant || '',
    data.variant_reason || '',
    data.first_impression || '',
    data.grade_display || '',
    data.feedback_text || '',
    data.error_breakdown || '',
    data.error_breakdown_correct || '',
    data.error_breakdown_wrong || '',
    data.error_elements || '',
    data.dispute_button || '',
    data.dispute_button_detail || '',
    data.dispute_process || '',
    data.photo_highlights || '',
    data.missing_features || '',
    data.one_word || '',
    data.theme_switches || 0,
    data.final_theme || '',
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
