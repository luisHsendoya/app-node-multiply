var argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b',{
        alias: 'base',
        demandOption: true,
        default: 10,
        describe: 'is the multiplier',
        type: 'number'
    })
    .option('n',{
        alias: 'num',
        demandOption: true,
        default: 1,
        describe: 'is the multiplicand',
        type: 'number'
    })
    .argv



module.exports=argv;