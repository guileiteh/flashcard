// Lista de perguntas e respostas
const flashcardsData = [
    { question: "Qual é a capital da França?", answer: "Paris" },
    { question: "Qual é a fórmula da água?", answer: "H₂O" },
    { question: "Quem escreveu 'Dom Quixote'?", answer: "Miguel de Cervantes" },
    { question: "Qual o planeta mais próximo do Sol?", answer: "Mercúrio" }
];

let currentFlashcardIndex = 0; // Índice para controlar o flashcard atual

// Função para criar flashcards dinamicamente
function createFlashcards() {
    const container = document.querySelector('.container');
    
    flashcardsData.forEach(flashcard => {
        // Criar o flashcard
        const card = document.createElement('div');
        card.classList.add('flashcard');
        card.onclick = () => flipFlashcard(card); // Adicionar evento de clique

        const cardInner = document.createElement('div');
        cardInner.classList.add('flashcard-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('flashcard-front');
        cardFront.textContent = "Pergunta: " + flashcard.question;

        const cardBack = document.createElement('div');
        cardBack.classList.add('flashcard-back');
        cardBack.textContent = "Resposta: " + flashcard.answer;

        // Estrutura do flashcard
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        container.appendChild(card);
    });
    
    showFlashcard(currentFlashcardIndex); // Exibe o primeiro flashcard
}

// Função para girar o flashcard
function flipFlashcard(card) {
    card.classList.toggle('is-flipped');
}

// Função para exibir o flashcard com base no índice
function showFlashcard(index) {
    const flashcards = document.querySelectorAll('.flashcard');
    
    // Oculta todos os flashcards
    flashcards.forEach(card => card.classList.remove('active'));

    // Exibe o flashcard atual
    flashcards[index].classList.add('active');
}

// Função para avançar para a próxima pergunta
function nextFlashcard() {
    const flashcards = document.querySelectorAll('.flashcard');
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length; // Volta ao início se passar do último
    showFlashcard(currentFlashcardIndex);
}

// Chama a função ao carregar a página
window.onload = function() {
    createFlashcards();

    // Cria o botão de próxima pergunta
    const nextButton = document.createElement('button');
    nextButton.classList.add('button');
    nextButton.textContent = "Próxima Pergunta";
    nextButton.onclick = nextFlashcard;

    document.body.appendChild(nextButton); // Adiciona o botão ao final da página
};
