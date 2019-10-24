const fs = require('fs');
const numberOfInstances = process.argv[2]

if(numberOfInstances){
    fs.writeFileSync(`./instances/test_${numberOfInstances}.txt`, `${numberOfInstances}\n`, function (err) {
        if (err) throw err;
      });
    for(let i = 0; i < numberOfInstances; i++){
        const taskDuration = randomIntFromInterval(1,10)
        const taskReady = randomIntFromInterval(0,numberOfInstances * 2)
        const taskDeadline = randomIntFromInterval(taskDuration+taskReady,taskDuration+taskReady+numberOfInstances/10)
        fs.appendFileSync(`./instances/test_${numberOfInstances}.txt`, `${taskDuration} ${taskReady} ${taskDeadline}\n`, function (err) {
            if (err) throw err;
        })
    }

} else {
    let newNumberOfInstances = 50;
    for (i = 0; i < 10; i++){
        fs.writeFileSync(`./instances/test_${newNumberOfInstances}.txt`, `${newNumberOfInstances}\n`, function (err) {
            if (err) throw err;
          });
        for(let i = 0; i < newNumberOfInstances; i++){
            const taskDuration = randomIntFromInterval(1,10)
            const taskReady = randomIntFromInterval(0,newNumberOfInstances * 2)
            const taskDeadline = randomIntFromInterval(taskDuration+taskReady,taskDuration+taskReady+newNumberOfInstances/10)
            fs.appendFileSync(`./instances/test_${newNumberOfInstances}.txt`, `${taskDuration} ${taskReady} ${taskDeadline}\n`, function (err) {
                if (err) throw err;
            })
        }
        console.log(`Generated ${newNumberOfInstances} of test instances`)
        newNumberOfInstances += 50
    }

}
//function to generate random from max/min
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }