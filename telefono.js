const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Click

btnIncrement.addEventListener('click', () => {
	valueByDefault += 1;
	inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('click', () => {
	if (valueByDefault === 1) {
		return;
	}
	valueByDefault -= 1;
	inputQuantity.value = valueByDefault;
});

// Toggle
// Constantes Toggle Titles
const toggleDescription = document.querySelector(
	'.title-description'
);
const toggleAdditionalInformation = document.querySelector(
	'.title-additional-information'
);
const toggleReviews = document.querySelector('.title-reviews');

// Constantes Contenido Texto
const contentDescription = document.querySelector(
	'.text-description'
);
const contentAdditionalInformation = document.querySelector(
	'.text-additional-information'
);
const contentReviews = document.querySelector('.text-reviews');

// Funciones Toggle
toggleDescription.addEventListener('click', () => {
	contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
	contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () => {
	contentReviews.classList.toggle('hidden');
});




// Carrito




  // Verificar si hay datos en localStorage y cargarlos en cartItems
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Función para manejar la adición de productos al carrito
  function addToCart() {
    // Obtener información del producto
    const title = document.querySelector(".container-title").textContent;
    const imgSrc = document.querySelector(".container-img img").src;
    const price = document.querySelector(".container-price span").textContent;

    // Crear un objeto con la información del producto
    const product = {
      title: title,
      imgSrc: imgSrc,
      price: price,
    };

    // Agregar el producto al arreglo del carrito
    cartItems.push(product);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Actualizar el valor del carrito en todas las páginas
    updateCartCounter();

    // Mostrar mensaje de éxito o cualquier otra acción deseada
    alert("¡Producto agregado al carrito!");

    // Redireccionar a la página "shop.html"
    window.location.href = "shop.html";
  }

  // Función para actualizar el contador del carrito en todas las páginas
  function updateCartCounter() {
    const cartElements = document.querySelectorAll(".content-shopping-cart .number");
    cartElements.forEach((cartElement) => {
      cartElement.textContent = `(${cartItems.length})`;
    });
  }

  // Agregar un escuchador de eventos al botón "Añadir al carrito"
  const addToCartButton = document.querySelector(".btn-add-to-cart");
  addToCartButton.addEventListener("click", addToCart);







  	
