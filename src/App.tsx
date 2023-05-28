import { useState, ChangeEvent } from 'react';
import './App.css';
import Layout from './components/Layout';
import List from './components/List';
import ListForm from './components/ListForm';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoItem = () => {
    const newItem = inputValue;
    setTodoItems([...todoItems, newItem]);
    setInputValue('');
  };

  const deleteTodoItem = (index: number) => {
    const updatedItems = [...todoItems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
  };

  return (
    <>
      <Layout title='Hello'>
        <p>yes!</p>
      </Layout>
      <ListForm
        inputValue={inputValue}
        handleChange={handleChange}
        addTodoItem={addTodoItem}
      />
      <List todoItems={todoItems} deleteTodoItem={deleteTodoItem} />
    </>
  );
}

export default App;
