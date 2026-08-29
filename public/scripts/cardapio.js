const cardapio = [
    {
        "nomePrato" : "Fetuccine ao molho branco",
        "categoria" : "massas",
        "descricao" : "Massa fresca feita na hora com toque de parmesão ralado.",
        "localImagem" : "public/images/Fettuccine.jfif",
        "preco" : 42.29
    },
    {
        "nomePrato" : "Pizza Margherita",
        "categoria" : "pizzas",
        "descricao" : "Massa fresca feita na hora, assada em forno a lenha .",
        "localImagem" : "public/images/pizza.margherita.jfif",
        "preco" : 55.20
    },
    {
        "nomePrato" : "Polenta Fortaia",
        "categoria" : "massas",
        "descricao" : "Feita com milho orgânico e sem conservante, textura firme.",
        "localImagem" : "public/images/polenta.fortaia.jfif",
        "preco" : 35.30
    },
    {
        "nomePrato" : "Salame e Queijo Colonial",
        "categoria" : "frios",
        "descricao" : "Feita com porco e queijo da colonia, ingredientes frescos e com pouca gordura!.",
        "localImagem" : "public/images/salame.queijo colonial.jfif",
        "preco" : 34.30
    },
    {
        "nomePrato" : "Vinho Goethe(Taça)",
        "categoria" : "bebida",
        "descricao" : "Feita com uvas orgânicas cuidadosamente selecionadas, vinho claro e encorpado.",
        "localImagem" : "public/images/vinho goethe.jfif",
        "preco" : 25.80
    },
];
let cardapioHTML = "";

cardapio.forEach((item) => {
    cardapioHTML = cardapioHTML + `<div class="col-md-6 mb-4 prato" data-categoria="${item.categoria}">
                <div class="border rounded p-3 h-100 d-flex flex-column">
                    <div class="d-flex justify-content-between-align-items-start gap-3">
                        <div>
                            <h5>${item.nomePrato}</h5>
                            <p class="text-muted small">${item.descricao}</p>
                        </div>
                        <img src="${item.localImagem}" alt="${item.nomePrato}"
                            class="cardapio-img-rounded">
                    </div>
                    <p class="mt-auto mb-0 pt-3">${new Intl.NumberFormat('pt-br', {style: "currency", currency: "BRL"}) .format(item.preco)}</p>
                </div>
            </div>
            `
})

const elementoCardapio = document.querySelector("#cardapio");
elementoCardapio.innerHTML = cardapioHTML;

const botoesFiltro = document.querySelectorAll("#filtro button")

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", function () {
        const filtro = botao.dataset.filtro;
    
        const pratos = document.querySelectorAll(".prato");
        pratos.forEach(prato => {
            const categoria = prato.dataset.categoria;
            if(filtro == "todos" || categoria == filtro) {
                prato.classList.remove('d-none');
            } else {
                prato.classList.add('d-none');
            }
        });
    });
})
