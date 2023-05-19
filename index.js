const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(accum, batteries) {
    return batteries + accum;
}, 0);
// Code your solution here
