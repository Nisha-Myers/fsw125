import { useState } from 'react';
import AddPersonForm from './AddPersonForm';



function People({person, deletePerson, editPerson}){

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className = 'person-wrapper'>
            { !editToggle ?
                <>
                    <h1 className = 'person-title'>--- {person.name} {person.eye_color} {person.gender} ---</h1>
                    <div className = 'person-options'>
                        <p>Name: {person.name}</p>
                        <p>EyeColor: {person.eye_color}</p>
                        <p>Gender: {person.gender}</p>
                        <p>Options: {person.options}</p>
                    </div>
                    <h3>Height: &#82;{person.height}</h3>
                    <button 
                        onClick = {() => deletePerson(person.vin)} 
                        className = 'delete-button'>
                        Remove
                    </button>
                    <button
                        onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                        className = 'edit-button'>
                        Edit
                    </button>
                </>
                
                :

                <>
                    <AddPersonForm 
                        name = {person.name}
                        height = {person.hieght}
                        mass = {person.mass}
                        hair_color = {person.hair_color}
                        skin_color = {person.skin_color}
                        eye_color = {person.eye_color}
                        birth_year = {person.birth_year}
                        gender = {person.gender}
                        btnText = 'ENTER'
                        addPerson = {editPerson}
                        _id = {person._id}/> 
                        <button
                            onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                            className = 'close-button'>
                            Confirm Changes
                        </button>
                </>
            }
        </div>
    );
};



export default People;