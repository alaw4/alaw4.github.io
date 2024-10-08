const questions = [
    "Do you prefer: (A)working alone or (B)in a team?",
    "Do you enjoy: (A)creative tasks or (B)analytical tasks?",
    "Are you more interested in: (A)technology or (B)helping people?",
    "Do you prefer: (A)hands-on tasks or (B)thinking tasks?",
    "Are you more: (A)detail-oriented or (B)big-picture oriented?",
    "Do you prefer: (A)working in an office or (B)outdoors?",
    "Do you enjoy: (A)working with numbers or (B)working with words?",
    "Are you driven by: (A)achieving goals or (B)helping others?",
    "Do you prefer working in: (A)fast-paced or (B)slow-paced environments?",
    "Do you like solving: (A)technical problems or (B)interpersonal problems?",
    "Are you more interested in working with: (A)data or (B)people?",
    "Do you prefer: (A)routine tasks or (B)varied tasks?",
    "Do you enjoy: (A)leading projects or (B)supporting a team?",
    "Do you prefer working for a: (A)large organization or (B)small organization?",
    "Are you more comfortable with: (A)taking risks or (B)security?",
    "Do you prefer working with: (A)abstract concepts or (B)practical applications?",
    "Which do you value more: (A)personal recognition or (B)team success?",
    "Are you more inclined towards: (A)art/design or (B)engineering?",
    "Do you prefer a: (A)structured schedule or (B)flexible schedule?",
    "Are you more driven by: (A)passion or (B)financial reward?",
    "Do you prefer working on: (A)long-term projects or (B)short-term tasks?",
    "Do you perform best in (A)high-stress environments or (B)low-stress environments?"
];

const careerCategories = {
    creative: 0,
    analytical: 0,
    peopleOriented: 0,
    technical: 0,
    entrepreneurial: 0
};

const careerSummaries = {
    creative: {
        title: "Creative Career",
        description: "You are suited for creative careers like art, design, or writing. Examples include: Graphic Designer, Copywriter, Illustrator, Fashion Designer, Photographer, Animator.",
        requirements: "Skills in design, storytelling, and open-minded thinking."
    },
    analytical: {
        title: "Analytical Career",
        description: "You excel in data-driven careers like finance or engineering. Examples include: Data Analyst, Financial Analyst, Economist, Statistician, Mechanical Engineer, Actuary.",
        requirements: "Proficiency in mathematics, logical thinking, and attention to detail."
    },
    peopleOriented: {
        title: "People-Oriented Career",
        description: "You are great at careers that involve helping others, like teaching or healthcare. Examples include: Teacher, Social Worker, Nurse, Human Resources Specialist, Psychologist, Counselor.",
        requirements: "Strong interpersonal skills and a desire to help others."
    },
    technical: {
        title: "Technical Career",
        description: "You are best suited for technical fields like IT or engineering. Examples include: Software Developer, IT Support Specialist, Network Engineer, Database Administrator, Systems Architect.",
        requirements: "Skills in problem-solving, technology, and coding."
    },
    entrepreneurial: {
        title: "Entrepreneurial Career",
        description: "You are suited for entrepreneurial ventures in business or startups. Startup Founder, Business Owner, Venture Capitalist, Product Manager, Business Consultant.",
        requirements: "Leadership, risk-taking, and creativity."
    }
};

let currentQuestionIndex = 0;
let answers = [];

const questionElement = document.getElementById('question');
const optionAButton = document.getElementById('optionA');
const optionBButton = document.getElementById('optionB');
const backButton = document.getElementById('back-btn');
const homeButton = document.getElementById('homepage');
const resultElement = document.getElementById('result');
const careerTitleElement = document.getElementById('career-title');
const careerDescriptionElement = document.getElementById('career-description');
const careerRequirementsElement = document.getElementById('career-requirements');

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressLabel = document.getElementById('progress-label');
    const progressPercent = Math.min((currentQuestionIndex / questions.length) * 100, 100);

    progressBar.style.width = `${progressPercent}%`;
    progressLabel.textContent = `${currentQuestionIndex} of ${questions.length} questions answered (${Math.round(progressPercent)}% complete)`;  // Update progress label
}

function showQuestion(index) {
    questionElement.textContent = questions[index];
    updateProgressBar();

    if (currentQuestionIndex > 0) {
        backButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
    }
}

function processAnswer(answer) {
    answers.push(answer);

    switch (currentQuestionIndex) {
        case 0:
            if (answer === 'A') careerCategories.creative++;
            else careerCategories.peopleOriented++;
            break;
        case 1:
            if (answer === 'A') careerCategories.creative++;
            else careerCategories.analytical++;
            break;
        case 2:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.peopleOriented++;
            break;
        case 3:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.analytical++;
            break;
        case 4:
            if (answer === 'A') careerCategories.analytical++;
            else careerCategories.entrepreneurial++;
            break;
        case 5:
            if (answer === 'A') careerCategories.entrepreneurial++;
            else careerCategories.peopleOriented++;
            break;
        case 6:
            if (answer === 'A') careerCategories.analytical++;
            else careerCategories.peopleOriented++;
            break;
        case 7:
            if (answer === 'A') careerCategories.entrepreneurial++;
            else careerCategories.peopleOriented++;
            break;
        case 8:
            if (answer === 'A') careerCategories.entrepreneurial++;
            else careerCategories.creative++;
            break;
        case 9:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.peopleOriented++;
            break;
        case 10:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.peopleOriented++;
            break;
        case 11:
            if (answer === 'A') careerCategories.analytical++;
            else careerCategories.creative++;
            break;
        case 12:
            if (answer === 'A') careerCategories.entrepreneurial++;
            else careerCategories.technical++;
            break;
        case 13:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.entrepreneurial++;
            break;
        case 14:
            if (answer === 'A') careerCategories.entrepreneurial++;
            else careerCategories.analytical++;
            break;
        case 15:
            if (answer === 'A') careerCategories.creative++;
            else careerCategories.analytical++;
            break;
        case 16:
            if (answer === 'A') careerCategories.creative++;
            else careerCategories.peopleOriented++;
            break;
        case 17:
            if (answer === 'A') careerCategories.creative++;
            else careerCategories.technical++;
            break;
        case 18:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.creative++;
            break;
        case 19:
            if (answer === 'A') careerCategories.peopleOriented++;
            else careerCategories.entrepreneurial++;
            break;
        case 20:
            if (answer === 'A') careerCategories.technical++;
            else careerCategories.analytical++;
            break;
        case 21:
            if (answer === 'A') careerCategories.entrepreneurial++;
            else careerCategories.creative++;
            break;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        updateProgressBar();
        showResult();
    }
}

function showResult() {
    const suggestedCareer = Object.keys(careerCategories).reduce((a, b) =>
        careerCategories[a] > careerCategories[b] ? a : b
    );

    console.log("showResult() called"); // test for showResult called
    console.log("Suggested career:", suggestedCareer);

    if (careerSummaries[suggestedCareer]) {
        console.log("Career found:", careerSummaries[suggestedCareer].title); // test for career result

        careerTitleElement.textContent = careerSummaries[suggestedCareer].title;
        careerDescriptionElement.textContent = careerSummaries[suggestedCareer].description;
        careerRequirementsElement.textContent = careerSummaries[suggestedCareer].requirements;

        const answersSummaryElement = document.getElementById('answers-summary');
        answersSummaryElement.innerHTML = '';

        answers.forEach((answer, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Question ${index + 1}: ${questions[index]} - You answered: ${answer === 'A' ? 'Option A' : 'Option B'}`;
            answersSummaryElement.appendChild(listItem);
        });

        document.getElementById('questionnaire').classList.add('hidden');
        resultElement.classList.remove('hidden');
        console.log("Results displayed"); //test that results are visible
    } else {
        console.error("Error: No valid career suggestion found."); //test for error
    }
}

optionAButton.addEventListener('click', function () {
    processAnswer('A');
});

optionBButton.addEventListener('click', function () {
    processAnswer('B');
});

backButton.addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;  //go to previous question
        answers.pop();  //remove last answer from array

        updateProgressBar();
        showQuestion(currentQuestionIndex); //show previous question
    }

    if (currentQuestionIndex === 0) {
        backButton.classList.add('hidden');
    }
});

document.getElementById('restart-btn').addEventListener('click', function () {
    currentQuestionIndex = 0;
    answers = [];
    careerCategories.creative = 0;
    careerCategories.analytical = 0;
    careerCategories.peopleOriented = 0;
    careerCategories.technical = 0;
    careerCategories.entrepreneurial = 0;
    document.getElementById('questionnaire').classList.remove('hidden');
    resultElement.classList.add('hidden');

    updateProgressBar();
    showQuestion(currentQuestionIndex);  //should start at 1st question
});

showQuestion(currentQuestionIndex);
