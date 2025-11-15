// Background script for No World Shopping extension
chrome.runtime.onInstalled.addListener(() => {
    // Set default enabled state
    chrome.storage.sync.set({ enabled: true });

    // Set up declarative net request rule to block worldshopping.jp
    const rules = [
        {
            id: 1,
            priority: 1,
            action: { type: "block" },
            condition: {
                urlFilter: "*worldshopping.jp*",
                resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
            }
        }
    ];

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1], // Remove existing rule first
        addRules: rules
    });
});
