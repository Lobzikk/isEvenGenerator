const fs=require('fs');
const prompt=require('prompt-sync')();
function byteCountTransform(bytes) {
    let colors={cyan:'\x1b[36m',green:'\x1b[32m',yellow:'\x1b[33m',red:'\x1b[31m'} //Colors for console
    let count=0;
    while (bytes/1024>=1) {
        bytes/=1024;
        count++;
    }
    bytes=Math.ceil(bytes);
    switch (count) {
        case 0:
            return `${colors.cyan}${bytes}b\x1b[0m`
        case 1:
            return `${colors.cyan}${bytes}kb\x1b[0m`
        case 2:
            return `${colors.green}${bytes}mb\x1b[0m`
        case 3:
            return `${colors.yellow}${bytes}gb\x1b[0m`
        case 4:
            return `${colors.red}${bytes}tb\x1b[0m`
        default:
            return `${colors.red}a lot\x1b[0m`
    }
}
function countSpace(n){ // range is [-n;n]
    // handling special cases
    if (!Number(n)&&Number(n)!==0) {
        throw `dude this shit ain't even a number r u serious bruh 💀💀💀`
    } else {
        n=Number(n);
        n=Math.floor(Math.abs(n));
    }
    if (n>Number.MAX_SAFE_INTEGER) throw `ain't no way we countin this this shit too huge bruh 💀💀💀`
    if (n==0) return 242

    let [sum,ind]=[0,0];
    sum+=Math.floor(39.5*n); // 39.5 - average size of one case construction without digits
    while (n>=Math.pow(10,ind)*9){
        let a=Math.pow(10,ind)*9;
        n-=a;
        sum+=a*2+1;
        ind++;
    }

    return sum+n*(ind+1)*2+n+1+202; // 202 - size of the module without case constructions   
}
console.log('We will create a module that will allow you to check if the number in the given range is even or not by using the most optimized way to do this possible')
let answer=prompt('Please write the highest number that needs to be checked>>> ');
if (prompt(`Are you sure? The module will need about ${byteCountTransform(countSpace(answer))} of free space! (Y/N)>>> `)=='Y') {
fs.writeFileSync('isEvenModule.js','/**\n * @param {number} num\n * @returns {boolean}\n */\nexport default function isEven(num) {\n    switch (num) {\n');
answer=Number(answer);
fs.appendFileSync('isEvenModule.js','       case 0:\n           return true\n');
if (!(answer===0)){
    let even=false
    for (let i = 1; i <= answer; i++){
        fs.appendFileSync('isEvenModule.js',`       case ${i}:\n            return ${even}\n`);
        fs.appendFileSync('isEvenModule.js',`       case -${i}:\n          return ${even}\n`);
        even=!even;
    }
}
fs.appendFileSync('isEvenModule.js','           default:\n            throw "The number is out of range!!!11!11!!!1"\n    }\n}') 
console.log('Done!') }