// Background script for No World Shopping extension
chrome.runtime.onInstalled.addListener(() => {
    // Set default enabled state
    chrome.storage.sync.set({ enabled: true });
});

function enableBlocking() {
    chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ["ruleset_1"]
    });
}

function disableBlocking() {
    chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: ["ruleset_1"]
    });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggle') {
        if (request.enabled) {
            enableBlocking();
        } else {
            disableBlocking();
        }
        sendResponse({ success: true });
    }
});
