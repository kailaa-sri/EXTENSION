var sysInfo = chrome.system;

function myFunction() {
    setInterval(function() { Init(); }, 3000);
}

var dataset;

function Init() {

    sysInfo.cpu.getInfo(function(cpu) {

        document.getElementById("content").innerHTML = "";
        document.getElementById("arch").innerHTML = cpu.archName;
        document.getElementById("feature").innerHTML = cpu.features;
        document.getElementById("num").innerHTML = cpu.numOfProcessors;
        document.getElementById("model").innerHTML = cpu.modelName;
        dataset;
        var cputotal = 0;
        var cpuidle = 0;
        for (i = 0; i < cpu.numOfProcessors; i++) {
            cputotal = cpu.processors[i].usage.total - cpu.processors[i].usage.idle;
            cpuidle = cpuidle + cpu.processors[i].usage.idle;
            dataset = cputotal / 33333333;
        }

    });

}

chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
        console.log(dataset);
        sendResponse({ reply: dataset })

        //console.log("Message received\nrequest:" + request.msg + "\nsender:" + sender + "sendResponse:" + sendResponse);
    }
);

myFunction();