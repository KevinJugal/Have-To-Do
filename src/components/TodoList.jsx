import { TodoCard } from "./TodoCard";

export function TodoList(props){

    const {todos, selectedTab} = props

    const filterTodo = selectedTab ==='All'?
        todos:
        selectedTab ==='Complete' ?
        todos.filter(val => val.complete):
        todos.filter(val => !val.complete)

    return(
        <>
            {filterTodo.map((todo, todoIndex)=>{
                return(
                    <TodoCard 
                    key = {todoIndex} 
                    todo = {todo}
                    todoIndex = {todos.findIndex(val => val.input == todo.input)}
                    {...props} />
                )
            })}
        </>
    )
}