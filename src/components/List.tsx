import { useState } from 'react';

type Props = {
  todoItems: string[];
  deleteTodoItem: (index: number) => void;
  onUpdateTodo: (index: number, newItem: string) => void;
};

const List = ({ todoItems, deleteTodoItem, onUpdateTodo }: Props) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const handleEdit = (index: number, currentText: string) => {
    setEditIndex(index);
    setEditText(currentText);
  };

  const handleSave = (index: number) => {
    onUpdateTodo(index, editText);
    setEditIndex(null);
    setEditText('');
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditText('');
  };
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type='text'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {item}
              <button onClick={() => handleEdit(index, item)}>Edit</button>
              <button onClick={() => deleteTodoItem(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
