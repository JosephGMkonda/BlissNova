const express = require('express')
const path = require('path')

const app = express();
app.use(express.json())

app.use(express.static('blissnova/build'))

app.get('*',(req,res) => {
    const myPath = path.resolve(__dirname,'blissnova','build','index.html')
    return res.sendFile(myPath);
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server listerning on ${PORT}`))