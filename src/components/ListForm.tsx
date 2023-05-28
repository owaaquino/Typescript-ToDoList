type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  addTodoItem: () => void;
};

const ListForm: React.FC<Props> = ({
  handleChange,
  inputValue,
  addTodoItem,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoItem();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='todo'
        placeholder='Enter stuff here'
        value={inputValue}
        onChange={handleChange}
      />
      <button type='submit'>Add +</button>
    </form>
  );
};

export default ListForm;
