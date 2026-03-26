/* ── Scenarios ───────────────────────────────────────────── */

const scenarios = [
  {
    id: "good",
    title: "Хорошая работа (4, одна ошибка)",
    subject: "Русский язык",
    grade: 4,
    correctness: 85,
    positive: "Отлично справился с заданием! Видно, что ты хорошо понимаешь тему.",
    advice: "Обрати внимание на запятые перед союзами.",
    mistakes: [
      {
        severity: "major",
        friendlyTitle: "Запятая перед «но»",
        original: "Я хотел пойти но передумал",
        corrected: "Я хотел пойти, но передумал",
        explanation: "Перед союзом «но» всегда ставится запятая, потому что он соединяет две части сложного предложения.",
        encouragement: "Это легко запомнить: «но» = запятая. Ты уже в двух других местах поставил правильно!",
        taskNumber: "Упр. 134"
      }
    ]
  },
  {
    id: "medium",
    title: "Средняя работа (3, три ошибки)",
    subject: "Русский язык",
    grade: 3,
    correctness: 55,
    positive: "Хороший старт! Видно, что ты старался — половина работы выполнена верно.",
    advice: "Повтори правила на безударные гласные и запятые.",
    mistakes: [
      {
        severity: "critical",
        friendlyTitle: "Безударная гласная в корне",
        original: "карова",
        corrected: "корова",
        explanation: "Слово «корова» — словарное, его нужно запомнить. Проверочного слова нет.",
        encouragement: "Словарные слова — это просто тренировка памяти. Попробуй написать его 3 раза — и запомнится!",
        taskNumber: "Упр. 98"
      },
      {
        severity: "major",
        friendlyTitle: "Запятая в сложном предложении",
        original: "Солнце светило и птицы пели",
        corrected: "Солнце светило, и птицы пели",
        explanation: "Это сложное предложение с двумя основами. Перед «и» нужна запятая, когда он соединяет два простых предложения.",
        encouragement: "Совет: найди подлежащее и сказуемое в каждой части — если их два набора, ставь запятую.",
        taskNumber: "Упр. 99"
      },
      {
        severity: "minor",
        friendlyTitle: "Мягкий знак в глаголах",
        original: "он учится",
        corrected: "он учится",
        explanation: "Здесь ты написал правильно! Но в соседнем предложении «хочет учиться» пропустил мягкий знак. Вопрос: «что делать?» → «учиться» (с ь).",
        encouragement: "Лайфхак: задай вопрос к глаголу. Если в вопросе есть «ь» (что делать?) — пиши «ь».",
        taskNumber: "Упр. 100"
      }
    ]
  },
  {
    id: "bad",
    title: "Слабая работа (2, пять ошибок)",
    subject: "Математика",
    grade: 2,
    correctness: 20,
    positive: "Вижу, что ты взялся за все задания — это уже хорошо!",
    advice: "Давай разберём ошибки по порядку, большинство из них на одну тему.",
    mistakes: [
      {
        severity: "critical",
        friendlyTitle: "Ошибка в вычитании",
        original: "45 - 18 = 33",
        corrected: "45 - 18 = 27",
        explanation: "При вычитании с переходом через десяток: 45 - 18. Сначала 45 - 10 = 35, потом 35 - 8 = 27.",
        encouragement: "Попробуй вычитать по шагам: сначала десятки, потом единицы — так проще не запутаться.",
        taskNumber: "№ 214а"
      },
      {
        severity: "critical",
        friendlyTitle: "Ошибка в умножении",
        original: "7 × 8 = 54",
        corrected: "7 × 8 = 56",
        explanation: "7 × 8 = 56. Можно проверить: 7 × 8 = 7 × 7 + 7 = 49 + 7 = 56.",
        encouragement: "Таблицу умножения на 7 и 8 часто путают. Попробуй запомнить: 56 = 7 × 8 (цифры идут подряд: 5, 6, 7, 8).",
        taskNumber: "№ 214б"
      },
      {
        severity: "critical",
        friendlyTitle: "Неверное деление",
        original: "64 ÷ 8 = 9",
        corrected: "64 ÷ 8 = 8",
        explanation: "64 ÷ 8 = 8. Проверка: 8 × 8 = 64. ✓",
        encouragement: "Полезный приём: всегда проверяй деление обратным умножением!",
        taskNumber: "№ 216а"
      },
      {
        severity: "major",
        friendlyTitle: "Ошибка в задаче",
        original: "Ответ: 15 яблок",
        corrected: "Ответ: 12 яблок",
        explanation: "В корзине было 20 яблок, раздали по 4 на двоих = 8. Осталось 20 - 8 = 12.",
        encouragement: "Нарисуй условие задачи — это помогает увидеть, что нужно посчитать.",
        taskNumber: "№ 218"
      },
      {
        severity: "minor",
        friendlyTitle: "Не упростил дробь",
        original: "4/8",
        corrected: "1/2",
        explanation: "4/8 можно сократить на 4: получится 1/2.",
        encouragement: "Ответ правильный, только нужно довести до конца — сократить!",
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

let currentScenario = scenarios[0];
let currentTone = "soft";
let currentOrder = "positive-first";
let currentGrade = "hidden";
let currentMistakeMode = "one-by-one";
let showCta = true;
let showEncouragement = true;

let messageQueue = [];
let isPlaying = false;
let mistakeIndex = 0;
let expandedCount = 0;
let interactionCount = 0;
let practiceClicked = false;

/* ── DOM ────────────────────────────────────────────────── */

const chatArea = document.getElementById("chatArea");
const scenarioSelect = document.getElementById("scenarioSelect");
const replayBtn = document.getElementById("replayBtn");
const metricMessages = document.getElementById("metricMessages");
const metricExpanded = document.getElementById("metricExpanded");
const metricInteractions = document.getElementById("metricInteractions");
const metricPractice = document.getElementById("metricPractice");
const metricScrolled = document.getElementById("metricScrolled");
const showCtaCheckbox = document.getElementById("showCta");
const showEncouragementCheckbox = document.getElementById("showEncouragement");

/* ── Init ───────────────────────────────────────────────── */

scenarios.forEach((s) => {
  const opt = document.createElement("option");
  opt.value = s.id;
  opt.textContent = s.title;
  scenarioSelect.appendChild(opt);
});

setupSegmented("toneSegment", (v) => { currentTone = v; });
setupSegmented("orderSegment", (v) => { currentOrder = v; });
setupSegmented("gradeSegment", (v) => { currentGrade = v; });
setupSegmented("mistakeSegment", (v) => { currentMistakeMode = v; });

scenarioSelect.addEventListener("change", () => {
  currentScenario = scenarios.find((s) => s.id === scenarioSelect.value);
  replay();
});

showCtaCheckbox.addEventListener("change", () => { showCta = showCtaCheckbox.checked; });
showEncouragementCheckbox.addEventListener("change", () => { showEncouragement = showEncouragementCheckbox.checked; });

replayBtn.addEventListener("click", replay);

// Start
replay();

/* ── Chat engine ────────────────────────────────────────── */

function replay() {
  chatArea.innerHTML = "";
  messageQueue = [];
  isPlaying = false;
  mistakeIndex = 0;
  expandedCount = 0;
  interactionCount = 0;
  practiceClicked = false;
  updateMetrics(0);
  metricPractice.textContent = "—";
  metricPractice.style.color = "";
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
    // Advice
    if (s.advice && t.adviceIntro) {
      seq.push({ type: "bot", text: `${t.adviceIntro} ${s.advice}` });
    } else if (s.advice) {
      seq.push({ type: "bot", text: s.advice });
    }
  } else {
    // Errors first
    seq.push({ type: "bot", text: t.mistakeIntro(s.mistakes.length) });
    addMistakes(seq, s, t);
    seq.push({ type: "separator", text: "Что получилось" });
    if (t.positiveIntro) seq.push({ type: "bot", text: t.positiveIntro });
    seq.push({ type: "bot", text: s.positive });
    if (s.advice && t.adviceIntro) {
      seq.push({ type: "bot", text: `${t.adviceIntro} ${s.advice}` });
    } else if (s.advice) {
      seq.push({ type: "bot", text: s.advice });
    }
  }

  // Grade at bottom?
  if (currentGrade === "bottom") {
    seq.push({ type: "grade", grade: s.grade, text: t.gradeText(s.grade) });
  }

  // CTA
  if (showCta && s.mistakes.length > 0) {
    seq.push({ type: "cta", text: t.ctaText });
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
        <div class="msg-mistake__diff">
          <span class="msg-mistake__was">${m.original}</span>
          <span class="msg-mistake__now">${m.corrected}</span>
        </div>
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

  if (showCta && s.mistakes.length > 0) {
    remaining.push({ type: "cta", text: t.ctaText });
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
