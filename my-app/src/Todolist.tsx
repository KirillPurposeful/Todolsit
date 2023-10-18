
type TaskType= {
    id:string,
    title: string,
    isDone: boolean
}
type PropsType= {
    title:string
    tasks: Array<TaskType>
}
export function Todolist(props: PropsType) {
    return <div>
        <h3>
            {props.title}
        </h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map( t=>

             <li><input type='checkbox' checked={t.isDone}/>
                    <span>{t.title}</span>
             </li>)
            }
        </ul>
    </div>
}