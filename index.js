const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port=3000
const path = require('path')

app.get('/',(req,res) => {
    res.send('Hello World')  
})

app.get('/image',(req,res) => {
    let imagePath = path.join(__dirname, 'download.png');
    res.sendFile(imagePath) 
})

//app.get('/dynamicimage',(req,res) => {
    //console.log(req.query.image)
    //let a=req.query.image
    //let imagePath = path.join(__dirname, a);
    //res.sendFile(imagePath) 
    //res.send(req.query.name)
//})

app.get('/dynamicimage',(req,res) => {
    console.log(req.query.image)
    let a=req.query.image
    let imagePath = path.join(__dirname, a);
    fetch('download.png,download2.png,download1.png', { method: 'HEAD' })
    .then(res => {
        if (res.ok) {
            console.log('Image exists.')
        } else {
            console.log('Image does not exist.')
        }
    })
    .catch(err => console.log('Error:', err))
})
//fetch('download.png', { method: 'HEAD' })
  //.then(res => {
    //if (res.ok) {
     // console.log('Image exists.')
    //} else {
    //  console.log('Image does not exist.')
    //}
 // })
 // .catch(err => console.log('Error:', err))

    
app.listen(port,()=> {
console.log(`Example an app listening on port ${port}`)
})
