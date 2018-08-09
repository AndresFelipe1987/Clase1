console.log("bienvenido")
// serve para mostrar mensajes o realizar operaciones en la consola/terminal
var express=require("express");
// expres es 
var app =express();
// app es para definir una ruta
app.get("/",function(req,res){res.send("bienvenido");});
app.get("/hello",function(req,res){res.send("camino");});

// el get 
app.listen(3000,function(){console.log("fumcione!");});
//sirve para que la pagina web este en linea
//abre la comunicacion con el servidor

