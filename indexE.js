const os = require("os");
const fs = require("fs");
const path = require("path");

// console.log(os.cpus());
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.arch())
// console.log((os.uptime() / 3600).toFixed(2))
// console.log(os.platform())

// console.log(path.basename(__filename)) current file name: index.js
// console.log(path.basename(__dirname)) folder name which file locates: lesson-node 
// console.log(path.dirname(__filename)) file path
// console.log(path.dirname(__dirname)) folder path
// console.log(path.extname(__filename)) file type: js
// console.log(path.parse(__filename)) full info about file 
// fs.mkdir(path.join(__dirname, '/exercise'), {}, (err)=>{
//     if(err) throw err;
//     console.log('success')
// })
// fs.writeFile(path.join(__dirname, '/exercise', 'list.txt'), 'Bismilla',(err)=>{
//     if(err)throw err;
//     console.log('success');
// })
// fs.mkdir(path.join(__dirname, '/me'), {}, (err)=>{
//     if(err) throw err;
//     console.log('success')
// })
// fs.writeFile(path.join(__dirname, '/me', 'projects.jsx'), 'import styled from "styled-components"', (err)=>{
//     if(err) throw err;
//     console.log('success');
// })
// fs.appendFile(path.join(__filename, '/me', 'project.jsx'), 'const Hello = styled.div``', (err)=>{
//     if(err) throw err;
//     console.log('success');
// })
// fs.appendFile(path.join(__filename, 'project.jsx'), 'hellollos', (err)=>{
//     if(err) throw err;
//     console.log("hello")
// })
// fs.mkdir(path.join(__dirname, 'main.js'), {}, (err)=>{
//     if(err) throw err;
//     console.log('success')
// })

// fs.mkdir(path.join(__dirname, 'main'), {}, (err)=>{
//     if(err) throw err;
//     console.log('folder is created')
// })
// fs.writeFile(path.join(__dirname, '/main', 'list.txt'),'Bismillah', (err)=>{
//     if(err)throw err;
//     console.log('file, detail is added')
// })
// fs.appendFile(path.join(__dirname, '/main', 'list.txt'), 'Alhamdulillah', (err)=>{
//     if(err) throw err;
//     console.log('Alhamdulillah')
// })
// fs.mkdir(path.join(__dirname, 'main.jsx'), (err)=>{
//     if(err) throw err;
//     console.log('file is created')
// })
// fs.readFile(path.join(__dirname, '/main', 'list.txt'), 'utf-8', (err, data)=>{
//     if(err)throw err;
//     console.log(data.split(''));
// })
// fs.rename(path.join(__dirname, '/main'), path.join(__dirname, 'reason'), (err)=>{
//     if(err) throw err;
//     console.log('success')
// })
// console.log(path.extname(__filename))
// const today = new Date();

// function formatData (date){


//     return new Intl.DateTimeFormat(
//         'uz',
//         {weekday:'long'}
//     ).format(date)
// }
// console.log(`Bugun hafta kuni:  ${today}`)
// const ba = 'https://i.imgur.com/';
// const person = {
//     name: 'Gregorio Y. Zara',
//     imageId: '7vQD0fP',
//     imageSize: 's',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
//   console.log(`${ba}${person.imageId}${person.imageSize}.jpg`)