import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt, faPen)

const Task = ({ task }) => {
  const { removeTask, find } = useContext(TaskListContext)

  return (
    <li className="task-item">
      <span>{ task.title }</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}>
          <FontAwesomeIcon icon="trash-alt"/>
        </button>
        <button
          className="btn-edit task-btn"
          onClick={() => find(task.id)}>
          <FontAwesomeIcon icon="pen"/>
        </button>
      </div>
    </li>
  )
}

export default Task