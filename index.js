const animacion = document.querySelector('.animacion');
const Inferior  = document.querySelector('.Inferior')



animacion.classList.add("zoom");

const fecha_actual = new Date();
const anoActual = fecha_actual.getFullYear();
const ano_copy = document.createElement('a')
ano_copy.innerText = "-"+anoActual
Inferior.appendChild(ano_copy)

const imagenes = [
    "./imagenes/cosecha2.jpg",
    "./imagenes/cosecha3.jpg",
    "./imagenes/cosecha4.jpg",
    "./imagenes/cosecha5.jpg"
    
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

  productos.push({
  name: 'Agave Variegado',
  price: 400,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg',
});

  productos.push({
  name: 'Agave Variegado',
  price: 450,
  image: './imagenes/WhatsApp Image 2025-07-09 at 11.38.33 AM.jpeg',
});

  productos.push({
  name: 'Agave Variegado',
  price: 500,
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
    productPrice.innerText = '$' + item.price;
    const productName = document.createElement('p');
    productName.innerText = item.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
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