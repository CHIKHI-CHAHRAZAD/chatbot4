const qa = {
    "What is Ohm's Law?": "Ohm's Law states that V = I * R, where V is voltage, I is current, and R is resistance.",
    "What is the difference between AC and DC?": "AC (Alternating Current) changes direction periodically, while DC (Direct Current) flows in a single direction.",
    "What is a transformer used for?": "A transformer is used to increase or decrease voltage in an AC circuit.",
    "What is the purpose of a capacitor in an electrical circuit?": "A capacitor stores and releases electrical energy and is used to smooth out voltage fluctuations.",
    "What is a synchronous motor?": "A synchronous motor is an electric motor that operates at a constant speed, synchronous with the frequency of the supply current.",
    "What is the function of a relay in an electrical circuit?": "A relay is an electrically operated switch used to control a circuit by a low-power signal or to isolate different circuits.",
    "What are the main types of transformers?": "The main types of transformers are step-up transformers and step-down transformers.",
    "What is the significance of power factor in electrical systems?": "Power factor measures the efficiency of the power usage in an electrical system, with a higher power factor indicating better efficiency."
};

function getAnswer(question) {
    return qa[question] || "Sorry, I don't have an answer for that question.";
}

function displayMessage(message, className) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
}

function showQuestionsList() {
    const questionsListDiv = document.getElementById('questions-list');
    questionsListDiv.innerHTML = ""; 
    const questions = Object.keys(qa);

    questions.forEach(question => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.textContent = question;
        questionItem.onclick = () => {
            document.getElementById('user-message').value = question;
            questionsListDiv.innerHTML = ""; 
        };
        questionsListDiv.appendChild(questionItem);
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const userMessage = document.getElementById('user-message').value;
    if (userMessage) {
        const answer = getAnswer(userMessage);
        displayMessage(userMessage, 'user-message');
        displayMessage(answer, 'bot-message');
    }
}

window.onload = () => {
    document.getElementById('user-message').onclick = showQuestionsList;
    document.getElementById('message-form').onsubmit = handleSubmit;
};
