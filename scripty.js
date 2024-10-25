// Lista de perguntas e respostas
const flashcardsData = [
    { question: "Qual é a capital da França?", answer: "Paris" },
    { question: "Qual é a fórmula da água?", answer: "H₂O" },
    { question: "Quem escreveu 'Dom Quixote'?", answer: "Miguel de Cervantes" },
    { question: "Qual o planeta mais próximo do Sol?", answer: "Mercúrio" }
];

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
}

// Função para girar o flashcard
function flipFlashcard(card) {
    card.classList.toggle('is-flipped');
}

// Chama a função ao carregar a página
window.onload = createFlashcards;
