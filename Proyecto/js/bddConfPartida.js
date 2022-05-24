"use strict"

const MongoClient = require('mongodb').MongoClient;
const test = require('assert');

const url = "mongodb://localhost:27017/Conquizt1.busquedaUsuario";

MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var dbo = db.db("Conquizt1.busquedaUsuario");
    console.log("Base de Datos creada");
    db.close();

    const liBusqueda1 = document.getElementById("li-busqueda-1");
    const liBusqueda2 = document.getElementById("li-busqueda-2");
    const liBusqueda3 = document.getElementById("li-busqueda-3");
    const liBusqueda4 = document.getElementById("li-busqueda-4");

    const guardar = document.getElementById("btnGuardarCJ");

    function guardarBoton(){ 

      dbo.collection("jugadorBusqueda").insertOne(liBusqueda1, function(err, res) {

        if (err) throw err;
        console.log("1 documento agregado");
        db.close();

      });

      dbo.collection("jugadorBusqueda").insertOne(liBusqueda2, function(err, res) {

          if (err) throw err;
          console.log("1 documento agregado");
          db.close();

        });

      dbo.collection("jugadorBusqueda").insertOne(liBusqueda3, function(err, res) {

          if (err) throw err;
          console.log("1 documento agregado");
          db.close();

      });

      dbo.collection("jugadorBusqueda").insertOne(liBusqueda4, function(err, res) {

          if (err) throw err;
          console.log("1 documento agregado");
          db.close();
          
      });

    };

});