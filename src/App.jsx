import AddTODO from "./Components/AddTODO"
import Todos from "./Components/Todos"

const App = () => {
  const dummyTodo = [
    {
      id: Math.random,
      name: "Wash Clothes"
    },
    {
      id: Math.random,
      name: "Wash Clothes"
    },
    {
      id: Math.random,
      name: "Wash Clothes"
    },
    {
      id: Math.random,
      name: "Wash Clothes"
    },
    {
      id: Math.random,
      name: "Wash Clothes"
    },
  ]
  return (
    <div>
      <AddTODO></AddTODO>
      <Todos todoDetails={dummyTodo}></Todos>
    </div>
  )
}

export default App