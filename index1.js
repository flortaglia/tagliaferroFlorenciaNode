class Usuario{
    constructor(nombre, apellido,libros,mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName(){
        return `${this.nombre}  ${this.apellido}`
    }
    addMascota(nombre){
        this.mascotas.push(nombre) 
    }
    countMascotas(){
        let cantidadMascota= this.mascotas.length 
        // console.log(typeof (cantidadMascota)) 
        // // es un número
        return cantidadMascota
    }
    addBook(titulo, autor){
        this.libros.push({nombre:titulo,autor:autor})
    }
    
    getBookNames(){
        const titleBooks = this.libros.map(item=>
            item.nombre)
        return (titleBooks)  
    }

}

const Florencia = new Usuario("Florencia", "Tagliaferro", [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['perro', 'gato'] )
Florencia.addMascota("ternera")
let numeroMascotas = Florencia.countMascotas()
console.log(numeroMascotas)
let persona= Florencia.getFullName()
console.log(persona)
Florencia.addBook("Estabilidad","Conrradi Delláqua")
let nombreLibros= Florencia.getBookNames()
console.log(nombreLibros)



   