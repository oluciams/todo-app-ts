import React from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted
}) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div>
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onChange={() => {
          handleRemove({ id })
        }}
      />
    </div>
  )
}
