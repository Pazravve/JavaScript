const carrito = [] 

const ordenarMenorMayor = () => {
    games.sort ((a, b) => a.precio - b.precio)
    mostrarLista()
};

const ordenarMayorMenor = () => {
    games.sort ((a, b) => b.precio - a.precio)
    mostrarLista()
};

const mostrarLista = () => {
    const listaOrdenada = games.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    })
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'));

    comprarProducto(listaOrdenada)
};


//--------------------

const comprarProducto = (listaOrdenada) => {
    let juegoNombre = ''
    let juegoCantidad = 0
    let otroJuego = false

    do {
        juegoNombre = prompt('¿Qué juego desea comprar?'+'\n\n'+listaOrdenada.join('\n'));
        juegoCantidad = parseInt(prompt('¿Cuántos quieres comprar?'));
        

        const producto = games.find(producto => producto.nombre.toLowerCase() === juegoNombre.toLowerCase())
        console.log(producto)

        if(producto) {
            agregarAlCarrito(producto, producto.id, juegoCantidad)
        }
        otroJuego = confirm('¿Desea agregar otro producto?');
    } while (otroJuego);


    confirmarCompra()
}    


const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)

    if(!productoRepetido){
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
}
//---------------------------------------------------------------
const confirmarCompra = () => {

    const listaJuegos = carrito.map(producto => {
        return '- '+producto.nombre+' > Cantidad: '+producto.cantidad

})

    const isConfirm = confirm('Confirm:'
        +'\n\n'+listaJuegos.join('\n')
        +'\n\n¿Desea continuar? Presione ACEPTAR.'

    )
    if(isConfirm){
        finalizarCompra(listaJuegos);
    }


}

const finalizarCompra = (listaJuegos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)

    alert('Detalle de su compra: '
    +'\n\n'+listaJuegos.join('\n')
    +'\n\nTotal de productos: '+cantidadTotal
    + '\n\nEl total de su compra es de: '+precioTotal
    
    )

}
const comprar = () =>{
    const productosBaratos = confirm('¿Desea ordenar los productos del más barato al más caro?')

    if(productosBaratos){
        ordenarMenorMayor()
    }else{
        ordenarMayorMenor()
    }
}


comprar()
