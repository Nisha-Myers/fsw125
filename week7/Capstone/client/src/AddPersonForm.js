import { useState } from 'react';



function AddPersonForm({ addPerson, btnText, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, _id }) {

    const initialInputs = { 
        name: name || '', 
        height: height || '',
        mass: mass || '',
        hair_color: hair_color || '',
        skin_color: skin_color || '',
        eye_color: eye_color || '',
        birth_year: birth_year || '',
        gender: gender || ''
    };

    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({...prevInputs, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPerson(inputs, _id);
        setInputs(initialInputs);
    };


    return (
        <>
        <form className = 'add-form' onSubmit = {handleSubmit}>

            <input className = 'inputs'
                type='text'
                name='name'
                value={inputs.name}
                onChange={handleChange}
                placeholder='Name of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='height'
                value={inputs.height}
                onChange={handleChange}
                placeholder='Height of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='mass'
                value={inputs.mass}
                onChange={handleChange}
                placeholder='Mass of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='hair color'
                value={inputs.hair_color}
                onChange={handleChange}
                placeholder='Hair Color of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='skin color'
                value={inputs.skin_color}
                onChange={handleChange}
                placeholder='Skin Color of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='eye color'
                value={inputs.eye_color}
                onChange={handleChange}
                placeholder='Eye Color of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='birth year'
                value={inputs.birth_year}
                onChange={handleChange}
                placeholder='Birth Year of the Person'
                required />
            <input className = 'inputs'
                type='text'
                name='gender'
                value={inputs.gender}
                onChange={handleChange}
                placeholder='Gender of the Person'
                required />
                
            <button className = 'submit-button'>{btnText}</button>
        </form>
        </>
    );
};

export default AddPersonForm;