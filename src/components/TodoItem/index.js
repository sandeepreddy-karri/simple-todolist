// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteItem} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-card-container">
      <p>{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
