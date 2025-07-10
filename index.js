const animacion = document.querySelector('.animacion');
animacion.classList.add("zoom");

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
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=861,fit=scale-down/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718654129298-Sin%20t%C3%83%C2%ADtulo%20(Post%20de%20Instagram).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718206147913-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(1).png'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718207709963-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(1150%20x%201700%20px).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=861,fit=scale-down/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718207453893-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(3).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718206411066-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(2).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718653559319-Sin%20t%C3%83%C2%ADtulo%20(1500%20x%201920%20px)%20(1300%20x%201920%20px)%20(1800%20x%201920%20px).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718652919512-Sin%20t%C3%83%C2%ADtulo%20(1500%20x%201920%20px)%20(Tu%20historia).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718652654713-Sin%20t%C3%83%C2%ADtulo%20(1500%20x%201920%20px)%20(1).png',
});

productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=861,fit=scale-down/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718654129298-Sin%20t%C3%83%C2%ADtulo%20(Post%20de%20Instagram).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718206147913-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(1).png'
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718207709963-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(1150%20x%201700%20px).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=861,fit=scale-down/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718207453893-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(3).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 120,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718206411066-Sin%20t%C3%83%C2%ADtulo%20(1080%20x%201100%20px)%20(1080%20x%201200%20px)%20(2).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 400,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718653559319-Sin%20t%C3%83%C2%ADtulo%20(1500%20x%201920%20px)%20(1300%20x%201920%20px)%20(1800%20x%201920%20px).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 450,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718652919512-Sin%20t%C3%83%C2%ADtulo%20(1500%20x%201920%20px)%20(Tu%20historia).png',
});

  productos.push({
  name: 'Agave Variegado',
  price: 500,
  image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=582,h=582,fit=scale-down,q=100/cdn-ecommerce/store_01HWDCY929GSR319J5K304VR2Q%2Fassets%2F1718652654713-Sin%20t%C3%83%C2%ADtulo%20(1500%20x%201920%20px)%20(1).png',
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