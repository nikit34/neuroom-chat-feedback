/* ── Scenarios (based on real Neuroom stage data) ────────── */

const scenarios = [
  {
    id: "perfect",
    title: "Диктант (5, без ошибок)",
    hwTitle: "Напиши диктант в тетради, заполни пропуски, озаглавь и разбей текст на абзацы.",
    hwDate: "21.12.2025",
    hwDue: "30.12.2025",
    hwStatus: "graded",
    subject: "Русский язык",
    grade: 5,
    correctness: 100,
    positive: "Отличная работа! Все задания выполнены без ошибок. Текст разбит на абзацы правильно, пропуски заполнены верно, заголовок подобран удачно.",
    advice: "",
    mistakes: []
  },
  {
    id: "good",
    title: "Упр. 416, стр. 9-10 (4, две мелких ошибки)",
    hwTitle: "Стр. 9-10 Упр. 416 Озаглавить текст. Списать, раскрывая скобки, вставить пропущенные буквы.",
    hwDate: "21.01.2026",
    hwDue: "28.01.2026",
    hwStatus: "graded",
    subject: "Русский язык",
    grade: 4,
    correctness: 90,
    positive: "Молодец, что справился с таким объемным текстом! Почти всё написано верно.",
    advice: "Старайся писать чуть аккуратнее и перечитывай текст после списывания — тогда мелкие ошибки сами бросятся в глаза.",
    mistakes: [
      {
        severity: "minor",
        friendlyTitle: "Небольшая помарка",
        original: "неловкость (исправление)",
        corrected: "неловкость",
        explanation: "Ты правильно написал слово, но немного исправил букву. Старайся писать сразу чисто.",
        encouragement: "Мелочь, но аккуратность — часть оценки. В следующий раз пиши уверенно!",
        taskNumber: "Стр. 1"
      },
      {
        severity: "minor",
        friendlyTitle: "Потерялся предлог",
        original: "Него всё валилось...",
        corrected: "У него всё валилось...",
        explanation: "Кажется, ты пропустил маленькое слово «У» в начале предложения. Получилось «Него всё валилось...», а надо «У него...».",
        encouragement: "Совет: после списывания перечитай текст вслух — пропущенные слова сразу «зазвучат».",
        taskNumber: "Стр. 1"
      }
    ]
  },
  {
    id: "medium",
    title: "Списать и подчеркнуть (3, три ошибки)",
    hwTitle: "Списать. Вставить знаки препинания. Подчеркнуть грамматические основы предложений.",
    hwDate: "20.01.2026",
    hwDue: "24.01.2026",
    hwStatus: "graded",
    subject: "Русский язык",
    grade: 3,
    correctness: 55,
    positive: "Хороший старт! Видно, что ты старался — половина работы выполнена верно.",
    advice: "Повтори правила на безударные гласные и знаки препинания в сложных предложениях.",
    mistakes: [
      {
        severity: "critical",
        friendlyTitle: "Безударная гласная в корне",
        original: "карова",
        corrected: "корова",
        explanation: "Слово «корова» — словарное, его нужно запомнить. Проверочного слова нет.",
        encouragement: "Словарные слова — это просто тренировка памяти. Попробуй написать его 3 раза — и запомнится!",
        taskNumber: "Стр. 1"
      },
      {
        severity: "major",
        friendlyTitle: "Запятая в сложном предложении",
        original: "Солнце светило и птицы пели",
        corrected: "Солнце светило, и птицы пели",
        explanation: "Это сложное предложение с двумя основами. Перед «и» нужна запятая, когда он соединяет два простых предложения.",
        encouragement: "Совет: найди подлежащее и сказуемое в каждой части — если их два набора, ставь запятую.",
        taskNumber: "Стр. 1"
      },
      {
        severity: "minor",
        friendlyTitle: "Мягкий знак в глаголах",
        original: "хочет учится",
        corrected: "хочет учиться",
        explanation: "В предложении «хочет учиться» нужен мягкий знак. Вопрос: «что делать?» → «учиться» (с ь).",
        encouragement: "Лайфхак: задай вопрос к глаголу. Если в вопросе есть «ь» (что делать?) — пиши «ь».",
        taskNumber: "Стр. 2"
      }
    ]
  },
  {
    id: "bad",
    title: "Алгебра: вынесение за скобку (2, пять ошибок)",
    hwTitle: "Разложить на множители методом группировки (упр. 214–218).",
    hwDate: "18.03.2026",
    hwDue: "03.04.2026",
    hwStatus: "graded",
    subject: "Алгебра",
    grade: 2,
    correctness: 20,
    positive: "Вижу, что ты взялся за все задания — это уже хорошо!",
    advice: "Давай разберём ошибки по порядку. Основная проблема — знаки при вынесении множителя за скобку.",
    mistakes: [
      {
        severity: "critical",
        friendlyTitle: "Описка в знаке",
        original: "x(n+k)",
        corrected: "x(n−k)",
        explanation: "При группировке xk − xn выносим x, в скобках остаётся (k−n). Ты написал (n+k), что не соответствует ни одному из вариантов.",
        encouragement: "Попробуй вычитать по шагам: сначала вынеси общий множитель, потом проверь знаки в скобках.",
        taskNumber: "№ 214а"
      },
      {
        severity: "critical",
        friendlyTitle: "Потерян минус в ответе",
        original: "(n−k)(m+x)",
        corrected: "(n−k)(m−x)",
        explanation: "Метод группировки: m(n−k) − x(n−k) = (n−k)(m−x). Ты потерял минус перед x при финальной записи ответа.",
        encouragement: "Совет: после получения ответа подставь числа и проверь — это ловит знаковые ошибки.",
        taskNumber: "№ 214б"
      },
      {
        severity: "critical",
        friendlyTitle: "Ошибка в знаке при группировке",
        original: "(k−x)(x+y)",
        corrected: "(k−x)(x−y)",
        explanation: "При группировке: x(k−x) − y(k−x) = (k−x)(x−y). Ты написал плюс во второй скобке.",
        encouragement: "Полезный приём: всегда проверяй ответ обратным раскрытием скобок!",
        taskNumber: "№ 216а"
      },
      {
        severity: "major",
        friendlyTitle: "Неверный метод решения",
        original: "a(c²−d)",
        corrected: "a(x²+y²) − b(x²+y²) + (b−a)",
        explanation: "Ты начал группировку совершенно неверно, вынеся «a» за скобку из слагаемых, где «a» нет, и придумав переменные c и d, которых нет в условии.",
        encouragement: "Нарисуй условие задачи — это помогает увидеть, что нужно сгруппировать.",
        taskNumber: "№ 218"
      },
      {
        severity: "minor",
        friendlyTitle: "Ошибка оформления",
        original: "Пропуск в записи",
        corrected: "Непрерывная запись решения",
        explanation: "Ты оставил огромное пустое пространство посередине решения, разорвав логику записи. Это нарушает культуру математической записи.",
        encouragement: "Ответ правильный по сути, только нужно довести до конца — записать аккуратно!",
        taskNumber: "№ 216б"
      }
    ]
  }
];

/* ── Tone variants ──────────────────────────────────────── */

const tones = {
  soft: {
    greeting: (s) => `Привет! 👋 Посмотрел твою домашку по предмету «${s.subject}».`,
    positiveIntro: "Начну с хорошего:",
    mistakeIntro: (count) => count === 1
      ? "Есть один момент, на который стоит обратить внимание:"
      : `Есть ${count} ${pluralize(count, "момент", "момента", "моментов")}, на которые стоит обратить внимание:`,
    nextMistake: "И ещё кое-что:",
    adviceIntro: "Мой совет:",
    ctaText: "Хочешь потренироваться на ошибках?",
    gradeText: (g) => g >= 4 ? "Отличный результат!" : g === 3 ? "Неплохо, но можно лучше!" : "Давай разберёмся вместе — всё получится!",
    askExpand: "Хочешь разберём подробнее?",
  },
  neutral: {
    greeting: (s) => `Домашняя работа по предмету «${s.subject}» проверена.`,
    positiveIntro: "Что получилось хорошо:",
    mistakeIntro: (count) => `${count === 1 ? "Найдена" : "Найдены"} ${count} ${pluralize(count, "ошибка", "ошибки", "ошибок")}:`,
    nextMistake: "Следующая ошибка:",
    adviceIntro: "Рекомендация:",
    ctaText: "Потренироваться на ошибках?",
    gradeText: () => "Итоговая оценка:",
    askExpand: "Нажми, чтобы посмотреть подробности.",
  },
  direct: {
    greeting: (s) => `Проверил ${s.subject}.`,
    positiveIntro: "",
    mistakeIntro: (count) => `${pluralize(count, "Ошибка", "Ошибки", "Ошибок")}: ${count}.`,
    nextMistake: "Далее:",
    adviceIntro: "",
    ctaText: "Тренировка на ошибках",
    gradeText: () => "Оценка:",
    askExpand: "",
  }
};

/* ── State ──────────────────────────────────────────────── */

let currentScenario = scenarios.find(s => s.id === "good") || scenarios[0];
let currentTone = "soft";
const currentOrder = "positive-first";
const currentGrade = "bottom";
let currentMistakeMode = "one-by-one";
let showEncouragement = true;

let messageQueue = [];
let isPlaying = false;
let mistakeIndex = 0;
let expandedCount = 0;
let interactionCount = 0;
let practiceClicked = false;
let appealClicked = false;
let currentAppealState = "default"; // default | pending | accepted | rejected | mixed

/* ── DOM ────────────────────────────────────────────────── */

const chatArea = document.getElementById("chatArea");
const scenarioSelect = document.getElementById("scenarioSelect");
const replayBtn = document.getElementById("replayBtn");
const metricMessages = document.getElementById("metricMessages");
const metricExpanded = document.getElementById("metricExpanded");
const metricInteractions = document.getElementById("metricInteractions");
const metricPractice = document.getElementById("metricPractice");
const metricAppeal = document.getElementById("metricAppeal");
const metricScrolled = document.getElementById("metricScrolled");
const showEncouragementCheckbox = document.getElementById("showEncouragement");

// Screens
const hwListScreen = document.getElementById("hwListScreen");
const hwList = document.getElementById("hwList");
const inputBar = document.getElementById("inputBar");
const backBtn = document.getElementById("backBtn");
const headerName = document.getElementById("headerName");
const headerStatus = document.getElementById("headerStatus");
const headerAvatar = document.getElementById("headerAvatar");

/* ── Init ───────────────────────────────────────────────── */

scenarios.forEach((s) => {
  const opt = document.createElement("option");
  opt.value = s.id;
  opt.textContent = s.title;
  scenarioSelect.appendChild(opt);
});
scenarioSelect.value = currentScenario.id;

setupSegmented("toneSegment", (v) => { currentTone = v; });
setupSegmented("mistakeSegment", (v) => { currentMistakeMode = v; });

scenarioSelect.addEventListener("change", () => {
  currentScenario = scenarios.find((s) => s.id === scenarioSelect.value);
  renderHwList();
});

showEncouragementCheckbox.addEventListener("change", () => { showEncouragement = showEncouragementCheckbox.checked; });

// Appeal state selector
const appealStateSegment = document.getElementById("appealStateSegment");
appealStateSegment.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    appealStateSegment.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentAppealState = btn.dataset.appeal;
  });
});

// Appeal bottom sheet
const appealOverlay = document.getElementById("appealOverlay");
const appealSheet = document.getElementById("appealSheet");
const appealOptions = document.getElementById("appealOptions");
const appealComment = document.getElementById("appealComment");
const appealCharCount = document.getElementById("appealCharCount");
const appealFileInput = document.getElementById("appealFileInput");
const appealFileList = document.getElementById("appealFileList");
const appealUploadZone = document.getElementById("appealUploadZone");
const appealCancelBtn = document.getElementById("appealCancelBtn");
const appealSubmitBtn = document.getElementById("appealSubmitBtn");
const appealErrorPoints = document.getElementById("appealErrorPoints");

const DISAGREEMENT_OPTIONS = [
  "Здесь нет ошибки",
  "Неправильно распознан символ",
  "Не понимаю, в чём ошибка",
  "Не согласен с отметкой",
  "Другое: напишу в комментарии"
];

let appealSelectedPoints = [];
let appealAttachments = [];

// Build options checkboxes
DISAGREEMENT_OPTIONS.forEach((text) => {
  const opt = document.createElement("label");
  opt.className = "appeal-sheet__option";
  opt.innerHTML = `<input type="checkbox" data-point="${text}"><span class="appeal-sheet__option-text">${text}</span>`;
  opt.querySelector("input").addEventListener("change", (e) => {
    if (e.target.checked) {
      appealSelectedPoints.push(text);
    } else {
      appealSelectedPoints = appealSelectedPoints.filter(p => p !== text);
    }
    appealErrorPoints.style.display = "none";
  });
  appealOptions.appendChild(opt);
});

appealComment.addEventListener("input", () => {
  appealCharCount.textContent = appealComment.value.length;
});

appealFileInput.addEventListener("change", (e) => {
  const files = Array.from(e.target.files || []);
  if (appealAttachments.length + files.length > 3) return;
  const valid = files.filter(f => f.size <= 10 * 1024 * 1024);
  appealAttachments.push(...valid);
  renderAppealFiles();
  appealFileInput.value = "";
});

function renderAppealFiles() {
  appealFileList.innerHTML = "";
  appealAttachments.forEach((file, i) => {
    const div = document.createElement("div");
    div.className = "appeal-sheet__file";
    div.innerHTML = `<span class="appeal-sheet__file-name">${file.name}</span>`;
    const removeBtn = document.createElement("button");
    removeBtn.className = "appeal-sheet__file-remove";
    removeBtn.textContent = "✕";
    removeBtn.addEventListener("click", () => {
      appealAttachments.splice(i, 1);
      renderAppealFiles();
    });
    div.appendChild(removeBtn);
    appealFileList.appendChild(div);
  });
  appealUploadZone.style.display = appealAttachments.length >= 3 ? "none" : "";
}

function openAppealSheet() {
  appealOverlay.classList.add("active");
  appealSheet.classList.add("active");
}

function closeAppealSheet() {
  appealOverlay.classList.remove("active");
  appealSheet.classList.remove("active");
  // Reset form
  appealSelectedPoints = [];
  appealAttachments = [];
  appealComment.value = "";
  appealCharCount.textContent = "0";
  appealOptions.querySelectorAll("input").forEach(cb => cb.checked = false);
  appealFileList.innerHTML = "";
  appealUploadZone.style.display = "";
  appealErrorPoints.style.display = "none";
}

appealOverlay.addEventListener("click", closeAppealSheet);
appealCancelBtn.addEventListener("click", closeAppealSheet);

appealSubmitBtn.addEventListener("click", () => {
  if (appealSelectedPoints.length === 0) {
    appealErrorPoints.textContent = "Выбери хотя бы один пункт";
    appealErrorPoints.style.display = "";
    return;
  }
  closeAppealSheet();
  handleAppealSubmit();
});

replayBtn.addEventListener("click", () => {
  showChatScreen();
  replay();
});

backBtn.addEventListener("click", showHwListScreen);

// Start — show homework list
renderHwList();

/* ── Screen management ─────────────────────────────────── */

function renderHwList() {
  hwList.innerHTML = "";

  // "Требуют внимания" section
  const sectionLabel = document.createElement("div");
  sectionLabel.className = "hw-list__section-label";
  sectionLabel.textContent = "Требуют внимания";
  hwList.appendChild(sectionLabel);

  // Active scenario card (highlighted)
  const activeCard = makeHwCard(currentScenario, true);
  hwList.appendChild(activeCard);

  // Other scenarios as background cards
  const otherLabel = document.createElement("div");
  otherLabel.className = "hw-list__section-label";
  otherLabel.style.marginTop = "8px";
  otherLabel.textContent = "Проверенные";
  hwList.appendChild(otherLabel);

  scenarios.forEach((s) => {
    if (s.id !== currentScenario.id) {
      hwList.appendChild(makeHwCard(s, false));
    }
  });
}

function makeHwCard(s, isActive) {
  const card = document.createElement("div");
  card.className = "hw-card";
  const badgeClass = isActive ? "hw-card__badge--attention" : "hw-card__badge--graded";
  const badgeText = isActive ? "Новая обратная связь" : `Оценка: ${s.grade}`;
  card.innerHTML = `
    <div class="hw-card__title">${s.hwTitle || s.title}</div>
    <div class="hw-card__meta">
      <span class="hw-card__meta-item">${s.subject}</span>
      <span class="hw-card__meta-item">Создано: ${s.hwDate || "—"}</span>
    </div>
    <div class="hw-card__badge ${badgeClass}">${badgeText}</div>
  `;
  card.addEventListener("click", () => {
    currentScenario = s;
    scenarioSelect.value = s.id;
    showChatScreen();
    replay();
  });
  return card;
}

function showChatScreen() {
  hwListScreen.style.display = "none";
  chatArea.style.display = "";
  inputBar.style.display = "";
  backBtn.style.display = "";
  headerName.textContent = "Нейрум";
  headerStatus.textContent = "проверил домашку";
  headerAvatar.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="var(--color-primary)" stroke-width="1.5"/>
      <path d="M6 12c0 0 1.5 2 4 2s4-2 4-2" stroke="var(--color-primary)" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="7.5" cy="8.5" r="1" fill="var(--color-primary)"/>
      <circle cx="12.5" cy="8.5" r="1" fill="var(--color-primary)"/>
    </svg>
  `;
}

function showHwListScreen() {
  hwListScreen.style.display = "";
  chatArea.style.display = "none";
  inputBar.style.display = "none";
  backBtn.style.display = "none";
  headerName.textContent = "Домашние задания";
  headerStatus.textContent = "";
  headerAvatar.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="16" height="16" rx="4" stroke="var(--color-primary)" stroke-width="1.5"/>
      <path d="M6 10.5L9 13.5L14 7" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  // Reset metrics
  expandedCount = 0;
  interactionCount = 0;
  practiceClicked = false;
  appealClicked = false;
  updateMetrics(0);
  metricPractice.textContent = "—";
  metricPractice.style.color = "";
  metricAppeal.textContent = "—";
  metricAppeal.style.color = "";
  metricScrolled.textContent = "—";
  metricScrolled.style.color = "";
}

/* ── Chat engine ────────────────────────────────────────── */

function replay() {
  chatArea.innerHTML = "";
  messageQueue = [];
  isPlaying = false;
  mistakeIndex = 0;
  expandedCount = 0;
  interactionCount = 0;
  practiceClicked = false;
  appealClicked = false;
  updateMetrics(0);
  metricPractice.textContent = "—";
  metricPractice.style.color = "";
  metricAppeal.textContent = "—";
  metricAppeal.style.color = "";
  metricScrolled.textContent = "—";
  metricScrolled.style.color = "";

  const s = currentScenario;
  const t = tones[currentTone];

  // Build message sequence
  const seq = [];

  // Greeting
  seq.push({ type: "bot", text: t.greeting(s) });

  // Grade at top?
  if (currentGrade === "top") {
    seq.push({ type: "grade", grade: s.grade, text: t.gradeText(s.grade) });
  }

  // In one-by-one mode with >1 mistake, advice/grade/CTA are deferred to finishAfterMistakes()
  const willPauseForMistakes = currentMistakeMode === "one-by-one" && s.mistakes.length > 1;

  if (currentOrder === "positive-first") {
    // Positive
    if (t.positiveIntro) seq.push({ type: "bot", text: t.positiveIntro });
    seq.push({ type: "bot", text: s.positive });
    // Separator
    seq.push({ type: "separator", text: "Разбор работы" });
    // Mistakes intro
    seq.push({ type: "bot", text: t.mistakeIntro(s.mistakes.length) });
    // Mistakes
    addMistakes(seq, s, t);
    // Advice (only if not pausing for one-by-one)
    if (!willPauseForMistakes) {
      if (s.advice && t.adviceIntro) {
        seq.push({ type: "bot", text: `${t.adviceIntro} ${s.advice}` });
      } else if (s.advice) {
        seq.push({ type: "bot", text: s.advice });
      }
    }
  } else {
    // Errors first
    seq.push({ type: "bot", text: t.mistakeIntro(s.mistakes.length) });
    addMistakes(seq, s, t);
    if (!willPauseForMistakes) {
      seq.push({ type: "separator", text: "Что получилось" });
      if (t.positiveIntro) seq.push({ type: "bot", text: t.positiveIntro });
      seq.push({ type: "bot", text: s.positive });
      if (s.advice && t.adviceIntro) {
        seq.push({ type: "bot", text: `${t.adviceIntro} ${s.advice}` });
      } else if (s.advice) {
        seq.push({ type: "bot", text: s.advice });
      }
    }
  }

  if (!willPauseForMistakes) {
    // Grade at bottom?
    if (currentGrade === "bottom") {
      seq.push({ type: "grade", grade: s.grade, text: t.gradeText(s.grade) });
    }

    // CTA
    if (s.mistakes.length > 0) {
      seq.push({ type: "cta", text: t.ctaText });
    }

    // Appeal button (when appeal feature is enabled and there are mistakes)
    if (currentAppealState !== "default" && s.mistakes.length > 0) {
      seq.push({ type: "appeal-btn" });
    }
  }

  messageQueue = seq;
  playQueue();
}

function addMistakes(seq, s, t) {
  if (currentMistakeMode === "all") {
    s.mistakes.forEach((m, i) => {
      if (i > 0) seq.push({ type: "bot", text: t.nextMistake });
      seq.push({ type: "mistake", data: m });
    });
  } else {
    // One by one — show first, rest via quick replies
    seq.push({ type: "mistake", data: s.mistakes[0] });
    if (s.mistakes.length > 1) {
      seq.push({
        type: "quick-replies",
        options: [
          { label: `Дальше (ещё ${s.mistakes.length - 1})`, action: "next-mistake" },
          { label: "Всё понятно", action: "skip-mistakes" }
        ]
      });
    }
  }
}

async function playQueue() {
  if (isPlaying) return;
  isPlaying = true;

  while (messageQueue.length > 0) {
    const msg = messageQueue.shift();
    await showTyping(msg.type === "mistake" ? 800 : 500);
    renderMessage(msg);
    updateMetrics(chatArea.querySelectorAll(".msg, .msg-mistake, .msg-grade").length);
    await delay(200);
  }

  isPlaying = false;

  // Auto-detect "read to end" for short chats that don't need scrolling
  const atBottom = chatArea.scrollHeight - chatArea.scrollTop - chatArea.clientHeight < 30;
  if (atBottom && messageQueue.length === 0) {
    metricScrolled.textContent = "Да";
    metricScrolled.style.color = "var(--color-success)";
  }
}

function renderMessage(msg) {
  removeTyping();
  const chat = chatArea;

  switch (msg.type) {
    case "bot":
      chat.appendChild(makeBubble("bot", msg.text));
      break;

    case "student":
      chat.appendChild(makeBubble("student", msg.text));
      break;

    case "separator":
      const sep = document.createElement("div");
      sep.className = "msg-separator";
      sep.textContent = `— ${msg.text} —`;
      chat.appendChild(sep);
      break;

    case "mistake":
      chat.appendChild(makeMistakeCard(msg.data));
      break;

    case "grade":
      chat.appendChild(makeGradeBubble(msg.grade, msg.text));
      break;

    case "cta":
      chat.appendChild(makeCtaButton(msg.text));
      break;

    case "appeal-btn":
      chat.appendChild(makeAppealButton());
      break;

    case "quick-replies":
      chat.appendChild(makeQuickReplies(msg.options));
      break;

    case "nudge":
      const nudge = document.createElement("div");
      nudge.className = "msg-nudge";
      nudge.textContent = msg.text;
      chat.appendChild(nudge);
      break;
  }

  chat.scrollTop = chat.scrollHeight;
}

/* ── Element builders ───────────────────────────────────── */

function makeBubble(role, text) {
  const div = document.createElement("div");
  div.className = `msg msg--${role}`;
  div.textContent = text;
  return div;
}

function makeMistakeCard(m) {
  const card = document.createElement("div");
  card.className = "msg-mistake";

  const iconClass = `msg-mistake__icon msg-mistake__icon--${m.severity}`;
  const iconLabel = m.severity === "critical" ? "!" : m.severity === "major" ? "●" : "~";

  card.innerHTML = `
    <div class="msg-mistake__header">
      <div class="${iconClass}">${iconLabel}</div>
      <div class="msg-mistake__title">${m.friendlyTitle}</div>
      <svg class="msg-mistake__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="msg-mistake__body">
      <div class="msg-mistake__content">
        <div>${m.explanation}</div>
        <div class="msg-mistake__diff-label">В твоем ответе:</div>
        <div class="msg-mistake__diff-value msg-mistake__diff-value--was">${m.original}</div>
        <div class="msg-mistake__diff-label">Как должно быть:</div>
        <div class="msg-mistake__diff-value msg-mistake__diff-value--now">${m.corrected}</div>
        ${showEncouragement && m.encouragement ? `<div class="msg-mistake__encouragement">${m.encouragement}</div>` : ""}
      </div>
    </div>
  `;

  const header = card.querySelector(".msg-mistake__header");
  header.addEventListener("click", () => {
    const wasExpanded = card.classList.contains("expanded");
    card.classList.toggle("expanded");
    if (!wasExpanded) {
      expandedCount++;
      interactionCount++;
      metricExpanded.textContent = expandedCount;
      metricInteractions.textContent = interactionCount;
    }
  });

  return card;
}

function makeGradeBubble(grade, text) {
  const div = document.createElement("div");
  div.className = "msg-grade";
  div.style.background = "var(--color-surfaces)";
  div.innerHTML = `
    <div class="msg-grade__circle msg-grade__circle--${grade}">${grade}</div>
    <div class="msg-grade__text">
      <strong>Оценка за работу</strong>
      ${text}
    </div>
  `;
  return div;
}

function makeCtaButton(text) {
  const wrap = document.createElement("div");
  wrap.className = "msg-cta";
  wrap.innerHTML = `
    <button class="msg-cta__btn">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M5 10l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ${text}
    </button>
  `;
  wrap.querySelector("button").addEventListener("click", () => {
    practiceClicked = true;
    interactionCount++;
    metricPractice.textContent = "Да";
    metricPractice.style.color = "var(--color-success)";
    metricInteractions.textContent = interactionCount;

    chatArea.appendChild(makeBubble("student", "Да, давай!"));
    chatArea.scrollTop = chatArea.scrollHeight;

    setTimeout(() => {
      const botReply = makeBubble("bot", "Отлично! Сейчас подготовлю задания по твоим ошибкам...");
      chatArea.appendChild(botReply);
      chatArea.scrollTop = chatArea.scrollHeight;
    }, 800);
  });
  return wrap;
}

/* ── Appeal flow ────────────────────────────────────────── */

function makeAppealButton() {
  const wrap = document.createElement("div");
  wrap.className = "msg-appeal-btn";
  wrap.innerHTML = `
    <button class="msg-appeal-btn__btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Не согласен с оценкой
    </button>
  `;
  wrap.querySelector("button").addEventListener("click", () => {
    interactionCount++;
    metricInteractions.textContent = interactionCount;
    openAppealSheet();
  });
  return wrap;
}

function handleAppealSubmit() {
  appealClicked = true;
  interactionCount++;
  metricAppeal.textContent = "Да";
  metricAppeal.style.color = "var(--color-warning)";
  metricInteractions.textContent = interactionCount;

  // Show student message
  chatArea.appendChild(makeBubble("student", "Хочу оспорить оценку"));
  chatArea.scrollTop = chatArea.scrollHeight;

  // Show pending
  setTimeout(() => {
    const pending = makeAppealPending();
    chatArea.appendChild(pending);
    chatArea.scrollTop = chatArea.scrollHeight;

    // Simulate decision after 2.5s (skip if state is "pending" — stay on pending)
    const resolvedState = currentAppealState === "pending" ? null : currentAppealState === "default" ? "accepted" : currentAppealState;
    if (resolvedState) {
      setTimeout(() => {
        pending.remove();
        const decision = makeAppealDecision(resolvedState);
        chatArea.appendChild(decision);
        chatArea.scrollTop = chatArea.scrollHeight;

        metricAppeal.textContent = resolvedState === "accepted" || resolvedState === "mixed" ? "Принято" : "Отклонено";
        metricAppeal.style.color = resolvedState === "accepted" || resolvedState === "mixed"
          ? "var(--color-success)" : "var(--color-error)";
      }, 2500);
    }
  }, 800);
}

function makeAppealPending() {
  const div = document.createElement("div");
  div.className = "msg-appeal-pending";
  div.innerHTML = `
    <div class="msg-appeal-pending__row">
      <div class="msg-appeal-pending__spinner"></div>
      Проверяем
    </div>
    <div class="msg-appeal-pending__hint">Учитель рассмотрит обращение в течение 72 часов</div>
  `;
  return div;
}

function makeAppealDecision(state) {
  const s = currentScenario;
  const oldGrade = s.grade;
  const newGrade = state === "accepted" ? Math.min(oldGrade + 1, 5) : state === "mixed" ? Math.min(oldGrade + 1, 5) : oldGrade;

  const stateClass = `msg-appeal-decision--${state}`;
  const titles = {
    accepted: "Оценку изменили",
    rejected: "Оценка без изменений",
    mixed: "Решение частично принято"
  };
  const icons = { accepted: "✓", rejected: "📝", mixed: "◐" };
  const subtitles = {
    accepted: "Ошибки и оценка обновлены",
    rejected: "Учитель проверил запрос и оставил оценку без изменений",
    mixed: "По части заданий решение изменено, по части оставлено"
  };

  // Build task responses based on mistakes
  const taskResponses = s.mistakes.slice(0, 2).map((m, i) => {
    const agree = state === "accepted" || (state === "mixed" && i === 0);
    return {
      label: `${m.taskNumber}, ${m.friendlyTitle}`,
      decision: agree ? "agree" : "disagree",
      comment: agree
        ? "Согласен, здесь ошибка была выставлена неверно. Исправил."
        : "Проверил ещё раз: ошибка подтверждается, оценка без изменений."
    };
  });

  let gradeHTML;
  if (state === "accepted" || (state === "mixed" && oldGrade !== newGrade)) {
    const colorClass = state === "accepted" ? "msg-appeal-decision__grade-new--accepted" : "msg-appeal-decision__grade-new--mixed";
    gradeHTML = `
      <div class="msg-appeal-decision__grade-row">
        <span style="color:#7f7aab">Было:</span>
        <span class="msg-appeal-decision__grade-old">${oldGrade}</span>
        <span style="color:#7f7aab">→</span>
        <span style="color:#7f7aab">Стало:</span>
        <span class="msg-appeal-decision__grade-new ${colorClass}">${newGrade}</span>
      </div>
    `;
  } else {
    gradeHTML = `<div class="msg-appeal-decision__grade-current">Текущая оценка: <strong>${oldGrade}</strong></div>`;
  }

  const tasksHTML = taskResponses.map(t => `
    <div class="msg-appeal-decision__task">
      <div class="msg-appeal-decision__task-header">
        <span class="msg-appeal-decision__task-label">${t.label}</span>
        <span class="msg-appeal-decision__task-badge msg-appeal-decision__task-badge--${t.decision}">
          ${t.decision === "agree" ? "Согласен" : "Не согласен"}
        </span>
      </div>
      <div class="msg-appeal-decision__task-comment">${t.comment}</div>
    </div>
  `).join("");

  const div = document.createElement("div");
  div.className = `msg-appeal-decision ${stateClass}`;
  div.innerHTML = `
    <div class="msg-appeal-decision__header">
      <div>
        <div class="msg-appeal-decision__title">${titles[state]}</div>
        <div class="msg-appeal-decision__date">Решение от ${new Date().toLocaleDateString("ru-RU")}</div>
      </div>
      <span class="msg-appeal-decision__icon">${icons[state]}</span>
    </div>
    <div class="msg-appeal-decision__info">
      ${gradeHTML}
      <div class="msg-appeal-decision__subtitle">${subtitles[state]}</div>
    </div>
    ${taskResponses.length > 0 ? `
      <div class="msg-appeal-decision__tasks">
        <div class="msg-appeal-decision__tasks-label">Ответ по заданиям:</div>
        ${tasksHTML}
      </div>
    ` : ""}
  `;
  return div;
}

function makeQuickReplies(options) {
  const wrap = document.createElement("div");
  wrap.className = "quick-replies";

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = opt.action === "next-mistake" ? "quick-reply quick-reply--primary" : "quick-reply";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      // Remove quick replies
      wrap.remove();
      interactionCount++;
      metricInteractions.textContent = interactionCount;

      if (opt.action === "next-mistake") {
        // Show student chose to see more
        chatArea.appendChild(makeBubble("student", "Покажи следующую"));
        chatArea.scrollTop = chatArea.scrollHeight;

        mistakeIndex++;
        const s = currentScenario;
        const t = tones[currentTone];

        if (mistakeIndex < s.mistakes.length) {
          const remaining = s.mistakes.length - mistakeIndex - 1;

          setTimeout(() => {
            renderMessage({ type: "mistake", data: s.mistakes[mistakeIndex] });

            if (remaining > 0) {
              setTimeout(() => {
                renderMessage({
                  type: "quick-replies",
                  options: [
                    { label: `Дальше (ещё ${remaining})`, action: "next-mistake" },
                    { label: "Всё понятно", action: "skip-mistakes" }
                  ]
                });
              }, 400);
            } else {
              // Last mistake shown, continue with rest of flow
              finishAfterMistakes();
            }
          }, 600);
        }
      } else if (opt.action === "skip-mistakes") {
        chatArea.appendChild(makeBubble("student", "Всё понятно, спасибо!"));
        chatArea.scrollTop = chatArea.scrollHeight;
        setTimeout(() => finishAfterMistakes(), 600);
      }
    });
    wrap.appendChild(btn);
  });

  return wrap;
}

function finishAfterMistakes() {
  const s = currentScenario;
  const t = tones[currentTone];
  const remaining = [];

  if (currentOrder === "positive-first") {
    if (s.advice && t.adviceIntro) {
      remaining.push({ type: "bot", text: `${t.adviceIntro} ${s.advice}` });
    } else if (s.advice) {
      remaining.push({ type: "bot", text: s.advice });
    }
  } else {
    remaining.push({ type: "separator", text: "Что получилось" });
    if (t.positiveIntro) remaining.push({ type: "bot", text: t.positiveIntro });
    remaining.push({ type: "bot", text: s.positive });
    if (s.advice && t.adviceIntro) {
      remaining.push({ type: "bot", text: `${t.adviceIntro} ${s.advice}` });
    } else if (s.advice) {
      remaining.push({ type: "bot", text: s.advice });
    }
  }

  if (currentGrade === "bottom") {
    remaining.push({ type: "grade", grade: s.grade, text: t.gradeText(s.grade) });
  }

  if (s.mistakes.length > 0) {
    remaining.push({ type: "cta", text: t.ctaText });
  }

  // Appeal button
  if (currentAppealState !== "default" && s.mistakes.length > 0) {
    remaining.push({ type: "appeal-btn" });
  }

  messageQueue = remaining;
  playQueue();
}

/* ── Typing indicator ───────────────────────────────────── */

function showTyping(duration) {
  return new Promise((resolve) => {
    const typing = document.createElement("div");
    typing.className = "msg msg--typing";
    typing.id = "typingIndicator";
    typing.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
    chatArea.appendChild(typing);
    chatArea.scrollTop = chatArea.scrollHeight;
    setTimeout(resolve, duration);
  });
}

function removeTyping() {
  const el = document.getElementById("typingIndicator");
  if (el) el.remove();
}

/* ── Helpers ─────────────────────────────────────────────── */

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function pluralize(n, one, few, many) {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (last > 1 && last < 5) return few;
  if (last === 1) return one;
  return many;
}

function setupSegmented(id, onChange) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const key = Object.keys(btn.dataset)[0];
      onChange(btn.dataset[key]);
    });
  });
}

function updateMetrics(count) {
  metricMessages.textContent = count;
  metricInteractions.textContent = interactionCount;
}

// Track "read to the end" — when user scrolls to the bottom of chat after all messages
chatArea.addEventListener("scroll", () => {
  if (!isPlaying && messageQueue.length === 0) {
    const atBottom = chatArea.scrollHeight - chatArea.scrollTop - chatArea.clientHeight < 30;
    if (atBottom) {
      metricScrolled.textContent = "Да";
      metricScrolled.style.color = "var(--color-success)";
    }
  }
});
