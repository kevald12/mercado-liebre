const express = require ('express');
const path = require ('path');

const app = express ();

app.listen(process.env.PORT || 3000,() => console.log('El servidor funciona continua'));

app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',(req,res)=>{
    const pathHome = path.resolve(__dirname,'views/home.html')
    res.sendFile(pathHome)
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"));
});