import { useState } from 'react';
import Logo from './Components/Logo';
import Form from './Components/From';
import { PackingList } from './Components/PackingList';
import { Stats } from './Components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id));
  }

  function handleClearList() {
    setItems([]);
  }


  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );

}