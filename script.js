// script.js
document.addEventListener("DOMContentLoaded", () => {
    const flashcardList = document.getElementById("flashcard-list");
    const flashcardForm = document.getElementById("flashcard-form");

    const fetchFlashcards = async () => {
        const response = await fetch("/api/flashcards");
        const flashcards = await response.json();
        flashcardList.innerHTML = "";
        flashcards.forEach(flashcard => {
            addFlashcardToDOM(flashcard);
        });
    };

    const addFlashcardToDOM = (flashcard) => {
        const div = document.createElement("div");
        div.className = "flashcard";
        div.innerHTML = `<strong>Pergunta:</strong> ${flashcard.question} 
                         <div class="flashcard-answer">Resposta: ${flashcard.answer}</div>`;
        
        div.addEventListener("click", () => {
            const answerDiv = div.querySelector(".flashcard-answer");
            answerDiv.style.display = answerDiv.style.display === "none" || answerDiv.style.display === "" ? "block" : "none";
        });

        flashcardList.appendChild(div);
    };

    flashcardForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const question = document.getElementById("question").value;
        const answer = document.getElementById("answer").value;

        const newFlashcard = await fetch("/api/flashcards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question, answer })
        }).then(res => res.json());

        flashcardForm.reset();
        addFlashcardToDOM(newFlashcard);
    });

    fetchFlashcards();
});
