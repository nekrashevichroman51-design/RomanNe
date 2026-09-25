document.addEventListener("DOMContentLoaded", () => {
    
    // 1. АВТОМАТИЧЕСКИЙ ВВОД В СТРОКУ ПОИСКА GOOGLE
    const textToType = "День добрый. Меня зовут Некрашевич Роман Викторович. Я начинающий разработчик.";
    const searchInput = document.getElementById("search-input");
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            searchInput.value += textToType.charAt(charIndex);
            charIndex++;
            
            // Важно: автоматически прокручиваем текст вправо внутри инпута, 
            // чтобы имя и отчество не обрезались и всегда оставались в фокусе
            searchInput.scrollLeft = searchInput.scrollWidth;
            
            setTimeout(typeText, 50); 
        }
    }

    // Запуск анимации печати
    setTimeout(typeText, 600);


    // 2. ИНТЕГРАЦИЯ ТОП-ПРОГРАММИРОВАНИЯ (Логи терминала)
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

    function addLogLine() {
        const p = document.createElement("p");
        let randomLine = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        
        if (randomLine.includes("[SUCCESS]")) {
            p.innerHTML = `<span class="term-success">${randomLine}</span>`;
        } else if (randomLine.includes("[WARN]")) {
            p.innerHTML = `<span class="term-warn">${randomLine}</span>`;
        } else {
            p.textContent = randomLine;
        }

        terminal.appendChild(p);
        terminal.scrollTop = terminal.scrollHeight;

        if (terminal.childNodes.length > 20) {
            terminal.removeChild(terminal.firstChild);
        }

        setTimeout(addLogLine, Math.random() * 1200 + 400);
    }

    addLogLine();

    document.getElementById("lucky-btn").addEventListener("click", () => {
        alert("Роман Викторович уже здесь, вам точно повезло!");
    });
});
