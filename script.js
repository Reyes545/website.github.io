const frases = [
  "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
  "No sueñes tu vida, vive tu sueño.",
  "La disciplina tarde o temprano vencerá a la inteligencia.",
  "Cree en ti y todo será posible.",
  "Hoy es un buen día para empezar de nuevo.",
  "No tienes que ser el mejor, solo ser mejor que ayer.",
  "Hazlo con miedo, pero hazlo."
];

function generarFrase() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  const fraseElemento = document.getElementById("frase");

  fraseElemento.classList.remove("animada");
  fraseElemento.style.opacity = 0;

  setTimeout(() => {
    fraseElemento.textContent = frases[randomIndex];
    fraseElemento.style.opacity = 1;
    fraseElemento.classList.add("animada");
  }, 300);
}
