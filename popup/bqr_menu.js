function listenForClicks() {
    document.addEventListener("click", (e) => {
        function hideAnswers() {
            browser.tabs.sendMessage(tabs[0].id, {
                command: "hideAnswers"
            });
        }

        function reportError(error) {
            console.error(`Could not execute function: ${error}`);
        }

        if(e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
            return;
        }
        if(e.target.type === "btn-hide-answers") {
            browser.tabs
                .query({ active: true, currentWindow: true})
                .then(hideAnswers)
                .catch(reportError);
        }
    })
}

function reportExecuteScriptError(error) {
    console.error(`Failed to execute BQR content script: ${error.message}`);
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
}

browser.tabs
    .executeScript({ file: "/content_scripts/main.js" })
    .then(listenForClicks)
    .catch(reportExecuteScriptError);
