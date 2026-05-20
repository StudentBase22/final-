// script.js

const questions = [
    // Multiple Choice
    { type: "mcq", question: "ما أول خطوة في الانتقال من فكرة إلى مشروع ريادي ناجح؟", options: ["تخطيط الأعمال", "تقييم الفكرة", "دراسة الجدوى", "التخطيط الاستراتيجي"], answer: 1 },
    { type: "mcq", question: "ما الأداة المستخدمة لتقييم الأفكار خلال فترة قصيرة؟", options: ["تحليل SWOT", "نموذج بورتر", "لوحة رسم وتصميم الأفكار", "تحليل PESTLE"], answer: 2 },
    { type: "mcq", question: "ما الهدف من دراسة الجدوى؟", options: ["تحديد لون المنتج", "معرفة قابلية الفكرة للتحويل إلى مشروع ناجح", "تحديد الموظفين", "تصميم الشعار"], answer: 1 },
    { type: "mcq", question: "أي مما يلي يعد من مكونات تحليل الجدوى؟", options: ["تحليل الجدوى المالية", "تحليل التصميم الداخلي", "تحليل الألوان", "تحليل الموارد البشرية فقط"], answer: 0 },
    { type: "mcq", question: "أي قوة من القوى التالية تؤثر على الصناعات والأسواق؟", options: ["القوى الاقتصادية", "القوى الرياضية", "القوى الفنية", "القوى الشخصية"], answer: 0 },
    { type: "mcq", question: "ما الذي يوضحه عرض القيمة؟", options: ["سعر المنتج", "أهمية المنتج للعملاء وكيف يلبي حاجاتهم", "عدد الموظفين", "موقع الشركة"], answer: 1 },
    { type: "mcq", question: "ما المقصود بالكفاءات الأساسية؟", options: ["عدد العملاء", "الميزات الفريدة التي تميز المشروع عن المنافسين", "رأس المال فقط", "مساحة الشركة"], answer: 1 },
    { type: "mcq", question: "ما عدد العناصر الأساسية في نموذج العمل التجاري؟", options: ["خمسة", "سبعة", "تسعة", "عشرة"], answer: 2 },
    { type: "mcq", question: "أي من الآتي يعد من عناصر تحليل SWOT؟", options: ["نقاط القوة", "التصميم", "التسويق", "الإنتاج"], answer: 0 },
    { type: "mcq", question: "ماذا تمثل التهديدات في تحليل SWOT؟", options: ["الفرص المستقبلية", "نقاط القوة", "التغييرات السلبية والمخاطر", "الأرباح"], answer: 2 },
    { type: "mcq", question: "ما الغرض من تحليل المنافسين؟", options: ["زيادة عدد الموظفين", "معرفة قدرة الشركة على المنافسة", "تحديد الألوان المناسبة", "اختيار اسم الشركة"], answer: 1 },
    { type: "mcq", question: "أي من الآتي يعد من قوى بورتر الخمسة؟", options: ["شدة المنافسة داخل القطاع", "تحليل الموارد البشرية", "تحليل التصميم", "تحليل الألوان"], answer: 0 },
    { type: "mcq", question: "ما المقصود بالمنافس المباشر؟", options: ["شركة تقدم نفس المنتج أو الخدمة", "شركة تعمل في دولة أخرى", "شركة جديدة فقط", "شركة لا تبيع منتجات"], answer: 0 },
    { type: "mcq", question: "ما الهدف من خطة العمل؟", options: ["الترفيه", "تلخيص المشروع فقط", "التخطيط للمشروع وتوضيح أهدافه", "إنشاء شعار الشركة"], answer: 2 },
    { type: "mcq", question: "ما الذي تتضمنه الخطة التشغيلية؟", options: ["الرؤية فقط", "المهام اليومية وتخصيص الموارد", "اسم الشركة", "أسعار المنافسين"], answer: 1 },
    { type: "mcq", question: "ما المقصود بالرؤية؟", options: ["صورة مستقبلية لعمل ناجح", "الخطة المالية", "الشعار التجاري", "اسم المنتج"], answer: 0 },
    { type: "mcq", question: "أي مما يلي يعد من أسباب فشل خطط الأعمال؟", options: ["وضوح الأهداف", "دراسة السوق", "عدم خبرة صاحب المشروع", "وجود خطة تشغيلية"], answer: 2 },
    { type: "mcq", question: "ما الهدف من النماذج الأولية؟", options: ["زيادة الأسعار", "اختبار الأفكار قبل تقديمها للعملاء", "تعيين الموظفين", "تقليل الدعاية"], answer: 1 },
    { type: "mcq", question: "أي من الآتي يعد نوعاً من النماذج الأولية؟", options: ["الطباعة ثلاثية الأبعاد", "التحليل المالي", "التعداد السكاني", "تحليل المنافسين"], answer: 0 },
    { type: "mcq", question: "ما مدة حماية براءة الاختراع عادة؟", options: ["5 سنوات", "10 سنوات", "20 سنة", "50 سنة"], answer: 2 },
    
    // Additional MCQs generated from summary
    { type: "mcq", question: "بم تشير كلمة PESTLE؟", options: ["تحليل البيئة الداخلية", "تحليل الموارد المالية", "أداة لمراقبة العوامل البيئية الخارجية", "نوع من النماذج الأولية"], answer: 2 },
    { type: "mcq", question: "ماذا يعني مصطلح (W) في تحليل SWOT؟", options: ["نقاط القوة", "نقاط الضعف", "الفرص", "التهديدات"], answer: 1 },
    { type: "mcq", question: "ما هو المنافس غير المباشر؟", options: ["يقدم نفس المنتج بالضبط", "شركة تبدأ نشاطها مستقبلاً", "يغذي نفس الحاجة من خلال منتجات أخرى", "شركة لا تنافسك إطلاقاً"], answer: 2 },
    { type: "mcq", question: "تعتبر الأسعار العالية في تحليل SWOT لشركة ستاربكس مثالاً على:", options: ["نقاط القوة", "نقاط الضعف", "الفرص", "التهديدات"], answer: 1 },
    { type: "mcq", question: "أي من المكونات التالية يعد من أجزاء خطة العمل الرئيسية؟", options: ["الملخص التنفيذي", "اسم المنافسين فقط", "الخطة الرياضية", "تصميم المبنى"], answer: 0 },

    // True/False
    { type: "tf", question: "دراسة الجدوى تهدف لمعرفة إمكانية نجاح الفكرة كمشروع.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "نموذج العمل التجاري يتضمن خمسة عناصر فقط.", options: ["صح", "خطأ"], answer: 1 },
    { type: "tf", question: "تحليل SWOT يدرس نقاط القوة والضعف والفرص والتهديدات.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "القوى الاقتصادية من القوى المؤثرة على الأسواق والصناعات.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "المنافس غير المباشر يقدم نفس المنتج تماماً.", options: ["صح", "خطأ"], answer: 1 },
    { type: "tf", question: "خطة العمل تساعد على تحديد الأهداف بوضوح.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "الرؤية تعبر عن صورة مستقبلية للعمل.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "من فوائد النماذج الأولية تقليل سوء الفهم.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "الطباعة ثلاثية الأبعاد ليست من أنواع النماذج الأولية.", options: ["صح", "خطأ"], answer: 1 },
    { type: "tf", question: "براءة الاختراع تمنح حماية قانونية للاختراع.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "العلامة التجارية قد تكون شعاراً أو رمزاً.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "حقوق التأليف والنشر تحمي الأعمال الأصلية.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "تحليل المنافسين يساعد على اكتساب ميزات تنافسية.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "تحليل PESTLE يختص بالبيئة الداخلية فقط.", options: ["صح", "خطأ"], answer: 1 },
    { type: "tf", question: "التهديدات في SWOT تعتبر من العوامل الخارجية.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "النماذج الأولية تستخدم بعد إطلاق المنتج النهائي فقط.", options: ["صح", "خطأ"], answer: 1 },
    { type: "tf", question: "الخطة التشغيلية تهتم بالمهام اليومية للمشروع.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "من أسباب فشل خطط الأعمال عدم تحديد حاجة العملاء للخدمة.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "القوى السياسية والقانونية من القوى المؤثرة على الصناعة.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "المؤشر الجغرافي يستخدم للسلع ذات المنشأ الجغرافي المحدد.", options: ["صح", "خطأ"], answer: 0 },

    // Additional TF generated from summary
    { type: "tf", question: "مصفوفة تحليل المنافسين تستخدم لمقارنة شركتك بالشركات الأخرى.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "القدرة التفاوضية للمشترين تزداد عندما يكون لديهم بدائل قليلة.", options: ["صح", "خطأ"], answer: 1 },
    { type: "tf", question: "التوسع في الأسواق النامية لشركة ستاربكس يعتبر فرصة.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "بيان المهمة يعبر عن غرض الشركة ويجب ألا يزيد عن ٢٥ كلمة.", options: ["صح", "خطأ"], answer: 0 },
    { type: "tf", question: "خطة العمل لا تحتاج لتحديث بمجرد كتابتها وإعدادها.", options: ["صح", "خطأ"], answer: 1 }
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
    // Clear previously stored tokens (if any) to enforce our strict refresh policy
    localStorage.removeItem('auth_token'); 
    sessionStorage.removeItem('auth_token');
    
    // Check if we are returning from the exam page
    if (sessionStorage.getItem('skip_auth') === 'true') {
        // Consume the flag immediately so a subsequent refresh requires the password again
        sessionStorage.removeItem('skip_auth');
        authOverlay.classList.add('hidden');
        document.body.style.overflow = '';
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
            // Password is correct, grant access for this session only (no storage)
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

    if (authBtn) authBtn.addEventListener('click', handleLogin);
    if (authPass) authPass.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
} else {
    // This runs on exam.html (since it has no authOverlay).
    // Set a flag so when the user clicks 'Return to Summary', they bypass the password once.
    sessionStorage.setItem('skip_auth', 'true');
}

