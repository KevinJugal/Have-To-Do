export function Header(props){
    const {todos} = props
    const todosLength = todos.length

    const isPlural = todos.length != 1
    const plural = isPlural ? 'tasks' : 'task'
    return(
        <header>
            <h1 className="text-gradient">You have {todosLength} open {plural}</h1>
        </header>
    )
}