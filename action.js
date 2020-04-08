document.querySelector("#cadastrar").addEventListener("click",function(e){

    var tarefa = document.querySelector("#input-tarefa").value

    if (tarefa=="") {
        alert("O campo da tarefa não pode estar vazio")

    }else{    
        var tr = document.createElement('tr')

        tr.setAttribute("id","linha-tarefa")

        var filho = "<td>" + tarefa + "</td><td id='concluir'><img src='images/001-check.svg' alt='' height='12px'></td><td id='deletar'><img src='images/002-clear.svg' alt='' height='10px'></td>"
        tr.innerHTML = filho

        document.querySelector("#tabela-tarefas").appendChild(tr)

        document.querySelector("#input-tarefa").value = ""
    };

    e.preventDefault();

    adicionaFunc();
})


function adicionaFunc() {
    
    var tarefas = document.querySelectorAll("#linha-tarefa").length;
    var i = 0;

    for (i = 0; i < tarefas;i++){
        
        var elem = document.querySelectorAll("#linha-tarefa #deletar")[i];

        elem.addEventListener("click",funcRemover)

        var elem = document.querySelectorAll("#linha-tarefa #concluir")[i];

        elem.addEventListener("click",funcConcluir)

    }

}

function funcRemover(){
    this.closest('tr').remove()
}

function funcConcluir(){
    this.closest('tr').style.color = "#cccccc";
    this.closest('tr').style.textDecoration = "line-through";
    this.closest('tr').style.background = "#eeeedd";
    this.innerHTML = "<img src='images/undo.svg' alt='' height='10px'>";
    this.removeEventListener("click",funcConcluir);
    this.addEventListener("click",funcRetornar);
}

function funcRetornar(){
    this.closest('tr').style.color = "black";
    this.closest('tr').style.textDecoration = "none";
    this.closest('tr').style.background = "white";
    this.innerHTML = "<img src='images/001-check.svg' alt='' height='12px'>";
    this.addEventListener("click",funcConcluir)
}