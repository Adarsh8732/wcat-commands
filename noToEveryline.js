let fs=require("fs");
let path=require("path");
let count=0;
function noToEveryline(file){
    let vari=0;
    let content=fs.readFileSync(file,{encoding:'utf8',flag:'r'});
    let newcontent=content.replace(/\r?\n/g,`\n${++count}`);
    
    // console.log(newcontent);
    fs.writeFileSync(file,newcontent);

}
module.exports={
    fn:noToEveryline
}