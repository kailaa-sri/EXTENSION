var sysInfo = chrome.system;

function myFunction() {
    setInterval(function() { Init(); }, 3000);
}

function Init() {

    sysInfo.cpu.getInfo(function(cpu) {

        document.getElementById("content").innerHTML = cpu.archName + "\n" + cpu.features + "\n" + cpu.numOfProcessors + "\n" + cpu.modelName;


    });
}
myFunction();