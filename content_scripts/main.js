const ROW_ITEMS_CLASS = ".d2l-rowshadeonhover-selected-static";
const RADIO_CLASS = ".d2l-radio"

// hides the blue background behind selected answers
function hideBlueBG() {
    // get all answers
    document.querySelectorAll(ROW_ITEMS_CLASS).forEach((elem) => {
        elem.style.background = "#FFF";
    });
}

// unchecks the radio buttons
function uncheckRadio() {
    document.querySelectorAll(RADIO_CLASS).forEach((elem) => {
        elem.style.background = "none"
    });
}

function hideAnswers() {
    hideBlueBG();
    uncheckRadio();
}

console.log("Brightspace Quiz Review is active.");

browser.runtime.onMessage.addListener((message) => {
    if(message.command === "hide-answers") {
        hideAnswers();
    }
});