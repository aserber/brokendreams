const express = require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo a todo trapo en el puerto 3000');
})

/* app.use('/productos', rutaProductos);
app.use ('/', rutasMain); */

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/productos/:idProducto', function(req, res){
    res.send("Bienvenidos al detalle detalle de producto " + req.params.idProducto);
});

app.get('/productos/:idProducto/comentarios/:idComentario?', function(req, res){
    if (req.params.idComentario == undefined) {
        res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto);
    } else {
    res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + " y estas enfocado en el comentario " + req.params.idComentario);
    }
});