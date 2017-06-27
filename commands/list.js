const fs = require('fs')

const listFunction = (toAdd) => {
     fs.exists('task.json', (exists) => {
        if(exists) {
            fs.readFile('task.json', function(err, data) {
                if(err) {
                    console.log(err)
                    process.exit(1)
                } else {
                    let counter = 0
                    let returnData = JSON.parse(data)
                    console.log("ID Description")
                    console.log("-- -----------")
                    returnData.TODO.forEach( element => {
                        counter ++
                        for (let i in element) {
                            console.log(`${i}  ${element[i]}`)
                        }
                    })
                    console.log()
                    console.log(`${counter} tasks.`)
                }
            })
        } else {
            console.log('Nothing to do.')
        }
    })
}

module.exports = {
    listFunction
}