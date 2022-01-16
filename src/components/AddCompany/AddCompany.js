import React, {useState} from "react";
import "./addCompany.css";

const AddCompany = ({employees, setEmployees,addEmployee, deleteUser}) => {
    return (
        <>
            <form method='POST' action='/8080/add' className="addCompany">
                <div>
                    <label>
                        Название компании
                        <input
                            name='companyName'
                            required
                            type="text"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Логотип
                        <input
                            name='companyLogo'
                            required
                            type="text"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Описание
                        <textarea
                            name='description'
                            cols="30"
                            rows="10"
                        />
                    </label>
                </div>
                <ul>
                    {employees.map((item) => (
                        <li key={item.id} className='list-item'>
                          <span className='user'>{item.name} {item.surname} {item.age} {/\d*1\d$/.test(item.age) || /[05-9]$/.test(item.age) ? 'лет' : (/1$/.test(item.age) ? 'год' : 'года')}</span>

                            <span className='delete-user' onClick={() => deleteUser(item.id)}>X</span>

                        </li>
                    ))}
                </ul>
                <input type="hidden" name='employees' value={JSON.stringify(employees)}/>
                <button type="submit">
                    добавить компанию
                </button>
            </form>

            <form onSubmit={addEmployee}>
                <h5>Добавить сотрудников</h5>
                <input required placeholder="name" type="text"/>
                <input required placeholder="surname" type="text"/>
                <input required placeholder="age" type="number"/>
                <button type="submit">+</button>
            </form>
        </>

    );
};

export default AddCompany;
