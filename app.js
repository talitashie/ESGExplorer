function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section=document.getElementById("resultados-pesquisa");

     // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa=document.getElementById("campo-pesquisa").value;
    if (campoPesquisa==""){return}
    section.innerHTML=<p>Desculpa! Não encontramos sua empresa ESG.</p>
    campoPesquisa= campoPesquisa.toLowerCase()

    // Inicializar uma string vazia para armazenar os resultados
    let resultados="";
    let titulo="";
    let descricao="";
    let tag="";

    for (let dado of patrocinadores) { 
        titulo=patrocinadores.titulo.toLocaleLowerCase()
        descricao=patrocinadores.titulo.toLocaleLowerCase()
        tag=patrocinadores.titulo.toLocaleLowerCase()
        
      if (patrocinadores.titulo.includes(campoPesquisa)||patrocionadores.descricao.includes(campoPesquisa)||patrocinadores.link.includes (campoPesquisa)||patrocinadores.tag.includes(campoPesquisa)) {
        resultados += `
          <div class="resultados">
            <div class="item-resultado">
              <h2><a href="${patrocionadores.link}"target="_blank">${patrocionadores.titulo}</a></h2>
              <p class="descricao-meta">${patrocinadores.descricao}</p>
              <a href="${patrocionadores.link}"target="_blank">Saiba Mais</a>
            </div>
          </div>
        `;
      }
    }
    // Itera sobre os apoiadores acadêmicos e adiciona seus dados aos resultados,
    // caso o título do apoiador inclua o termo pesquisado
    for (let dado of apoioacademico) {
        titulo=apoioacademico.titulo.toLocaleLowerCase()
        descricao=apoioacademico.titulo.toLocaleLowerCase()
        tag.apoioacademico.titulo.toLocaleLowerCase()
      if (apoioacademico.titulo.includes(campoPesquisa)||apoioacademico.descricao.includes(campoPesquisa)||apoioacademico.link.includes(campoPesquisa )||apoioacademico.link.includes(campoPesquisa)) {
        resultados += `
          <div class="resultados">
            <div class="item-resultado">
              <h2><a href="${apoioacademico.link}" target="_blank">${apoioacademico.titulo}</a></h2>
              <p class="descricao-meta">${apoioacademico.descricao}</p>
              <a href="${apoioacademico.link}" target="_blank">Saiba Mais</a>
            </div>
          </div>
        `;
      }
    }
  if (!resultados) {resultados="<p> Não localizamos sua pesquisa!</p>"}
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML=resultados;
  }