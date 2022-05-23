class Usuario{
    constructor(nombre, apellido,libros,mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName(){
        return console.log(this.nombre +" "+ this.apellido)
    }
    addMascota(nombre){
        this.mascotas.push(nombre) 
    }
    countMascotas(){
        let cantidadMascota=(this.mascotas.length)  
        return console.log(`La cantidad de mascotas es ${cantidadMascota}`)
    }
    addBook(titulo, autor){
        this.libros.push({nombre:titulo,autor:autor})
    }
    
    getBookNames(){
        const titleBooks = this.libros.map(item=>
            item.nombre)
        return console.log(titleBooks)  
    }

}

const Florencia = new Usuario("Florencia", "Tagliaferro", [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['perro', 'gato'] )
Florencia.addMascota("ternera")
Florencia.countMascotas()
Florencia.getFullName()
Florencia.addBook("Estabilidad","Conrradi Delláqua")
Florencia.getBookNames()