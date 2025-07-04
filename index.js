const animacion = document.querySelector('.animacion');
animacion.classList.add("zoom");

const imagenes = [
    "./cosecha2.jpg",
    "./cosecha3.jpg",
    "./cosecha4.jpg",
    "./cosecha5.jpg"
    
  ];

let index = 0;


setInterval(() => {
    index = (index + 1)  % imagenes.length;// vuelve a 0 al final
    animacion.src = imagenes[index];
    animacion.classList.remove("zoom");
    void animacion.offsetWidth;
    animacion.classList.add("zoom");
  }, 4000); 