import './index.css'

const Task = props => {
  const {eachTask} = props
  const {task, tagsdisplayText} = eachTask

  return (
    <li className="tasks-list-item">
      <p className="task-text">{task}</p>
      <p className="tags-text">{tagsdisplayText}</p>
    </li>
  )
}

export default Task
