// 50 từ tiếng Anh thông dụng từ A-Z
const vocabulary = [
    // A
    {english: "a", pronunciation: "/ə/", type: "article", vietnamese: "một", example: "I have a car. (Tôi có một chiếc xe hơi.)"},
    {english: "about", pronunciation: "/əˈbaʊt/", type: "preposition", vietnamese: "về", example: "Tell me about yourself. (Hãy kể cho tôi nghe về bản thân bạn.)"},
    {english: "above", pronunciation: "/əˈbʌv/", type: "preposition", vietnamese: "trên, phía trên", example: "The plane is above the clouds. (Máy bay ở trên các đám mây.)"},
    {english: "across", pronunciation: "/əˈkrɔs/", type: "preposition", vietnamese: "qua", example: "Walk across the street. (Đi qua đường.)"},
    {english: "after", pronunciation: "/ˈæftər/", type: "preposition", vietnamese: "sau", example: "After dinner, we watched TV. (Sau bữa tối, chúng tôi xem TV.)"},
    {english: "again", pronunciation: "/əˈɡɛn/", type: "adverb", vietnamese: "lại", example: "Please say it again. (Xin hãy nói lại.)"},
    {english: "against", pronunciation: "/əˈɡɛnst/", type: "preposition", vietnamese: "chống lại", example: "He is against the plan. (Anh ấy phản đối kế hoạch.)"},
    {english: "age", pronunciation: "/eɪdʒ/", type: "noun", vietnamese: "tuổi", example: "What is your age? (Bạn bao nhiêu tuổi?)"},
    {english: "all", pronunciation: "/ɔl/", type: "determiner", vietnamese: "tất cả", example: "All students must attend. (Tất cả học sinh phải tham dự.)"},
    {english: "allow", pronunciation: "/əˈlaʊ/", type: "verb", vietnamese: "cho phép", example: "They don't allow smoking here. (Họ không cho phép hút thuốc ở đây.)"},
    {english: "almost", pronunciation: "/ˈɔlmoʊst/", type: "adverb", vietnamese: "hầu như", example: "It's almost midnight. (Gần nửa đêm rồi.)"},
    {english: "alone", pronunciation: "/əˈloʊn/", type: "adjective", vietnamese: "một mình", example: "She likes to be alone. (Cô ấy thích ở một mình.)"},
    {english: "along", pronunciation: "/əˈlɔŋ/", type: "preposition", vietnamese: "dọc theo", example: "Walk along the river. (Đi dọc theo sông.)"},
    {english: "already", pronunciation: "/ɔlˈrɛdi/", type: "adverb", vietnamese: "đã", example: "I already finished my homework. (Tôi đã hoàn thành bài tập.)"},
    {english: "also", pronunciation: "/ˈɔlsoʊ/", type: "adverb", vietnamese: "cũng", example: "I also like pizza. (Tôi cũng thích pizza.)"},
    {english: "although", pronunciation: "/ɔlˈðoʊ/", type: "conjunction", vietnamese: "mặc dù", example: "Although it's raining, we'll go out. (Mặc dù trời mưa, chúng ta vẫn đi ra ngoài.)"},
    {english: "always", pronunciation: "/ˈɔlweɪz/", type: "adverb", vietnamese: "luôn luôn", example: "She always helps me. (Cô ấy luôn giúp tôi.)"},
    {english: "among", pronunciation: "/əˈmʌŋ/", type: "preposition", vietnamese: "trong số", example: "He is among the best students. (Anh ấy là một trong những học sinh giỏi nhất.)"},
    {english: "an", pronunciation: "/æn/", type: "article", vietnamese: "một", example: "I ate an apple. (Tôi đã ăn một quả táo.)"},
    {english: "and", pronunciation: "/ænd/", type: "conjunction", vietnamese: "và", example: "Tom and Jerry are friends. (Tom và Jerry là bạn bè.)"},

    // B
    {english: "back", pronunciation: "/bæk/", type: "adverb", vietnamese: "trở lại", example: "Come back soon. (Hãy trở lại sớm.)"},
    {english: "bad", pronunciation: "/bæd/", type: "adjective", vietnamese: "xấu, tệ", example: "This is bad weather. (Đây là thời tiết xấu.)"},
    {english: "be", pronunciation: "/bi/", type: "verb", vietnamese: "là, thì", example: "I want to be a doctor. (Tôi muốn trở thành bác sĩ.)"},
    {english: "because", pronunciation: "/bɪˈkɔz/", type: "conjunction", vietnamese: "bởi vì", example: "I'm happy because it's sunny. (Tôi vui vì trời nắng.)"},
    {english: "become", pronunciation: "/bɪˈkʌm/", type: "verb", vietnamese: "trở thành", example: "She will become a teacher. (Cô ấy sẽ trở thành giáo viên.)"},

    // C
    {english: "call", pronunciation: "/kɔl/", type: "verb", vietnamese: "gọi", example: "Please call me tonight. (Hãy gọi cho tôi tối nay.)"},
    {english: "can", pronunciation: "/kæn/", type: "modal verb", vietnamese: "có thể", example: "I can speak English. (Tôi có thể nói tiếng Anh.)"},
    {english: "come", pronunciation: "/kʌm/", type: "verb", vietnamese: "đến", example: "Come here please. (Hãy đến đây.)"},
    {english: "could", pronunciation: "/kʊd/", type: "modal verb", vietnamese: "có thể", example: "Could you help me? (Bạn có thể giúp tôi không?)"},

    // D
    {english: "day", pronunciation: "/deɪ/", type: "noun", vietnamese: "ngày", example: "Today is a beautiful day. (Hôm nay là một ngày đẹp trời.)"},
    {english: "do", pronunciation: "/du/", type: "verb", vietnamese: "làm", example: "What do you do? (Bạn làm nghề gì?)"},
    {english: "down", pronunciation: "/daʊn/", type: "adverb", vietnamese: "xuống", example: "Go down the stairs. (Đi xuống cầu thang.)"},

    // E
    {english: "each", pronunciation: "/itʃ/", type: "determiner", vietnamese: "mỗi", example: "Each student has a book. (Mỗi học sinh có một cuốn sách.)"},
    {english: "even", pronunciation: "/ˈivən/", type: "adverb", vietnamese: "thậm chí", example: "Even children can do this. (Thậm chí trẻ em cũng có thể làm điều này.)"},
    {english: "every", pronunciation: "/ˈɛvri/", type: "determiner", vietnamese: "mọi", example: "Every day is important. (Mọi ngày đều quan trọng.)"},

    // F
    {english: "find", pronunciation: "/faɪnd/", type: "verb", vietnamese: "tìm thấy", example: "I can't find my keys. (Tôi không thể tìm thấy chìa khóa.)"},
    {english: "first", pronunciation: "/fɜrst/", type: "adjective", vietnamese: "đầu tiên", example: "This is my first time here. (Đây là lần đầu tiên tôi đến đây.)"},
    {english: "for", pronunciation: "/fɔr/", type: "preposition", vietnamese: "cho", example: "This gift is for you. (Món quà này dành cho bạn.)"},
    {english: "from", pronunciation: "/frʌm/", type: "preposition", vietnamese: "từ", example: "I'm from Vietnam. (Tôi đến từ Việt Nam.)"},

    // G
    {english: "get", pronunciation: "/ɡɛt/", type: "verb", vietnamese: "lấy, nhận", example: "Can you get me some water? (Bạn có thể lấy cho tôi chút nước không?)"},
    {english: "give", pronunciation: "/ɡɪv/", type: "verb", vietnamese: "cho", example: "Give me your hand. (Đưa tay cho tôi.)"},
    {english: "go", pronunciation: "/ɡoʊ/", type: "verb", vietnamese: "đi", example: "Let's go to the park. (Chúng ta hãy đi công viên.)"},
    {english: "good", pronunciation: "/ɡʊd/", type: "adjective", vietnamese: "tốt", example: "You did a good job. (Bạn đã làm tốt.)"},
    {english: "great", pronunciation: "/ɡreɪt/", type: "adjective", vietnamese: "tuyệt vời", example: "That's a great idea! (Đó là một ý tưởng tuyệt vời!)"},

    // H
    {english: "have", pronunciation: "/hæv/", type: "verb", vietnamese: "có", example: "I have a cat. (Tôi có một con mèo.)"},
    {english: "he", pronunciation: "/hi/", type: "pronoun", vietnamese: "anh ấy", example: "He is my brother. (Anh ấy là anh trai tôi.)"},
    {english: "here", pronunciation: "/hɪr/", type: "adverb", vietnamese: "ở đây", example: "Come here! (Đến đây!)"},
    {english: "how", pronunciation: "/haʊ/", type: "adverb", vietnamese: "như thế nào", example: "How are you? (Bạn thế nào?)"},

    // I-Z (thêm các từ còn lại)
    {english: "in", pronunciation: "/ɪn/", type: "preposition", vietnamese: "trong", example: "The book is in the bag. (Cuốn sách ở trong túi.)"},
    {english: "is", pronunciation: "/ɪz/", type: "verb", vietnamese: "là", example: "She is beautiful. (Cô ấy đẹp.)"},
    {english: "it", pronunciation: "/ɪt/", type: "pronoun", vietnamese: "nó", example: "It is raining. (Trời đang mưa.)"}
];

// Biến trạng thái
let currentWordIndex = 0;
let currentMode = 'flashcard';
let learnedWords = new Set();
let correctAnswers = 0;
let totalQuizAttempts = 0;
let currentStreak = 0;
let filteredVocabulary = [...vocabulary]; // Mảng từ vựng đã được lọc
let currentFilter = 'ALL'; // Bộ lọc hiện tại (ALL, A, B, ...)
let currentQuizWord = null; // Biến để lưu từ hiện tại trong quiz

// Khởi tạo ứng dụng
function initApp() {
    // Đảm bảo nút "All" và "Flashcard" được active khi khởi tạo
    setMode('flashcard', document.querySelector(`.mode-btn[onclick*="setMode('flashcard')"]`));
    filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
    
    updateStats();
    updateProgress();
    generateAlphabetContent(); // Khởi tạo nội dung bảng chữ cái
}

// Hàm mới để lật thẻ
function flipCard() {
    const card = document.querySelector('.word-card-inner');
    if (card) {
        card.classList.toggle('is-flipped');
    }
}

// Hiển thị từ hiện tại
function displayWord() {
    // Đảm bảo thẻ luôn ở mặt trước khi hiển thị từ mới
    const card = document.querySelector('.word-card-inner');
    if (card && card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
    }

    const word = filteredVocabulary[currentWordIndex];
    if (!word) {
        // Xử lý trường hợp không có từ nào để hiển thị
        document.getElementById('wordEnglish').textContent = "Không có từ nào để hiển thị.";
        document.getElementById('wordPronunciation').textContent = "";
        document.getElementById('wordType').textContent = "";
        document.getElementById('wordVietnamese').textContent = "";
        document.getElementById('wordExample').innerHTML = "";
        return;
    }

    document.getElementById('wordEnglish').textContent = word.english;
    document.getElementById('wordPronunciation').textContent = word.pronunciation;
    document.getElementById('wordType').textContent = word.type;
    document.getElementById('wordVietnamese').textContent = word.vietnamese;
    document.getElementById('wordExample').innerHTML = `<strong>Ví dụ:</strong> ${word.example}`;
}

// Chuyển từ tiếp theo
function nextWord() {
    if (filteredVocabulary.length === 0) return;
    currentWordIndex = (currentWordIndex + 1) % filteredVocabulary.length;
    displayWord();
    addFadeAnimation();
}

// Chuyển từ trước
function previousWord() {
    if (filteredVocabulary.length === 0) return;
    currentWordIndex = currentWordIndex === 0 ? filteredVocabulary.length - 1 : currentWordIndex - 1;
    displayWord();
    addFadeAnimation();
}

// Đánh dấu từ đã học
function markAsLearned() {
    const currentWord = filteredVocabulary[currentWordIndex];
    if (!currentWord) return;

    if (!learnedWords.has(currentWord.english)) {
        learnedWords.add(currentWord.english);
        updateProgress();
    }

    updateStats();

    const button = document.querySelector('.btn-success');
    if (button) {
        const originalText = button.textContent;
        const originalBackground = button.style.background;

        button.textContent = '✓ Đã thuộc';
        button.style.background = '#00b894';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = originalBackground;
        }, 1000);
    }
    
    nextWord();
}

// Phát âm từ
function speakWord() {
    let wordToSpeak = null;

    if (currentMode === 'quiz' && currentQuizWord) {
        wordToSpeak = currentQuizWord;
    } else {
        wordToSpeak = filteredVocabulary[currentWordIndex];
    }

    if (!wordToSpeak) return;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(wordToSpeak.english);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt không hỗ trợ text-to-speech');
    }
}

// Đặt lại tiến độ
function resetProgress() {
    if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ học?')) {
        learnedWords.clear(); // Xóa tất cả các từ đã học
        correctAnswers = 0;
        totalQuizAttempts = 0;
        currentStreak = 0;
        updateStats(); // Cập nhật thống kê về 0
        updateProgress(); // Cập nhật thanh tiến độ về 0%

        // Đảm bảo Flashcard quay về từ đầu của toàn bộ danh sách
        currentWordIndex = 0;
        filteredVocabulary = [...vocabulary]; // Đặt lại filteredVocabulary về toàn bộ từ

        // Đảm bảo nút "All" được active trở lại
        const allButton = document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`);
        if (allButton) {
            filterByLetter('ALL', allButton); // Gọi filterByLetter để đặt lại và active nút All
        } else {
            // Fallback nếu không tìm thấy nút All (không mong muốn)
            displayWord(); 
        }

        if (currentMode === 'quiz') {
            generateQuiz(); // Tạo quiz mới nếu đang ở chế độ quiz
        }
    }
}

// Chuyển đổi chế độ
function setMode(mode, sourceElement = null) {
    currentMode = mode;

    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    if (sourceElement) {
        sourceElement.classList.add('active');
    } else {
        // Fallback: tìm nút bằng cách khớp chuỗi onclick (ít hiệu quả hơn nhưng an toàn)
        const targetBtn = document.querySelector(`.mode-btn[onclick*="setMode('${mode}')"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    document.getElementById('flashcardMode').classList.add('hidden');
    document.getElementById('quizMode').classList.add('hidden');
    document.getElementById('searchMode').classList.add('hidden');
    document.getElementById('alphabetMode').classList.add('hidden');

    switch (mode) {
        case 'flashcard':
            document.getElementById('flashcardMode').classList.remove('hidden');
            // Khi về flashcard, luôn đảm bảo đang hiển thị bộ từ đầy đủ
            // và từ đầu tiên, sau đó mới áp dụng filter nếu có
            filteredVocabulary = [...vocabulary];
            currentWordIndex = 0;
            displayWord(); 
            // Đảm bảo nút "All" được active khi chuyển sang flashcard
            filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            break;
        case 'quiz':
            document.getElementById('quizMode').classList.remove('hidden');
            generateQuiz();
            break;
        case 'search':
            document.getElementById('searchMode').classList.remove('hidden');
            document.getElementById('searchInput').value = '';
            displayAllWords(); // Hiển thị toàn bộ từ ban đầu khi vào tìm kiếm
            // Đảm bảo nút "All" được active khi chuyển sang search
            filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            break;
        case 'alphabet':
            document.getElementById('alphabetMode').classList.remove('hidden');
            generateAlphabetContent();
            // Đảm bảo nút "All" được active khi chuyển sang A-Z
            filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            break;
    }
}


// Tạo quiz
function generateQuiz() {
    // Lọc ra các từ CHƯA ĐƯỢC HỌC TỪ DANH SÁCH ĐÃ LỌC (filteredVocabulary)
    // Thay vì dùng 'vocabulary', chúng ta dùng 'filteredVocabulary'
    let unlearnedWords = filteredVocabulary.filter(word => !learnedWords.has(word.english));
    
    // Nếu tất cả các từ đã được học (trong bộ lọc hiện tại), hiển thị thông báo
    if (unlearnedWords.length === 0) {
        document.getElementById('quizWord').textContent = "Không có từ nào để quiz trong bộ lọc này hoặc bạn đã học hết!";
        document.getElementById('quizOptions').innerHTML = "<p style='text-align:center;'>Hãy thử chọn bộ lọc khác hoặc reset tiến độ để chơi lại.</p>";
        document.getElementById('nextQuizBtn').style.display = 'none';
        return; // Thoát hàm nếu không còn từ nào để quiz
    }

    // Chọn một từ ngẫu nhiên từ danh sách các từ CHƯA HỌC và ĐÃ LỌC
    currentQuizWord = unlearnedWords[Math.floor(Math.random() * unlearnedWords.length)];
    document.getElementById('quizWord').textContent = currentQuizWord.english;

    generateQuizOptions(currentQuizWord);

    // Ẩn nút next quiz ban đầu và reset trạng thái tùy chọn
    document.getElementById('nextQuizBtn').style.display = 'none';
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'auto'; // Cho phép click lại
        opt.classList.remove('correct', 'wrong'); // Xóa các class highlight cũ
    });
}

// Tạo các lựa chọn quiz
function generateQuizOptions(correctWord) {
    const options = [correctWord.vietnamese];
    const usedVietnameseMeanings = new Set([correctWord.vietnamese]); // Dùng để tránh trùng nghĩa

    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * vocabulary.length);
        const randomMeaning = vocabulary[randomIndex].vietnamese;
        if (!usedVietnameseMeanings.has(randomMeaning)) {
            options.push(randomMeaning);
            usedVietnameseMeanings.add(randomMeaning);
        }
    }

    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectQuizOption(option, correctWord.vietnamese, optionElement);
        optionsContainer.appendChild(optionElement);
    });
}

// Chọn đáp án quiz
function selectQuizOption(selected, correct, element) {
    totalQuizAttempts++;

    // Vô hiệu hóa tất cả các lựa chọn sau khi người dùng chọn
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none'; // Không cho click thêm
        if (opt.textContent === correct) {
            opt.classList.add('correct'); // Highlight đáp án đúng
        } else if (opt === element && selected !== correct) {
            opt.classList.add('wrong'); // Highlight đáp án sai của người dùng
        }
    });

    if (selected === correct) {
        correctAnswers++;
        currentStreak++;
        // Nếu trả lời đúng, đánh dấu từ này là đã học (nếu chưa)
        if (currentQuizWord && !learnedWords.has(currentQuizWord.english)) {
             learnedWords.add(currentQuizWord.english);
             updateProgress(); // Cập nhật tiến độ
        }
    } else {
        currentStreak = 0;
    }

    updateStats(); // Cập nhật thống kê

    // Hiển thị nút câu tiếp theo
    document.getElementById('nextQuizBtn').style.display = 'inline-block';
}

// Câu quiz tiếp theo
function nextQuiz() {
    generateQuiz();
}

// Lọc theo chữ cái
function filterByLetter(letter, sourceElement = null) {
    currentFilter = letter;

    // Đặt lại trạng thái active cho các nút chữ cái
    document.querySelectorAll('.alphabet-btn').forEach(btn => btn.classList.remove('active'));
    if (sourceElement) {
        sourceElement.classList.add('active');
    } else {
        // Fallback: tìm nút bằng cách khớp chuỗi onclick (ít hiệu quả hơn nhưng an toàn)
        const targetBtn = document.querySelector(`.alphabet-btn[onclick*="filterByLetter('${letter}')"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    if (letter === 'ALL') {
        filteredVocabulary = [...vocabulary];
    } else {
        filteredVocabulary = vocabulary.filter(word =>
            word.english.charAt(0).toUpperCase() === letter.toUpperCase()
        );
    }
    
    // RẤT QUAN TRỌNG: Đặt lại currentWordIndex về 0 khi bộ lọc thay đổi
    currentWordIndex = 0; 
    displayWord(); // Hiển thị từ đầu tiên của bộ lọc mới (áp dụng cho flashcard)

    // === THÊM ĐOẠN CODE NÀY VÀO ĐÂY ===
    if (currentMode === 'quiz') {
        generateQuiz(); // Nếu đang ở chế độ quiz, làm mới câu hỏi ngay lập tức
    }
    // ===================================

    // Nếu đang ở chế độ Search hoặc Alphabet, cần cập nhật nội dung
    if (currentMode === 'search') {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
        if (searchTerm === '') {
            displayAllWords();
        } else {
            searchWords();
        }
    } else if (currentMode === 'alphabet') {
        generateAlphabetContent();
    }
}

// Tìm kiếm từ
function searchWords() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let searchResults = [];
    if (searchTerm === '') {
        searchResults = [...vocabulary]; // Khi không có từ khóa, hiển thị toàn bộ
    } else {
        searchResults = vocabulary.filter(word =>
            word.english.toLowerCase().includes(searchTerm) ||
            word.vietnamese.toLowerCase().includes(searchTerm)
        );
    }
    displaySearchResults(searchResults);
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults(words) {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';

    if (words.length === 0) {
        wordList.innerHTML = '<p style="text-align: center; color: #777;">Không tìm thấy từ nào phù hợp.</p>';
        return;
    }

    words.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.innerHTML = `
            <h3>${word.english}</h3>
            <p><strong>Phát âm:</strong> ${word.pronunciation}</p>
            <p><strong>Loại từ:</strong> ${word.type}</p>
            <p><strong>Nghĩa:</strong> ${word.vietnamese}</p>
            <p><em>${word.example}</em></p>
        `;
        wordItem.onclick = () => {
            const index = vocabulary.findIndex(v => v.english === word.english);
            if (index !== -1) {
                currentWordIndex = index;
                // Khi click từ từ search, ta coi như đang muốn xem toàn bộ từ điển
                filteredVocabulary = [...vocabulary]; 
                setMode('flashcard', document.querySelector(`.mode-btn[onclick*="setMode('flashcard')"]`));
                filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
            }
        };
        wordList.appendChild(wordItem);
    });
}

// Hiển thị tất cả từ (cho chế độ tìm kiếm khi không có từ khóa)
function displayAllWords() {
    displaySearchResults(vocabulary);
}

// Tạo nội dung theo bảng chữ cái
function generateAlphabetContent() {
    const alphabetContent = document.getElementById('alphabetContent');
    alphabetContent.innerHTML = '';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    alphabet.forEach(letter => {
        const wordsForLetter = vocabulary.filter(word =>
            word.english.charAt(0).toUpperCase() === letter
        );

        // Chỉ tạo section nếu có từ cho chữ cái đó HOẶC nếu bộ lọc hiện tại là 'ALL'
        if (wordsForLetter.length > 0 || currentFilter === 'ALL') {
            const section = document.createElement('div');
            section.className = 'alphabet-section';

            const title = document.createElement('h2');
            title.className = 'alphabet-title';
            title.textContent = `Chữ ${letter}`;

            const wordsContainer = document.createElement('div');
            wordsContainer.className = 'alphabet-words';

            wordsForLetter.forEach(word => {
                const wordItem = document.createElement('div');
                wordItem.className = 'alphabet-word-item';
                wordItem.innerHTML = `
                    <div class="alphabet-word-english">${word.english}</div>
                    <div class="alphabet-word-vietnamese">${word.vietnamese}</div>
                `;
                wordItem.onclick = () => {
                    currentWordIndex = vocabulary.findIndex(v => v.english === word.english);
                    // Khi click từ từ A-Z, ta coi như đang muốn xem toàn bộ từ điển
                    filteredVocabulary = [...vocabulary]; 
                    setMode('flashcard', document.querySelector(`.mode-btn[onclick*="setMode('flashcard')"]`));
                    filterByLetter('ALL', document.querySelector(`.alphabet-btn[onclick*="filterByLetter('ALL')"]`));
                };
                wordsContainer.appendChild(wordItem);
            });

            section.appendChild(title);
            section.appendChild(wordsContainer);
            alphabetContent.appendChild(section);
        }
    });
}

// Cập nhật thống kê
function updateStats() {
    document.getElementById('learnedCount').textContent = learnedWords.size;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('streakCount').textContent = currentStreak;

    const accuracy = totalQuizAttempts > 0 ? Math.round((correctAnswers / totalQuizAttempts) * 100) : 0;
    document.getElementById('accuracyRate').textContent = accuracy + '%';
}

// Cập nhật thanh tiến độ
function updateProgress() {
    const totalWords = vocabulary.length;
    const learnedCount = learnedWords.size;
    const percentage = (learnedCount / totalWords) * 100;

    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${learnedCount}/${totalWords} từ đã học`;
}

// Thêm hiệu ứng fade
function addFadeAnimation() {
    const container = document.getElementById('flashcardMode');
    if (container) { // Kiểm tra để tránh lỗi nếu container không tồn tại
        container.classList.remove('fade-in');
        void container.offsetWidth; // Force reflow/repaint to restart animation
        setTimeout(() => {
            container.classList.add('fade-in');
        }, 10);
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    initApp();

    document.getElementById('searchInput').addEventListener('input', searchWords);

    // Kịp thời kiểm tra để xem nếu người dùng có để lại các event listener cũ từ các lần sửa trước
    // Nếu bạn đã xóa chúng đi, thì đoạn này có thể không cần thiết nữa, nhưng an toàn thì cứ để lại
    // để tránh các listener bị nhân đôi hoặc xung đột.
    // Tốt nhất là sử dụng 'onclick' trực tiếp như đã sửa ở Bước 1.

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (currentMode === 'flashcard') {
            switch (e.key) {
                case 'ArrowRight':
                case ' ': // Spacebar
                    e.preventDefault();
                    nextWord();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    previousWord();
                    break;
                case 'Enter':
                    e.preventDefault();
                    markAsLearned();
                    break;
                case 's':
                case 'S':
                    e.preventDefault();
                    if (e.ctrlKey || e.metaKey) {
                        speakWord();
                    } else {
                        flipCard();
                    }
                    break;
            }
        } else if (currentMode === 'quiz') {
            if (e.key === 'Enter' && document.getElementById('nextQuizBtn').style.display !== 'none') {
                 e.preventDefault();
                 nextQuiz();
            }
        }
    });
});