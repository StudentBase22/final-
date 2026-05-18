// script.js

const questions = [
    // Multiple Choice
    {
        type: "mcq",
        question: "تحليل الجدوى يهدف إلى:",
        options: ["إغلاق المشروع", "معرفة إمكانية نجاح المشروع", "زيادة الضرائب", "تقليل العملاء"],
        answer: 1
    },
    {
        type: "mcq",
        question: "أفضل المشاريع تبدأ من:",
        options: ["مشكلة أو حاجة لدى العملاء", "تقليد الآخرين", "الصدفة فقط", "زيادة الأسعار"],
        answer: 0
    },
    {
        type: "mcq",
        question: "من عناصر لوحة تصميم الأفكار:",
        options: ["العملاء", "الضرائب", "الرواتب", "المخازن"],
        answer: 0
    },
    {
        type: "mcq",
        question: "عرض القيمة يعني:",
        options: ["سعر المنتج", "سبب اختيار العميل للمنتج", "عدد الموظفين", "حجم الشركة"],
        answer: 1
    },
    {
        type: "mcq",
        question: "الكفاءات الأساسية هي:",
        options: ["نقاط ضعف المشروع", "موارد تميز المشروع عن المنافسين", "التكاليف", "الضرائب"],
        answer: 1
    },
    {
        type: "mcq",
        question: "أي مما يلي من القوى المؤثرة في السوق؟",
        options: ["القوى الرياضية", "القوى التكنولوجية", "القوى العسكرية", "القوى الفنية"],
        answer: 1
    },
    {
        type: "mcq",
        question: "الإنترنت مثال على:",
        options: ["قوة ديموغرافية", "قوة تكنولوجية", "قوة سياسية", "قوة اجتماعية"],
        answer: 1
    },
    {
        type: "mcq",
        question: "التغير في عدد السكان يعد من:",
        options: ["القوى الديموغرافية", "القوى الثقافية", "القوى السياسية", "القوى المالية"],
        answer: 0
    },
    {
        type: "mcq",
        question: "التضخم والبطالة من:",
        options: ["القوى الاقتصادية", "القوى الاجتماعية", "القوى العسكرية", "القوى القانونية"],
        answer: 0
    },
    {
        type: "mcq",
        question: "القوانين الجديدة تعتبر من:",
        options: ["القوى السياسية والقانونية", "القوى الثقافية", "القوى الرياضية", "القوى التعليمية"],
        answer: 0
    },
    {
        type: "mcq",
        question: "جمع البيانات مباشرة من العملاء يسمى:",
        options: ["بحث ثانوي", "بحث أولي", "تحليل مالي", "تخطيط"],
        answer: 1
    },
    {
        type: "mcq",
        question: "أي مما يلي يعد من أدوات البحث الأولي؟",
        options: ["الكتب", "المجلات", "الاستبيانات", "الصحف"],
        answer: 2
    },
    {
        type: "mcq",
        question: "الاستبيانات يجب أن تكون:",
        options: ["طويلة جدًا", "معقدة", "قصيرة وواضحة", "عشوائية"],
        answer: 2
    },
    {
        type: "mcq",
        question: "مجموعة التركيز تتكون عادة من:",
        options: ["50 شخصًا", "100 شخص", "5-10 أشخاص", "شخص واحد"],
        answer: 2
    },
    {
        type: "mcq",
        question: "النموذج الأولي هو:",
        options: ["المنتج النهائي", "نسخة تجريبية من المنتج", "خطة تسويقية", "تقرير مالي"],
        answer: 1
    },
    {
        type: "mcq",
        question: "نموذج العمل التجاري يوضح:",
        options: ["طريقة تحقيق الأرباح", "لون الشعار", "موقع الشركة فقط", "أسماء الموظفين"],
        answer: 0
    },
    {
        type: "mcq",
        question: "من عناصر نموذج العمل:",
        options: ["شرائح العملاء", "الأثاث", "المباني", "الضرائب"],
        answer: 0
    },
    {
        type: "mcq",
        question: "القنوات تعني:",
        options: ["طرق إيصال المنتج للعملاء", "طرق التوظيف", "طرق المحاسبة", "طرق التخزين"],
        answer: 0
    },
    {
        type: "mcq",
        question: "خطة العمل هي:",
        options: ["وثيقة لتنظيم المشروع", "إعلان", "فاتورة", "عقد بيع"],
        answer: 0
    },
    {
        type: "mcq",
        question: "من أهداف خطة العمل:",
        options: ["جذب المستثمرين", "زيادة البطالة", "إغلاق المشروع", "تقليل الإنتاج"],
        answer: 0
    },
    {
        type: "mcq",
        question: "الملكية الفكرية تهدف إلى:",
        options: ["زيادة الضرائب", "حماية الأفكار والإبداعات", "تخفيض الأسعار", "تقليل العمال"],
        answer: 1
    },
    {
        type: "mcq",
        question: "براءة الاختراع تستخدم لحماية:",
        options: ["الاختراعات", "الرواتب", "العقود", "الضرائب"],
        answer: 0
    },
    {
        type: "mcq",
        question: "العلامة التجارية تحمي:",
        options: ["اسم وشعار المشروع", "المبنى", "الموظفين", "الأجهزة"],
        answer: 0
    },
    {
        type: "mcq",
        question: "من أخلاقيات الأعمال:",
        options: ["الغش", "الصدق والأمانة", "الاحتكار", "الخداع"],
        answer: 1
    },
    {
        type: "mcq",
        question: "التمويل الذاتي يعني:",
        options: ["استخدام أموال صاحب المشروع", "الاقتراض فقط", "بيع المشروع", "رفع الأسعار"],
        answer: 0
    },
    // True/False
    {
        type: "tf",
        question: "تحليل الجدوى يقلل من المخاطر.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "جميع الأفكار تعتبر فرصًا ناجحة.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "البحث الأولي يعتمد على جمع بيانات مباشرة من العملاء.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "الاستبيانات دائمًا دقيقة 100٪.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "مجموعات التركيز تساعد في فهم آراء العملاء.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "النموذج الأولي يساعد في اكتشاف أخطاء المنتج.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "الإنترنت لا يؤثر على ريادة الأعمال.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "نموذج العمل التجاري يساعد على فهم طريقة الربح.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "شرائح العملاء هي الفئات المستهدفة من المشروع.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "خطة العمل غير مهمة للمستثمرين.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "الخطة المالية جزء من خطة العمل.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "الملكية الفكرية تحمي الاختراعات والعلامات التجارية.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "براءة الاختراع تستخدم لحماية الشعار فقط.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "الصدق والأمانة من أخلاقيات الأعمال.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "القروض البنكية تعتبر مصدر تمويل.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "رأس المال المخاطر يستخدم للمشاريع الجديدة.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "التمويل الجماعي يتم عبر الإنترنت غالبًا.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "إدارة المشروع تشمل التخطيط والتنظيم.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "التوسع في الأسواق من استراتيجيات النمو.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "المنافسة لا تؤثر على المشاريع الريادية.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "تغير حاجات العملاء يعد من تحديات النمو.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "الامتياز التجاري يسمح باستخدام علامة تجارية معروفة.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "الامتياز التجاري يزيد المخاطر دائمًا.",
        options: ["صح", "خطأ"],
        answer: 1
    },
    {
        type: "tf",
        question: "الشراكات تساعد على نمو المشروع.",
        options: ["صح", "خطأ"],
        answer: 0
    },
    {
        type: "tf",
        question: "التكنولوجيا تخلق فرصًا ريادية جديدة.",
        options: ["صح", "خطأ"],
        answer: 0
    }
];

// Tabs Logic for Summary (only runs on index.html)
if (document.querySelectorAll('.toc-link').length > 0) {
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
            
            // Hide all panels
            document.querySelectorAll('.doc-panel').forEach(panel => panel.classList.remove('active'));
            
            // Show target panel
            const targetId = e.target.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Quiz Logic (only runs on exam.html)
const quizUi = document.getElementById('quiz-ui');

if (quizUi) {
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let selectedOptionIndex = null;

    const resultUi = document.getElementById('result-ui');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const progressFill = document.getElementById('progress');
    const progressPercentText = document.getElementById('progress-percent');
    const questionTracker = document.getElementById('question-tracker');

    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        selectedOptionIndex = null;
        
        quizUi.classList.remove('hidden');
        resultUi.classList.add('hidden');
        loadQuestion();
    }

    function loadQuestion() {
        selectedOptionIndex = null;
        nextBtn.disabled = true;
        const q = questions[currentQuestionIndex];
        
        // Update Progress
        const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;
        progressPercentText.textContent = `${Math.round(progressPercent)}%`;
        questionTracker.textContent = `السؤال ${currentQuestionIndex + 1} / ${questions.length}`;
        
        // Set Question
        questionText.textContent = q.question;
        
        // Clear Options
        optionsContainer.innerHTML = '';
        
        // Create Options
        q.options.forEach((opt, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.innerHTML = `<span>${opt}</span>`;
            
            optionBtn.addEventListener('click', () => selectOption(index, optionBtn));
            
            optionsContainer.appendChild(optionBtn);
        });
        
        // Update next button text if it's the last question
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.querySelector('span').textContent = 'إنهاء الاختبار';
        } else {
            nextBtn.querySelector('span').textContent = 'تأكيد وانتقال';
        }
    }

    function selectOption(index, optionBtn) {
        selectedOptionIndex = index;
        
        // Deselect all
        document.querySelectorAll('.option-btn').forEach(el => el.classList.remove('selected'));
        
        // Select current
        optionBtn.classList.add('selected');
        
        // Enable Next button
        nextBtn.disabled = false;
    }

    nextBtn.addEventListener('click', () => {
        if (selectedOptionIndex === null) return;
        
        const q = questions[currentQuestionIndex];
        const isCorrect = selectedOptionIndex === q.answer;
        
        if (isCorrect) score++;
        
        userAnswers.push({
            question: q.question,
            userAnswer: q.options[selectedOptionIndex],
            correctAnswer: q.options[q.answer],
            isCorrect: isCorrect
        });
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        quizUi.classList.add('hidden');
        resultUi.classList.remove('hidden');
        
        progressFill.style.width = `100%`;
        progressPercentText.textContent = `100%`;

        const percentage = (score / questions.length) * 100;
        
        document.getElementById('score-text').textContent = `${score}/${questions.length}`;
        
        const msg = document.getElementById('result-message');
        const resultIcon = document.getElementById('result-icon');
        
        if (percentage >= 90) {
            msg.textContent = "أداء استثنائي! 🚀";
            resultIcon.className = "result-icon";
            resultIcon.innerHTML = '<i class="fa-solid fa-trophy"></i>';
        }
        else if (percentage >= 70) {
            msg.textContent = "عمل رائع! 👍";
            resultIcon.className = "result-icon";
            resultIcon.innerHTML = '<i class="fa-solid fa-star"></i>';
        }
        else {
            msg.textContent = "تحتاج لمزيد من التدريب 💪";
            resultIcon.className = "result-icon needs-work";
            resultIcon.innerHTML = '<i class="fa-solid fa-book"></i>';
        }
        
        document.getElementById('result-details').textContent = `لقد أجبت بشكل صحيح على ${score} من أصل ${questions.length} أسئلة بنسبة ${percentage}%.`;
        
        // Render Review Answers
        const reviewContainer = document.getElementById('review-answers');
        reviewContainer.innerHTML = '';
        
        userAnswers.forEach((ans, index) => {
            const item = document.createElement('div');
            item.className = `review-card ${ans.isCorrect ? 'correct' : 'incorrect'}`;
            
            let ansHtml = `
                <div class="review-q">${index + 1}. ${ans.question}</div>
            `;
            
            if (ans.isCorrect) {
                ansHtml += `<div class="review-ans user-correct"><i class="fa-solid fa-check-circle"></i> إجابتك صحيحة: ${ans.userAnswer}</div>`;
            } else {
                ansHtml += `
                    <div class="review-ans user-wrong"><i class="fa-solid fa-times-circle"></i> إجابتك: ${ans.userAnswer}</div>
                    <div class="review-ans correct-is"><i class="fa-solid fa-check"></i> الإجابة الصحيحة: ${ans.correctAnswer}</div>
                `;
            }
            
            item.innerHTML = ansHtml;
            reviewContainer.appendChild(item);
        });
    }

    document.getElementById('restart-btn').addEventListener('click', initQuiz);

    // Initialize
    initQuiz();
}

// ==========================================
// Password Authentication System (SHA-256)
// ==========================================
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// The target hash for "RAS2026"
const TARGET_HASH = "2be4dfcd0e9b4ba807c45e899f068d313875fe281409e44ae8916804ca3824fc";
const authOverlay = document.getElementById('auth-overlay');

if (authOverlay) {
    // Check if already authenticated
    if (localStorage.getItem('auth_token') === TARGET_HASH) {
        authOverlay.classList.add('hidden');
    } else {
        // Block scrolling to prevent bypassing
        document.body.style.overflow = 'hidden';
    }

    const authBtn = document.getElementById('auth-btn');
    const authPass = document.getElementById('auth-pass');
    const authError = document.getElementById('auth-error');

    async function handleLogin() {
        const pass = authPass.value.trim();
        const hash = await sha256(pass);
        
        if (hash === TARGET_HASH) {
            localStorage.setItem('auth_token', hash);
            authOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        } else {
            authError.classList.remove('hidden');
            authPass.value = '';
            authPass.focus();
            
            // Add a small shake animation for visual feedback
            const card = document.querySelector('.auth-card');
            card.style.transform = 'translateX(10px)';
            setTimeout(() => card.style.transform = 'translateX(-10px)', 100);
            setTimeout(() => card.style.transform = 'translateX(10px)', 200);
            setTimeout(() => card.style.transform = 'translateX(0)', 300);
        }
    }

    authBtn.addEventListener('click', handleLogin);
    authPass.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
}
