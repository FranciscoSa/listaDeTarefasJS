import { useState, useEffect } from "react"

function App() {
  const [tarefa, setTarefa] = useState('')
  const [listaDeTarefas, setListaDeTarefas] = useState([])

  useEffect(() => {
    const tarefasLocalStorage = localStorage.getItem("@tarefas")

    if(tarefasLocalStorage) {
      setListaDeTarefas(JSON.parse(tarefasLocalStorage))
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("@tarefas", JSON.stringify(listaDeTarefas))
  }, [listaDeTarefas]);

  function salvarTarefa(event){
    event.preventDefault();
    setListaDeTarefas([...listaDeTarefas, tarefa]);
    setTarefa('')
  }

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      
      <form onSubmit={salvarTarefa}>
        <label>Tarefa:</label><br/>
        <input placeholder = "Digite a tarefa" value={tarefa} onChange={(event) => setTarefa(event.target.value)}></input><br/><br/>
        <button type="submit">Salvar Tarefa</button>
      </form>

      <div>
        <h1>Lista de Tarefas:</h1>
        <ul>
          {listaDeTarefas.map(tarefa => (
            <li key={tarefa}> {tarefa} </li>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default App;
