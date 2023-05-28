type Props = {
  todoItems: string[];
};

const List: React.FunctionComponent<Props> = ({ todoItems }) => {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
