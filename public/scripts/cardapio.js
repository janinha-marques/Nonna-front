async function esperar(millisegundos) {
    return new Promise(resolve => {
        setTimeout(resolve, millisegundos);

    })
}


function carregarFiltro() {
    const botoesFiltro = document.querySelectorAll("#filtro button")

    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", function () {
            const filtro = botao.dataset.filtro;

            const pratos = document.querySelectorAll(".prato");
            pratos.forEach(prato => {
                const categoria = prato.dataset.categoria;
                if (filtro == "todos" || categoria == filtro) {
                    prato.classList.remove('d-none');
                } else {
                    prato.classList.add('d-none');
                }
            });
        });
    })
}

async function carregarCardapio() {
    let cardapio;
    let cardapioHTML = "";
    const elementoCardapio = document.querySelector("#cardapio");
    elementoCardapio.innerHTML = `<img class="reload-img" src="/public/images/reload.gif" alt="Recarregar"/>`;
    
    await esperar(250);

    try {
        const chamada = await fetch("http//localhost:8080/produtos");
        if (!chamada.ok) {
            throw new Error(`response status: ${chamada.status}`);
        }
        cardapio = await chamada.json();

        cardapio.forEach((item) => {
            cardapioHTML = cardapioHTML + `<div class="col-md-6 mb-4 prato" data-categoria="${item.categoria}">
                <div class="border rounded p-3 h-100 d-flex flex-column">
                    <div class="d-flex justify-content-between-align-items-start gap-3">
                        <div>
                            <h5>${item.nome}</h5>
                            <p class="text-muted small">${item.descricao}</p>
                        </div>
                            class="cardapio-img-rounded">
                    </div>
                    <p class="mt-auto mb-0 pt-3">${new Intl.NumberFormat('pt-br', { style: "currency", currency: "BRL" }).format(item.preco)}</p>
                </div>
            </div>
            `
        })
    } catch (error) {

        cardapioHTML = `
            <div class="d-flex aligh-items-center gap-3 text-danger">
                <p class= "m-0"<b>>Houve um erro ao buscar o cardapio!</b></p>
                <button type= "button" class="btn btn-outline-primary" onClick="carregarCardapio()">
                    <img src="/public/images/reload.gif" alt= "Recarregar" width="24"/> Recarregar
                </button>
            </div>
            `;

        console.log("Houve um erro ao buscar os dados, tende novamente mais tarde!", error);
        //return;
    }

    elementoCardapio.innerHTML = cardapioHTML;
}

carregarCardapio();
carregarFiltro();
