const flashcardsData = [
    { question: "Qual é a capital da França?", answer: "Paris" },
    { question: "Qual é a fórmula da água?", answer: "H₂O" },
    { question: "Quem escreveu 'Dom Quixote'?", answer: "Miguel de Cervantes" },
    { question: "Qual o planeta mais próximo do Sol?", answer: "Mercúrio" }
];

let currentFlashcardIndex = 0; 


function createFlashcards() {
    const container = document.querySelector('.container');
    
    flashcardsData.forEach(flashcard => {
        
        const card = document.createElement('div');
        card.classList.add('flashcard');
        card.onclick = () => flipFlashcard(card); 

        const cardInner = document.createElement('div');
        cardInner.classList.add('flashcard-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('flashcard-front');
        cardFront.textContent = "Pergunta: " + flashcard.question;

        const cardBack = document.createElement('div');
        cardBack.classList.add('flashcard-back');
        cardBack.textContent = "Resposta: " + flashcard.answer;

        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        container.appendChild(card);
    });
    
    showFlashcard(currentFlashcardIndex); 
}

function flipFlashcard(card) {
    card.classList.toggle('is-flipped');
}


function showFlashcard(index) {
    const flashcards = document.querySelectorAll('.flashcard');
    
    
    flashcards.forEach(card => card.classList.remove('active'));

    
    flashcards[index].classList.add('active');
}


function nextFlashcard() {
    const flashcards = document.querySelectorAll('.flashcard');
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length; 
    showFlashcard(currentFlashcardIndex);
}


window.onload = function() {
    createFlashcards();

    
    const nextButton = document.createElement('button');
    nextButton.classList.add('button');
    nextButton.textContent = "Próxima Pergunta";
    nextButton.onclick = nextFlashcard;

    document.body.appendChild(nextButton); 
};
