document.addEventListener("DOMContentLoaded", () => {
    
    // 1. АВТОМАТИЧЕСКИЙ ВВОД ФИО В СТРОКУ ПОИСКА
    const textToType = "Некрашевич Роман Викторович";
    const searchInput = document.getElementById("search-input");
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            searchInput.value += textToType.charAt(charIndex);
            charIndex++;
            searchInput.scrollLeft = searchInput.scrollWidth;
            setTimeout(typeText, 60); 
        }
    }

    setTimeout(typeText, 500);


    // 2. РАБОТА ТЕРМИНАЛА (ТОП-ПРОГРАММИРОВАНИЕ)
    const terminal = document.getElementById("terminal-content");
    
    const logTemplates = [
        "[INFO] Инициализация ядра системы Роман-НВ...",
        "[SUCCESS] Подключение к глобальной сети верифицировано.",
        "[PROCESS] Компиляция модулей HTML5/CSS3/JS...",
        "[OPTIMIZE] Сжатие бандлов кода завершено на 100%.",
        "[INFO] Запуск ИИ-ассистента для оптимизации UX/UI...",
        "[SUCCESS] Модуль адаптивности успешно развернут.",
        "[WARN] Обнаружена высокая концентрация чистого кода.",
        "[PROCESS] Деплой проекта Nekrashevich-Portfolio на продакшен...",
        "[INFO] Проверка статуса: Telegram @RV11111111 активен.",
        "[INFO] Очистка кэша сборщика Webpack...",
        "[STATUS] Системы работают стабильно. Ошибок: 0."
    ];

    function addLogLine(customLine = null) {
        const p = document.createElement("p");
        let randomLine = customLine ? customLine : logTemplates[Math.floor(Math.random() * logTemplates.length)];
        
        if (randomLine.includes("[SUCCESS]")) {
            p.innerHTML = `<span class="term-success">${randomLine}</span>`;
        } else if (randomLine.includes("[WARN]") || randomLine.includes("[ACTION]")) {
            p.innerHTML = `<span class="term-warn">${randomLine}</span>`;
        } else {
            p.textContent = randomLine;
        }

        terminal.appendChild(p);
        terminal.scrollTop = terminal.scrollHeight;

        if (terminal.childNodes.length > 20) {
            terminal.removeChild(terminal.firstChild);
        }

        if (!customLine) {
            setTimeout(addLogLine, Math.random() * 1200 + 400);
        }
    }

    addLogLine();


    // 3. ОТКРЫТИЕ РЕЗУЛЬТАТОВ ПОИСКА ПРИ КЛИКЕ ИЛИ ENTER
    const searchBtn = document.getElementById("search-btn");
    const placeholder = document.getElementById("search-placeholder");
    const resultsWrapper = document.getElementById("results-wrapper");

    function executeSearch() {
        // Скрываем заглушку и открываем результаты в центральной колонке
        placeholder.style.display = "none";
        resultsWrapper.style.display = "block";

        // Добавляем логи реакции системы в терминал
        addLogLine("[ACTION] Запрос '" + textToType + "' обработан сервером.");
        addLogLine("[SUCCESS] Сгенерировано 4 релевантных фронтенд-проекта.");
    }

    searchBtn.addEventListener("click", executeSearch);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            executeSearch();
        }
    });

    document.getElementById("lucky-btn").addEventListener("click", () => {
        alert("Роман Викторович уже здесь, вам точно повезло!");
    });
});
