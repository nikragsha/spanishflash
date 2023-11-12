document.addEventListener('DOMContentLoaded', function () {
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach((flashcard) => {
        const question = flashcard.querySelector('.flashcard-question');
        const answer = flashcard.querySelector('.flashcard-answer');

        question.addEventListener('click', function () {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});