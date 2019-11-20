const fs = require('fs');
const numberOfInstances = process.argv[2]

if(numberOfInstances){
    fs.writeFileSync(`./results/testResult_${numberOfInstances}.txt`, `0\n`, function (err) {
        if (err) throw err;
      });
    const standardPiece = Math.ceil(numberOfInstances / 4);
    let stringP1 = ""
    let stringP2 = ""
    let stringP3 = ""
    let stringP4 = ""
    for(let i = 1; i <= standardPiece; i++){
        i < standardPiece ? stringP1 += `${i} ` : stringP1 += `${i}`
    }
    for(let i = standardPiece + 1 ; i <= 2* standardPiece ; i++){
        i < 2* standardPiece ? stringP2+= `${i} ` : stringP2+= `${i}`
    }
    for(let i = 2*standardPiece + 1 ; i <= 3* standardPiece ; i++){
        i < 3* standardPiece ? stringP3+= `${i} ` : stringP3+= `${i}`
    }
    for(let i = 3*standardPiece + 1; i <= numberOfInstances ; i++){
        i < numberOfInstances ? stringP4+= `${i} ` : stringP4+= `${i}`
    }

    fs.appendFileSync(`./results/testResult_${numberOfInstances}.txt`, `${stringP1}\n`, function (err) {
        if (err) throw err;
    })
    fs.appendFileSync(`./results/testResult_${numberOfInstances}.txt`, `${stringP2}\n`, function (err) {
        if (err) throw err;
    })
    fs.appendFileSync(`./results/testResult_${numberOfInstances}.txt`, `${stringP3}\n`, function (err) {
        if (err) throw err;
    })
    fs.appendFileSync(`./results/testResult_${numberOfInstances}.txt`, `${stringP4}\n`, function (err) {
        if (err) throw err;
    })
}