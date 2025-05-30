// ----------------------------------
// Enhanced Game Constants
// ----------------------------------
const TUBE_CAPACITY = 4;
const GOLD_PER_LEVEL = 120; 
const BUY_TUBE_BASE_COST = 50; 
const BUY_TUBE_INCREMENT = 10; 
const HINT_COST = 15; 
const UNDO_COST_PER_MOVE = 3; 
const AES_KEY = 'bsm-secure-key-2024-secret';
const SKIN_PRICES = { tube: 250, ball: 200 };
const LOOT_BOX_REWARDS = [75, 150, 'SKIN', 'POWER_UP'];
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'lime'];


// ----------------------------------
// Language Translations
// ----------------------------------
const translations = {
    ar: {
        game_title: 'لغز الكرة',
        gold_label: 'الذهب:',
        level_label: 'المستوى:',
        quests_button: 'المهام',
        settings_button: 'الإعدادات',
        your_quests_title: 'مهامك',
        daily_quests_title: 'المهام اليومية',
        weekly_quests_title: 'المهام الأسبوعية',
        music_volume_label: 'مستوى صوت الموسيقى:',
        sfx_volume_label: 'مستوى صوت المؤثرات:',
        toggle_music_on: 'إيقاف الموسيقى', // When music is ON, button says "Turn OFF Music"
        toggle_music_off: 'تشغيل الموسيقى', // When music is OFF, button says "Turn ON Music"
        toggle_sfx_on: 'إيقاف المؤثرات الصوتية', // When SFX is ON, button says "Turn OFF SFX"
        toggle_sfx_off: 'تشغيل المؤثرات الصوتية', // When SFX is OFF, button says "Turn ON SFX"
        language_label: 'اللغة:',
        current_language: 'العربية',
        loading_message: 'جارٍ التحميل...',
        initial_message: 'رتّب الكرات حسب اللون',
        undo_button: 'تراجع',
        reset_button: 'إعادة',
        hint_button: 'تلميح',
        buy_tube_button: 'أنبوب',
        tube_capacity_label: 'سعة الأنبوب:',
        player_id_label: 'معرّفك: ',

        // Game messages - these are functions now
        level_ready: (params) => `المستوى ${params.level} جاهز!`,
        tube_empty_error: 'هذا الأنبوب فارغ!',
        invalid_move_error: 'حركة غير صالحة! خسارة 2 ذهب.',
        level_complete_success: (params) => `المستوى ${params.level} اكتمل! +${params.gold} ذهب.`,
        undo_cost_error: (params) => `تحتاج ${params.cost} ذهب للتراجع.`,
        undo_success: 'تم التراجع عن الحركة.',
        no_moves_to_undo: 'لا توجد حركات للتراجع عنها!',
        reset_confirm: 'هل أنت متأكد أنك تريد إعادة ضبط المستوى الحالي؟ ستخسر تقدمك في هذا المستوى.',
        level_reset_success: 'تم إعادة ضبط المستوى.',
        hint_cost_error: (params) => `تحتاج ${params.cost} ذهب للحصول على تلميح.`,
        hint_message: (params) => `تلميح: انقل الكرة من أنبوب ${params.from + 1} إلى أنبوب ${params.to + 1}`,
        hint_not_found: 'لا يمكن العثور على تلميح في الوقت الحالي. حاول تحريك الكرات لإنشاء مساحة.',
        buy_tube_cost_error: (params) => `تحتاج ${params.cost} ذهب لشراء أنبوب`,
        buy_tube_success: 'تم شراء أنبوب إضافي!',
        daily_gold_reward: (params) => `لقد حصلت على ${params.goldAmount} ذهب كمكافأة يومية!`,

        // Quests
        quest_completed_msg: (params) => `مهمة "${params.desc}" مكتملة!`,
        quest_claimed_msg: (params) => `تم المطالبة بمكافأة مهمة "${params.desc}"!`,
        progress_label: 'التقدم:',
        reward_label: 'المكافأة:',
        claim_reward_button: 'المطالبة بالمكافأة',

        // Achievements
        new_achievement_unlocked: (params) => `إنجاز جديد: ${params.name}! (+${params.reward} ذهب)`,

        // Quest descriptions (dynamic with target)
        daily_level_complete_desc: (params) => `أكمل ${params.target} مستويات`,
        weekly_undo_use_desc: (params) => `استخدم التراجع ${params.target} مرات`,
        daily_collect_gold_desc: (params) => `اجمع ${params.target} ذهب`,

        // Achievement names and descriptions
        achievement_speed_runner_name: 'عدّاء السرعة',
        achievement_speed_runner_desc: 'أكمل 5 مستويات في أقل من 50 حركة إجمالية',
        achievement_perfectionist_name: 'مثالي',
        achievement_perfectionist_desc: 'أكمل 10 مستويات بدون أي تراجع',
        achievement_gold_hoarder_name: 'جامع الذهب',
        achievement_gold_hoarder_desc: 'اجمع 1000 قطعة ذهبية',
        achievement_first_tube_buyer_name: 'المستثمر الأول',
        achievement_first_tube_buyer_desc: 'اشترِ أول أنبوب إضافي',
    },
    en: {
        game_title: 'Ball Puzzle',
        gold_label: 'Gold:',
        level_label: 'Level:',
        quests_button: 'Quests',
        settings_button: 'Settings',
        your_quests_title: 'Your Quests',
        daily_quests_title: 'Daily Quests',
        weekly_quests_title: 'Weekly Quests',
        music_volume_label: 'Music Volume:',
        sfx_volume_label: 'SFX Volume:',
        toggle_music_on: 'Music ON',
        toggle_music_off: 'Music OFF',
        toggle_sfx_on: 'SFX ON',
        toggle_sfx_off: 'SFX OFF',
        language_label: 'Language:',
        current_language: 'English',
        loading_message: 'Loading...',
        initial_message: 'Sort balls by color',
        undo_button: 'Undo',
        reset_button: 'Reset',
        hint_button: 'Hint',
        buy_tube_button: 'Tube',
        tube_capacity_label: 'Tube Capacity:',
        player_id_label: 'Your ID: ',

        // Game messages - these are functions now
        level_ready: (params) => `Level ${params.level} ready!`,
        tube_empty_error: 'This tube is empty!',
        invalid_move_error: 'Invalid move! Lose 2 gold.',
        level_complete_success: (params) => `Level ${params.level} complete! +${params.gold} Gold.`,
        undo_cost_error: (params) => `You need ${params.cost} gold to undo.`,
        undo_success: 'Move undone.',
        no_moves_to_undo: 'No moves to undo!',
        reset_confirm: 'Are you sure you want to reset the current level? You will lose your progress for this level.',
        level_reset_success: 'Level reset.',
        hint_cost_error: (params) => `You need ${params.cost} gold for a hint.` ,
        hint_message: (params) => `Hint: Move ball from tube ${params.from + 1} to tube ${params.to + 1}`,
        hint_not_found: 'No hint found at the moment. Try moving balls to create space.',
        buy_tube_cost_error: (params) => `You need ${params.cost} gold to buy a tube`,
        buy_tube_success: 'Extra tube purchased!',
        daily_gold_reward: (params) => `You received ${params.goldAmount} gold as a daily reward!`,

        // Quests
        quest_completed_msg: (params) => `Quest "${params.desc}" completed!`,
        quest_claimed_msg: (params) => `Claimed reward for "${params.desc}" quest!`,
        progress_label: 'Progress:',
        reward_label: 'Reward:',
        claim_reward_button: 'Claim Reward',

        // Quest descriptions (dynamic with target)
        daily_level_complete_desc: (params) => `Complete ${params.target} levels`,
        weekly_undo_use_desc: (params) => `Use undo ${params.target} times`,
        daily_collect_gold_desc: (params) => `Collect ${params.target} gold`,

        // Achievement names and descriptions
        achievement_speed_runner_name: 'Speed Runner',
        achievement_speed_runner_desc: 'Complete 5 levels in less than 50 total moves',
        achievement_perfectionist_name: 'Perfectionist',
        achievement_perfectionist_desc: 'Complete 10 levels without any undo',
        achievement_gold_hoarder_name: 'Gold Hoarder',
        achievement_gold_hoarder_desc: 'Collect 1000 gold',
        achievement_first_tube_buyer_name: 'First Tube Buyer',
        achievement_first_tube_buyer_desc: 'Buy your first extra tube',
    },
    de: { // NEW: German translations
        game_title: 'Ballpuzzle',
        gold_label: 'Gold:',
        level_label: 'Level:',
        quests_button: 'Aufgaben',
        settings_button: 'Einstellungen',
        your_quests_title: 'Ihre Aufgaben',
        daily_quests_title: 'Tägliche Aufgaben',
        weekly_quests_title: 'Wöchentliche Aufgaben',
        music_volume_label: 'Musiklautstärke:',
        sfx_volume_label: 'SFX-Lautstärke:',
        toggle_music_on: 'Musik AN',
        toggle_music_off: 'Musik AUS',
        toggle_sfx_on: 'SFX AN',
        toggle_sfx_off: 'SFX AUS',
        language_label: 'Sprache:',
        current_language: 'Deutsch',
        loading_message: 'Lädt...',
        initial_message: 'Sortieren Sie die Bälle nach Farbe',
        undo_button: 'Rückgängig',
        reset_button: 'Zurücksetzen',
        hint_button: 'Hinweis',
        buy_tube_button: 'Röhre',
        tube_capacity_label: 'Röhrenkapazität:',
        player_id_label: 'Ihre ID: ',

        // Game messages - these are functions now
        level_ready: (params) => `Level ${params.level} bereit!`,
        tube_empty_error: 'Diese Röhre ist leer!',
        invalid_move_error: 'Ungültiger Zug! Verliere 2 Gold.',
        level_complete_success: (params) => `Level ${params.level} abgeschlossen! +${params.gold} Gold.`,
        undo_cost_error: (params) => `Sie benötigen ${params.cost} Gold, um rückgängig zu machen.`,
        undo_success: 'Zug rückgängig gemacht.',
        no_moves_to_undo: 'Keine Züge zum Rückgängigmachen!',
        reset_confirm: 'Sind Sie sicher, dass Sie das aktuelle Level zurücksetzen möchten? Sie verlieren Ihren Fortschritt in diesem Level.',
        level_reset_success: 'Level zurückgesetzt.',
        hint_cost_error: (params) => `Sie benötigen ${params.cost} Gold für einen Hinweis.` ,
        hint_message: (params) => `Hinweis: Bewegen Sie den Ball von Röhre ${params.from + 1} zu Röhre ${params.to + 1}`,
        hint_not_found: 'Im Moment wurde kein Hinweis gefunden. Versuchen Sie, Bälle zu bewegen, um Platz zu schaffen.',
        buy_tube_cost_error: (params) => `Sie benötigen ${params.cost} Gold, um eine Röhre zu kaufen`,
        buy_tube_success: 'Zusätzliche Röhre gekauft!',
        daily_gold_reward: (params) => `Sie haben ${params.goldAmount} Gold als tägliche Belohnung erhalten!`,

        // Quests
        quest_completed_msg: (params) => `Aufgabe "${params.desc}" abgeschlossen!`,
        quest_claimed_msg: (params) => `Belohnung für Aufgabe "${params.desc}" eingefordert!`,
        progress_label: 'Fortschritt:',
        reward_label: 'Belohnung:',
        claim_reward_button: 'Belohnung einfordern',

        // Quest descriptions (dynamic with target)
        daily_level_complete_desc: (params) => `Schließe ${params.target} Level ab`,
        weekly_undo_use_desc: (params) => `Benutze Rückgängig ${params.target} Mal`,
        daily_collect_gold_desc: (params) => `Sammle ${params.target} Gold`,

        // Achievement names and descriptions
        achievement_speed_runner_name: 'Speedrunner',
        achievement_speed_runner_desc: 'Schließe 5 Level in weniger als 50 Gesamtzügen ab',
        achievement_perfectionist_name: 'Perfektionist',
        achievement_perfectionist_desc: 'Schließe 10 Level ohne Rückgängigmachen ab',
        achievement_gold_hoarder_name: 'Goldsammler',
        achievement_gold_hoarder_desc: 'Sammle 1000 Gold',
        achievement_first_tube_buyer_name: 'Erster Röhrenkäufer',
        achievement_first_tube_buyer_desc: 'Kaufe deine erste zusätzliche Röhre',
    }
};

// ----------------------------------
// Game State with Difficulty Tracking
// ----------------------------------
const gameState = {
  level: 1,
  gold: 100,
  extraTubes: 0, // This will now reset per level
  currentLanguage: 'en', // CHANGED: Default language is now English
  quests: [
    // Note: Quest descriptions will now use language keys for rendering
    { id: 'daily_level_complete', type: 'DAILY', descKey: 'daily_level_complete_desc', progress: 0, target: 3, reward: 150, lastReset: Date.now(), completed: false, rewardClaimed: false },
    { id: 'weekly_undo_use', type: 'WEEKLY', descKey: 'weekly_undo_use_desc', progress: 0, target: 5, reward: 300, lastReset: Date.now(), completed: false, rewardClaimed: false },
    { id: 'daily_collect_gold', type: 'DAILY', descKey: 'daily_collect_gold_desc', progress: 0, target: 200, reward: 100, lastReset: Date.now(), completed: false, rewardClaimed: false }
  ],
  moveCount: 0, // Moves in current level
  totalMoves: 0, // Total moves across all levels
  levelsWithoutUndo: 0, // Consecutive levels completed without undo
  unlockedAchievements: [],
  tubeHistory: [], // Stores states for undo
  maxHistoryDepth: 25,
  difficultyStats: {
    colorIncrement: 0.7, // How many colors increase per level progression
    tubeDecrement: 5     // How many levels before an 'extra' tube is removed from baseline
  },
  sfxVolume: 70, // Default SFX volume (0-100 for slider)
  musicVolume: 30, // Default music volume (0-100 for slider)
  musicOn: true,
  sfxOn: true,
  lastDailyReset: Date.now(), // Track last daily quest reset (used for quests)
  lastWeeklyReset: Date.now(), // Track last weekly quest reset (used for quests)
  lastDailyGoldReward: 0, // New: Track last time daily gold was given
  undoUsedThisLevel: false, // Flag to track undo usage in current level
  hasBoughtFirstTube: false, // NEW: Persistent flag for achievement
  playerID: null, // NEW: Player ID for Firebase
};

let tubes = []; // Current state of the tubes
let selectedTubeIndex = -1; // Index of the currently selected tube for a move

// ----------------------------------
// Enhanced Achievements (Update descriptions to use language keys)
// ----------------------------------
const achievements = [
  {
    id: 'speed_runner',
    name_key: 'achievement_speed_runner_name', // New key for name
    desc_key: 'achievement_speed_runner_desc', // New key for description
    check: () => gameState.level >= 5 && gameState.totalMoves <= 50,
    reward: 200,
    unlocked: false
  },
  {
    id: 'perfectionist',
    name_key: 'achievement_perfectionist_name',
    desc_key: 'achievement_perfectionist_desc',
    check: () => gameState.levelsWithoutUndo >= 10,
    reward: 500,
    unlocked: false
  },
  {
    id: 'gold_hoarder',
    name_key: 'achievement_gold_hoarder_name',
    desc_key: 'achievement_gold_hoarder_desc',
    check: () => gameState.gold >= 1000,
    reward: 1000,
    unlocked: false
  },
  {
    id: 'first_tube_buyer',
    name_key: 'achievement_first_tube_buyer_name',
    desc_key: 'achievement_first_tube_buyer_desc',
    check: () => gameState.hasBoughtFirstTube, // MODIFIED: Checks new persistent flag
    reward: 100,
    unlocked: false
  }
];


// ----------------------------------
// DOM Elements - Declared here for global access
// ----------------------------------
let tubesContainer, messageEl, goldDisplay, levelDisplay, undoButton, resetButton,
    hintButtonMain, buyTubeButton, loadingMessageEl, achievementBadge, questsButton,
    questsPopup, closeQuestsButton, musicToggleButton, sfxToggleButton, settingsButton,
    settingsPopup, closeSettingsButton, sfxVolumeSlider, musicVolumeSlider,
    dailyQuestsListEl, weeklyQuestsListEl, hintCostDisplay, buyTubeCostDisplay,
    languageToggleButton; // NEW: language toggle button

let soundEffects = {}; // Object to hold all Audio objects for SFX
let backgroundMusic; // For background music

// ----------------------------------
// Language Management
// ----------------------------------
function getTranslation(key, params = {}) {
    const langData = translations[gameState.currentLanguage];
    if (langData && langData[key]) {
        const text = langData[key];
        if (typeof text === 'function') {
            // Pass parameters as an object for flexibility
            return text(params); // Now passes the entire params object
        }
        return text; // Return string for static messages
    }
    console.warn(`Translation key '${key}' not found for language '${gameState.currentLanguage}'`);
    return key; // Fallback to key itself
}

function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' not supported.`);
        return;
    }
    gameState.currentLanguage = lang;
    saveGame();
    updateLanguageUI();
}

function updateLanguageUI() {
    const currentLang = gameState.currentLanguage;
    const langData = translations[currentLang];

    // Update general text elements
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (langData[key] && typeof langData[key] === 'string') {
             // Check if it's a button with an icon span
             const iconSpan = element.querySelector('.material-symbols-outlined');
             if (iconSpan) {
                 // If it's a button with an icon, update only the text content directly within the button, not the span
                 // The span's content will be updated separately for toggle buttons.
                 // For simple buttons, like 'Quests' and 'Settings', the text content is the button's own text.
                 if (!element.classList.contains('toggle-btn') && element.tagName === 'BUTTON') { // Exclude toggle buttons and ensure it's a button element
                     // Get all child nodes of the button
                     const childNodes = Array.from(element.childNodes);
                     // Find the text node (assuming it's not the icon span) and update it
                     childNodes.forEach(node => {
                         if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                             node.textContent = langData[key];
                         }
                     });
                 } else if (element.tagName !== 'BUTTON') { // For non-button elements, update text content directly
                     element.textContent = langData[key];
                 }
             } else { // If no icon span, just update text content
                 element.textContent = langData[key];
             }
        }
    });


    // Handle HTML tag language and direction
    if (document.documentElement) {
        document.documentElement.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    }

    // Update settings buttons (music/sfx toggle text and icon)
    if (musicToggleButton) {
        // Select the span that holds the Material Symbol icon name
        const musicIconSpan = musicToggleButton.querySelector('.material-symbols-outlined');
        // Select the span that holds the text (e.g., "تشغيل الموسيقى")
        const musicTextSpan = musicToggleButton.querySelector('span[data-lang-key]');

        if (musicIconSpan && musicTextSpan) {
            musicTextSpan.textContent = gameState.musicOn ? langData.toggle_music_on : langData.toggle_music_off;
            if (gameState.musicOn) {
                musicToggleButton.classList.add('active');
                musicIconSpan.textContent = 'volume_up'; // Material Symbol name for music ON
            } else {
                musicToggleButton.classList.remove('active');
                musicIconSpan.textContent = 'volume_off'; // Material Symbol name for music OFF
            }
        }
    }
    if (sfxToggleButton) {
        // Select the span that holds the Material Symbol icon name
        const sfxIconSpan = sfxToggleButton.querySelector('.material-symbols-outlined');
        // Select the span that holds the text (e.g., "تشغيل المؤثرات الصوتية")
        const sfxTextSpan = sfxToggleButton.querySelector('span[data-lang-key]');
        if (sfxIconSpan && sfxTextSpan) {
            sfxTextSpan.textContent = gameState.sfxOn ? langData.toggle_sfx_on : langData.toggle_sfx_off;
            if (gameState.sfxOn) {
                sfxToggleButton.classList.add('active');
                sfxIconSpan.textContent = 'volume_up'; // Material Symbol name for SFX ON
            } else {
                sfxToggleButton.classList.remove('active');
                sfxIconSpan.textContent = 'volume_off'; // Material Symbol name for SFX OFF
            }
        }
    }

    // Update language toggle button text and icon
    if (languageToggleButton) {
        const langIconSpan = languageToggleButton.querySelector('.material-symbols-outlined'); // The span for the icon
        const langTextSpan = languageToggleButton.querySelector('span[data-lang-key="current_language"]'); // The span for the text

        if (langIconSpan && langTextSpan) {
            // Update the text first
            langTextSpan.textContent = langData.current_language;

            // Update the icon based on the current language
            let iconName = 'language'; // Default globe icon
            // You can find more specific icons on Material Symbols website if needed,
            // e.g., 'translate' or more specific language representations.
            // For now, 'language' is a good general icon.
            langIconSpan.textContent = iconName; // Set the icon by its text name
            languageToggleButton.dataset.nextLang = Object.keys(translations)[(Object.keys(translations).indexOf(currentLang) + 1) % Object.keys(translations).length];
        }
    }


    // Update player ID text (which is not in data-lang-key system for flexibility)
    const playerIdEl = document.getElementById('player-id');
    if (playerIdEl) {
        playerIdEl.textContent = getTranslation('player_id_label') + (gameState.playerID || 'N/A');
    }

    // Re-render quests to apply new language descriptions
    updateQuestsUI();
    // Re-render achievement badge if it's currently visible
    if (achievementBadge && achievementBadge.classList.contains('show') && gameState.unlockedAchievements.length > 0) {
        const unlockedAchievement = achievements.find(a => a.id === gameState.unlockedAchievements[gameState.unlockedAchievements.length - 1]);
        if (unlockedAchievement) {
            showAchievementUnlocked(unlockedAchievement); // Re-trigger with new language
        }
    }
}

// ----------------------------------
// Sound Management (No changes here, but relies on loaded state)
// ----------------------------------
function loadSounds() {
    const sfxList = ['click', 'move', 'level_complete', 'error', 'undo', 'reset', 'hint', 'buy', 'quest_complete', 'achievement'];
    sfxList.forEach(name => {
        const audioEl = new Audio(`assets/sounds/${name}.mp3`);
        soundEffects[name] = audioEl;
        // Set initial volume based on gameState
        soundEffects[name].volume = gameState.sfxVolume / 100;
    });

    backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.volume = gameState.musicVolume / 100;
        backgroundMusic.loop = true; // Ensure music loops
        if (gameState.musicOn) {
            // Attempt to play, but catch if auto-play is prevented by browser
            backgroundMusic.play().catch(e => {
                console.warn("Music auto-play prevented. User interaction might be needed.", e);
            });
        }
    }
}

function playSound(name) {
    if (gameState.sfxOn && soundEffects[name]) {
        soundEffects[name].currentTime = 0; // Rewind to start
        soundEffects[name].play().catch(e => console.log(`Error playing ${name} sound:`, e));
    }
}

function toggleMusic() {
    gameState.musicOn = !gameState.musicOn;
    if (gameState.musicOn) {
        if (backgroundMusic) { // Ensure backgroundMusic is loaded
            backgroundMusic.play().catch(e => {
                console.warn("Music auto-play prevented:", e);
            });
        }
    } else {
        if (backgroundMusic) { // Ensure backgroundMusic is loaded
            backgroundMusic.pause();
        }
    }
    updateLanguageUI(); // Update UI after state change (for button text and icon)
    saveGame();
}

function toggleSfx() {
    gameState.sfxOn = !gameState.sfxOn;
    updateLanguageUI(); // Update UI after state change (for button text and icon)
    saveGame();
}

function updateMusicVolume() {
    gameState.musicVolume = parseInt(musicVolumeSlider.value);
    if (backgroundMusic) {
        backgroundMusic.volume = gameState.musicVolume / 100;
    }
    saveGame();
}

function updateSfxVolume() {
    gameState.sfxVolume = parseInt(sfxVolumeSlider.value);
    for (const key in soundEffects) {
        if (soundEffects.hasOwnProperty(key)) {
            soundEffects[key].volume = gameState.sfxVolume / 100;
        }
    }
    saveGame();
}

// ----------------------------------
// Utility Functions (Modified for language-aware messages)
// ----------------------------------

function showMessage(msgKey, type = 'info', params = {}) { // Modified to accept params object
    if (!messageEl) {
        console.warn("Message element not found.");
        return;
    }
    const msg = getTranslation(msgKey, params); // Pass params directly

    messageEl.textContent = msg;
    messageEl.className = 'game-message'; // Reset classes
    if (type === 'error') {
        messageEl.classList.add('error-message');
        messageEl.classList.add('shake-error');
    } else if (type === 'success') {
        messageEl.classList.add('success-message');
    }
    setTimeout(() => {
        messageEl.classList.remove('error-message', 'shake-error', 'success-message');
    }, 1500);
}

function showError(msgKey, params = {}) { // Modified to accept params object
    showMessage(msgKey, 'error', params);
    playSound('error');
}

function encryptData(data) {
    try {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), AES_KEY).toString();
        return encrypted;
    } catch (e) {
        console.error("Encryption error:", e);
        return null;
    }
}

function decryptData(encryptedString) {
    try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedString, AES_KEY);
        const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    } catch (e) {
        console.error("Decryption error:", e);
        return null;
    }
}

async function saveGame() { // Made async to await Firebase operations
    try {
        const dataToSave = {
            level: gameState.level,
            gold: gameState.gold,
            extraTubes: gameState.extraTubes, // extraTubes will reset per level, but saved for integrity
            currentLanguage: gameState.currentLanguage,
            quests: gameState.quests,
            moveCount: gameState.moveCount,
            totalMoves: gameState.totalMoves,
            levelsWithoutUndo: gameState.levelsWithoutUndo,
            unlockedAchievements: gameState.unlockedAchievements,
            sfxVolume: gameState.sfxVolume,
            musicVolume: gameState.musicVolume,
            musicOn: gameState.musicOn,
            sfxOn: gameState.sfxOn,
            lastDailyReset: gameState.lastDailyReset,
            lastWeeklyReset: gameState.lastWeeklyReset,
            lastDailyGoldReward: gameState.lastDailyGoldReward,
            undoUsedThisLevel: gameState.undoUsedThisLevel,
            hasBoughtFirstTube: gameState.hasBoughtFirstTube, // NEW: save this flag
            playerID: gameState.playerID // Save player ID
        };

        // Save to localStorage as a fallback/cache
        const encryptedData = encryptData(dataToSave);
        localStorage.setItem('colorSortGameState', encryptedData);

        // Save to Firebase (if playerID exists)
        if (gameState.playerID) {
            await updatePlayerData(gameState.playerID, {
                level: gameState.level,
                gold: gameState.gold,
                totalMoves: gameState.totalMoves,
                // Only save essential game state to Firebase, not all transient values
                hasBoughtFirstTube: gameState.hasBoughtFirstTube,
                unlockedAchievements: gameState.unlockedAchievements,
                currentLanguage: gameState.currentLanguage, // Save language to Firebase as well
                sfxVolume: gameState.sfxVolume, // Save volume settings
                musicVolume: gameState.musicVolume,
                musicOn: gameState.musicOn,
                sfxOn: gameState.sfxOn,
                lastDailyReset: gameState.lastDailyReset,
                lastWeeklyReset: gameState.lastWeeklyReset,
                lastDailyGoldReward: gameState.lastDailyGoldReward,
                quests: gameState.quests // Save quests state
            });
            console.log("Game state updated in Firebase.");
        }

    } catch (e) {
        console.error('Failed to save game:', e);
    }
}

async function loadGame() { // Made async to await Firebase operations
    try {
        let loadedData = null;
        let playerIDFromLocal = localStorage.getItem('playerID');

        if (playerIDFromLocal) {
            gameState.playerID = playerIDFromLocal;
            try {
                // Try to load from Firebase first if player ID exists
                const firebasePlayerData = await getPlayerData(playerIDFromLocal);
                if (firebasePlayerData) {
                    console.log("Loaded game state from Firebase.");
                    loadedData = { gameState: firebasePlayerData }; // Firebase data aligns with part of gameState
                }
            } catch (firebaseError) {
                console.warn("Could not load from Firebase, trying localStorage:", firebaseError);
                // Fallback to localStorage if Firebase fails
                const encryptedData = localStorage.getItem('colorSortGameState');
                if (encryptedData) {
                    loadedData = decryptData(encryptedData);
                    console.log("Loaded game state from localStorage.");
                }
            }
        } else {
            // If no playerID, try to load from localStorage (might be an old save without ID)
            const encryptedData = localStorage.getItem('colorSortGameState');
            if (encryptedData) {
                loadedData = decryptData(encryptedData);
                console.log("Loaded game state from localStorage (no player ID yet).");
            }
        }

        if (loadedData && loadedData.gameState) {
            // Merge loaded state with default state to handle new properties
            Object.keys(gameState).forEach(key => {
                if (loadedData.gameState.hasOwnProperty(key)) {
                    if (key === 'quests') {
                        const loadedQuestsMap = new Map(loadedData.gameState.quests.map(q => [q.id, q]));
                        gameState.quests = gameState.quests.map(currentQuest => {
                            // Update existing quests with loaded data, preserving new quest defaults if not in loaded
                            return loadedQuestsMap.has(currentQuest.id) ? { ...currentQuest, ...loadedQuestsMap.get(currentQuest.id) } : currentQuest;
                        });
                        // Add any new quests from loaded data that aren't in current default (good for robustness)
                        loadedQuestsMap.forEach((loadedQuest, id) => {
                            if (!gameState.quests.some(q => q.id === id)) {
                                gameState.quests.push(loadedQuest);
                            }
                        });
                    } else if (Array.isArray(gameState[key]) && Array.isArray(loadedData.gameState[key])) {
                        // For arrays like unlockedAchievements, replace if loaded data exists
                        gameState[key] = loadedData.gameState[key];
                    } else if (typeof gameState[key] === 'object' && gameState[key] !== null && loadedData.gameState[key] !== null && !Array.isArray(gameState[key])) {
                        // Deep merge for nested objects like difficultyStats, but not arrays
                        Object.assign(gameState[key], loadedData.gameState[key]);
                    }
                    else {
                        gameState[key] = loadedData.gameState[key];
                    }
                }
            });
            // tubes are not loaded from save anymore, they are regenerated on startNewLevel
        }
    } catch (e) {
        console.error('Failed to load game or corrupted save:', e);
        // If loading fails, clear the corrupted save and start fresh
        localStorage.removeItem('colorSortGameState');
        localStorage.removeItem('playerID'); // Clear player ID if load fails
        // Re-initialize gameState to default in case of corruption or no save
        Object.assign(gameState, {
            level: 1,
            gold: 100, // Default starting gold
            extraTubes: 0, // Reset extra tubes
            currentLanguage: 'en', // CHANGED: Reset language to English default
            quests: [
              { id: 'daily_level_complete', type: 'DAILY', descKey: 'daily_level_complete_desc', progress: 0, target: 3, reward: 150, lastReset: Date.now(), completed: false, rewardClaimed: false },
              { id: 'weekly_undo_use', type: 'WEEKLY', descKey: 'weekly_undo_use_desc', progress: 0, target: 5, reward: 300, lastReset: Date.now(), completed: false, rewardClaimed: false },
              { id: 'daily_collect_gold', type: 'DAILY', descKey: 'daily_collect_gold_desc', progress: 0, target: 200, reward: 100, lastReset: Date.now(), completed: false, rewardClaimed: false }
            ],
            moveCount: 0,
            totalMoves: 0,
            levelsWithoutUndo: 0,
            unlockedAchievements: [],
            tubeHistory: [],
            maxHistoryDepth: 25,
            difficultyStats: { colorIncrement: 0.7, tubeDecrement: 5 },
            sfxVolume: 70,
            musicVolume: 30,
            musicOn: true,
            sfxOn: true,
            lastDailyReset: Date.now(),
            lastWeeklyReset: Date.now(),
            lastDailyGoldReward: 0, // Reset daily gold reward tracker
            undoUsedThisLevel: false,
            hasBoughtFirstTube: false, // Reset this too on corruption
            playerID: null
        });
        tubes = []; // Ensure tubes are also reset
    } finally {
        // Ensure playerID is set up, even if loading failed or it's a new game
        if (!gameState.playerID) {
            gameState.playerID = generateUserId();
            localStorage.setItem('playerID', gameState.playerID);
            // Save initial data to Firebase for new player
            await saveInitialPlayerData(gameState.playerID, {
                level: gameState.level,
                gold: gameState.gold,
                totalMoves: gameState.totalMoves,
                hasBoughtFirstTube: gameState.hasBoughtFirstTube,
                unlockedAchievements: gameState.unlockedAchievements,
                currentLanguage: gameState.currentLanguage, // Save language to Firebase as well
                sfxVolume: gameState.sfxVolume, // Save volume settings
                musicVolume: gameState.musicVolume,
                musicOn: gameState.musicOn,
                sfxOn: gameState.sfxOn,
                lastDailyReset: gameState.lastDailyReset,
                lastWeeklyReset: gameState.lastWeeklyReset,
                lastDailyGoldReward: gameState.lastDailyGoldReward,
                quests: gameState.quests // Save quests state
            });
        }
        // Always update player ID in UI after load/init
        const playerIdEl = document.getElementById('player-id');
        if (playerIdEl) {
            playerIdEl.textContent = getTranslation('player_id_label') + gameState.playerID;
        }
    }
}

// ----------------------------------
// Optimized Puzzle Solver (No direct language changes here)
// ----------------------------------
class PuzzleSolver {
  constructor(initialState, numColors) {
    this.initialState = JSON.parse(JSON.stringify(initialState));
    this.numColors = numColors;
    this.visited = new Set();
    this.queue = [];
  }

  hashState(state) {
    // Normalize state for hashing: sort balls within tubes, then sort tubes themselves based on content
    // This ensures consistent hash for equivalent states regardless of tube order
    return JSON.stringify(state.map(tube => [...tube].sort()).sort((a, b) => {
        // Sort by length first, then by content for unique order
        if (a.length !== b.length) return a.length - b.length;
        return JSON.stringify(a).localeCompare(JSON.stringify(b));
    }));
  }

  isSolved(state) {
    // A solved state has all non-empty tubes filled with a single color
    // And the total number of balls matches the expected for the level
    const totalBalls = state.flat().length;
    const expectedBalls = this.numColors * TUBE_CAPACITY;

    if (totalBalls !== expectedBalls) return false;

    // Check if all non-empty tubes are completed (full and single color)
    const allTubesSorted = state.every(tube => tube.length === 0 || isTubeCompleted(tube));
    return allTubesSorted;
  }

  bfs() {
    this.queue.push({ state: this.initialState, moves: [] });
    const solutions = [];
    let shortestSolutionLength = Infinity;
    const maxSolutionsToFind = 1; // We only need one solution for validation/hint
    // Increased maxStatesToExplore to allow deeper search for slightly harder puzzles
    const maxStatesToExplore = 20000; // Increased limit for more robust solving
    let statesExplored = 0;

    while (this.queue.length > 0 && solutions.length < maxSolutionsToFind && statesExplored < maxStatesToExplore) {
      // Always get the first element for BFS behavior
      const current = this.queue.shift();
      const stateHash = this.hashState(current.state);

      if (current.moves.length >= shortestSolutionLength) { // Prune longer paths early
        continue;
      }

      if (this.visited.has(stateHash)) {
        continue;
      }
      this.visited.add(stateHash);
      statesExplored++;

      if (this.isSolved(current.state)) {
        solutions.push(current);
        shortestSolutionLength = Math.min(shortestSolutionLength, current.moves.length);
        // Clear queue of longer paths to focus on finding the shortest
        this.queue = this.queue.filter(item => item.moves.length < shortestSolutionLength);
        continue; // Found a solution, move to next iteration or finish
      }

      // Generate strategic moves to explore
      getStrategicMoves(current.state).forEach(move => {
        const newState = applyMove(current.state, move);
        const newHash = this.hashState(newState);
        if (!this.visited.has(newHash)) { // Only add if not visited
            this.queue.push({
              state: newState,
              moves: [...current.moves, move]
            });
        }
      });
      // Sort queue by move length to prioritize shortest paths (BFS-like behavior)
      this.queue.sort((a, b) => a.moves.length - b.moves.length);
    }
    // Return sorted by shortest path
    return solutions.sort((a, b) => a.moves.length - b.moves.length);
  }
}

function getValidMoves(state) {
  const moves = [];
  for (let from = 0; from < state.length; from++) {
    for (let to = 0; to < state.length; to++) {
      if (from === to) continue; // Cannot move to the same tube
      const fromTube = state[from];
      const toTube = state[to];

      if (isValidMove(fromTube, toTube)) {
        moves.push({ from: from, to: to });
      }
    }
  }
  return moves;
}

function getStrategicMoves(state) {
    const moves = [];
    for (let from = 0; from < state.length; from++) {
        const fromTube = state[from];
        if (fromTube.length === 0) continue; // Cannot move from an empty tube

        const topColor = fromTube[fromTube.length - 1];
        // This is a heuristic to see how many top balls are of the same color
        const ballsToMoveCount = fromTube.length - (fromTube.lastIndexOf(topColor) + 1);

        // If the tube is completed or will become completed with this move, don't move from it unless necessary
        if (isTubeCompleted(fromTube) && ballsToMoveCount === 0) { // Completed and no balls to move
            continue;
        }

        for (let to = 0; to < state.length; to++) {
            if (from === to) continue;
            const toTube = state[to];

            if (isValidMove(fromTube, toTube)) {
                // Prioritize moves that lead to a sorted tube or fill an empty tube with matching color
                // Heuristic 1: Move to an empty tube
                if (toTube.length === 0) {
                    moves.push({ from: from, to: to, priority: 3 });
                }
                // Heuristic 2: Move to a tube with the same top color, if it helps complete it or is the only option
                else if (toTube[toTube.length - 1] === topColor && toTube.length < TUBE_CAPACITY) {
                    moves.push({ from: from, to: to, priority: 2 });
                }
                // Heuristic 3: Move from a tube that is not completed to any valid destination
                else {
                    moves.push({ from: from, to: to, priority: 1 });
                }
            }
        }
    }
    // Sort moves by priority (higher priority first), then by arbitrary means for consistent ordering
    return moves.sort((a, b) => b.priority - a.priority || (a.from - b.from) || (a.to - b.to));
}


function applyMove(state, move) {
  const newState = JSON.parse(JSON.stringify(state));
  const ball = newState[move.from].pop();
  if (ball !== undefined) { // Ensure a ball was actually popped
    newState[move.to].push(ball);
  }
  return newState;
}

function isTubeCompleted(tube) {
  return tube.length === TUBE_CAPACITY && tube.every(color => color === tube[0]);
}

// ----------------------------------
// Enhanced Difficulty Scaling
// ----------------------------------
function getLevelDifficulty(level) {
  return {
    colors: Math.min(3 + Math.floor(level * gameState.difficultyStats.colorIncrement), colors.length),
    // extraTubes from difficulty is baseline, gameState.extraTubes is what player buys for THIS level
    extraTubes: Math.max(2 - Math.floor(level / gameState.difficultyStats.tubeDecrement), 0),
    shuffleMoves: Math.floor(50 + level * 4)
  };
}

// ----------------------------------
// Advanced Puzzle Generation
// ----------------------------------
function createSolvedState(numColors, totalTubes) {
  let solvedTubes = Array(totalTubes).fill().map(() => []);
  // Populate tubes with solved state (each color in its own tube, filling to capacity)
  for (let i = 0; i < numColors; i++) {
    for (let j = 0; j < TUBE_CAPACITY; j++) {
      solvedTubes[i].push(colors[i]);
    }
  }
  return solvedTubes;
}

function generateSmartPuzzle(level) {
  const difficulty = getLevelDifficulty(level);
  // Total tubes = colors needed + baseline empty tubes + player-bought extra tubes
  const totalTubes = difficulty.colors + difficulty.extraTubes + gameState.extraTubes;

  if (loadingMessageEl) loadingMessageEl.classList.add('show');
  showMessage("loading_message"); // Use translation key

  let validPuzzle = [];
  let attempts = 0;
  // Reduced maxAttempts for faster generation, if a complex puzzle isn't found quickly, fallback is used.
  const maxAttempts = 100; // Adjusted for faster generation

  while (attempts < maxAttempts) {
    const solved = createSolvedState(difficulty.colors, totalTubes);
    const scrambled = enhancedShuffle(solved, difficulty.shuffleMoves);

    // Validate the scrambled puzzle
    if (validatePuzzle(scrambled, difficulty.colors)) {
      validPuzzle = scrambled;
      break;
    }
    attempts++;
  }

  if (loadingMessageEl) loadingMessageEl.classList.remove('show');

  if (validPuzzle.length > 0) {
    return validPuzzle;
  } else {
    console.warn(`Could not generate a complex puzzle after ${maxAttempts} attempts for level ${level}. Falling back to a simpler puzzle.`);
    // Fallback puzzle ensures a playable state even if complex generation fails
    return createFallbackPuzzle(difficulty.colors, totalTubes);
  }
}

function enhancedShuffle(initialTubes, moves) {
  let state = JSON.parse(JSON.stringify(initialTubes));
  let history = []; // Keep track of recent moves to avoid immediate un-doing

  for (let i = 0; i < moves; i++) {
    const validMoves = getStrategicMoves(state);

    // Filter out moves that would immediately undo the last move
    const filteredMoves = validMoves.filter(m => {
      if (history.length > 0) {
        const lastMove = history[history.length - 1];
        // A move is an undo if it moves a ball back from 'to' to 'from'
        return !(lastMove.from === m.to && lastMove.to === m.from);
      }
      return true;
    });

    let move;
    if (filteredMoves.length === 0) {
      // If no filtered moves (e.g., all valid moves are immediate undoes), pick from all valid moves
      if (validMoves.length === 0) break; // No moves possible
      move = validMoves[Math.floor(Math.random() * validMoves.length)];
    } else {
      // Prioritize moves that don't immediately undo
      move = filteredMoves[Math.floor(Math.random() * filteredMoves.length)];
    }

    // Apply the chosen move
    state = applyMove(state, move);
    history.push(move);

    // Keep history short to only remember the very last move for anti-undo
    if (history.length > 1) {
      history.shift();
    }
  }
  return state;
}

function createFallbackPuzzle(numColors, totalTubes) {
  let fallbackTubes = Array(totalTubes).fill().map(() => []);
  let allBalls = [];

  for (let i = 0; i < numColors; i++) {
    for (let j = 0; j < TUBE_CAPACITY; j++) {
      allBalls.push(colors[i]);
    }
  }
  shuffleArray(allBalls);

  // Distribute balls evenly, filling tubes up to capacity
  let ballIndex = 0;
  for (let i = 0; i < totalTubes; i++) {
    while (fallbackTubes[i].length < TUBE_CAPACITY && ballIndex < allBalls.length) {
      fallbackTubes[i].push(allBalls[ballIndex++]);
    }
  }
  // Filter out any undefined elements if allBalls was exhausted before filling all tubes
  return fallbackTubes.map(tube => tube.filter(color => color !== undefined));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function validatePuzzle(state, numColors) {
  // A puzzle is not valid if it's already solved or has less than 2 empty tubes initially
  // The filter for tubes with length 0 should be at least 2 for a solvable puzzle generally
  const emptyTubesCount = state.filter(t => t.length === 0).length;
  if (state.every(isTubeCompleted) && emptyTubesCount >= 2) return false;

  const solver = new PuzzleSolver(state, numColors);
  const solutions = solver.bfs();

  // A puzzle is valid if it has at least one solution and requires a reasonable number of moves
  // This threshold can be adjusted based on desired puzzle complexity
  const minExpectedMoves = Math.max(numColors * 3, 10); // Adjusted minimum moves for faster generation
  return solutions.length > 0 && solutions[0].moves.length >= minExpectedMoves;
}

// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase Configuration (YOURS)
const firebaseConfig = {
  apiKey: "AIzaSyBNR4gcgUPHC-T3dh0vlyyqFA1n4zFHk4M",
  authDomain: "solutions-e8e6e.firebaseapp.com",
  databaseURL: "https://solutions-e8e6e-default-rtdb.firebaseio.com",
  projectId: "solutions-e8e6e",
  storageBucket: "solutions-e8e6e.firebasestorage.app",
  messagingSenderId: "181746026878",
  appId: "1:181746026878:web:c22c5a9bdaa20415dc4b2f",
  measurementId: "G-Z3HCEVF4R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ----------------------------------
// Firebase Interaction Functions
// ----------------------------------

/**
 * Generates a random player ID.
 * @returns {string} Player ID.
 */
function generateUserId() {
    return 'user-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Saves initial player data to Firebase.
 * @param {string} playerId - The unique ID of the player.
 * @param {Object} initialData - The initial data to save (level, gold, etc.).
 * @returns {Promise<void>}
 */
async function saveInitialPlayerData(playerId, initialData) {
  const playerRef = ref(database, 'players/' + playerId);
  try {
    await set(playerRef, initialData);
    console.log(`Initial player data for ${playerId} saved to Firebase.`);
  } catch (error) {
    console.error('Error saving initial player data to Firebase:', error);
  }
}

/**
 * Fetches player data from Firebase.
 * @param {string} playerId - The unique ID of the player.
 * @returns {Promise<Object|null>} Player data or null if not found.
 */
async function getPlayerData(playerId) {
  const playerRef = ref(database, 'players/' + playerId);
  try {
    const snapshot = await get(playerRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log(`Player with ID ${playerId} not found in Firebase.`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching player data from Firebase:', error);
    return null;
    }
}

/**
 * Updates player data in Firebase.
 * @param {string} playerId - The unique ID of the player.
 * @param {Object} updates - An object containing fields to update (e.g., {gold: 100, level: 2}).
 * @returns {Promise<void>}
 */
async function updatePlayerData(playerId, updates) {
  const playerRef = ref(database, 'players/' + playerId);
  try {
    await update(playerRef, updates);
    // console.log(`Player data for ${playerId} updated in Firebase.`); // Commented for less console spam
  } catch (error) {
    console.error('Error updating player data in Firebase:', error);
  }
}

// ----------------------------------
// Enhanced Game Logic
// ----------------------------------
async function initGame() { // Made async
  // Order matters: Load game state first, then load sounds using potentially loaded volumes, then update UI.
  await loadGame(); // This will load gameState (including currentLanguage and playerID)
  loadSounds(); // This will use gameState.sfxVolume and gameState.musicVolume

  // Handle daily gold reward
  checkAndAwardDailyGold();

  resetQuestsIfDue(); // Reset quests based on loaded lastReset times

  // Always start a new level on game load to reset tubes and apply difficulty
  // This also means extra tubes bought are not persistently saved.
  startNewLevel();
  checkAchievements();
  updateLanguageUI(); // Call this AFTER loading and before any rendering dependent on language
  updateQuestsUI(); // Ensure quests UI is updated on load (will use new language)
}


function handleTubeClick(index) {
  return function() {
    playSound('click');
    if (selectedTubeIndex === -1) {
      if (tubes[index].length > 0) {
        selectedTubeIndex = index;
        renderTubes();
      } else {
        showError('tube_empty_error'); // Use language key
      }
    } else {
      handleSecondSelection(index);
    }
  };
}

function handleSecondSelection(tubeIndex) {
  const fromTube = tubes[selectedTubeIndex];
  const toTube = tubes[tubeIndex];

  if (!isValidMove(fromTube, toTube)) {
    showError('invalid_move_error'); // Use language key
    gameState.gold = Math.max(0, gameState.gold - 2); // Ensure gold doesn't go below 0
    updateUI();
    selectedTubeIndex = -1; // Reset selection
    renderTubes();
    saveGame();
    return;
  }

  executeMove(selectedTubeIndex, tubeIndex);
  selectedTubeIndex = -1; // Reset selection after successful move
  renderTubes();
  checkGameProgress();
  saveGame();
}

function isValidMove(fromTube, toTube) {
  if (fromTube.length === 0) return false; // Cannot move from an empty tube
  const topColor = fromTube[fromTube.length - 1];
  if (toTube.length === TUBE_CAPACITY) return false; // Cannot move to a full tube
  // Valid if destination is empty or top color matches
  return toTube.length === 0 || (toTube[toTube.length - 1] === topColor);
}

function executeMove(fromIndex, toIndex) {
  // Save current state before modifying for undo
  gameState.tubeHistory.push(JSON.parse(JSON.stringify(tubes)));
  if (gameState.tubeHistory.length > gameState.maxHistoryDepth) {
    gameState.tubeHistory.shift(); // Remove oldest state if history depth exceeded
  }

  const ball = tubes[fromIndex].pop();
  if (ball !== undefined) { // Ensure a ball was successfully popped
    tubes[toIndex].push(ball);
  }

  gameState.moveCount++;
  gameState.totalMoves++;

  updateUI();
  playSound('move');
}

function checkGameProgress() {
  if (isLevelCompleted()) {
    showMessage('level_complete_success', 'success', { level: gameState.level, gold: GOLD_PER_LEVEL }); // Use language key
    playSound('level_complete');

    gameState.gold += GOLD_PER_LEVEL;
    gameState.level++;
    updateQuestProgress('daily_collect_gold', GOLD_PER_LEVEL); // Update quest for collecting gold

    if (!gameState.undoUsedThisLevel) {
      gameState.levelsWithoutUndo++;
    } else {
      gameState.levelsWithoutUndo = 0; // Reset consecutive levels if undo was used
    }
    gameState.undoUsedThisLevel = false; // Reset for next level

    updateUI();
    checkAchievements();
    updateQuestProgress('daily_level_complete', 1); // Update quest for completing level
    setTimeout(startNewLevel, 1500); // Start new level after a short delay
  }
}

function isLevelCompleted() {
  // Level is complete if all non-empty tubes are sorted
  // Filter out truly empty tubes, then check if remaining are completed
  const activeTubes = tubes.filter(tube => tube.length === TUBE_CAPACITY); // Only full tubes need to be sorted
  const emptyTubes = tubes.filter(tube => tube.length === 0);

  // A level is completed if all filled tubes are sorted AND there are at least two empty tubes
  // This condition is important for the original puzzle logic (two empty tubes are always needed for solution)
  return activeTubes.every(isTubeCompleted) && (emptyTubes.length >= 2);
}


function undoLastMove() {
  if (gameState.tubeHistory.length > 0) {
    if (gameState.gold < UNDO_COST_PER_MOVE) {
      showError('undo_cost_error', { cost: UNDO_COST_PER_MOVE }); // Use language key
      return;
    }
    playSound('undo');
    tubes = gameState.tubeHistory.pop(); // Restore previous state
    gameState.gold -= UNDO_COST_PER_MOVE;
    gameState.undoUsedThisLevel = true; // Mark undo as used for this level
    updateUI();
    renderTubes();
    showMessage('undo_success'); // Use language key
    saveGame();
    updateQuestProgress('weekly_undo_use', 1); // Update quest for undo usage
  } else {
    showError('no_moves_to_undo'); // Use language key
  }
}

function resetLevel() {
  // Use language key for confirm message
  if (confirm(getTranslation('reset_confirm'))) {
    playSound('reset');
    gameState.tubeHistory = []; // Clear history
    gameState.moveCount = 0; // Reset move count for current level
    gameState.undoUsedThisLevel = false; // Reset undo flag
    // Re-generate puzzle for current level, resetting extra tubes
    gameState.extraTubes = 0; // Reset extra tubes on manual reset
    tubes = generateSmartPuzzle(gameState.level);
    selectedTubeIndex = -1; // Deselect any tube
    renderTubes();
    updateUI();
    showMessage('level_reset_success'); // Use language key
    saveGame();
  }
}

function giveHint() {
  if (gameState.gold < HINT_COST) {
    showError('hint_cost_error', { cost: HINT_COST }); // Use language key
    return;
  }
  playSound('hint');
  gameState.gold -= HINT_COST;
  updateUI();

  // Use the puzzle solver to find the next optimal move
  const solver = new PuzzleSolver(tubes, getLevelDifficulty(gameState.level).colors);
  const solutions = solver.bfs();

  if (solutions.length > 0) {
    const nextMove = solutions[0].moves[0]; // Get the first move of the shortest solution
    if (nextMove) {
        showMessage('hint_message', 'info', { from: nextMove.from, to: nextMove.to }); // Use language key
        highlightHint(nextMove.from, nextMove.to);
    } else {
        // This case generally implies puzzle might be unsolvable in its current state or solved
        showMessage('hint_not_found'); // Use language key for this specific case
    }
  } else {
    // No solutions found by the solver within limits
    showMessage('hint_not_found'); // Use language key
  }
  saveGame();
}

function highlightHint(fromIndex, toIndex) {
  const fromTubeEl = tubesContainer.children[fromIndex];
  const toTubeEl = tubesContainer.children[toIndex];

  if (fromTubeEl) fromTubeEl.classList.add('hint-highlight-from');
  if (toTubeEl) toTubeEl.classList.add('hint-highlight-to');

  // Remove highlight after a short delay
  setTimeout(() => {
    if (fromTubeEl) fromTubeEl.classList.remove('hint-highlight-from');
    if (toTubeEl) toTubeEl.classList.remove('hint-highlight-to');
  }, 2000);
}

// ----------------------------------
// Improved Economy System (Modified for language-aware messages)
// ----------------------------------
function getBuyTubeCost() {
    return BUY_TUBE_BASE_COST + (gameState.extraTubes * BUY_TUBE_INCREMENT);
}

function buyExtraTube(e) {
  e.preventDefault(); // Prevent default button action if any
  const dynamicCost = getBuyTubeCost();

  if (gameState.gold < dynamicCost) {
    showError('buy_tube_cost_error', { cost: dynamicCost }); // Use language key
    playSound('error');
    return;
  }
  playSound('buy');
  gameState.gold -= dynamicCost;
  gameState.extraTubes++;
  tubes.push([]); // Add a new empty tube to the current puzzle

  if (!gameState.hasBoughtFirstTube) { // Check if this is the first purchase ever
      gameState.hasBoughtFirstTube = true; // Set the flag
  }

  updateUI();
  renderTubes(); // Rerender to show the new tube
  showMessage('buy_tube_success'); // Use language key
  checkAchievements(); // Check for achievement related to buying tubes
  saveGame();
}

function checkAndAwardDailyGold() {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // If lastDailyGoldReward is 0 (first load or new game), set it to now and award gold
    if (gameState.lastDailyGoldReward === 0 || (now - gameState.lastDailyGoldReward) >= oneDay) {
        gameState.gold += 100;
        gameState.lastDailyGoldReward = now;
        showMessage('daily_gold_reward', 'success', { goldAmount: 100 }); // Use language key
        updateUI();
        saveGame();
    }
}

// ----------------------------------
// Quest System (Modified for language-aware messages)
// ----------------------------------
function updateQuestProgress(questId, amount) {
  const quest = gameState.quests.find(q => q.id === questId);
  if (quest && !quest.completed) { // Only update if quest is not already completed
    quest.progress += amount;
    if (quest.progress >= quest.target) {
      quest.progress = quest.target; // Cap progress at target
      quest.completed = true;
      // Get quest description dynamically using descKey
      const questDesc = getTranslation(quest.descKey, { target: quest.target });
      showMessage('quest_completed_msg', 'success', { desc: questDesc }); // Use language key
      playSound('quest_complete');
    }
  }
  updateQuestsUI(); // Always update UI after progress change
  saveGame();
}

function claimQuestReward(questId) {
  const quest = gameState.quests.find(q => q.id === questId);
  if (quest && quest.completed && !quest.rewardClaimed) {
    gameState.gold += quest.reward;
    quest.rewardClaimed = true;
    updateUI();
    updateQuestsUI();
    // Get quest description dynamically using descKey
    const questDesc = getTranslation(quest.descKey, { target: quest.target });
    showMessage('quest_claimed_msg', 'success', { desc: questDesc }); // Use language key
    playSound('buy'); // Use 'buy' sound for claiming rewards
    saveGame();
  }
}

function resetQuestsIfDue() {
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  let questsReset = false;
  gameState.quests.forEach(quest => {
    // Reset daily quests if a day has passed since last reset
    if (quest.type === 'DAILY' && (now - quest.lastReset) >= oneDay) {
      quest.progress = 0;
      quest.completed = false;
      quest.rewardClaimed = false;
      quest.lastReset = now; // Update last reset time
      questsReset = true;
    }
    // Reset weekly quests if a week has passed since last reset
    if (quest.type === 'WEEKLY' && (now - quest.lastReset) >= oneWeek) {
      quest.progress = 0;
      quest.completed = false;
      quest.rewardClaimed = false;
      quest.lastReset = now; // Update last reset time
      questsReset = true;
    }
  });
  if (questsReset) {
      saveGame();
  }
}

function renderQuestItem(quest) {
    const questItem = document.createElement('div');
    questItem.classList.add('quest-item');
    if (quest.completed) {
        questItem.classList.add('completed');
    }

    // Get quest description dynamically
    const questDesc = getTranslation(quest.descKey, { target: quest.target });

    const title = document.createElement('h4');
    title.textContent = questDesc; // Use dynamic description
    questItem.appendChild(title);

    const progressText = document.createElement('p');
    progressText.textContent = `${getTranslation('progress_label')} ${quest.progress} / ${quest.target}`;
    questItem.appendChild(progressText);

    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('quest-progress-bar-container');
    const progressBar = document.createElement('div');
    progressBar.classList.add('quest-progress-bar');
    const progressPercentage = (quest.progress / quest.target) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBarContainer.appendChild(progressBar);
    questItem.appendChild(progressBarContainer);

    const rewardText = document.createElement('p');
    rewardText.classList.add('quest-reward-text');
    rewardText.textContent = `${getTranslation('reward_label')} ${quest.reward} ${getTranslation('gold_label').replace(':', '').trim()}`; // Use gold label and remove colon
    questItem.appendChild(rewardText);

    const claimButton = document.createElement('button');
    claimButton.classList.add('quest-claim-button');
    claimButton.textContent = getTranslation('claim_reward_button');
    // Disable button if not completed or reward already claimed
    claimButton.disabled = !quest.completed || quest.rewardClaimed;
    claimButton.addEventListener('click', () => claimQuestReward(quest.id));
    questItem.appendChild(claimButton);

    return questItem;
}

function updateQuestsUI() {
    // Check if elements exist before attempting to manipulate them
    if (!dailyQuestsListEl || !weeklyQuestsListEl) {
      console.warn("Quest list elements not found. Cannot update quests UI.");
      return;
    }

    dailyQuestsListEl.innerHTML = '';
    weeklyQuestsListEl.innerHTML = '';

    // Filter and render daily/weekly quests
    gameState.quests.forEach(quest => {
        const questItem = renderQuestItem(quest);
        if (quest.type === 'DAILY') {
            dailyQuestsListEl.appendChild(questItem);
        } else if (quest.type === 'WEEKLY') {
            weeklyQuestsListEl.appendChild(questItem);
        }
    });
}

// ----------------------------------
// Achievements System (Modified for language-aware messages)
// ----------------------------------
function checkAchievements() {
  achievements.forEach(achievement => {
    // Only check if achievement hasn't been unlocked yet AND is not in unlockedAchievements array
    if (!achievement.unlocked && !gameState.unlockedAchievements.includes(achievement.id) && achievement.check()) {
      achievement.unlocked = true; // Mark as unlocked in this session (though saved via gameState.unlockedAchievements)
      gameState.unlockedAchievements.push(achievement.id); // Add to unlocked list
      gameState.gold += achievement.reward; // Grant reward
      showAchievementUnlocked(achievement); // Show notification
      updateUI(); // Update gold display
      saveGame(); // Save game state
      playSound('achievement'); // Play achievement sound
    }
  });
}

function showAchievementUnlocked(achievement) {
  // Ensure achievementBadge element exists
  if (!achievementBadge) {
    console.warn("Achievement badge element not found.");
    return;
  }
  // Get translated name and description
  const achievementName = getTranslation(achievement.name_key);
  // const achievementDesc = getTranslation(achievement.desc_key); // Not directly used in badge text, but good for logs.

  showMessage('new_achievement_unlocked', 'success', { name: achievementName, reward: achievement.reward });
  achievementBadge.textContent = getTranslation('new_achievement_unlocked', {name: achievementName, reward: achievement.reward});
  achievementBadge.classList.add('show'); // Show the badge
  setTimeout(() => {
    achievementBadge.classList.remove('show'); // Hide after a delay
  }, 3000);
}

// ----------------------------------
// UI Rendering Functions (No direct language changes here, `updateLanguageUI` handles text)
// ----------------------------------
function renderTubes() {
    if (!tubesContainer) {
      console.warn("Tubes container element not found. Cannot render tubes.");
      return;
    }
    tubesContainer.innerHTML = ''; // Clear previous tubes

    tubes.forEach((tube, tubeIndex) => {
        const tubeEl = document.createElement('div');
        tubeEl.classList.add('tube');
        if (tubeIndex === selectedTubeIndex) {
            tubeEl.classList.add('selected-tube'); // Highlight selected tube
        }
        if (isTubeCompleted(tube) && tube.length === TUBE_CAPACITY) { // Only mark as completed if full and sorted
            tubeEl.classList.add('completed'); // Add completed style
        }
        if (tube.length === 0) {
            tubeEl.classList.add('empty'); // Add empty style
        }

        tubeEl.addEventListener('click', handleTubeClick(tubeIndex));

        // Render balls inside the tube
        // Render balls from bottom to top visually (append in order, but CSS handles stacking)
        tube.forEach(ballColor => {
            const ballEl = document.createElement('div');
            ballEl.classList.add('ball');
            ballEl.style.backgroundColor = ballColor; // Set ball color
            tubeEl.appendChild(ballEl);
        });
        tubesContainer.appendChild(tubeEl);
    });
}

function updateUI() {
    // Update basic stats
    if (goldDisplay) goldDisplay.textContent = gameState.gold;
    if (levelDisplay) levelDisplay.textContent = gameState.level;

    // Update costs
    if (hintCostDisplay) hintCostDisplay.textContent = HINT_COST;
    if (buyTubeCostDisplay) buyTubeCostDisplay.textContent = getBuyTubeCost();

    // Update button states (disabled/enabled)
    if (undoButton) undoButton.disabled = gameState.tubeHistory.length === 0 || gameState.gold < UNDO_COST_PER_MOVE;
    if (hintButtonMain) hintButtonMain.disabled = gameState.gold < HINT_COST;
    if (buyTubeButton) buyTubeButton.disabled = gameState.gold < getBuyTubeCost();

    // Update volume sliders
    if (musicVolumeSlider) musicVolumeSlider.value = gameState.musicVolume;
    if (sfxVolumeSlider) sfxVolumeSlider.value = gameState.sfxVolume;

    // updateLanguageUI handles the text for toggle buttons and other text elements.
    // We only need to update the UI state here for actual functionality.
    // The visual toggling of active class is handled by updateLanguageUI which is also called on button click.

    // Update audio element volumes
    if (backgroundMusic) backgroundMusic.volume = gameState.musicVolume / 100;
    for (const key in soundEffects) {
        if (soundEffects.hasOwnProperty(key)) {
            soundEffects[key].volume = gameState.sfxVolume / 100;
        }
    }
}

function startNewLevel() {
  selectedTubeIndex = -1;
  gameState.moveCount = 0;
  gameState.tubeHistory = [];
  gameState.undoUsedThisLevel = false;

  // Reset extra tubes purchased for the previous level
  gameState.extraTubes = 0;

  tubes = generateSmartPuzzle(gameState.level);
  renderTubes();
  updateUI();
  showMessage('level_ready', 'info', { level: gameState.level }); // Use language key
  saveGame();
}

// ----------------------------------
// DOM Elements Initialization and Event Listeners
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Get all DOM elements
    tubesContainer = document.getElementById('tubes-container');
    messageEl = document.getElementById('message');
    goldDisplay = document.getElementById('gold-display');
    levelDisplay = document.getElementById('level-display');
    undoButton = document.getElementById('undo-button');
    resetButton = document.getElementById('reset-button');
    hintButtonMain = document.getElementById('hint-button');
    buyTubeButton = document.getElementById('buy-tube-button');
    loadingMessageEl = document.getElementById('loading-message');
    achievementBadge = document.getElementById('achievement-badge');
    questsButton = document.getElementById('quests-button');
    questsPopup = document.getElementById('quests-popup');
    closeQuestsButton = document.getElementById('close-quests-button');
    musicToggleButton = document.getElementById('music-toggle-button');
    sfxToggleButton = document.getElementById('sfx-toggle-button');
    settingsButton = document.getElementById('settings-button');
    settingsPopup = document.getElementById('settings-popup');
    closeSettingsButton = document.getElementById('close-settings-button');
    sfxVolumeSlider = document.getElementById('sfx-volume-slider');
    musicVolumeSlider = document.getElementById('music-volume-slider');
    dailyQuestsListEl = document.getElementById('daily-quests');
    weeklyQuestsListEl = document.getElementById('weekly-quests');
    hintCostDisplay = document.getElementById('hint-cost-display');
    buyTubeCostDisplay = document.getElementById('buy-tube-cost-display');
    backgroundMusic = document.getElementById('backgroundMusic'); // Ensure this is also grabbed here
    languageToggleButton = document.getElementById('language-toggle-button'); // NEW: language toggle button

    // Add event listeners to buttons
    if (undoButton) undoButton.addEventListener('click', undoLastMove);
    if (resetButton) resetButton.addEventListener('click', resetLevel);
    if (hintButtonMain) hintButtonMain.addEventListener('click', giveHint);
    if (buyTubeButton) buyTubeButton.addEventListener('click', buyExtraTube);

    // Quest popup listeners
    if (questsButton) questsButton.addEventListener('click', () => {
        if (questsPopup) {
            questsPopup.classList.remove('hidden');
            questsPopup.classList.add('show');
            updateQuestsUI(); // Ensure quests UI is updated when opened
        }
    });
    if (closeQuestsButton) closeQuestsButton.addEventListener('click', () => {
        if (questsPopup) {
            questsPopup.classList.remove('show');
            questsPopup.classList.add('hidden');
        }
    });

    // Settings popup listeners
    if (settingsButton) settingsButton.addEventListener('click', () => {
        if (settingsPopup) {
            settingsPopup.classList.remove('hidden');
            settingsPopup.classList.add('show');
            updateUI(); // Update settings UI when opened (volumes etc)
            // updateLanguageUI() is called on init and each language change,
            // so text will be correct when settings open.
        }
    });
    if (closeSettingsButton) closeSettingsButton.addEventListener('click', () => {
        if (settingsPopup) {
            settingsPopup.classList.remove('show');
            settingsPopup.classList.add('hidden');
        }
    });

    // Audio control listeners
    if (musicToggleButton) musicToggleButton.addEventListener('click', toggleMusic);
    if (sfxToggleButton) sfxToggleButton.addEventListener('click', toggleSfx);
    if (musicVolumeSlider) musicVolumeSlider.addEventListener('input', updateMusicVolume);
    if (sfxVolumeSlider) sfxVolumeSlider.addEventListener('input', updateSfxVolume);

    // NEW: Language toggle listener
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', () => {
            const currentLang = gameState.currentLanguage;
            const availableLangs = Object.keys(translations);
            const currentIndex = availableLangs.indexOf(currentLang);
            const nextIndex = (currentIndex + 1) % availableLangs.length;
            const newLang = availableLangs[nextIndex];
            setLanguage(newLang);
        });
    }

    // Initialize the game
    initGame();
});

