const fs = require('fs');
const instanceOfProblem = process.argv[2];
const instanceOfProblem = process.argv[3];
const dummy = process.argv[4];
const file = fs.readFileSync(instanceOfProblem,"utf-8")
const fileLines = file.toString().split("\n")
const numberOfInstances = Number(fileLines[0])
//grab instance data in put it in tasks array
let tasks = [];
for(let i = 1; i <= numberOfInstances; i++){
    tasks.push({duration: fileLines[i].split(' ')[0], ready: fileLines[i].split(' ')[1], deadline: fileLines[i].split(' ')[2]})
}

if (dummy === "dummy"){
    //make dummy result from instance
    const resultSumOfDelay = 0;
    const taskOnProceses = {p1: [], p2:[], p3:[], p4:[]}
    for(let i = 1; i <= numberOfInstances; i++){
        taskOnProceses[`p${i%4}`]
    }
} else{
    const result = fs.readFileSync(resultOfProblem,"utf-8");
    const resultLines = result.toString().split("\n");
    const resultSumOfDelay = Number(resultLines[0]);
    const taskOnProceses = {
        p1: [resultLines[1].split(" ")],
        p2: [resultLines[2].split(" ")],
        p3: [resultLines[3].split(" ")],
        p4: [resultLines[4].split(" ")]
    }
    checkCorrectnessAndDelay(resultSumOfDelay,taskOnProceses,tasks)

}

const checkCorrectnessAndDelay = (resultSumOfDelay, resultTasksOnProcesses, tasks) => {
    //TODO - count sum of delay from using tasks array
}