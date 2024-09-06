function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Não foi encontrado resultado para a pesquisa"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultado = "";
    let titulo = "";
    let descricao = "";

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.descricao.toLocaleLowerCase
        descricao = dado.descricao.toLocaleLowerCase
        if (titulo.includes(campoPesquisa) || descricao.includes) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
        }
    }
    if (!resultado){
        resultado ="<p>Não foi encontrado resultado para a pesquisa!"
        return
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}



