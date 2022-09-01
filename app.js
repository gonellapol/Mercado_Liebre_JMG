const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3030, function(){
    console.log("Servidor funcionando en puerto3030");
});

app.listen(3001, () =>
   console.log('Servidor corriendo')
);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});