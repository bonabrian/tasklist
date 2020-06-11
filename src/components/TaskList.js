import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import Task from './Task'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)

  return (
    <div className="tasks-wrapper">
      { tasks.length ? (
        <ul className="tasks">
          { tasks.map(task => {
            return <Task task={task} key={task.id} />
          }) }
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      ) }
    </div>
  )
}

export default TaskList