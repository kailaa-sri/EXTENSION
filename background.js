chrome.runtime.onInstalled.addListener(() => {
    chrome.app.window.create('index.html', {
        "innerBounds": {
            "width": 500,
            "height": 600

        }
    });
});
console.log("background running");
/*function systemInfo() {
    chrome.runtime.sendMessage("chrome extension id", { type: 'systemInfo', id: 1 }, null,
        function(data) {
            console.log(data);
        }
    );
}


function networkInfo() {
    chrome.runtime.sendMessage("chrome extension id", { type: 'memory', id: 1 }, null,
        function(data) {
            console.log(data);
        }
    );
}*/


function myDisplayer(some) {
    /*document.getElementById("content").innerHTML = some;*/
}

async function myFunction() { return await chrome.system.display; }

myFunction().then(
    function(value) { myDisplayer(value); }
);