let fs=require("fs");
let path=require("path");

// file1=process.argv[2];
// file2=process.argv[3];
function appendfn(file1,s,file2){
let content=fs.readFileSync(file1,{encoding:'utf8',flag:'r'});

fs.appendFileSync(file2,content);
console.log(fs.readFileSync(file2,{encoding:'utf8',flag:'r'}));
}
module.exports={
    fn:appendfn
}