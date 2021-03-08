let fs=require("fs");
let path=require("path");

// file1=process.argv[2];
// file2=process.argv[3];
function overridefn(file1,s,file2){
let content=fs.readFileSync(file1,{encoding:'utf8', flag:'r'});
// if(!fs.existsSync(file2))
// {

// }
fs.writeFileSync(file2,content);//writefile checks if file exist overwrite
// otherwise creat   new file and write content in it
console.log(fs.readFileSync(file2,{encoding:'utf8', flag:'r'}));
}
module.exports={
    fn:overridefn
}