* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background-color: #ffffff;
    padding: 20px;
    overflow: hidden;
}

/* ЛЕВАЯ ПАНЕЛЬ */
.sidebar-left {
    width: 25%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto; /* Добавили скролл, если контента много */
    padding-right: 5px;
}

/* Стилизация скроллбара для левой панели */
.sidebar-left::-webkit-scrollbar {
    width: 4px;
}
.sidebar-left::-webkit-scrollbar-thumb {
    background: #dadce0;
    border-radius: 4px;
}

.card-section {
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.card-section h2 {
    font-size: 18px;
    color: #202124;
    margin-bottom: 15px;
    border-bottom: 2px solid #1a73e8;
    padding-bottom: 5px;
}

.skill-category {
    margin-bottom: 15px;
}

.skill-category h3 {
    font-size: 14px;
    color: #1a73e8;
    margin-bottom: 5px;
}

.skills-list, .contacts-list {
    list-style: none;
}

.skills-list li {
    padding: 4px 0;
    color: #4a4a4a;
    font-size: 13px;
    line-height: 1.4;
}

.skills-list li::before {
    content: "▪ ";
    color: #34a853;
    font-weight: bold;
}

.contacts-list li {
    font-size: 14px;
    margin-bottom: 10px;
    word-break: break-all;
}

.contacts-list a {
    color: #1a73e8;
    text-decoration: none;
}

.contacts-list a:hover {
    text-decoration: underline;
}

/* ЦЕНТРАЛЬНЫЙ БЛОК GOOGLE */
.google-container {
    width: 46%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.google-logo {
    font-size: 80px;
    font-weight: bold;
    letter-spacing: -2px;
    margin-bottom: 30px;
    user-select: none;
}

.g-blue { color: #4285F4; }
.g-red { color: #EA4335; }
.g-yellow { color: #FBBC05; }
.g-green { color: #34A853; }

.search-box {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 680px; /* Увеличили ширину строки под длинный текст */
    border: 1px solid #dfe1e5;
    padding: 12px 15px;
    border-radius: 24px;
    background: #fff;
    transition: box-shadow 0.2s;
}

.search-box:hover {
    box-shadow: 0 1px 6px rgba(32,33,36,0.28);
    border-color: rgba(223,225,229,0);
}

#search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 15px; /* Чуть уменьшили размер, чтобы текст помещался */
    color: #202124;
    padding: 0 10px;
    overflow-x: auto; /* Позволяет тексту двигаться, если он не влезает */
}

.search-icon, .mic-icon {
    color: #9aa0a6;
    cursor: default;
    user-select: none;
}

.search-buttons {
    margin-top: 25px;
    display: flex;
    gap: 12px;
}

.btn {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-size: 14px;
    padding: 10px 16px;
    cursor: pointer;
    transition: border 0.1s, box-shadow 0.1s;
}

.btn:hover {
    border: 1px solid #dadce0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    color: #202124;
}

/* ПРАВАЯ ПАНЕЛЬ (ТЕРМИНАЛ) */
.sidebar-right {
    width: 25%;
    height: 85vh;
}

.terminal {
    background-color: #0d1117;
    border-radius: 6px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border: 1px solid #30363d;
}

.terminal-header {
    background-color: #161b22;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid #30363d;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
}

.red { background-color: #ff5f56; }
.yellow { background-color: #ffbd2e; }
.green { background-color: #27c93f; }

.terminal-title {
    color: #8b949e;
    font-size: 12px;
    margin-left: 10px;
    font-family: monospace;
}

.terminal-body {
    padding: 15px;
    color: #39ff14;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    overflow-y: auto;
    flex: 1;
    line-height: 1.5;
}

.term-success { color: #58a6ff; }
.term-warn { color: #d29922; }

/* Адаптивность */
@media (max-width: 1100px) {
    body {
        flex-direction: column;
        overflow-y: auto;
        height: auto;
        gap: 40px;
        padding: 40px 20px;
    }
    .sidebar-left, .google-container, .sidebar-right {
        width: 100%;
        height: auto;
    }
    .sidebar-left {
        height: auto;
    }
}
