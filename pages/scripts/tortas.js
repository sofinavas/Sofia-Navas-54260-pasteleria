const productos = [{
  imagen: '../img/chaja-entera.webp',
  nombre: 'Chajá',
  precio: 8000
},{
  imagen: '../img/cheesecake-zoom.webp" ',
  nombre: 'Cheesecake',
  precio: 7500
},{
  imagen: '../img/marquise-arriba.webp" ',
  nombre: 'Marquise',
  precio: 4500
},{
  imagen: '../img/concorde-zoom.webp ',
  nombre: 'Concorde',
  precio: 4000
},{
  imagen: '../img/milhojas-entera.webp ',
  nombre: 'Milhojas',
  precio: 5000
},{
  imagen: '../img/pavlova-entera.webp ',
  nombre: 'Pavlova',
  precio: 8000
},{
  imagen: '../img/tiramisu-zoom.webp ',
  nombre: 'Tiramisu',
  precio: 6400
}];

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
        <button class="agregar-al-carrito">AGREGAR AL CARRITO</button>
    </div>
  </div>
  `;
})
console.log(productosHTML);

document.querySelector('.js-padre-cards').innerHTML = productosHTML;