const Todo = ({ item, removeItem, id }) => {
  return (
    <li>
      {item} <button onClick={() => removeItem(id)}> X </button>
    </li>
  );
};

export default Todo;
