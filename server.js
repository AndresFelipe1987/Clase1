//console.log("bienvenido")
// serve para mostrar mensajes o realizar operaciones en la consola/terminal
var express=require("express");
// expres es 
var app =express();
var path=require("path");
// sirve para obtener la ruta de manera simplificada path
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + '/src/views/index.html'))
});
app.get("/crearempresa",function(req,res){
    res.sendFile(path.join(__dirname + '/src/views/crearempresa.html'))
});
// app es para definir una ruta
//app.get("/",function(req,res){res.send("bienvenido");});
//app.get("/hello",function(req,res){res.send("camino");});

// el get 
app.listen(3000,function(){console.log("fumcione!");});
//sirve para que la pagina web este en linea
//abre la comunicacion con el servidor

