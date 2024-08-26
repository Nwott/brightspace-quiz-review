const ROW_ITEMS_CLASS = ".d2l-rowshadeonhover-selected-static";

// hides the blue background behind selected answers
function hideBlueBG() {
    // get all answers
    document.querySelectorAll(ROW_ITEMS_CLASS).forEach((elem) => {
        elem.style.background = "#FFF";
    });
}

function hideAnswers() {
    hideBlueBG();
}

console.log("Brightspace Quiz Review is active.");

browser.runtime.onMessage.addListener((message) => {
    if(message.command === "hide-answers") {
        hideAnswers();
    }
});