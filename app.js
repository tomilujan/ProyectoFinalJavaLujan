let carritoDeCompras = []

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

$(document).ready(function () {
    $('#contenedor-productos').append($('<img>').attr({src:'https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif'}))
    setTimeout(() => {
        mostrarProductos(stockProductos)
    }, 1000);

})


$("#selecTalles").on("change",()=>{
    console.log(selecTalles.value)
    if($("#selecTalles").val() == "all"){
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(el => el.talle == $("#selecTalles").val()))
        console.log(stockProductos.filter(el => el.talle == $("#selecTalles").val()))
    }
})

mostrarProductos(stockProductos)

function mostrarProductos(array){
    $('#contenedor-productos').empty()
     for (const producto of array) {
         $('#contenedor-productos').append(`<div class="producto">
                                             <div class="card">
                                             <div class="card-image">
                                                 <img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" class="loader">
                                                 <img src=${producto.img} class="img-productos">
                                                 <span class="card-title">${producto.nombre}</span>
                                                 <a id="boton${producto.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                                             </div>
                                             <div class="card-content">
                                                 <p>${producto.desc}</p>
                                                 <p>Talle: ${producto.talle}</p>
                                                 <p> $${producto.precio}</p>
                                             </div>
                                         </div>
                                     </div> `)

         $('.img-productos').on('load',function () {
             $(this).css({'display': 'none'})
             setTimeout(() => {
                 $(this).css({'display': 'block'})
                 $('.loader').css({'display': 'none'})
             }, 4000);
           })
         // let boton = document.getElementById(`boton${producto.id}`)

         $(`#boton${producto.id}`).click(()=>{
                 agregarAlCarrito(producto.id)
                 Toastify({
                     text: "Producto Agregado",
                     backgroundColor: "green",
                     className: "info",
                   }).showToast();
             })
     }

}


function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(prodR => prodR.id == id);
    if(repetido){
        repetido.cantidad = repetido.cantidad + 1;
        $(`#cantidad${repetido.id}`).html(`cantidad: ${repetido.cantidad}`)
        actualizarCarrito()
    }else{
        let productoAgregar = stockProductos.find(prod => prod.id == id);

        carritoDeCompras.push(productoAgregar);

        productoAgregar.cantidad = 1;

        actualizarCarrito()
        $('#carrito-contenedor').append(`<div class="productoEnCarrito">
                        <p>${productoAgregar.nombre}</p>
                        <p>Precio: ${productoAgregar.precio}</p>
                        <p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>
                        <p>talle: ${productoAgregar.talle}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                        </div>`)


        $(`#eliminar${productoAgregar.id}`).click(function () {
            $(this).parent().remove()
            carritoDeCompras = carritoDeCompras.filter(prodE => prodE.id != productoAgregar.id)
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            actualizarCarrito()
            Toastify({
                text: "Producto Eliminado",
                backgroundColor: "red",
                className: "info",
              }).showToast();
          })
    }
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}

function recuperar(){
    let recuperado = JSON.parse(localStorage.getItem("carrito"))
    if (recuperado){
        recuperado.forEach(el => {
            agregarAlCarrito(el.id)
        });
    }
}

recuperar()

function actualizarCarrito() {
   contadorCarrito.innerText = carritoDeCompras.reduce((acc , el)=> acc + el.cantidad,0);
   precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad) , 0)
}

$("#titulo").animate({fontSize: "40px"},3000).delay(2000);

$(document).ready(function () {
    //---------SCROLL ANIMADO-----------

    $("#Contacto").click(function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $("#contenidoContacto").offset().top

        }, 1000);
    })

    $("#arriba").click(function (e) {
        e.preventDefault();
        $('html, body').animate({

            scrollTop: $(".logo").offset().top

        }, 1000);
    })


});