let fs=require("fs");
let path=require("path");
// let file1 =process.argv[2];
// let file2=process.argv[3];
// let file3=process.argv[4];

function displayfn(file1,file2,file3){
if(file1==undefined && file2==undefined)
{
    
    console.log("content of file");
}
else{
    console.log("\n\n\t!!!!content of  first file!!!")
}
console.log(fs.readFileSync(file1,{encoding:'utf8', flag:'r'}));
if(file2!=undefined){

console.log("\n\n\t!!!!content of second file!!!")
console.log(fs.readFileSync(file2,{encoding:'utf8', flag:'r'}));
}
if(file3!=undefined){

console.log("\n\n\t!!!!content of third file!!!")
console.log(fs.readFileSync(file3,{encoding:'utf8', flag:'r'}));
}
}
module.exports={
    fn:displayfn
}
