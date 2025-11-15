// Background script for No World Shopping extension
const BLOCKING_RULES = [
    {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
            urlFilter: "*://worldshopping.jp/*",
            resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
        }
    },
    {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
            urlFilter: "*://*.worldshopping.jp/*",
            resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
        }
    }
];

chrome.runtime.onInstalled.addListener(() => {
    // Set default enabled state and enable blocking
    chrome.storage.sync.set({ enabled: true });
    enableBlocking();
});

function enableBlocking() {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1, 2],
        addRules: BLOCKING_RULES
    });
}

function disableBlocking() {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1, 2],
        addRules: []
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
