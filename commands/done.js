const fs = require('fs')

const doneFunction = (toAdd) => {
    const todeleteTask = toAdd.toString()
     fs.exists('task.json', (exists) => {
        if(exists) {
            fs.readFile('task.json', function(err, data) {
                if(err) {
                    console.log(err)
                    process.exit(1)
                } else {
                    let counter = 0
                    let returnData = JSON.parse(data)
                    let completedItem = ""
                    let deleted = false
                    returnData.TODO.forEach(element => {
                        if (element.hasOwnProperty(todeleteTask)) {
                            completedItem = element[todeleteTask]
                            returnData.TODO.splice(counter, 1)
                            fs.writeFile('task.json', JSON.stringify(returnData), (err) => {
                                if (err) console.log (err)
                                else console.log(`Completed the task '${completedItem}'`)
                            })
                        }
                            counter++
                    })
                }
                counter = 0; 
            })
        } else console.log('To do does not exist.')
    })
}

module.exports = {
    doneFunction
}