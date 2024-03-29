document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "Princess E-Girl Fashion (1)",
      img: "images/Princess E-Girl Fashion (1).jpg"
    },
    { name: "megasloooooo", img: "images/megasloooooo.jpg" },
    { name: "megasloooooo", img: "images/megasloooooo.jpg" },
    { name: "perros 2", img: "images/perros 2.jpg" },
    { name: "perros 5 ", img: "images/perros 5.jpg" },
    { name: "perros 7", img: "images/perros 7.jpg" },
    { name: "perros 8", img: "images/perros 8.jpg" },
    {
      name: "Princess E-Girl Fashion (1)",
      img: "images/Princess E-Girl Fashion (1).jpg"
    },
    { name: "megasloooooo", img: "images/megasloooooo.jpg" },
    { name: "megasloooooo", img: "images/megasloooooo.jpg" },
    { name: "perros 2", img: "images/perros 2.jpg" },
    { name: "perros 5 ", img: "images/perros 5.jpg" },
    { name: "perros 7", img: "images/perros 7.jpg" },
    { name: "perros 8", img: "images/perros 8.jpg" }
  ];
  cardAdj.sort(() => 0.5 - Math.random()); // Implementado en lectura_05

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  //----------------- lecture_04 ----------------------------------//
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj(cardId).name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", "cardAdj{cardId]".img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
