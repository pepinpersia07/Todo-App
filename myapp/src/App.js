import Header from './Header';
import { Content1 } from './Content1';
import './App.css';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');



  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  const handleChange = (id) => {
    const listItems = items.map((myitem) =>
      myitem.id === id ? { ...myitem, checked: !myitem.checked } : myitem)
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));

  }

  const handleDelete = (id) => {
    const listItem = items.filter((myitem) =>
      myitem.id != id)
    setItems(listItem);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

  }

  return (
    <div>
      <Header />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content1
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />̥
      <Footer
        length={items.length}
      />
    </div>

  );
}

export default App;
