import { useState } from "react"

function App() {
  const [tarefa, setTarefa] = useState('')
  const [listaDeTarefas, setListaDeTarefas] = useState([])

  function salvarTarefa(event){
    event.preventDefault()
    alert("Salvo com sucesso")
  }

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      
      <form onSubmit={salvarTarefa}>
        <label>Tarefa:</label><br/>
        <input placeholder = "Digite a tarefa"></input><br/><br/>
        <button type="submit">Salvar Tarefa</button>
      </form>

      <div>
        <h1>Lista de Tarefas:</h1>
        <ul>
          {listaDeTarefas.map(tarefa => (
            <li>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default App;
