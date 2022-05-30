
const fs = require('fs')


class Contenedor{
    constructor(rutaArchivo){
        this.nombre= rutaArchivo;
    }
    add(){

    }

     save(objeto){
        try {
           fs.readFile(this.nombre, async (err,data)=>{
                if(data.length ==0){
                    let id = {'id':1}
                    let newObject=Object.assign(objeto,id)
                    // console.log(newObject)
                    const jsonData = [newObject]
                    await fs.promises.appendFile(this.nombre ,JSON.stringify(jsonData))
                    return id
                }else{    
                    const contenido = JSON.parse(data)
                    let lastIndex= contenido.length
                    // console.log(lastIndex)
                    let num= lastIndex-1
                    let newId= lastIndex+1
                    let lastId = contenido[num].id
                    // console.log(lastId)
                    let newObject=Object.assign(objeto,{'id':newId})
                    contenido.push(newObject)
                    fs.promises.writeFile(this.nombre, JSON.stringify(contenido))
                    return newId
                }
            })
  
        } catch (error) {
            console.log("ERROR")
            console.log(error)    
        }
       
    }
    async getById(id){
        try {
            const contenido = JSON.parse(await fs.promises.readFile( this.nombre ,'utf-8'))
            let objeto = contenido.find(el=>el.id==id)
            if(objeto== undefined){ return null}
            return objeto
        } catch (error) {
            console.log(`Error en getById:${error}`)
        }
        
    }
    async getAll(){
        try {
            const contenido = JSON.parse(await fs.promises.readFile( this.nombre ,'utf-8'))
            return contenido
        } catch (error) {
            console.log(`Error en getAll:${error}`)
        }
    }
    async deleteById(id){
        try {
            const contenido = JSON.parse(await fs.promises.readFile( this.nombre ,'utf-8'))
            let objeto = contenido.filter(item=>item.id!=id)
            await fs.promises.writeFile(this.nombre,JSON.stringify(objeto))
        } catch (error) {
            console.log(`Error en getById:${error}`)
        }
    }
    
    async deleteAll(){
        try {
            await fs.promises.writeFile( this.nombre,"") 
        } catch (error) {
            console.log(`Error en deleteAll:${error}`)
        }
         
    }

}

// fs.mkdir('./contenedor',error=>{
//     if(error){
//         console.log(`Hubo un error:${error}`)
//     }else{ console.log("contenedor creado")}
// })
// fs.writeFile('./contenedor/productos.txt',"",error=>{
//     if(error){
//         console.log("Hubo un error")
//     }else{ console.log("contenedor creado")}
// })
const product =new Contenedor('./contenedor/productos.txt')
let idProduct = product.save(
    {                                                                                                                                                    
    'title': 'Escuadra',                                                                                                                                 
    'price': 123.45                                                                                                                                 
  }
)

product.getById(2).then( products => console.log(products))
product.getAll().then( products => console.log(products))
product.deleteById(1).then( products => console.log(products))
product.deleteAll().then( products => console.log(products))



