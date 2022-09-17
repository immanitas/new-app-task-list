import { screen, render, queryByText } from '@testing-library/react';
import { TaskList } from '../TaskList';

const items = [
  {
    "id": 0,
    "text": "Task",
    "completed": false
  },
  {
    "id": 1,
    "text": "Task 1",
    "completed": false
  },
  {
    "id": 2,
    "text": "Task 2",
    "completed": true
  },
  {
    "id": 3,
    "text": "Task 3",
    "completed": true
  },
  {
    "id": 4,
    "text": "Task 4",
    "completed": true
  },
  {
    "id": 5,
    "text": "Task 5",
    "completed": false
  },
  {
    "id": 6,
    "text": "Task 6",
    "completed": false
  },
  {
    "id": 7,
    "text": "Task 7",
    "completed": true
  },
  {
    "id": 8,
    "text": "Task 8",
    "completed": true
  },
  {
    "id": 9,
    "text": "Task 9",
    "completed": false
  },
  {
    "id": 10,
    "text": "Task 10",
    "completed": false
  },
  {
    "id": 11,
    "text": "Task 11",
    "completed": true
  },
  {
    "id": 12,
    "text": "Task 12",
    "completed": false
  },
  {
    "id": 13,
    "text": "Task 13",
    "completed": true
  },
  {
    "id": 14,
    "text": "Task 14",
    "completed": false
  },
  {
    "id": 15,
    "text": "Task 15",
    "completed": true
  },
  {
    "id": 16,
    "text": "Task 16",
    "completed": false
  },
  {
    "id": 17,
    "text": "Task 17",
    "completed": false
  },
  {
    "id": 18,
    "text": "Task 18",
    "completed": false
  },
  {
    "id": 19,
    "text": "Task 19",
    "completed": true
  },
  {
    "id": 20,
    "text": "Task 20",
    "completed": false
  },
  {
    "id": 21,
    "text": "Task 21",
    "completed": true
  },
  {
    "id": 22,
    "text": "Task 22",
    "completed": false
  },
  {
    "id": 23,
    "text": "Task 23",
    "completed": false
  },
  {
    "id": 24,
    "text": "Task 24",
    "completed": true
  },
  {
    "id": 25,
    "text": "Task 25",
    "completed": false
  },
  {
    "id": 26,
    "text": "Task 26",
    "completed": true
  },
  {
    "id": 27,
    "text": "Task 27",
    "completed": false
  },
  {
    "id": 28,
    "text": "Task 28",
    "completed": false
  },
  {
    "id": 29,
    "text": "Task 29",
    "completed": true
  },
  {
    "id": 30,
    "text": "Task 30",
    "completed": false
  }
]

describe("TaskList component", () => {
  it("should render empty container", () => {
    render(<TaskList tasks={[]} />)
    const element = screen.getByTestId("task-list");
    expect(element).not.toBeNull()
    expect(element).toBeEmptyDOMElement()
  })

  it("should render task list with items", () => {
    render(<TaskList tasks={items} />)
    const element = screen.getByTestId("task-list");
    expect(element).not.toBeNull()
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      let txt: string = `${item.text} - ${item.completed ? "completed" : "not completed"}`;
      expect(element).toHaveTextContent(txt)
    }
  })
})