#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const display = require("./display");

let linebreakFile = require("./linebreak");

let appendFile=require("./append");

let overrideFile=require("./override");

let input=process.argv.slice(2);

let command = input[0];

// if(fs.lstatSync(command).isFile)
// {
//     if(input[1]==undefined)
//     display.fn(input[0]);
//     else if(fs.lstatSync(input[1]).isFile)
//     {
//         display.fn(input[0],input[1],input[2]);
//     }
//     else if(input[1]==">")
//     {
//        overrideFile.fn(input[0],input[1],input[2])
//     }
//     else if(input[1]==">>")
//     {
//         appendFile.fn(input[0],input[1],input[2]);
//     }
//     else 
//     {
//         console.log("wrong input");
//     }
// }

switch(command){
    case "-s":
    linebreakFile.fn(input[1],input[2],input[3]);
    break;

    case "-b":
    console.log("no added to non empty lines");
    break;

    case "-n":
    console.log(" no added to all the lines ");
    break;

    default:
    {
    if(input[1]==undefined)
    display.fn(input[0]);
    else if(fs.lstatSync(input[1]).isFile)
    {
        display.fn(input[0],input[1],input[2]);
    }
    else if(input[1]==">")
    {
       overrideFile.fn(input[0],input[1],input[2])
    }
    else if(input[1]==">>")
    {
        appendFile.fn(input[0],input[1],input[2]);
    }
    else 
    {
        console.log("wrong input");
    }
    break;
}
}
