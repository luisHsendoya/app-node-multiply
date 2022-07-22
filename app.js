const {table}= require('./HELPER/fs.js')
const argv= require('./config/argv.js')




 //table(argv.n,1,argv.b)
table(2,1,argv.b).then(res=>{console.log(res)}).catch(err=>{console.log(err)})