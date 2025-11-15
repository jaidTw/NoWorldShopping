# No World Shopping

A lightweight Chrome extension that blocks worldshopping.jp services on Japanese e-commerce websites.

## Overview

No World Shopping prevents worldshopping.jp services from loading when browsing Japanese shopping sites. This allows users to shop directly on original Japanese websites without unwanted redirects or intermediary services.

## Features

- 🚫 **Network-level blocking** - Blocks all requests to `*.worldshopping.jp` domains
- 🎯 **Precise targeting** - Only blocks worldshopping.jp, no false positives
- 🔄 **Toggle control** - Easy on/off switch in popup interface
- ⚡ **Lightweight** - Minimal performance impact using Chrome's native blocking API
- 🛡️ **Privacy-focused** - No data collection, no tracking
- 🌐 **Universal compatibility** - Works on all Japanese e-commerce sites

## Installation
1. **Download the extension**:
   - Click the green "Code" button on this GitHub page
   - Select "Download ZIP"
   - Extract the ZIP file to a folder on your computer

2. **Load into Chrome**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right corner)
   - Click "Load unpacked"
   - Select the extracted extension folder
   - The extension icon will appear in your Chrome toolbar

## Usage

1. **Automatic blocking**: The extension works automatically once installed
2. **Toggle on/off**: Click the extension icon to open the popup and toggle blocking
3. **Status indicator**: The popup shows current blocking status

## How It Works

The extension uses Chrome's `declarativeNetRequest` API to block network requests to worldshopping.jp domains at the browser level. This approach is:

- **More efficient** than JavaScript-based blocking
- **More reliable** than content script filtering
- **Faster** with minimal performance impact

## Privacy

- ✅ **No data collection** - Extension doesn't collect any user data
- ✅ **No tracking** - No analytics or telemetry
- ✅ **Local storage only** - Settings stored locally in browser
- ✅ **No external connections** - Only blocks connections, doesn't make any
