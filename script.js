console.log("script loaded");

// =====================
// GET URL PARAMETERS
// =====================
const params = new URLSearchParams(window.location.search);
const gradeParam = params.get("grade");
const subject = params.get("subject");
const topicIndex = params.get("topic");
const subIndex = params.get("subtopic");

const grade = gradeParam ? "grade" + gradeParam : null;

// =====================
// 1. LOAD SUBJECTS PAGE
// =====================
const subjectsDiv = document.getElementById("subjects");
const gradeTitle = document.getElementById("gradeTitle");

if (subjectsDiv && grade) {

    const subjects = data[grade];

    if (!subjects) {
        gradeTitle.innerText = "No data found for Grade " + gradeParam;
    } else {

        gradeTitle.innerText = "Grade " + gradeParam + " Subjects";

        for (let sub in subjects) {
            subjectsDiv.innerHTML += `
                <div class="card">
                    <h3>${subjects[sub].name}</h3>
                    <a href="lesson.html?grade=${gradeParam}&subject=${sub}">
                        Open
                    </a>
                </div>
            `;
        }
    }
}

// =====================
// 2. LOAD TOPICS PAGE
// =====================
const topicsDiv = document.getElementById("topics");
const subjectTitle = document.getElementById("subjectTitle");

if (topicsDiv && subject && grade) {

    const subjectData = data[grade][subject];

    subjectTitle.innerText = subjectData.name;

    subjectData.topics.forEach((topic, index) => {
        topicsDiv.innerHTML += `
            <div class="card">
                <h3>${topic.title}</h3>
                <a href="subtopics.html?grade=${gradeParam}&subject=${subject}&topic=${index}">
                    Open Topic
                </a>
            </div>
        `;
    });
}

// =====================
// 3. LOAD SUBTOPICS PAGE
// =====================
const subtopicsDiv = document.getElementById("subtopics");
const topicTitle = document.getElementById("topicTitle");

if (subtopicsDiv && topicIndex !== null && grade && subject) {

    const topicData = data[grade][subject].topics[topicIndex];

    topicTitle.innerText = topicData.title;

    topicData.subtopics.forEach((sub, index) => {
        subtopicsDiv.innerHTML += `
            <div class="card">
                <h3>${sub.title}</h3>
                <a href="study.html?grade=${gradeParam}&subject=${subject}&topic=${topicIndex}&subtopic=${index}">
                    Start Learning
                </a>
            </div>
        `;
    });
}

// =====================
// 4. LOAD STUDY PAGE
// =====================
const subTitle = document.getElementById("subtopicTitle");
const notesDiv = document.getElementById("notes");
const quizDiv = document.getElementById("quiz");

if (subTitle && subIndex !== null && grade && subject) {

    const sub = data[grade][subject].topics[topicIndex].subtopics[subIndex];

    subTitle.innerText = sub.title;

    // =====================
    // SHOW NOTES (NEW UI)
    // =====================
    notesDiv.innerHTML = `
        <div class="notes-card">
            <h2>📘 Notes</h2>
            ${sub.notes.map(note => {
                if (note.type === "example") {
                    return `<div class="example-box">${note.content}</div>`;
                }
                return `<p>${note.content}</p>`;
            }).join("")}
        </div>
    `;

    // =====================
    // SHOW QUESTIONS
    // =====================
    quizDiv.innerHTML = "";

    sub.questions.forEach((q, index) => {

        quizDiv.innerHTML += `
            <div class="question-block">
                <p><strong>Q${index + 1}:</strong> ${q.question}</p>

                <input type="text" id="input-${index}" placeholder="Type your answer here">

                <button onclick="checkInputAnswer(${index}, '${q.answer || ""}', '${q.validation || ""}')">
                    Check Answer
                </button>

                <p class="result" id="result-${index}"></p>
            </div>
        `;
    });
}

// =====================
// SMART VALIDATION
// =====================
function checkInputAnswer(index, correctAnswer, validationType) {

    const input = document.getElementById(`input-${index}`);
    const result = document.getElementById(`result-${index}`);

    const userAnswer = input.value.trim().toLowerCase();

    let isCorrect = false;

    // Whole Numbers
    if (validationType === "wholeNumber") {
        isCorrect = /^\d+$/.test(userAnswer);
    }

    // Any number
    else if (validationType === "number") {
        isCorrect = !isNaN(userAnswer);
    }

    // Fraction
    else if (validationType === "fraction") {
        isCorrect = /^\d+\/\d+$/.test(userAnswer);
    }

    // Decimal
    else if (validationType === "decimal") {
        isCorrect = /^\d+\.\d+$/.test(userAnswer);
    }

    // Exact match
    else {
        isCorrect = userAnswer === correctAnswer.toLowerCase();
    }

    // Result UI
    if (isCorrect) {
        result.innerHTML = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Try again.";
        result.style.color = "red";
    }
}

// =====================
// NAVIGATION (NEXT/PREV)
// =====================
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn && nextBtn && subIndex !== null && grade && subject) {

    const currentIndex = parseInt(subIndex);
    const topicData = data[grade][subject].topics[topicIndex];
    const totalSubtopics = topicData.subtopics.length;

    // PREVIOUS
    if (currentIndex > 0) {
        prevBtn.onclick = () => {
            window.location.href = `study.html?grade=${gradeParam}&subject=${subject}&topic=${topicIndex}&subtopic=${currentIndex - 1}`;
        };
    } else {
        prevBtn.disabled = true;
        prevBtn.style.opacity = "0.5";
    }

    // NEXT
    if (currentIndex < totalSubtopics - 1) {
        nextBtn.onclick = () => {
            window.location.href = `study.html?grade=${gradeParam}&subject=${subject}&topic=${topicIndex}&subtopic=${currentIndex + 1}`;
        };
    } else {
        nextBtn.innerText = "Finish → Quiz";
        nextBtn.onclick = () => {
            window.location.href = `final.html?grade=${gradeParam}&subject=${subject}&topic=${topicIndex}`;
        };
    }
}
// =====================
// FINAL QUIZ PAGE
// =====================
const finalDiv = document.getElementById("finalQuiz");

if (finalDiv && topicIndex !== null && grade && subject) {

    const topicData = data[grade][subject].topics[topicIndex];
    const questions = topicData.finalQuiz || [];

    finalDiv.innerHTML = "";

    questions.forEach((q, index) => {

        finalDiv.innerHTML += `
            <div class="question-block">

                <p>
                    <strong>Q${index + 1}:</strong>
                    ${q.question}
                </p>

                <input
                    type="text"
                    id="final-${index}"
                    placeholder="Type your answer"
                >

                <p class="result" id="fresult-${index}"></p>

            </div>
        `;
    });

    window.finalQuestions = questions;
}

// =====================
// SUBMIT FINAL QUIZ
// =====================
function submitFinalQuiz() {

    let score = 0;

    window.finalQuestions.forEach((q, index) => {

        const input = document.getElementById(`final-${index}`);
        const result = document.getElementById(`fresult-${index}`);

        const userAnswer = input.value.trim().toLowerCase();

        let correct = false;

        // WHOLE NUMBER
        if (q.validation === "wholeNumber") {

            correct = /^\d+$/.test(userAnswer);
        }

        // NUMBER
        else if (q.validation === "number") {

            correct = !isNaN(userAnswer);
        }

        // FRACTION
        else if (q.validation === "fraction") {

            correct = /^\d+\/\d+$/.test(userAnswer);
        }

        // DECIMAL
        else if (q.validation === "decimal") {

            correct = /^\d+\.\d+$/.test(userAnswer);
        }

        // TEXT
        else if (q.validation === "text") {

            correct = userAnswer.length > 0;
        }

        // EXACT ANSWER
        else {

            correct = userAnswer === (q.answer || "").toLowerCase();
        }

        // DISPLAY RESULT
        if (correct) {

            result.innerHTML = "✅ Correct";
            result.style.color = "green";

            score++;

        } else {

            result.innerHTML = "❌ Incorrect";
            result.style.color = "red";
        }

    });

    // FINAL SCORE
    const scoreBox = document.getElementById("scoreBox");

    scoreBox.innerHTML = `
        <div class="score-card">
            🎉 You scored ${score}/${window.finalQuestions.length}
        </div>
    `;
}
