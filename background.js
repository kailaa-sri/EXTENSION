chrome.runtime.onInstalled.addListener(() => {
    chrome.app.window.create('index.html', {
        "innerBounds": {
            "width": 500,
            "height": 600

        }
    });
});