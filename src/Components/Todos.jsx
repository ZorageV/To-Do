const Todos = (props) => {
    return (
        <div className="w-1/2 bg-white/50 mx-auto">
            <div>
                <h1 className="text-4xl text-center">To-Do List</h1>
            </div>
            <div>
                <ul className="py-2">
                    <li className=" px-2 py-2 flex items-center justify-start bg-black text-white mx-4 my-8 rounded-lg ">
                        <input type="checkbox" className="bg-white/50 w-8 h-8" />
                        <h2 className="text-4xl mx-4">{props.todoDetails[0].name}</h2>
                    </li>
                    <li className=" px-2 py-2 flex items-center justify-start bg-black text-white mx-4 my-8 rounded-lg ">
                        <input type="checkbox" className="bg-white/50 w-8 h-8" />
                        <h2 className="text-4xl mx-4">{props.todoDetails[0].name}</h2>
                    </li>
                    <li className=" px-2 py-2 flex items-center justify-start bg-black text-white mx-4 my-8 rounded-lg ">
                        <input type="checkbox" className="bg-white/50 w-8 h-8" />
                        <h2 className="text-4xl mx-4">{props.todoDetails[0].name}</h2>
                    </li>
                    <li className=" px-2 py-2 flex items-center justify-start bg-black text-white mx-4 my-8 rounded-lg ">
                        <input type="checkbox" className="bg-white/50 w-8 h-8" />
                        <h2 className="text-4xl mx-4">{props.todoDetails[0].name}</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Todos