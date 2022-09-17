import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../home/HomePage";
import { TaskContainer } from "../tasks/TaskContainer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="tasks" element={<TaskContainer />} />
      </Route>
    </Routes>
  )
}