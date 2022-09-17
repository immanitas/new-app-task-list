import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { GenericContainer } from "../../components/generic-container/GenericContainer"
import { PageTitle } from "../../components/titles/PageTitle"

interface Task {
  id: number,
  text: string,
  completed: boolean
}

export const TaskContainer: React.FC<{}> = () => {
  const [data, setData] = useState<Task[]>([])
  const [tasks, setTasks] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3008/api/tasks/")
        if (result.status === 200) {
          result.body?.getReader().read().then(result => {
            if (result && result.value) {
              const data = String.fromCharCode.apply(null, Array.from(result.value));
              setData(JSON.parse(data))
            }
          }).catch(console.error)
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetchData();
  }, [])

  useEffect(() => {
    setTasks(data.map(element => {
      return (
        <li key={element.id}>
          {element.text} - {element.completed ? 'completed' : 'not completed'}
        </li>
      )
    }))
  }, [data]);

  return (
    <GenericContainer>
      <PageTitle value="Task List" />
      <ul>
        {tasks}
      </ul>
    </GenericContainer>
  )
}