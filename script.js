document.addEventListener("DOMContentLoaded", () => {
    
    // 1. АВТОМАТИЧЕСКИЙ ВВОД В СТРОКУ ПОИСКА GOOGLE
    const textToType = "День добрый. Меня зовут Некрашевич Роман Викторович. Я начинающий разработчик.";
    const searchInput = document.getElementById("search-input");
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            searchInput.value += textToType.charAt(charIndex);
            charIndex++;
            // Скорость печати (в миллисекундах за символ)
            setTimeout(typeText, 60); 
        }
    }

    // Запускаем печать через полсекунды после загрузки страницы
    setTimeout(typeText, 500);


    // 2. ИНТЕГРАЦИЯ ТОП-ПРОГРАММИРОВАНИЯ (Бегущие логи в терминале)
    const terminal = document.getElementById("terminal-content");
    
    // Массив потенциальных строк логов для симуляции продвинутой среды
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
        // Случайно выбираем строку из шаблонов
        let randomLine = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        
        // Добавляем красивую подсветку для разных типов логов
        if (randomLine.includes("[SUCCESS]")) {
            p.innerHTML = `<span class="term-success">${randomLine}</span>`;
        } else if (randomLine.includes("[WARN]")) {
            p.innerHTML = `<span class="term-warn">${randomLine}</span>`;
        } else {
            p.textContent = randomLine;
        }

        terminal.appendChild(p);
        
        // Автоматический скролл терминала вниз
        terminal.scrollTop = terminal.scrollHeight;

        // Если строк слишком много — удаляем старые для оптимизации памяти
        if (terminal.childNodes.length > 25) {
            terminal.removeChild(terminal.firstChild);
        }

        // Рандомный интервал между появлением новых строк (от 0.5 до 2 секунд)
        setTimeout(addLogLine, Math.random() * 1500 + 500);
    }

    // Запускаем симуляцию терминала
    addLogLine();

    // Небольшая пасхалка для кнопки "Мне повезёт!"
    document.getElementById("lucky-btn").addEventListener("click", () => {
        alert("Роман Викторович уже здесь, вам точно повезло!");
    });
});
