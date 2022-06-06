const Contenedor = require('./Contenedor.js')
const {test,product} = require ('./TestContenedor.js')

const express = require ('express')
const app = express()
const puerto= 8080
const fs = require('fs')



app.get('/productos',async(req, res)=>{
    const data = await product.getAll()
    res.send(data)

})
app.get('/productosRandom',async(req, res)=>{
    let idRandom= Math.ceil(Math.random() * (3 - 1) + 1)
    console.log("IdRandom",idRandom)
    const products = await product.getById(idRandom)
    console.log("products",products)
    res.send(products.title)

})
const server = app.listen(puerto, () => {
    console.log (`servidor escuchando`)
})
server.on("error", error=>console.log(`Error en servidor ${error}`))








