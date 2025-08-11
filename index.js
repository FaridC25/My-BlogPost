const animacion = document.querySelector('.animacion');
const Inferior  = document.querySelector('.Inferior')
 


animacion.classList.add("zoom");

const fecha_actual = new Date();
const anoActual = fecha_actual.getFullYear();
const ano_copy = document.createElement('a')
ano_copy.innerText = "-"+anoActual
Inferior.appendChild(ano_copy)

const imagenes = [
  " ./imagenes/6.webp",
    "./imagenes/7.webp",
    "./imagenes/9.webp",
    "./imagenes/11.webp",
    "./imagenes/12.webp"
    
  ];

let index = 0;


setInterval(() => {
    index = (index + 1)  % imagenes.length;// vuelve a 0 al final
    animacion.src = imagenes[index];
    animacion.classList.remove("zoom");
    void animacion.offsetWidth;
    animacion.classList.add("zoom");
  }, 4000); 


  const productos = [
    // "Producto 1", "Producto 2", "Producto 3", "Producto 4",
    // "Producto 5", "Producto 6", "Producto 7", "Producto 8",
    // "Producto 9", "Producto 10", "Producto 11", "Producto 12",
    // "Producto 9", "Producto 10", "Producto 11", "Producto 12",
    // "Producto 9", "Producto 10", "Producto 11", "Producto 12",
    // "Producto 9", "Producto 10", "Producto 11", "Producto 12"
  ];


  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg',
});




  const itemsPorPagina = 8;
  let paginaActual = 1;

  function mostrarCatalogo(pagina) {
    const inicio = (pagina - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    const itemsVisibles = productos.slice(inicio, fin);

    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    itemsVisibles.forEach(item => {
      // const div = document.createElement("div");
      // div.className = "item";
      // div.textContent = item;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', item.image);
    //productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + item.price + ' COP';
    productPrice.classList.add('product-info-price')
    const productName = document.createElement('p');
    productName.innerText = item.name;
     productName.classList.add('product-info-Name')

     const ProductSelection = document.createElement('div')
     ProductSelection.classList.add('Product_Selection') 
    
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(ProductSelection);
    
  
    //const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
   // productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    //productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    //productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    //cardsContainer.appendChild(productCard);

    ///////////////////////////////////
    catalogo.appendChild(productCard);
    });

    actualizarPaginacion(pagina);
  }

  function actualizarPaginacion(pagina) {
    const totalPaginas = Math.ceil(productos.length / itemsPorPagina);
    const paginacion = document.getElementById("paginacion");
    paginacion.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
      const boton = document.createElement("button");
      boton.textContent = i;
      if (i === pagina) boton.classList.add("active");
      boton.onclick = () => {
        paginaActual = i;
        mostrarCatalogo(i);
      };
      paginacion.appendChild(boton);
    }
  }

  // Mostrar la primera página al cargar
  mostrarCatalogo(paginaActual);
  const producto = document.querySelector('.product-card')

  document.getElementById("anterior").addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarCatalogo(paginaActual);
  }
});

document.getElementById("siguiente").addEventListener("click", () => {
  const totalPaginas = Math.ceil(productos.length / itemsPorPagina);
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarCatalogo(paginaActual);
  }
});

document.querySelector('.catalogo').addEventListener("mouseover", (event) => {
  const tarjeta = event.target.closest('.product-card')
  console.log(tarjeta)
  if(tarjeta != null ){
  const precio_producto = tarjeta.querySelector('.product-info-price')
  precio_producto.style.paddingBottom = "10px";
  precio_producto.style.borderBottom = "2px solid var(--color-principal)";
  }
  
 })


 document.querySelector('.catalogo').addEventListener("mouseout", (event) => {
  const tarjeta = event.target.closest('.product-card')
  console.log(tarjeta)
  if(tarjeta != null ){
  const precio_producto = tarjeta.querySelector('.product-info-price')
  precio_producto.style.paddingBottom = "";
  precio_producto.style.borderBottom = "";
  }
  
 })

// producto.addEventListener('click',MostrarPorducto)

// function MostrarPorducto(){
//   const fondo = document.createElement("div");
//   fondo.style.position = "fixed";
//   fondo.style.top = 0;
//   fondo.style.left = 0;
//   fondo.style.width = "100%";
//   fondo.style.height = "100%";
//   fondo.style.backgroundColor = "rgba(0,0,0,0.7)";
//   fondo.style.zIndex = 9999;
//   fondo.style.display = "flex";
//   fondo.style.justifyContent = "center";
//   fondo.style.alignItems = "center";

//   document.body.appendChild(fondo);
//   document.body.style.overflow = "hidden"
// }

document.querySelector('.burbuja_whatsapp').addEventListener('click', function () {

  const imagenURL = "file:///C:/Users/Jurgen/Documents/Pagina%20Villa%20Juliana/imagenes/WhatsApp%20Image%202025-07-09%20at%2011.38.33%20AM.jpeg";
  const mensaje = `Hola, me interesa esta imagen: ${imagenURL}`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const numero = "573182330968";
  const enlace = `https://web.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

  //  const enlace = 'https://web.whatsapp.com/send?phone=573182330968&text=mamelo'
   // Abrir en una nueva ventana
  window.open(enlace, '_blank');
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // solo se anima una vez
    }
  });
});

document.querySelectorAll('.contenido').forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.seccion_catalogo').forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.seccion_punto_venta').forEach(section => {
  observer.observe(section);
});


document.querySelector(".navbar_menu_phone").addEventListener("click", function() {
const navbar_phone = document.querySelector(".navbar_menu_phone")
const navbar = document.querySelector(".navbar");
navbar_phone.classList.toggle("active")

const menu_burger_abierto = navbar_phone.classList.contains("active")
const menu_phone =  document.querySelector(".navbar_menu_items_phone")

// if (menu_burger_abierto){
//     menu_phone.style.display = "flex"
// }else{
//     menu_phone.style.display = "none"
// }

menu_phone.classList.toggle("activephone")

});
