const ROW_ITEMS_CLASS = ".d2l-rowshadeonhover-selected-static";
const RADIO_CLASS = ".d2l-radio";
const MATCH_CLASS = ".ds_d";
const CHECKBOX_CLASS = ".d2l-checkbox";

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
        elem.style.background = "none";
    });
}

// hides the match answers
function hideMatchAnswers() {
    document.querySelectorAll(MATCH_CLASS).forEach((elem) => {
        elem.remove();
    });
}

function uncheckCheckboxes() {
    document.querySelectorAll(CHECKBOX_CLASS).forEach((elem) => {
        elem.style.background = "none";
    })
}

function hideAnswers() {
    hideBlueBG();
    uncheckRadio();
    hideMatchAnswers();
    uncheckCheckboxes();
}

console.log("Brightspace Quiz Review is active.");

browser.runtime.onMessage.addListener((message) => {
    if(message.command === "hide-answers") {
        hideAnswers();
    }
});