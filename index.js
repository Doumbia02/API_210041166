const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World I am Youssouf Mansour')
})

app.listen(3000, ()=>{

    console.log("Server is running on 3000");
     

})
