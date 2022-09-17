import { TaskListProps } from "./TaskListProps"

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul data-testid="task-list">
      {
        tasks.map(task => {
          return (
            <li key={task.id}>
              {task.text} - {task.completed ? "completed" : "not completed"}
            </li>
          )
        })
      }
    </ul>
  )
}