type Props = {
  todoItems: string[];
  deleteTodoItem: (index: number) => void;
};

const List = ({ todoItems, deleteTodoItem }: Props) => {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => deleteTodoItem(index)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
