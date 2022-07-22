const colors= require('colors')
const fs= require('fs')


function valid(num){
    return (Math.sign(num)===1 && typeof(num)!== 'boolean'  && (num%1===0)  && typeof(num)!== 'string');
}


 async function table(num=1,flag=false, base=10){
    let print='';
    let view='';
    try {
        if(valid(num) && valid(base)){
            for (let i = 1; i <=base; i++) {
                view+= `${colors.green(i)} ${'*'.red} ${colors.green(num)} ${'='.brightYellow} ${colors.brightBlue(i*num)}\n`;
                print+= `${i} * ${num} ${'='} ${(i*num)}\n`

            }
            fs.writeFile(`./out/table_of_${num}.txt`,print,(err)=>{
                if(err) throw err;
                
            })
            if(flag){
                console.log(view)
            }
            return `${"the file has been created".bgGreen}`

        }else{
            throw error

        }
    } catch (error) {
        throw  `${"Error en el dato introducido".bgRed}` 


    }


}


module.exports={
    table
}