<<<<<<< HEAD

async function carregandoCardapio() {

        elementoCardapio.innerHTML = cardapioHTML;

        function mostrarCadastroProdutos(){
        let cardapioHTML;    
        const elementoCardapio = document.querySelector("# cardapio");
            <div class="mb-3">
                <label for="nome-produto" class="form-label">Nome do produto:</label>
                <input type="text" id="nome-produto" name="nome-produto" class="form-control">
             </div>

            <div class="mb-3">
                <label for= "descricao-produto" class= "form-label">Descrição  do produto:</label>
                <input type="text" id="descricao-produto" name="descricao-produto" class="form-control">
            </div>

            <div class="mb-3">
                <label for="categoria" class="form-label"> Categoria:</label>
                <select id= "categoria name="categoria class="form-select">
                <Option value="">Selecione uma categoria"</Option>
                <Option value="massa">Massa</Option>
                <option value="pizza">Pizza</option>
                <option value="entrada">Entrada</option>
                <option value="bebida">Bebida</option>
                <option value="sobremesa">Sobremesa</option>
                </select>

            </div>

            <div class="mb-3">
                <label for-"preco" class="form-label">Preço:</label>
                <input type="number" id="preco" class="form-conytol">

            </div>

            <div class="d-flex">
                <button class="btn btn-primary" onclick="cadastrarProduto()">Cadastrar</button>
                <button class="btn btn-secondary ms-2" onclick="carregarCardapio()">Cancelar</button>
                </div>

                ;

            }

                async function cadastrarProduto() {
                     const elementoNomeproduto = document.querySelector("#nome-produto");
                     const Nomeproduto = elementoNomeproduto.value;

                     const elementoDescricaoproduto = document.querySelector("#descricao-produto");
                     const descricaoproduto = elementoDescricaoproduto.value;

                     const elementoCategoriaproduto = document.querySelector("#categoria-produto");
                     const categoriaproduto = elementocategoriaproduto.value;

                     const elementoPrecoproduto = document.querySelector("#preco-produto");
                     const preco = elementoPreco.value;


                     const produto = {
                        nome: elementoNomeproduto,
                        descricao: desccricaoProduto,
                        categoria: categoriaproduto,
                        preco: preco


                };
                try {
                       const resulta = await fetch("http://localhost:8080/produtos"), {
                                             
                        
   
       

                }


                    carregarCardapio();
                } catch(error) {
                    console.log(error);

                }
                    
                     
                     //Capturar os dados do usuario
                     //Validar informações
                     //Enviar cadastro pro backend
                     // Recuperar o resultado
                     // . Se resultado é positivo, apenas atualiza a lista de cardapio
                     // . se negativo, coloca a mensagem de erro em um campo de erros
                    
                    }
                

                carregarCardapio();
                carregarFiltro();

    

        
         
        
        
















             
    cardapioHTML = cardapioHTML + '<div class-"col-md-3 col-md-6 col-sm-12 mb-4 h-100 prato" data-categoria="$(item.categoria)">
    <div  class= "border rounded p-3 h-100 d-flex flex-colum">
        <div class="d-flex justify-content-between align-items-start gap-3">

        <div>
            <h5>${item.nomePrato}</h5>
            <p class="text-muted small">${item.descrcao}</p>
            </div>
            imag src="${"
    
});
=======
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
>>>>>>> 3af81959261e8dae2263109a57c8bccc3ea08d26
