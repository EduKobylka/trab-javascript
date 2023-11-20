const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = form.elements["nome"].value;
  const idade = form.elements["idade"].value;
  const genero = form.elements["genero"].value;
  const checkboxes = form.elements["preferencias"];
  const comentario = form.elements["comentario"].value;
  const preferencias = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      preferencias.push(checkboxes[i].value);
    }
  }

  if (nome === "Maria" && parseInt(idade) > 10 && preferencias.length === 5) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "";
  }

  let texto = `Nome: ${nome}\nIdade: ${idade}\nGênero: ${genero}\nPreferências: ${preferencias.join(
    ", "
  )}\nComentário: ${comentario}`;

  const span = document.createElement("span");

  span.innerHTML = texto;
});
