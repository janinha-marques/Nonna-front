async function carregandoCardapio() {

    try {

        const chamada =  fetch("http://localhost:8080/produtos");
        catch(error){
            console.log("Houve um erro ao buscar os dados, tente novamente mais tarde");

        }

let cardapioHTML = "";
cardapio.forEach((item => {
    cardapioHTML = cardapioHTML + '<div class-"col-md-3 col-md-6 col-sm-12 mb-4 h-100 prato" data-categoria="$(item.categoria)">
    <div  class= "border rounded p-3 h-100 d-flex flex-colum">
        <div class="d-flex justify-content-between align-items-start gap-3">

        <div>
            <h5>${item.nomePrato}</h5>
            <p class="text-muted small">${item.descrcao}</p>
            </div>
            imag src="${"
    
});