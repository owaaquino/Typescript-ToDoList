import { ChangeEvent, FormEvent } from 'react';

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  addTodoItem: () => void;
};

const ListForm = ({ handleChange, inputValue, addTodoItem }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
