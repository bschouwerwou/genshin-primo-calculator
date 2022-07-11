var events = [["2.8 Patch Compensation","2022-07-12",600],
["Klee/Kazuha Trial","2022-07-12",40],
["Heizou Hangout","2022-07-12",60],
["Kazuha Story","2022-07-12",60],
["Summertime Odyssey","2022-07-15",120],
["Summertime Odyssey","2022-07-16",120],
["Mihoyo Web Login","2022-07-17",20],
["Summertime Odyssey","2022-07-17",120],
["Summertime Odyssey","2022-07-18",120],
["Summertime Odyssey","2022-07-19",120],
["Yoimiya Trial","2022-08-02",20],
["Mihoyo Web Login","2022-08-03",20],
["Mihoyo Web Login","2022-08-10",20],
["2.8 Livestream Codes","2022-08-12",300],
["Mihoyo Web Login","2022-08-17",20],
["3.0 Patch Compensation","2022-08-23",600],];

function createTable() {
    var table = document.getElementById("events");
    var eventNames = [];
    for (var e in events) {
        if(eventNames.indexOf(events[e][0]) < 0)
            eventNames.push(events[e][0]);
    }
    for (var n in eventNames) {
        var row = table.insertRow(-1);
        ename = eventNames[n];
        row.insertCell(0).innerHTML = ename;
        var gems = 0;
        var start = "";
        var end = "";
        for (e in events) {
            if(events[e][0] == ename) {
                gems += events[e][2];
                end = events[e][1];
                if(start == "") {
                    start = events[e][1];
                }
            }
        }
        row.insertCell(1).innerHTML = start;
        row.insertCell(2).innerHTML = end;
        row.insertCell(3).innerHTML = gems;
    }
}
