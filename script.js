const quizData = [
    {
        question: "What is the capital of Goa?",
        options: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
        correct: "Panaji"
    },
    {
        question: "Which famous beach is located in North Goa?",
        options: ["Calangute Beach", "Palolem Beach", "Anjuna Beach", "Colva Beach"],
        correct: "Calangute Beach"
    },
    {
        question: "What is the popular local drink in Goa made from cashew nuts?",
        options: ["Feni", "Toddy", "Port Wine", "Arrack"],
        correct: "Feni"
    },
    {
        question: "Which historic Portuguese-era fort is located in South Goa?",
        options: ["Aguada Fort", "Chapora Fort", "Cabo de Rama Fort", "Terekhol Fort"],
        correct: "Cabo de Rama Fort"
    },
    {
        question: "Which festival is celebrated with great fervor in Goa?",
        options: ["Carnival", "Diwali", "Christmas", "Easter"],
        correct: "Carnival"
    },
    {
        question: "What is the name of the famous beach known for its parties in Goa?",
        options: ["Baga Beach", "Miramar Beach", "Vagator Beach", "Morjim Beach"],
        correct: "Baga Beach"
    },
    {
        question: "Which famous church is a UNESCO World Heritage Site in Goa?",
        options: ["Basilica of Bom Jesus", "Se Cathedral", "Church of St. Cajetan", "St. Augustine Tower"],
        correct: "Basilica of Bom Jesus"
    },
    {
        question: "What is the local Goan cuisine specialty made with fish and coconut milk?",
        options: ["Fish Curry", "Vindaloo", "Xacuti", "Sorpotel"],
        correct: "Fish Curry"
    },
    {
        question: "Which wildlife sanctuary is known for its bird-watching opportunities in Goa?",
        options: ["Bhagwan Mahavir Wildlife Sanctuary", "Bondla Wildlife Sanctuary", "Cotigao Wildlife Sanctuary", "Salim Ali Bird Sanctuary"],
        correct: "Salim Ali Bird Sanctuary"
    },
    {
        question: "Which traditional Goan music and dance form is performed during festivals?",
        options: ["Fugdi", "Lavani", "Dekhnni", "Bharatnatyam"],
        correct: "Fugdi"
    },
    {
        question: "Which famous river flows through Goa and is known for its cruises?",
        options: ["Mandovi River", "Zuari River", "Terekhol River", "Chapora River"],
        correct: "Mandovi River"
    },
    {
        question: "What is the name of the historic Latin Quarter in Goa known for its colorful houses?",
        options: ["Fontainhas", "Bardez", "Alto Porvorim", "Saligao"],
        correct: "Fontainhas"
    },
    {
        question: "Which is the busiest and largest railway station in Goa?",
        options: ["Margao Railway Station", "Vasco da Gama Railway Station", "Madgaon Railway Station", "Karmali Railway Station"],
        correct: "Margao Railway Station"
    },
    {
        question: "What is the name of the popular market in North Goa known for its flea market?",
        options: ["Anjuna Market", "Mapusa Market", "Calangute Market", "Baga Market"],
        correct: "Anjuna Market"
    },
    {
        question: "Which is the largest and most popular water park in Goa?",
        options: ["Splashdown Water Park", "Calangute Water Park", "Anjuna Water Park", "Blue Whale Water Park"],
        correct: "Splashdown Water Park"
    },
    {
        question: "What is the name of the popular spice plantation tour in Goa?",
        options: ["Sahakari Spice Farm", "Tropical Spice Plantation", "Savoi Plantation", "Pascoal Spice Village"],
        correct: "Sahakari Spice Farm"
    },
    {
        question: "Which Portuguese explorer is believed to have landed in Goa in 1510?",
        options: ["Alfonso de Albuquerque", "Vasco da Gama", "Pedro Álvares Cabral", "Ferdinand Magellan"],
        correct: "Alfonso de Albuquerque"
    },
    {
        question: "What is the name of the famous bridge connecting North and South Goa?",
        options: ["Mandovi Bridge", "Zuari Bridge", "Chapora Bridge", "Cavelossim Bridge"],
        correct: "Mandovi Bridge"
    },
    {
        question: "Which famous festival in Goa marks the arrival of the monsoon?",
        options: ["Sao Joao Festival", "Dussehra", "Eid", "Onam"],
        correct: "Sao Joao Festival"
    },
    {
        question: "What is the name of the famous spring festival celebrated in Goa?",
        options: ["Shigmotsav", "Ganesh Chaturthi", "Navratri", "Bihu"],
        correct: "Shigmotsav"
    },
    {
        question: "Which is the largest and most popular beach in South Goa?",
        options: ["Colva Beach", "Benaulim Beach", "Palolem Beach", "Agonda Beach"],
        correct: "Colva Beach"
    }
];

let currentQuestionIndex = 0;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.createElement('h2');
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(optionElement, option);
        quizContainer.appendChild(optionElement);
    });
}

function checkAnswer(optionElement, selectedOption) {
    const questionData = quizData[currentQuestionIndex];
    const correctAnswer = questionData.correct;

    if (selectedOption === correctAnswer) {
        optionElement.classList.add('correct');
    } else {
        optionElement.classList.add('wrong');
    }

    document.querySelectorAll('.option').forEach(option => {
        option.onclick = null;
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });

    document.getElementById('next').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('quiz').innerHTML = '<h2>Quiz Completed!</h2>';
    
        document.getElementById('next').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    document.getElementById('next').disabled = true;
});
