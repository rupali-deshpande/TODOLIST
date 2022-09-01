import { Task } from "../Interface/Interface"

interface Props {
    task:Task;
    completeTask(taskNameToDelete:string):void;
}

export function Todotask({task , completeTask}:Props) {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() =>completeTask(task.taskName)}>X</button>
        </div>
        
    )
}