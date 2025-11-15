// Popup script for No World Shopping extension
document.addEventListener('DOMContentLoaded', function() {
    const enableToggle = document.getElementById('enableToggle');

    // Load current state
    chrome.storage.sync.get(['enabled'], function(result) {
        enableToggle.checked = result.enabled !== false; // Default to true
    });

    // Handle toggle change
    enableToggle.addEventListener('change', function() {
        const enabled = enableToggle.checked;

        // Save state
        chrome.storage.sync.set({ enabled: enabled });

        // Send message to background script
        chrome.runtime.sendMessage({
            action: 'toggle',
            enabled: enabled
        });
    });
});
