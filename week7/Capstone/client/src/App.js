import { useState, useEffect} from 'react';
import axios from 'axios';

import AddPersonForm from './AddPersonForm';
import People from './People';
import SearchBar from './SearchBar';
import './App.css';

function App() {

  const [star, setStars] = useState([]);

  const getAllPeople = () => {
    axios.get('http://localhost:3000/people/all')
    .then((res) => setStars(res.data))
    .catch((err) => console.warn(err))
  };

  const addNewPerson = (newItem) => {
    axios.post('http://localhost:3000/people/add', newItem)
      .then((res) => {
        setStars((prevPeople) => [...prevPeople, res.data])
      })
      .catch((err) => console.warn(err))
  };

  const deletePerson = (personId) => {
    axios.delete(`http://localhost:3000/people/delete/${personId}`)
      .then((res) => {
        setStars((prevPeople) => prevPeople.filter((person) => person._id !== personId));
      })
      .catch((err) => console.warn(err))
  };

  const editPerson = (edits, personId) => {
    axios.put(`http://localhost:3000/people/edit/${personId}`, edits)
      .then((res) => {
        setStars((prevPeople) => prevPeople.map((person) => person._id !== personId ? person : res.data))
      })
      .catch((err) => console.warn(err))
  };

  useEffect(() => {
    getAllPeople();
  }, []);

  const people = star.map((star) => 
  <People 
    editPerson = {editPerson}
    deletePerson = {deletePerson} 
    person = {star} 
    key = {star._id} />
  );

  const searchPeople = (input) => {
    axios.get(`http://localhost:3000/people/${input}`)
      .then((res) => {
        setStars((prevPeople) => prevPeople.filter((person) => person.name === input))
      })
      .catch((err) => console.warn(err))
  };

  return (

    <>
    <h1 className = 'header'>Star Wars STARS</h1>
    <div className='search'>

      <SearchBar searchPeople = {searchPeople}/>
    </div>
    <div className = 'add-person-section'>
      
      <AddPersonForm addPerson = {addNewPerson} btnText = 'Add Person'/>
    </div>
    <div className = 'people'>{people}</div>
    </>
  );
};



export default App;