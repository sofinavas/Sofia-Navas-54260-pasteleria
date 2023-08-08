

let productosHTML = '';

productos.forEach((producto)=>{
  productosHTML += ` 
    <div class="col-12 col-md-6 col-lg-3">
    <div class="card">
        <img class="torta" src="${producto.imagen}" alt="tiramisu">
        <div class="descripción-producto">
            <p class="nombre-producto">${producto.nombre}</p>
            <p class="precio-producto">$ ${producto.precio}</p>
        </div>
        <button class="agregar-al-carrito js-agregar-al-carrito" data-id-producto = "${producto.id}">AGREGAR AL CARRITO</button>
    </div>
  </div>
  `;
});

document.querySelector('.js-padre-cards').
innerHTML = productosHTML;

document.querySelectorAll('.js-agregar-al-carrito')
.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const idProducto = button.dataset.idProducto;

    let matchingItem;

    carrito.forEach((item)=>{
      if (idProducto === item.idProducto){
        matchingItem = item;
      }
    }); 

    if(matchingItem){
      matchingItem.cantidad += 1;
    } else {
      carrito.push({
        idProducto: idProducto,
        cantidad: 1
      })
    }

   
    console.log(carrito)
  })
})