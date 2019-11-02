const fs = require('fs');
const instanceOfProblem = process.argv[2];
const dummy = process.argv[3];
const resultOfProblem = process.argv[3];
const file = fs.readFileSync(instanceOfProblem,"utf-8")
const fileLines = file.toString().split("\n")
const numberOfInstances = Number(fileLines[0])

const checkCorrectnessAndDelay = (resultSumOfDelay, resultTasksOnProcesses, tasks) => {
    let CountSumOfDelay = 0;
    console.log(`Suma opoznień : ${resultSumOfDelay}`)
    console.log(`Taski na procesie 1 : ${resultTasksOnProcesses.p0}`)
    console.log(`Taski na procesie 2 : ${resultTasksOnProcesses.p1}`)
    console.log(`Taski na procesie 3 : ${resultTasksOnProcesses.p2}`)
    console.log(`Taski na procesie 4 : ${resultTasksOnProcesses.p3}`)
    tasks.forEach((task,i) => {
        console.log(`Task ${i} do zrobienia : ${task.duration} ${task.ready} ${task.deadline}`)
    })
    console.log(`Ilosc taskow: ${tasks.length}`)
    console.log(`Ilosc taskow na P1: ${resultTasksOnProcesses.p0.length}`)
    console.log(`Ilosc taskow na P2: ${resultTasksOnProcesses.p1.length}`)
    console.log(`Ilosc taskow na P3: ${resultTasksOnProcesses.p2.length}`)
    console.log(`Ilosc taskow na P4: ${resultTasksOnProcesses.p3.length}`)
    if(tasks.length === resultTasksOnProcesses.p0.length + resultTasksOnProcesses.p1.length + resultTasksOnProcesses.p2.length + resultTasksOnProcesses.p3.length){
        console.log("Suma taskow się zgadza")
        let delayOfP1 = 0;
        let endOfTaskTimeP1 = 0;
        resultTasksOnProcesses.p0.forEach(task =>{
            if(tasks[`${task - 1}`].ready > endOfTaskTimeP1){
                endOfTaskTimeP1 = tasks[`${task - 1}`].ready + tasks[`${task - 1}`].duration
                if(endOfTaskTimeP1 > tasks[`${task - 1}`].deadline){
                    delayOfP1 += endOfTaskTimeP1 - tasks[`${task - 1}`].deadline
                }
            } else{
                endOfTaskTimeP1 += tasks[`${task - 1}`].duration
                if(endOfTaskTimeP1 > tasks[`${task - 1}`].deadline){
                    delayOfP1 += endOfTaskTimeP1 - tasks[`${task - 1}`].deadline
                }
            }
        })
        let delayOfP2 = 0;
        let endOfTaskTimeP2 = 0;
        resultTasksOnProcesses.p1.forEach(task =>{
            if(tasks[`${task - 1}`].ready > endOfTaskTimeP2){
                endOfTaskTimeP2 = tasks[`${task - 1}`].ready + tasks[`${task - 1}`].duration
                if(endOfTaskTimeP2 > tasks[`${task - 1}`].deadline){
                    delayOfP2 += endOfTaskTimeP2 - tasks[`${task - 1}`].deadline
                }
            } else{
                endOfTaskTimeP2 += tasks[`${task - 1}`].duration
                if(endOfTaskTimeP2 > tasks[`${task - 1}`].deadline){
                    delayOfP2 += endOfTaskTimeP2 - tasks[`${task - 1}`].deadline
                }
            }
        })
        let delayOfP3 = 0;
        let endOfTaskTimeP3 = 0;
        resultTasksOnProcesses.p2.forEach(task =>{
            if(tasks[`${task - 1}`].ready > endOfTaskTimeP3){
                endOfTaskTimeP3 = tasks[`${task - 1}`].ready + tasks[`${task - 1}`].duration
                if(endOfTaskTimeP3 > tasks[`${task - 1}`].deadline){
                    delayOfP3 += endOfTaskTimeP3 - tasks[`${task - 1}`].deadline
                }
            } else{
                endOfTaskTimeP3 += tasks[`${task - 1}`].duration
                if(endOfTaskTimeP3 > tasks[`${task - 1}`].deadline){
                    delayOfP3 += endOfTaskTimeP3 - tasks[`${task - 1}`].deadline
                }
            }
        })
        let delayOfP4 = 0;
        let endOfTaskTimeP4 = 0;
        resultTasksOnProcesses.p3.forEach(task =>{
            if(tasks[`${task - 1}`].ready > endOfTaskTimeP4){
                endOfTaskTimeP4 = tasks[`${task - 1}`].ready + tasks[`${task - 1}`].duration
                if(endOfTaskTimeP4 > tasks[`${task - 1}`].deadline){
                    delayOfP4 += endOfTaskTimeP4 - tasks[`${task - 1}`].deadline
                }
            } else{
                endOfTaskTimeP4 += tasks[`${task - 1}`].duration
                if(endOfTaskTimeP4 > tasks[`${task - 1}`].deadline){
                    delayOfP4 += endOfTaskTimeP4 - tasks[`${task - 1}`].deadline
                }
            }
        })
        console.log(`Suma opoznien na P1 : ${delayOfP1}`)
        console.log(`Suma opoznien na P2 : ${delayOfP2}`)
        console.log(`Suma opoznien na P3 : ${delayOfP3}`)
        console.log(`Suma opoznien na P4 : ${delayOfP4}`)
        console.log(`Opóźnienia w wyniku : ${resultSumOfDelay}`)
        console.log(`Rzeczywiste opóźnienia : ${delayOfP1 + delayOfP2 + delayOfP3 + delayOfP4}`)
    } else{
        console.log("Suma taskow się nie zgadza")
    }
    //TODO - count sum of delay from using tasks array
}
//grab instance data in put it in tasks array
let tasks = [];
for(let i = 1; i <= numberOfInstances; i++){
    tasks.push({duration: Number(fileLines[i].split(' ')[0]), ready: Number(fileLines[i].split(' ')[1]), deadline: Number(fileLines[i].split(' ')[2])})
}

if (dummy === "test"){
    //make dummy result from instance
    const resultSumOfDelay = 0;
    const taskOnProceses = {p0: [], p1:[], p2:[], p3:[]}
    for(let i = 1; i <= numberOfInstances; i++){
        taskOnProceses[`p${i%4}`].push(i);
    }
    checkCorrectnessAndDelay(resultSumOfDelay,taskOnProceses,tasks)
} else{
    const result = fs.readFileSync(resultOfProblem,"utf-8");
    const resultLines = result.toString().split("\n");
    const resultSumOfDelay = Number(resultLines[0]);
    const taskOnProceses = {
        p0: resultLines[1].split(" "),
        p1: resultLines[2].split(" "),
        p2: resultLines[3].split(" "),
        p3: resultLines[4].split(" ")
    }
    checkCorrectnessAndDelay(resultSumOfDelay,taskOnProceses,tasks)

}

