let hideAnswersBtn = document.querySelector("#btn-hide-answers");
let showAnswersBtn = document.querySelector("#btn-show-answers");

hideAnswersBtn.addEventListener('click', function() { onHideAnswers() });
showAnswersBtn.addEventListener('click', function() { onShowAnswers() });

function onHideAnswers() {
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) =>
            browser.tabs.sendMessage(tabs[0].id, {
                command: "hide-answers"
            })
        );
}

function onShowAnswers() {
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) =>  {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "show-answers"
            })
        });
}