import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';


import listItem from './listItem.js';
import newItem from './newItem.js'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() =>{
    fetch("/items")
      .then(res => res.json())
      .then(res => setItems(res))
      .catch(err => console.log(err))
  })

  const newlistItem = async() =>{
    await fetch("/items", {
      method: "POST", 
      headers: {
        "Accept": "application/json", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item: document.querySelector("#item").value,
        desc: document.querySelector("#desc").value,
        ppi: document.querySelector("#ppi").value,
        _id: uuid()
      })
    })
  }

  const deleteItem = (id) =>{
    fetch(`/items/${id}`, {
      method: "DELETE"
    }) 
  }

  const updateItem = (id, item, desc, ppi) =>{
    fetch(`/items/${id}`, {
      method: "PUT", 
      headers: {
        "Accept": "application/json", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item: item,
        desc: desc,
        ppi: ppi
      })
    })
  }

  return (
    <>
      <newItem newlistItem = {newlistItem}/>
      <div id = "list">
        <listItem 
          data = {items}
          updateItem = {updateItem}
          deleteItem = {deleteItem}
        />
      </div>
    </>
  );
}

export default App;
