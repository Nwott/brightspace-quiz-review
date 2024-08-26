let hideAnswersBtn = document.querySelector("#btn-hide-answers");

hideAnswersBtn.addEventListener('click', function() { onHideAnswers() });

function onHideAnswers() {
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) =>
            browser.tabs.sendMessage(tabs[0].id, {
                command: "hide-answers"
            })
        );
}