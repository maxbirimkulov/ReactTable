import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addCompany} from "../../Redux/Reducers/table";
import {useNavigate} from "react-router-dom";

const AddCompany = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [description, setDescription] = useState('');
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    const addEmployee = (e) => {
        e.preventDefault();
        setEmployees([...employees, {
            name: e.target[0].value,
            surname: e.target[1].value,
            age: e.target[2].value,
            check: false,
            id: employees.length + 1}]);
        e.target.reset();


    };

    return (
        <div>
                <div>
                    <label>
                        название компании
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Логотип
                        <input type="text" value={logo} onChange={(e)=> setLogo(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Описание
                        <textarea cols="30" rows="10" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    </label>
                </div>

            <form onSubmit={addEmployee}>
                <input  placeholder='name' type="text" />
                <input  placeholder='surname' type="text"/>
                <input  placeholder='age' type="number"/>
                <button type='submit'>+</button>
            </form>

            <ul>
                {employees.map((item)=>(
                    <li key={item.id}>Name: {item.name}; Surname: {item.surname}; Age: {item.age}</li>
                ))}
            </ul>

            <button onClick={()=>{
                dispatch(addCompany(name, logo , description, employees));
                navigate(`/company/${name}`);
                setName('');
                setLogo('');
                setDescription('');
                setEmployees([])
            } } type='button'>добавить компанию</button>
        </div>
    );
};

export default AddCompany;