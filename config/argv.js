var argv = require('yargs/yargs')(process.argv.slice(2))
    .option({
        'b': {
            alias: 'base',
            demandOption: true,
            default: 10,
            describe: 'is the num of multiply',
            type: 'number'
        }
    },{
        'n': {
            alias: 'num',
            demandOption: true,
            default: 1,
            describe: 'is the base of multiply',
            type: 'number'
        }
    }
    )
    .argv
;


module.exports=argv;