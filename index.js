const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumalator, element) => element + accumalator,0)

console.log(totalBatteries)