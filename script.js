// script.js
document.addEventListener("DOMContentLoaded", () => {
    const flashcardList = document.getElementById("flashcard-list");
    const flashcardForm = document.getElementById("flashcard-form");

    const fetchFlashcards = async () => {
        const response = await fetch("/api/flashcards");
        const flashcards = await response.json();
        flashcardList.innerHTML = "";
        flashcards.forEach(flashcard => {
            const div = document.createElement("div");
            div.className = "flashcard";
            div.innerHTML = `<strong>Pergunta:</strong> ${flashcard.question} <br><strong>Resposta:</strong> ${flashcard.answer}`;
            flashcardList.appendChild(div);
        });
    };

    flashcardForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const question = document.getElementById("question").value;
        const answer = document.getElementById("answer").value;

        await fetch("/api/flashcards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question, answer })
        });

        flashcardForm.reset();
        fetchFlashcards();
    });

    fetchFlashcards();
});
