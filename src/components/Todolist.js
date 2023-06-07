function Todolist({todolist}){
    return (
                <div>
                    <h1 className="display-4">List</h1>
                    <p>
                        {todolist.map((todo, index)=> <p key={index}>{todo}</p>)
                        }
                    </p>
                </div>


    )
}

export default Todolist;