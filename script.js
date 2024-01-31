document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('plagiarism-form');
    const textInput = document.getElementById('text-input');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const text = textInput.value.trim();
        if (text === '') {
            alert('Please enter text to check for plagiarism.');
            return;
        }

        showLoader();

        // Simulate fetching results with a delay (replace with actual backend request)
        setTimeout(() => {
            const plagiarismDetected = Math.random() < 0.5; // Simulate plagiarism detection
            if (plagiarismDetected) {
                showResults('Plagiarism detected! 😞');
            } else {
                showResults('No plagiarism detected! 🙂');
            }
        }, 2000); // 2 seconds delay
    });

    function showLoader() {
        resultsDiv.innerHTML = '<div class="loader"></div>';
    }

    function showResults(message) {
        resultsDiv.innerHTML = `<p>${message}</p>`;
    }
});
