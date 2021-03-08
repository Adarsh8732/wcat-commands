let fs=require("fs");
let path=require("path");
// let file=process.argv[2];
function linebreakfn(file,s,file2){
    console.log(file);
let content=fs.readFileSync(file,{encoding:'utf8',flag:'r'});
// let newcontent=content.replace(/(\r\n|\n|\r)/gm,"");
let newcontent=content.replace(/\s+/g,' ').trim();
if(s==undefined)
{
    fs.writeFileSync(file,newcontent);
    console.log(fs.readFileSync(file,{encoding:'utf8',flag:'r'}));
}
else {   
    fs.writeFileSync(file2,newcontent);
    console.log(fs.readFileSync(file2,{encoding:'utf8',flag:'r'}));
}
}
module.exports={
     fn:linebreakfn
 }



// let content=fs.readFileSync(file,{encoding:'utf8',flag:'r'});
// let content="    my   name is   is a   a  "
// let trimcontent=content.replace(/\s+/g,' ').trim();
// console.log(trimcontent);

// fs.writeFileSync(file2,trimcontent);
// console.log(fs.readFileSync(file2,{encoding:'utf8',flag:'r'}));