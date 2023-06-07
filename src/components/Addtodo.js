import {useForm} from 'react-hook-form';
import Todolist from './Todolist';

function Addtodo({setTodolist, todolist}){
    let {register, handleSubmit,formState:{errors}} = useForm();

    const onFormSubmit = (todoObj)=>{
        setTodolist([...todolist, todoObj.newtodo])
    }
    return(
        <div>
            <h1 className="display-4">Add-task</h1>
            <form action="" className="w-75 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                <label htmlFor="todo">New Todo</label>
                <input type="text" className="form-control" id="todo" {...register("newtodo")}/>
                </div>
                <button className="btn btn-info" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Addtodo;