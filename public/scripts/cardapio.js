
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