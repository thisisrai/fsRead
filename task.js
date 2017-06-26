const add = require('./commands/add')
const done = require('./commands/done')
const list = require('./commands/list')

const inputFunction = (firstArgument, secondArgument) => {
    switch (firstArgument) {
        case 'add':
            add.addFunction(secondArgument)
            break
        case 'done':
            done.doneFunction(secondArgument)
            break
        case 'list':
            list.listFunction(secondArgument)
            break 
        default:
            console.log('Invalid Argument')
    }
}

inputFunction(process.argv[2], process.argv[3])