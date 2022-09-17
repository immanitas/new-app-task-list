import React, { useEffect, useState } from "react"
import { GenericContainer } from "../../components/generic-container/GenericContainer"
import { PageTitle } from "../../components/titles/PageTitle"
import { Task } from "../../components/task-list/Task"
import { TaskList } from "../../components/task-list/TaskList"

export const TaskContainer: React.FC<{}> = () => {
  const [data, setData] = useState<Task[]>([])

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

  return (
    <GenericContainer>
      <PageTitle value="Task List" />
      <TaskList tasks={data} />
    </GenericContainer>
  )
}