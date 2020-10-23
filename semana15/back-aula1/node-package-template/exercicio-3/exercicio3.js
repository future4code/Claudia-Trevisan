//EXERCICIO 3
const taskUser = process.argv[2]
const taskList = ["Fazer crochê", "dar banho no gato", "pintar um quadro"]

const addTask = (task) =>{
   return taskList.push(task)
};

console.log("tarefa adicionada com sucesso. tarefas:",addTask(taskUser))


