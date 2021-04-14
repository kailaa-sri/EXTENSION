var sysInfo = chrome.system;

function myFunction() {
    setInterval(function() { Init(); }, 3000);
}

var dataset = 0;

function Init() {

    sysInfo.cpu.getInfo(function(cpu) {

        document.getElementById("content").innerHTML = "";
        document.getElementById("arch").innerHTML = cpu.archName;
        document.getElementById("feature").innerHTML = cpu.features;
        document.getElementById("num").innerHTML = cpu.numOfProcessors;
        document.getElementById("model").innerHTML = cpu.modelName;
        dataset;
        var cputotal = 0;
        var cputot = 0;
        for (i = 0; i < cpu.numOfProcessors; i++) {
            cputotal = cpu.processors[i].usage.total - cpu.processors[i].usage.idle;
            cputot = cpu.processors[i].usage.total + cputot;
            //dataset = cputotal / cpu.processors[i].usage.total;
        }
        dataset = cputotal / cputot;


    });

}

chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {

        sendResponse({ reply: dataset })

    }
);

myFunction();