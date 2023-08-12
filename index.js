document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    performSearch();
});

function performSearch() {
    var searchInput = document.querySelector(".search-form input[type=search]");
    var searchQuery = searchInput.value.toLowerCase();

    var boxes = document.querySelectorAll(".shop .box");
    var noResultsMessage = document.getElementById("noResultsMessage");

    var foundResults = false; // Variable para controlar si se encontraron resultados

    boxes.forEach(function(box) {
        var title = box.querySelector("h4").innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            box.style.display = "block"; // Muestra la carta si coincide con la búsqueda
            foundResults = true;
        } else {
            box.style.display = "none"; // Oculta la carta si no coincide con la búsqueda
        }
    });

    if (foundResults) {
        noResultsMessage.style.display = "none"; // Oculta el mensaje de no se han encontrado resultados
    } else {
        noResultsMessage.style.display = "block"; // Muestra el mensaje de no se han encontrado resultados
    }
}
