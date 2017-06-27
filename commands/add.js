const fs = require('fs')

const addFunction = (toAdd) => {

    fs.exists('task.json', (exists) => {
        if(exists) {
            fs.readFile('task.json', function(err, data) {
                if(err) {
                    console.log(err)
                    process.exit(1)
                } else {
                    let addObject = {}
                    let counter
                    let returnData = JSON.parse(data)
                    returnData.TODO.forEach( element => {
                        for (let i in element) {
                            counter = i
                        }
                    })
                    if(counter === undefined || counter === NaN) counter = 0
                    counter ++
                    addObject[counter] = toAdd
                    returnData.TODO.push(addObject)
                    fs.writeFile('task.json', JSON.stringify(returnData), (err) => {
                        if (err) console.log (eff)
                        else console.log(`Created task ${counter}.`)
                    })
                }
            })
        } else {
            fs.writeFile('task.json', JSON.stringify({"TODO": [{"1": `${toAdd}`}]}), (err) => {
                if (err) console.log (eff)
                else console.log(`Created task 1.`)
            })
        }
    })

}

module.exports = {
    addFunction
}