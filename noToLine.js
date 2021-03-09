let fs=require("fs");
let path=require("path");
let count=0;
// var j=0;
// function Num()
// {
//     // for(let i=0;i<10;i++)
//     // j++;
//     j=j+1;
//    return count+j;
// }
function noToLinefn(file)
{

let content=fs.readFileSync(file,{encoding:'utf8',flag:'r'});
let newcontent=content.replace(/\r?\n/g,`\n${++count}`);

// console.log(newcontent);
fs.writeFileSync(file,newcontent);
}

module.exports={
    fn:noToLinefn
}