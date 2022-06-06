
const Contenedor = require('./Contenedor.js')

const product =new Contenedor('productos.txt')
async function test() {
    
    let idProduct = await product.save(
        {                                                                                                                                                    
        'title': 'Escuadra',                                                                                                                                 
        'price': 123.45 ,
        'url': 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'                                                                                                                               
      }
    )

    console.log("Save:", idProduct)
    let idProduct2 = await product.save(
        {                                                                                                                                                    
        'title': 'calculadora',                                                                                                                                 
        'price': 1230.45 ,
        'url': 'https://es.pngtree.com/so/calculadora-de-dibujos-animados'                                                                                                                               
      }
    )
    console.log("Save:", idProduct2)  

    let idProduct3 = await product.save(
        {                                                                                                                                                    
        'title': 'regla',                                                                                                                                 
        'price': 233.45 ,
        'url': 'https://es.pngtree.com/so/calculadora-de-dibujos-animados'                                                                                                                               
      }
    )
    console.log("Save:", idProduct3)

    let productById = await product.getById(2)
    console.log("getById:", productById)
    
    let productgetAll= await product.getAll()
    console.log("getAll", productgetAll)

    // let productdeleteById = await product.deleteById(1)
    // console.log(`productdeleteById: ${productdeleteById}`)

    // let productById2 = await product.getById(1)
    // console.log("getById:", productById2)

    // let productdeleteById2 = await product.deleteById(1)
    // console.log(`productdeleteById: ${productdeleteById2}`) 

    // let productdeleteAll= await product.deleteAll()
    // console.log(`productdeleteAll: ${productdeleteAll}`)

}   

test()
module.exports = {test,product};


// export {test, product}