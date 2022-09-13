//Aqui vamos a crear el CRUD Create,Read,Update, Delete

//.get .post .put .delete

const express = require("express")

//Router nos ayuda a crear un sistema de rutas
const router =express.Router()

//1. requerimos nuestro modelo
const Libro = require("../models/Libro.model")

//Localhost:3000/libros
router.get("/", (req, res) => {
    //Buscar todos los libros de DB
    Libro.find().then((libros) => {
      console.log(libros);
      res.render("Libros/lista", { libros: libros });
    });
  });

//libros de formulario
router.get("/formulario", (req, res)=>{
    res.render("Libros/formulario")
})

//localhost:3000/libros/:idDelLibro
router.get("/:idDelLibro", (req, res) => {
    console.log(req.params.idDelLibro)
    //buscar por id
    Libro.findById(req.params.idDelLibro)
    .then(detalles => {console.log(detalles)
     res.render("Libros/detalles", detalles)   
    });
})


//libros/crear
//vamos a utilizar el metodo post para recibir los datos
router.post("/crear", (req, res)=>{
    console.log(req.body)
    Libro.create(req.body)
    .then(nuevoLibro =>{
        console.log(nuevoLibro)
        res.redirect("/libros")
    })
})

router.get("/:id/editar", (req, res)=>{
    //obtenemos el id 
    //req.params.id
    Libro.findById(req.params.id)
    .then((libro)=>{
        res.render("Libros/editar", libro)
    })
})

//recibir los datos y actualizarlos
router.post("/:id/editar", (req,res)=>{
    //req.param.id


    //req.body
    Libro.findByIdAndUpdate(req.params.id, req.body,{new: true})
    .then((libroActualizado)=>{
        res.redirect(`/libros/${req.params.id}`)
    })
    .catch((err) => console.log(err))
})

//eliminar libros 
router.post("/:id/eliminar", (req,res)=>{
    //id del libro
    //req.params.id
    Libro.findByIdAndDelete(req.params.id)
    .then((respuesta) =>{
        res.redirect("/libros")
    })
})

//Exportamos
module.exports = router;