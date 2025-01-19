function adicionarTarefa() {
  //recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  if (tarefa == "") {
    let mensagemErro = "Ops!! campo vazio, escreva uma tarefa válida";
    mensagem.textContent = mensagemErro;
  } else {
    //mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;

    //Cria novo item(li) e insere na (lista ul)
    let listaTarefas = document.getElementById("listaTarefas");
    let novatarefa = document.createElement("li");
    novatarefa.textContent = tarefa;
    listaTarefas.appendChild(novatarefa);
  }

  // limpa o input do usuário
  inputTarefa.value = "";
}

//   alert("Ops!! campo vazio, escreva uma tarefa válida");
// inputTarefa.focus();
