// Necesitamos un metodo que cuando yo presione F5 no se retorne al home.html como lo hace actualmente
//con la forma por ejm: <a href="home.html"target="pages">HOME</a>
//Actualmente tenemos esto en el iframe:  <iframe id="indexIframe" name="pages" src="home.html" frameborder="0">
// por esto cada vez que reiniciamos nos manda al home y no permanece en la página donde se actualizo
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("indexIframe");
  const params = new URLSearchParams(window.location.search); //me entrega todos los datos despues de ?, en este caso "?pagina=referencia.html"
  const pagina = params.get("pagina") || "home.html";
  if (iframe) {
    iframe.src = pagina;
  }
});