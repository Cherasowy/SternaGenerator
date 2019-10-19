const fs = require('fs');
const numberOfInstances = process.argv[2]

if(numberOfInstances){
    fs.writeFileSync(`./instances/instances_${numberOfInstances}.txt`, `${numberOfInstances}\n`, function (err) {
        if (err) throw err;
      });
    for(let i = 0; i < numberOfInstances; i++){
        const taskDuration = randomIntFromInterval(1,10)
        const taskReady = randomIntFromInterval(0,100)
        const taskDeadline = randomIntFromInterval(taskDuration+taskReady,taskDuration+taskReady+10)
        fs.appendFileSync(`./instances/instances_${numberOfInstances}.txt`, `${taskDuration} ${taskReady} ${taskDeadline}\n`, function (err) {
            if (err) throw err;
        })
    }

} else {
    console.log('Number of instances not specified')
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }