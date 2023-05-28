import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import List from './components/List';
import ListForm from './components/ListForm';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoItem = () => {
    const newItem = inputValue;
    setTodoItems([...todoItems, newItem]);
    setInputValue('');
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
      <List todoItems={todoItems} />
    </>
  );
}

export default App;
