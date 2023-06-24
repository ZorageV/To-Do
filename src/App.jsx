import AddTODO from "./Components/AddTODO"

const App = () => {
  const dummyTodos = [
    {
      id: 1213,
      name: "Wash Clothes"
    }
  ]
  return (
    <div>
      
      <AddTODO></AddTODO>
    </div>
  )
}

export default App