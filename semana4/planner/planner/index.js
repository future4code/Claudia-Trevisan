let armazenaTarefa = () =>{
    const limpaTarefa = document.getElementById("tarefa")
    let conteudoDaTarefa = limpaTarefa.value
    if(conteudoDaTarefa !== ""){
        let diaDaSemana = document.getElementById("dias-semana").value
        let associaDia = document.getElementById(`${diaDaSemana}`)
        associaDia.innerHTML += `<li>${conteudoDaTarefa}</li>`
        limpaTarefa.value = " "
    }
    else{
        alert("Digite uma tarefa")
    }
}
const confirmMade = () =>{
    
}

