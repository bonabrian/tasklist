import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {

  // Set initial state
  // Get tasks from local storage if exists
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add new task
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }])
  }

  // Remove task
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Clear all tasks
  const clearList = () => {
    // Set null array
    setTasks([])
  }

  // Find task
  const find = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider
      value={{ 
        tasks,
        addTask,
        removeTask,
        clearList,
        find,
        editTask,
        editItem
       }}
    >
      { props.children }
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider